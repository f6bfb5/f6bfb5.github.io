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
