---
title: "自動產生部落格預覽圖片"
date: 2021-08-26T15:26:19.000Z
---

例如 [Qiita](https://qiita.com/) 或 [Hatena Blog](https://hatenablog.com/)，現在許多網站都能在預覽時的縮圖上顯示對應文章的標題，而這實際上到底是怎麼做到的？我很大幅度（或者說幾乎全部）參考了 [Generating Twitter Card images from blog post titles](https://shuheikagawa.com/blog/2019/10/13/generating-twitter-card-images/) 這篇文章的做法，使用 Node.js 的 canvas library 直接在 canvas 上畫好預覽圖，存成檔案後，再設定好相關檔案的對應路徑，就能替網站文章加上預覽圖。

## 處理步驟

### 1. 取得文章資訊

要產生圖片，首先得要有文章的標題或相關資訊，Sapper 的 Blog 樣板提供了一支 [markdown.js](https://github.com/Charca/sapper-blog-template/blob/master/src/utils/markdown.js) 處理前置的檔案匯入與 meta 資訊的產生，故只需再多加上縮圖用的 meta 資訊，並從此傳入相關資訊至生成 function 即可：

```javascript
// ...
const fs = require("fs");
// another utility JavaScript file, will be described after
const createTitleImage = require("./src/utils/title-image.js");

export default () => ({
  async transform(md, id) {
    // ...
    // markdown file content
    const { data, content: rawContent } = matter(md);
    const { title, date } = data;
    // ...
    // image meta info placeholder
    let image = "";

    // ...
    // if had set custom image then don't generate
    if (data.image) image = data.image;
    // if not set custom image then generate it
    else {
      try {
        // generate canvas
        const buffer = await createTitleImage({
          title,
          subtitle: "f6bfb5.github.io",
        });
        // save canvas to file
        const imagePath = path.join("./static/preview/", slug + ".png");
        if (!fs.existsSync("./static/preview/")) {
          fs.mkdirSync("./static/preview/");
        }
        fs.writeFileSync(imagePath, buffer);
        // set image meta info
        image = "https://f6bfb5.github.io/preview/" + slug + ".png";
      } catch (e) {
        throw new Error(e);
        return;
      }
    }

    // add image to meta info
    const exportFromModule = JSON.stringify({
      title: title || slug,
      slug,
      html,
      date,
      excerpt,
      printDate,
      printReadingTime,
      tags,
      image,
    });

    // ...
  },
});
```

### 2. 產生圖片

上方提及的文章作者也提供了自己的程式碼 [title-image.js](https://github.com/shuhei/shuhei.github.com/blob/f30cb5cd85a4ef35a4fb73d94a01da44e03ae116/plugins/title-image.js)，非常感激地只更改了裡頭的字體後完全借用，使用前也需注意是否已安裝 `node-canvas`，若無則需先 `npm i canvas`。

### 3. 存為檔案

`title-image.js` 回傳的是 Buffer object，因此需要再使用 `fs` 存為檔案，這部分的程式碼也已寫在第 1 步 `else` 的部分裡，這邊傳入文章別名作為檔案名稱，並檢查目標資料夾是否存在﹐若是如遠端推播環境則另行產生，最後使用 `writeFileSync` 存入檔案。

### 4. 設定 meta tag

有了圖片檔案後，就能將路徑傳進文章樣板裡的對應 meta 裡，同樣的，Sapper 的 [Blog 文章樣板](https://github.com/Charca/sapper-blog-template/blob/master/src/routes/blog/%5Bslug%5D.svelte)也附上了社群網站用的 meta tag，只需加入第 1 步新增的縮圖 meta 資訊即可。

```html
<script context="module">
  export async function preload({ params, query }) {
    // will get data and meta info from markdown files
    const res = await this.fetch(`${params.slug}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>
<!-- ... -->
<!-- add image meta info -->
<meta property="og:image" content="{post.image}" />
```

完成！

## 改善點

雖然看來原本也有考慮到日文標題的情況，目前看來一些太長的標題還是會全縮在同一行導致字變得太小，發生文字無法妥善分行的狀況，也有像這篇另外使用了文字型態分析 library 解決這個問題，以及整體的配色或配置考量，都是日後首要的改善點。
