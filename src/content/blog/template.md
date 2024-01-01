---
title: "template.md"
date: 1969-07-21T02:56:00.000+08:00
summary: "template of markdown"
tags: ["F2E"]
---

<!--
⣠⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣿⣿⣷⣄⣀⣤⠰
⣿⣿⣤⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣥⠖
⡘⣿⣿⣿⣷⣤⣀⣀⣿⣿⣿⣿⣿⣿⣿⣿
⢳⣮⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠸
⠀⠀⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟
⠀⠀⠀⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⠟
⣀⣀⣤⣶⣿⣿⣿⣿⣿⣿⣿⠿⠁
⠀⠉⠛⠿⠿⠿⠿⠟⠋⠁
-->

# Title 1

## Title 2

### Title 3

#### Title 4

##### Title 5

###### Title 6

First Paragraph
_Emphasis_
**Bold**
**_Emphasis Bold_**
~~Delete~~
[Link](https://example.com "Link title")
Reference-style [link][id]
Reference-style 2 [link2][]
[id]: https://example.com/ "Link title"
[link2]: https://example.com/ "Link title"

> Blockquote `inline code snippet`

```javascript
const stringToDisplay = [
  "This is a example of multi-line coding snippet",
  "You can use it to highlight your code",
];

stringToDisplay.forEach((s) => {
  console.log(s);
});
```

Second Paragraph That's one small step for man, one giant leap for mankind.

> Second Blockquote

![Image alt](https://picsum.photos/24/24/ "Image title")

- Unordered list item
  - Sub unordered list item
  - Sub unordered list item
    - More Sub unordered list item
- Unordered list item
- Unordered list item

1. Ordered list item 1
2. Ordered list item 2
3. Ordered list item 3

- [ ] Todo 1
- [x] Todo 2
  - [ ] Todo 2-1
  - [ ] Todo 2-2
- [ ] Todo 3

| Table Header | Second Header | Third Header |
| :----------- | :-----------: | -----------: |
| Table Cell   |    Cell 2     |       Cell 3 |
| Left align   | Center Align  |  Right align |

## Useful refs

- [HTML character entities](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML)
- [gihyo.jp 編集部における Markdown 記法](https://gihyo.jp/article/2022/08/gihyojp-markdown)
- [マークアップのわかり方](https://yuheiy.com/2022-11-03-how-to-understand-the-markup)

&copy; &reg; &para; &micro; &times; &divide; &deg; &plusmn; ＆nbsp;

---

> [Website](https://www.example.com) &nbsp;&middot;&nbsp;
> GitHub [@GitHub](https://github.com/GitHub) &nbsp;&middot;&nbsp;
> Other [Profilename](https://othersocialmedia.com/Profile)

---

<details>
  <summary>Details element summary</summary>
  <div>
    details element description
  </div>
</details>

<style>
  details {
    padding: 0;
  }
  details summary {
    cursor: pointer;
    background: var(--bg-color);
    border-radius: 6px;
  }
  details summary > * {
    display: inline;
  }
  details summary,
  details > div {
    padding: 1rem;
  }
</style>
