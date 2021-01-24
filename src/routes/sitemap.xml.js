import posts from './_posts.js';
let siteUrl = "https://f6bfb5.github.io";

const fs = require('fs');
const pages = [""];

fs.readdirSync("./src/routes").forEach(file => {
  file = file.split('.')[0];
  if (file.charAt(0) !== '_' && file !== "sitemap" && file !== "index" && file !== "[slug]") {
    pages.push(file);
  }
});

const render = (pages, posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${pages
    .map(
      page => `
    <url>
      <loc>${siteUrl}/${page}</loc>
      <lastmod>${JSON.stringify(new Date()).slice(1, -1)}</lastmod>
      <priority>1.00</priority>
    </url>
  `
    )
    .join("\n")}
  ${posts
    .map(
      post => `
    <url>
      <loc>${siteUrl}/${post.slug}</loc>
      <lastmod>${JSON.stringify(new Date(post.printDate)).slice(1, -1)}</lastmod>
      <priority>0.80</priority>
    </url>
  `
    )
    .join("\n")}
</urlset>
`;

export function get(req, res, next) {
  res.setHeader("Cache-Control", `max-age=0, s-max-age=${600}`); // 10 minutes
  res.setHeader("Content-Type", "application/rss+xml");

  const sitemap = render(pages, posts);
  res.end(sitemap);
}