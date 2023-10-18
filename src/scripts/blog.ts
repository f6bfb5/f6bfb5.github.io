import { getCollection } from 'astro:content';

export async function getAllBlogsStatic() {
    const blogs = await getCollection('blog');
    return blogs
      .map(blog => ({ params: { slug: blog.slug }, props: { blog },}))
      .sort(
        (a, z) =>
          new Date(z.props.blog.data.date).getMilliseconds()
          - new Date(a.props.blog.data.date).getMilliseconds()
      )
}

export async function getAllBlogs() {
    const blogs = await getCollection('blog');
    return blogs
      .map(blog => ({ ...blog.data, slug: blog.slug, body: blog.body }))
      .sort(
        (a, z) =>
          new Date(z.date).getMilliseconds()
          - new Date(a.date).getMilliseconds()
      )
}