import { z } from 'zod'

export const socialLinkSchema = z.object({
  platform: z.string(),
  url: z.string().url(),
  icon: z.string(),
})

export const profileSchema = z.object({
  name: z.string(),
  title: z.string(),
  bio: z.string(),
  email: z.string().email(),
  phone: z.string(),
  location: z.string(),
  image: z.string(),
  availability: z.boolean(),
  socials: z.array(socialLinkSchema),
})

export const experienceSchema = z.object({
  id: z.string(),
  company: z.string(),
  position: z.string(),
  period: z.string(),
  description: z.string(),
  current: z.boolean(),
})

export const skillSchema = z.object({
  name: z.string(),
  category: z.string(),
})

export const projectSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  shortDescription: z.string(),
  longDescription: z.string(),
  year: z.number(),
  category: z.string(),
  technologies: z.array(z.string()),
  featured: z.boolean(),
  images: z.object({
    thumbnail: z.string(),
    hero: z.string(),
    gallery: z.array(z.string()),
  }),
  links: z.object({
    github: z.string().url().optional(),
    live: z.string().url().optional(),
    demo: z.string().url().optional(),
  }).optional(),
})

export const automationSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  features: z.array(z.string()),
  status: z.enum(['live', 'development', 'planned']),
  icon: z.string(),
})
