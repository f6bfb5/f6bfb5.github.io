import visit from "unist-util-visit";
import { toString } from "mdast-util-to-string";
import BananaSlug from "github-slugger";

const slugs = new BananaSlug();

function transformer(ast) {
  const tocArray = [];
  slugs.reset();

  function visitor(node) {
    if (node.depth === 2) {
      // tocArray.push(node.children[0].value);

      const data = node.data || (node.data = {});
      const props = /** @type {Properties} */ (
        data.hProperties || (data.hProperties = {})
      );
      let id = props.id;

      id = id ? slugs.slug(String(id), true) : slugs.slug(toString(node));
      id = "js-id-" + id;

      tocArray.push({ title: node.children[0].value, id });
      data.id = id;
      props.id = id;
    }
  }
  visit(ast, "heading", visitor);

  function appendToc(node) {
    let tocElement = "";
    for (let h2 of tocArray) {
      // tocElement += `<li><a href="#${h2.id}">${h2.title}</a></li>`;
      // tocElement += `<li><a href="#" onclick="window.scrollTo({
      //     top: document.querySelector('#${h2.id}').offsetTop,
      //     behavior: 'smooth'
      //   });
      //   event.preventDefault();">${h2.title}</a></li>`;
      tocElement += `<li><a href="{'#'}" onclick="document.querySelector('#${h2.id}').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();">${h2.title}</a></li>`;
    }
    node.children.push({
      type: "html",
      value: `<div class="toc-container"><ul class="toc">${tocElement}</ul></div>`,
    });
  }
  if (tocArray.length > 1) {
    visit(ast, "root", appendToc);
  }
}

function toc() {
  return transformer;
}

export default toc;
