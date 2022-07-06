---
title: "template.md"
date: 1969-07-21T02:56:00.000Z
summary: "template and snippet elements of markdown"
tags: F2E
---

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
[id]: https://example.com/ "Link title"
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

| Table Header | Second Header |
| ------------ | ------------- |
| Table Cell   | Cell 2        |
| Cell 3       | Cell 4        |

[HTML character entities](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML)

&copy; &reg; &para; &micro; &times; &divide; &deg; &plusmn;

---

> [Website](https://www.example.com) &nbsp;&middot;&nbsp;
> GitHub [@GitHub](https://github.com/GitHub) &nbsp;&middot;&nbsp;
> Other [Profilename](https://othersocialmedia.com/Profile)

---

<img src="https://picsum.photos/128/128/" alt="Image alt" title="Image title" style="padding-top: 1.125em; padding-left: 1.125em; float: right;">

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<div style="clear: both;" />

<img src="https://picsum.photos/128/128/" alt="Image alt" title="Image title" style="padding-top: 1.125em; padding-right: 1.125em;  float: left;">

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<div style="clear: both;" />

<details>

<summary>Details element summary</summary>

details element description

</details>

## Mermaid Cheatsheet

### Flowchart

- https://mermaid-js.github.io/mermaid/
- `flowchart [directions]`
  - or `graph [directions]`？
  - `TB`: top to bottom
  - `TD`: top-down / same as top to bottom
  - `BT`: bottom to top
  - `RL`: right to left
  - `LR`: left to right
- `node`
- `node[node with text]`
- `node1 --> node2`
- `node1 -- link with text -- node2`
  - or `node1-->|text|node2`
- `node1 --> node2 & node3 --> node4`
- Node shapes:
  - round edges: `node(text)`
  - stadium-shaped: `node([text])`
  - subroutine: `node[[text]]`
  - cylindrical shape: `node[(text)]`
  - circle: `node((text))`
  - asymmetric shape: `node>text]`
  - rhombus: `node{text}`
  - hexagon: `node{{text}}`
  - parallelogram: `node[/text/]`
  - parallelogram alt: `node[\text\]`
  - trapezoid: `node[/text\]`
  - trapezoid alt: `node[\text/]`
  - double circle: `node(((text)))`
- Link shapes:
  - normal: `---`
  - normal with arrow: `-->`
  - thick: `===`
  - thick with arrow: `==>`
  - dotted: `-.-`
  - dotted with arrow: `-.->`
- subgraph
  - `subgraph [name]`
  - `direction [directions]`
  - `end`
