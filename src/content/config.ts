import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: image(),
      coverAlt: z.string(),
      // Optional — overrides the case-study hero's aspect-ratio (e.g. "16 / 9")
      // when its cover photo doesn't fit the default --card-aspect-ratio box.
      coverRatio: z.string().optional(),
      role: z.string(),
      timeline: z.string(),
      tools: z.array(z.string()).optional(),
      order: z.number(),
      featured: z.boolean().default(false),
      // Optional — case-study page template (sidebar nav / meta row)
      eyebrow: z.string().optional(),
      team: z.string().optional(),
      services: z.array(z.string()).optional(),
      slidesUrl: z.string().optional(),
      // Optional — looping video thumbnail on the work grid, in place of `cover`.
      // Paths are relative to /public (e.g. /videos/qurate-thumb.mp4); `cover` is
      // still required and used as the <video> poster / no-JS and reduced-motion fallback.
      thumbVideoMp4: z.string().optional(),
      thumbVideoWebm: z.string().optional(),
      // Optional — this project's own brand color (e.g. its UI's primary
      // accent), used to tint the case-study body's decorative card
      // blobs/icons so each case study feels tied to that product rather
      // than reusing the site's own accent everywhere. Falls back to
      // --color-accent when unset.
      accentColor: z.string().optional(),
    }),
});

export const collections = { work };
