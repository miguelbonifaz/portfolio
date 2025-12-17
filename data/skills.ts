import { Experience, Skill } from './types'
import { experienceSchema, skillSchema } from './schemas'
import { z } from 'zod'

const experienceData: Experience[] = [
  {
    id: '1',
    company: 'Freelance',
    position: 'Full-Stack Developer',
    period: '2022 - Presente',
    description: 'Desarrollo de aplicaciones web completas para diversos clientes, desde e-commerce hasta sistemas de gestión empresarial.',
    current: true,
  },
  {
    id: '2',
    company: 'Tech Solutions',
    position: 'Laravel Developer',
    period: '2021 - 2022',
    description: 'Desarrollo y mantenimiento de aplicaciones empresariales con Laravel y Vue.js.',
    current: false,
  },
  {
    id: '3',
    company: 'Digital Agency',
    position: 'Web Developer',
    period: '2020 - 2021',
    description: 'Creación de sitios web y aplicaciones para clientes de diversos sectores.',
    current: false,
  },
]

const skillsData: Skill[] = [
  { name: 'Laravel', category: 'Backend' },
  { name: 'PHP', category: 'Backend' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'Livewire', category: 'Backend' },
  { name: 'Filament', category: 'Backend' },
  { name: 'TailwindCSS', category: 'Frontend' },
  { name: 'MySQL', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Git', category: 'Tools' },
  { name: 'Linux', category: 'DevOps' },
]

// Validate all data on import
const experienceArraySchema = z.array(experienceSchema)
const skillsArraySchema = z.array(skillSchema)

export const experience = experienceArraySchema.parse(experienceData)
export const skills = skillsArraySchema.parse(skillsData)
