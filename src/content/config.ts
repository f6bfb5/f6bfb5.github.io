import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.date(),
        summary: z.string(),
        tags: z.array(z.string()),        
    })
});

export const collections = {
    'blog': blogCollection,
};