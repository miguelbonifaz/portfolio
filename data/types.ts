export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface Profile {
  name: string
  title: string
  bio: string
  email: string
  phone: string
  location: string
  image: string
  availability: boolean
  socials: SocialLink[]
}

export interface Experience {
  id: string
  company: string
  position: string
  period: string
  description: string
  current: boolean
}

export interface Skill {
  name: string
  category: string
}

export interface Project {
  id: string
  slug: string
  title: string
  shortDescription: string
  longDescription: string
  category: string
  technologies: string[]
  featured: boolean
  images: {
    thumbnail: string
    hero: string
    gallery: string[]
  }
  links?: {
    github?: string
    live?: string
    demo?: string
  }
}

export interface Automation {
  id: string
  slug: string
  name: string
  shortDescription: string
  longDescription: string
  features: string[]
  status: 'live' | 'development' | 'planned'
  icon: string
  videoUrl?: string
  images: {
    hero: string
    gallery: string[]
  }
  cta?: {
    text: string
    url: string
  }
}
