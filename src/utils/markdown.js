const path = require("path");
// syntax highlight
const prism = require("prismjs");
// markdown parser and compiler
// const marked = require("marked");
import { marked } from "marked";
// parse YAML front matter
const matter = require("gray-matter");
// date utility library
const formatDate = require("date-fns/format");
const readingTime = require("reading-time");

const fs = require("fs");
const createTitleImage = require("./src/utils/title-image.js");

// Support JSX syntax highlighting
require("prismjs/components/prism-jsx.min");

const EXCERPT_SEPARATOR = "<!-- more -->";
const renderer = new marked.Renderer();
const linkRenderer = renderer.link;
renderer.link = (href, title, text) => {
  const html = linkRenderer.call(renderer, href, title, text);

  if (href.indexOf("/") === 0) {
    // Do not open internal links on new tab
    return html;
  } else if (href.indexOf("#") === 0) {
    // Handle hash links to internal elements
    const html = linkRenderer.call(renderer, "javascript:;", title, text);
    return html.replace(
      /^<a /,
      `<a onclick="document.location.hash='${href.substr(1)}';" `
    );
  }

  return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
};

renderer.code = (code, language) => {
  if (language === "mermaid") {
    return '<pre class="mermaid">' + code + "</pre>";
  }
  const parser = prism.languages[language] || prism.languages.html;
  const highlighted = prism.highlight(code, parser, language);
  return `<pre class="language-${language}"><code class="language-${language}">${highlighted}</code></pre>`;
};

marked.setOptions({ renderer });

export default () => ({
  async transform(md, id) {
    if (!/\.md$/.test(id)) return null;

    const fileName = path.basename(id);
    const { data, content: rawContent } = matter(md);
    const { title, date } = data;
    const slug = fileName.split(".")[0];
    let content = rawContent;
    let excerpt = "";
    let tags = [];
    let image = "";

    if (rawContent.indexOf(EXCERPT_SEPARATOR) === -1) {
      excerpt = data.summary;
    } else {
      const splittedContent = rawContent.split(EXCERPT_SEPARATOR);
      excerpt = splittedContent[0];
      content = splittedContent[1];
    }

    const html = marked(content);
    const readingStats = readingTime(content);
    const printReadingTime = readingStats.text;
    const printDate = formatDate(new Date(date), "MMMM d, yyyy");

    if (data.tags) tags = data.tags.split(",");
    tags = tags.map((tag) => tag.trim());

    if (data.image) image = data.image;
    else {
      try {
        const buffer = await createTitleImage({
          title,
          subtitle: "f6bfb5.github.io",
        });
        const imagePath = path.join("./static/preview/", slug + ".png");
        if (!fs.existsSync("./static/preview/")) {
          fs.mkdirSync("./static/preview/");
        }
        fs.writeFileSync(imagePath, buffer);
        image = "https://f6bfb5.github.io/preview/" + slug + ".png";
      } catch (e) {
        throw new Error(e);
        return;
      }
    }

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

    return {
      code: `export default ${exportFromModule}`,
      map: { mappings: "" },
    };
  },
});
