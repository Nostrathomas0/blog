import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
 
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    date: z.date(),
    author: z.string(),
    author_bio: z.string().optional(),
    image: z.string().optional(),
    image_alt: z.string().optional(),
    cluster: z.string(),
    related: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    cta_target: z.string().optional(),
    lang: z.string().default('en'),
    has_bibliography: z.boolean().default(false),
  }),
});
 
export const collections = { blog };
 
