let siteUrl = "https://f6bfb5.github.io";

export async function get() {
  const allPosts = import.meta.globEager(`../routes/posts/*.md`);

  const body = `
  <?xml version="1.0" encoding="UTF-8" ?>
  <urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="https://www.w3.org/1999/xhtml"
    xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
  >
  <url>
    <loc>${siteUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>${siteUrl}/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>1.00</priority>
  </url>
  ${Object.keys(allPosts)
    .map(
      (path) => `
    <url>
      <loc>${siteUrl}/${path
        .split("/")
        [path.split("/").length - 1].slice(0, -3)}</loc>
      <lastmod>${new Date(allPosts[path].metadata.date).toISOString()}</lastmod>
      <priority>0.80</priority>
    </url>
  `
    )
    .join("")}
  </urlset>
  `.trim();

  const headers = {
    "Cache-Control": `max-age=0, s-max-age=${600}`,
    "Content-Type": "application/xml",
  };

  return {
    body,
    headers,
  };
}
