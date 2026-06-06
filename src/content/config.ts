import { defineCollection, z } from 'astro:content';

// Blog posts live in src/content/blog/*.md (or .mdx).
// Add a new post = drop a new file in that folder with this frontmatter.
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
