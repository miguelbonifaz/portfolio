import { profile } from './profile'
import { projects } from './projects'
import { automations } from './automations'
import { experience, skills } from './skills'
import { Project } from './types'

/**
 * Get profile data
 */
export function getProfile() {
  return profile
}

/**
 * Get all projects
 */
export function getAllProjects() {
  return [...projects]
}

/**
 * Get a project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

/**
 * Get featured projects only
 */
export function getFeaturedProjects() {
  return projects.filter((project) => project.featured)
}

/**
 * Get all automations
 */
export function getAutomations() {
  return automations
}

/**
 * Get an automation by slug
 */
export function getAutomationBySlug(slug: string) {
  return automations.find((automation) => automation.slug === slug)
}

/**
 * Get experience data
 */
export function getExperience() {
  return experience
}

/**
 * Get skills data
 */
export function getSkills() {
  return skills
}

/**
 * Get skills grouped by category
 */
export function getSkillsByCategory() {
  const grouped: Record<string, string[]> = {}

  skills.forEach((skill) => {
    if (!grouped[skill.category]) {
      grouped[skill.category] = []
    }
    grouped[skill.category].push(skill.name)
  })

  return grouped
}

// Re-export types for convenience
export type * from './types'
