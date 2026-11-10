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
  slug: z.string(),
  name: z.string(),
  shortDescription: z.string(),
  longDescription: z.string(),
  features: z.array(z.string()),
  status: z.enum(['live', 'development', 'planned']),
  icon: z.string(),
  videoUrl: z.string().optional(),
  techStack: z.array(z.string()).optional(),
  screenshots: z.array(z.object({
    src: z.string(),
    title: z.string(),
    description: z.string(),
    width: z.number(),
    height: z.number(),
    label: z.string().optional(),
    span: z.union([z.literal(2), z.literal(3), z.literal(4), z.literal(6)]).optional(),
  })).optional(),
  images: z.object({
    hero: z.string(),
    gallery: z.array(z.string()),
  }),
  cta: z.object({
    text: z.string(),
    url: z.string().url(),
  }).optional(),
})

export const contactFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})
