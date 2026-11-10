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
      // Optional — case-study page template (sidebar nav / meta row)
      eyebrow: z.string().optional(),
      services: z.array(z.string()).optional(),
      slidesUrl: z.string().optional(),
      // Optional — looping video thumbnail on the work grid, in place of `cover`.
      // Paths are relative to /public (e.g. /videos/qurate-thumb.mp4); `cover` is
      // still required and used as the <video> poster / no-JS and reduced-motion fallback.
      thumbVideoMp4: z.string().optional(),
      thumbVideoWebm: z.string().optional(),
    }),
});

export const collections = { work };
