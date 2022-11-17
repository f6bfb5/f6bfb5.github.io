// export const load = async () => {
//   const mdModules = import.meta.glob(`../routes/posts/*.md`);
//   const posts = await Promise.all(
//     Object.keys(mdModules).map(async (path) => {
//       const slug = path.split("/").at(-1).slice(0, -3);
//       const { metadata } = await mdModules[path]();
//       return { metadata, slug };
//     })
//   );
//   return {
//     props: {
//       posts,
//     },
//   };
// };
export async function get() {
  const modules = import.meta.glob(`./*.md`);

  const postPromises = [];

  for (let [path, resolver] of Object.entries(modules)) {
    const slug = path.split("/").at(-1).slice(0, -3);
    const promise = resolver().then((post) => ({
      slug,
      metadata: post.metadata,
    }));

    postPromises.push(promise);
  }

  const posts = await Promise.all(postPromises);

  return {
    body: posts,
  };
}
