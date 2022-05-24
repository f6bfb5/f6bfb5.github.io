// How to get favicon's URL from a generic webpage in Javascript? - Stack Overflow
// https://stackoverflow.com/questions/10282939/how-to-get-favicons-url-from-a-generic-webpage-in-javascript
// Transforming Markdown with Remark & Rehype
// https://www.ryanfiller.com/blog/remark-and-rehype-plugins
//
// remark
// https://github.com/remarkjs/remark
// mdast
// https://github.com/syntax-tree/mdast

import visit from "unist-util-visit";

function transformer(ast) {
  visit(ast, "link", visitor);

  function visitor(node) {
    if (node.children[0].type !== "image") {
      const url = node.url;
      node.children = [
        {
          type: "image",
          url: `https://s2.googleusercontent.com/s2/favicons?domain=${url}`,
          alt: node.children[0].value,
        },
        {
          type: "html",
          value: `<span>${node.children[0].value}</span>`
        }
      ];
    }
  }
}

function appendLinkFavicon() {
  return transformer;
}

export default appendLinkFavicon;
