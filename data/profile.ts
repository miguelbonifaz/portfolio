import { Profile } from './types'
import { profileSchema } from './schemas'

const profileData: Profile = {
  name: 'Zilver Rodriguez',
  title: 'Full-Stack Developer',
  bio: 'Desarrollador Full-Stack especializado en crear soluciones web modernas y eficientes. Con experiencia en Laravel, Vue.js, y tecnologías modernas, transformo ideas en aplicaciones funcionales y escalables.',
  email: 'contacto@zilverdev.com',
  phone: '+1234567890',
  location: 'Remote',
  image: '/assets/images/profile.jpg',
  availability: true,
  socials: [
    {
      platform: 'GitHub',
      url: 'https://github.com/zilverdev',
      icon: 'github',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/zilverdev',
      icon: 'linkedin',
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/zilverdev',
      icon: 'twitter',
    },
  ],
}

// Validate data on import
export const profile = profileSchema.parse(profileData)
