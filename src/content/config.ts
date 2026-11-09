import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: image(),
      coverAlt: z.string(),
      role: z.string(),
      timeline: z.string(),
      tools: z.array(z.string()),
      order: z.number(),
      featured: z.boolean().default(false),
    }),
});

export const collections = { work };
