import { Profile, Project } from '@/data/types'

export function generatePersonSchema(profile: Profile) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    description: profile.bio,
    email: profile.email,
    telephone: profile.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: profile.location,
    },
    image: profile.image,
    url: 'https://miguelbonifaz.com',
    sameAs: profile.socials.map((social) => social.url),
    knowsAbout: [
      'Laravel',
      'PHP',
      'Vue.js',
      'Livewire',
      'Filament',
      'Inertia.js',
      'TailwindCSS',
      'MySQL',
      'Web Development',
    ],
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Miguel Bonifaz Portfolio',
    description:
      'Desarrollador Laravel con más de 5 años de experiencia. Especializado en Laravel, Vue.js, Livewire, Filament y automatizaciones con IA.',
    url: 'https://miguelbonifaz.com',
    author: {
      '@type': 'Person',
      name: 'Miguel Bonifaz',
    },
    inLanguage: 'es-ES',
  }
}

export function generateWebPageSchema(
  title: string,
  description: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    inLanguage: 'es-ES',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Miguel Bonifaz Portfolio',
      url: 'https://miguelbonifaz.com',
    },
  }
}

export function generateArticleSchema(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: project.title,
    description: project.shortDescription,
    image: `https://miguelbonifaz.com${project.images.hero}`,
    author: {
      '@type': 'Person',
      name: 'Miguel Bonifaz',
      url: 'https://miguelbonifaz.com',
    },
    publisher: {
      '@type': 'Person',
      name: 'Miguel Bonifaz',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://miguelbonifaz.com/projects/${project.slug}`,
    },
    keywords: project.technologies.join(', '),
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://miguelbonifaz.com${item.url}`,
    })),
  }
}

