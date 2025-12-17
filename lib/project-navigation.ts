import { getAllProjects } from '@/data'
import { Project } from '@/data/types'

/**
 * Get previous and next projects for navigation
 */
export function getProjectNavigation(currentSlug: string): {
  previous: Project | null
  next: Project | null
} {
  const projects = getAllProjects()
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug)

  if (currentIndex === -1) {
    return { previous: null, next: null }
  }

  const previous = currentIndex > 0 ? projects[currentIndex - 1] : null
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return { previous, next }
}

