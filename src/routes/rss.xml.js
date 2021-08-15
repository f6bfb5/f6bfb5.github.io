import posts from "./_posts.js";
let siteUrl = "https://f6bfb5.github.io";

function toRFC3339(date) {
  function pad(n) {
    return n < 10 ? "0" + n : n;
  }

  function timezoneOffset(offset) {
    var sign;
    if (offset === 0) {
      return "Z";
    }
    sign = offset > 0 ? "_" : "+";
    offset = Math.abs(offset);
    return sign + pad(Math.floor(offset / 60)) + ":" + pad(offset % 60);
  }

  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    "T" +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes()) +
    ":" +
    pad(date.getSeconds()) +
    timezoneOffset(date.getTimezoneOffset())
  );
}

const renderXmlRssFeed = (posts) =>
  `<?xml version="1.0" encoding="utf-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>f6bfb5's blog</title>
      <link>${siteUrl}</link>
      <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
      <description>This is f6bfb5's blog.</description>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <managingEditor>f6bfb5@gmail.com (f6bfb5)</managingEditor>

      ${posts
        .map(
          (post) => `
        <item>
          <title>${post.title}</title>
          <link>${siteUrl}/blog/${post.slug}</link>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <description>
              ${post.excerpt}
          </description>
        </item>
      `
        )
        .join("\n")}
    </channel>
  </rss>`;

export async function get(req, res) {
  res.writeHead(200, {
    "Cache-Control": `max-age=0, s-max-age=${600}`, // 10 minutes
    "Content-Type": "application/rss+xml",
  });

  const feed = renderXmlRssFeed(posts);
  res.end(feed);
}
