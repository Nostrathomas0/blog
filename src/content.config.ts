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
    draft: z.boolean().default(false),
    image: z.string().optional(),
    image_alt: z.string().optional(),
    lang: z.string().default('en'),
    level: z.enum(['Beginner', 'Intermediate', 'Advanced']).optional(),
    read_time: z.number().optional(),
    cluster: z.string(),
    related: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    cta_target: z.string().optional(),
    has_bibliography: z.boolean().default(false),
  }),
});
 
export const collections = { blog };
 
