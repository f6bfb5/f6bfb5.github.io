import urls from "rehype-urls";
import appendLinkFavicon from "./src/lib/_append-link-favicon.js";

function processUrl(url, node) {
  if (node.tagName === "a") {
    if (!url.href.startsWith("/")) {
      node.properties.target = "_blank";
      node.properties.rel = "noopener";
    }
  }
}

export default {
  extensions: [".md"],
  layout: {
    blog: "src/routes/_post.svelte",
    _: "src/routes/_post.svelte",
  },
  remarkPlugins: [appendLinkFavicon],
  rehypePlugins: [
    // [MDSveX and Svelte Kit](https://www.furudean.com/blog/svelte-kit-mdsvex)
    [urls, processUrl],
  ],
};
