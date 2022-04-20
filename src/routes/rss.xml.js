let siteUrl = "https://f6bfb5.github.io";

export async function get() {
  const allPosts = import.meta.globEager(`../routes/posts/*.md`);

  const body = `
  <?xml version="1.0" encoding="UTF-8" ?>
  <rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>f6bfb5's blog</title>
    <link>${siteUrl}</link>
    <description>Close the world,.txEn eht nepO</description>
    <language>zh-tw</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${Object.keys(allPosts)
      .map(
        (path) => `
      <item>
        <title>${allPosts[path].metadata.title}</title>
        <link>${siteUrl}/${path
          .split("/")
          [path.split("/").length - 1].slice(0, -3)}</link>
        <pubDate>${new Date(
          allPosts[path].metadata.date
        ).toISOString()}</pubDate>
        ${
          allPosts[path].metadata.summary
            ? "<description>" +
              allPosts[path].metadata.summary +
              "</description>"
            : ""
        }
      </item>
      `
      )
      .join("")}
  </channel>
  </rss>
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
