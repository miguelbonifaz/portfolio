import { MetadataRoute } from 'next'
import { getAllProjects } from '@/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects()
  const baseUrl = 'https://miguelbonifaz.dev'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#works`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#automations`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]

  // Dynamic project pages
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(`${project.year}-01-01`),
    changeFrequency: 'monthly' as const,
    priority: project.featured ? 0.9 : 0.7,
  }))

  return [...staticPages, ...projectPages]
}

