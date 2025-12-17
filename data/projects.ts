import { Project } from './types'
import { projectSchema } from './schemas'
import { z } from 'zod'

const projectsData: Project[] = [
  {
    id: '1',
    slug: 'bonifaz-peluqueros',
    title: 'Bonifaz Peluqueros',
    shortDescription: 'Sistema integral de gestión de peluquería con agendamiento en tiempo real, gestión de clientes y servicios.',
    longDescription: `Bonifaz Peluqueros necesitaba modernizar su proceso de gestión de citas y clientes.
Desarrollé un sistema completo que permite a los clientes agendar citas en línea viendo la disponibilidad en tiempo real, mientras el personal gestiona el calendario, servicios y historial de clientes desde un panel administrativo intuitivo.

El proyecto se construyó con Vue.js e Inertia.js para una experiencia de usuario fluida tipo SPA, aprovechando la potencia de Laravel en el backend. El sistema incluye gestión de múltiples barberos, catálogo de servicios con precios, notificaciones automáticas por email y WhatsApp, y reportes de ventas.

Los resultados fueron inmediatos: reducción del 40% en llamadas telefónicas para agendar citas, disminución de no-shows gracias a recordatorios automáticos, y mejor organización del día a día del negocio.`,
    year: 2024,
    category: 'Web Application',
    technologies: ['Laravel', 'Vue.js', 'Inertia.js', 'TailwindCSS', 'MySQL'],
    featured: true,
    images: {
      thumbnail: '/assets/images/projects/bonifazpeluqueros.com__(1).png',
      hero: '/assets/images/projects/bonifazpeluqueros.com__(1).png',
      gallery: [
        '/assets/images/projects/image.png',
        '/assets/images/projects/image 1.png',
      ],
    },
  },
  {
    id: '2',
    slug: 'exchange',
    title: 'Exchange EC',
    shortDescription: 'Sistema administrativo completo para programas de intercambio estudiantil internacional.',
    longDescription: `Exchange EC es una organización que gestiona programas de intercambio estudiantil a nivel internacional. Necesitaban una plataforma robusta para administrar estudiantes, programas, pagos y documentación de manera centralizada.

Desarrollé un sistema completo utilizando Laravel y Filament que permite gestionar todo el ciclo de vida de un estudiante: desde la inscripción inicial, gestión de documentos, seguimiento de pagos en múltiples cuotas, hasta la asignación de programas y destinos. El panel administrativo incluye reportes detallados, búsqueda avanzada y gestión de roles para diferentes tipos de usuarios.

El sistema procesa actualmente más de 200 inscripciones anuales, gestiona pagos por más de $500,000 USD al año, y ha reducido significativamente el tiempo de procesamiento administrativo.`,
    year: 2024,
    category: 'Web Application',
    technologies: ['Laravel', 'Filament', 'MySQL'],
    featured: true,
    images: {
      thumbnail: '/assets/images/projects/exchangeec.app_admin_enrollments.png',
      hero: '/assets/images/projects/exchangeec.app_admin_enrollments.png',
      gallery: [
        '/assets/images/projects/exchangeec.app_admin_programs.png',
        '/assets/images/projects/exchangeec.app_admin_payments_8.png',
      ],
    },
  },
  {
    id: '3',
    slug: 'segob',
    title: 'Segob Noticias',
    shortDescription: 'Portal de noticias oficial gubernamental con CMS robusto para gestión de contenido a gran escala.',
    longDescription: `La Secretaría de Gobernación de México necesitaba un portal de noticias moderno y escalable para publicar comunicados oficiales, noticias y actualizaciones gubernamentales. El proyecto requería un CMS potente pero intuitivo que permitiera a múltiples editores gestionar contenido de forma simultánea.

Desarrollé la plataforma utilizando Laravel y Filament, creando un sistema de gestión de contenido que incluye categorización avanzada, sistema de publicación programada, gestión de medios, SEO automático y control de versiones. El panel administrativo permite a editores, revisores y administradores trabajar con diferentes niveles de permisos.

El portal maneja miles de visitas diarias y ha publicado más de 500 noticias desde su lanzamiento, convirtiéndose en una fuente confiable de información gubernamental oficial.`,
    year: 2023,
    category: 'Web Application',
    technologies: ['Laravel', 'Filament', 'MySQL'],
    featured: true,
    images: {
      thumbnail: '/assets/images/projects/noticias.segob.gob.mx_.png',
      hero: '/assets/images/projects/noticias.segob.gob.mx_.png',
      gallery: [],
    },
  },
  {
    id: '4',
    slug: 'sonata',
    title: 'Sonata',
    shortDescription: 'Mi primer proyecto freelance: plataforma de reservaciones para escuela de música.',
    longDescription: `Sonata Music School es una academia de música que necesitaba digitalizar su proceso de reservación de clases. Este fue mi primer proyecto como freelancer, y aunque fue desafiante, me permitió aplicar todo lo aprendido y descubrir mi pasión por crear soluciones web.

Desarrollé una plataforma completa donde estudiantes pueden ver la disponibilidad de profesores por instrumento, reservar clases individuales o paquetes, y gestionar su calendario. Los profesores tienen su propio panel para marcar disponibilidad, y el administrador puede supervisar todo desde un dashboard central.

Utilicé Laravel Livewire para crear una experiencia interactiva sin complejidad innecesaria. El stack TALL (TailwindCSS, Alpine.js, Laravel, Livewire) demostró ser perfecto para este proyecto, permitiéndome entregar una aplicación moderna y funcional.

Este proyecto marcó el inicio de mi carrera freelance y confirmó mi decisión de especializarme en desarrollo Laravel.`,
    year: 2022,
    category: 'Web Application',
    technologies: ['Laravel', 'Livewire', 'TailwindCSS', 'Alpine.js'],
    featured: false,
    images: {
      thumbnail: '/assets/images/projects/image 2.png',
      hero: '/assets/images/projects/image 2.png',
      gallery: [],
    },
  },
  {
    id: '5',
    slug: 'beaubella',
    title: 'Beaubella',
    shortDescription: 'Sistema híbrido de gestión de citas con Filament Form & Table Builder integrado en aplicación custom.',
    longDescription: `Beaubella es un spa de alta gama que necesitaba un sistema de gestión personalizado pero no quería comprometer la calidad de la experiencia administrativa. El desafío era crear una solución que combinara un frontend público totalmente custom con las potentes herramientas de Filament en el backend.

Este proyecto representa un enfoque híbrido interesante: utilicé Filament Form Builder y Table Builder como componentes independientes dentro de una aplicación Laravel tradicional, sin adoptar el panel completo de Filament. Esto me permitió aprovechar la potencia de los builders para formularios complejos y tablas de datos, mientras mantenía total control sobre el diseño y flujo de la aplicación.

El sistema gestiona citas, clientes, servicios, inventario de productos, y generación de reportes. El frontend público permite reservar citas con disponibilidad en tiempo real, mientras el panel administrativo usa Filament Components para operaciones CRUD eficientes.`,
    year: 2023,
    category: 'Web Application',
    technologies: ['Laravel', 'Filament', 'TailwindCSS', 'Alpine.js'],
    featured: false,
    images: {
      thumbnail: '/assets/images/projects/image 5.png',
      hero: '/assets/images/projects/image 5.png',
      gallery: [],
    },
  },
]

// Validate all projects on import
const projectsArraySchema = z.array(projectSchema)
export const projects = projectsArraySchema.parse(projectsData)
