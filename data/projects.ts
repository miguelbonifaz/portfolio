import { Project } from "./types";
import { projectSchema } from "./schemas";
import { z } from "zod";

const projectsData: Project[] = [
  {
    id: "1",
    slug: "bonifaz-peluqueros",
    title: "Bonifaz Peluqueros",
    shortDescription:
      "Sistema de reservaciones de corte de cabello para hombres, mujeres y niños, con calendario interno para visualización de citas.",
    longDescription: `Bonifaz Peluqueros necesitaba modernizar su proceso de gestión de citas y clientes.
Desarrollé un sistema completo que permite a los clientes agendar citas en línea viendo la disponibilidad en tiempo real, mientras el personal gestiona el calendario, servicios y historial de clientes desde un panel administrativo intuitivo.

El proyecto se construyó con Vue.js e Inertia.js para una experiencia de usuario fluida tipo SPA, aprovechando la potencia de Laravel en el backend. El sistema incluye gestión de múltiples profesionales, catálogo de servicios con precios, notificaciones automáticas por email y WhatsApp.

Los resultados fueron inmediatos: reducción mas del 50% en llamadas telefónicas para agendar citas, mejor organización del día a día del negocio, y alta satisfacción de clientes que ahora reservan cómodamente desde la web sin necesidad de llamar.`,
    category: "Web Application",
    technologies: ["Laravel", "Vue.js", "Inertia.js", "TailwindCSS", "MySQL"],
    featured: true,
    images: {
      thumbnail:
        "/assets/images/projects/bonifaz-peluqueros/bonifaz-peluqueros-hero.png",
      hero: "/assets/images/projects/bonifaz-peluqueros/bonifaz-peluqueros-hero.png",
      gallery: [
        "/assets/images/projects/bonifaz-peluqueros/bonifaz-peluqueros-gallery-1.png",
        "/assets/images/projects/bonifaz-peluqueros/bonifaz-peluqueros-gallery-2.png",
      ],
    },
    links: {
      live: "https://bonifazpeluqueros.com",
    },
  },
  {
    id: "2",
    slug: "exchange",
    title: "Exchange EC",
    shortDescription:
      "Sistema administrativo completo para programas de intercambio estudiantil internacional.",
    longDescription: `Exchange EC es una organización que gestiona programas de intercambio estudiantil a nivel internacional. Necesitaban una plataforma robusta para administrar estudiantes, programas, pagos y documentación de manera centralizada.

Desarrollé un sistema completo utilizando Laravel y Filament que permite gestionar todo el ciclo de vida de un estudiante: desde la inscripción inicial, gestión de documentos, seguimiento de pagos en múltiples cuotas, hasta la asignación de programas y destinos.`,
    category: "Web Application",
    technologies: ["Laravel", "Filament", "MySQL"],
    featured: true,
    images: {
      thumbnail: "/assets/images/projects/exchange/exchange-enrollments.png",
      hero: "/assets/images/projects/exchange/exchange-enrollments.png",
      gallery: [
        "/assets/images/projects/exchange/exchange-programs.png",
        "/assets/images/projects/exchange/exchange-payments.png",
      ],
    },
    links: {
      live: "https://exchangeec.app",
    },
  },
  {
    id: "3",
    slug: "segob",
    title: "Segob Noticias",
    shortDescription:
      "Sistema de gestión de contenido para portal de noticias oficial del gobierno.",
    longDescription: `La Secretaría de Gobernación de México necesitaba un portal de noticias moderno y escalable para publicar comunicados oficiales, noticias y actualizaciones gubernamentales. El proyecto requería un CMS potente pero intuitivo que permitiera a múltiples editores gestionar contenido de forma simultánea.

Desarrollé la plataforma utilizando Laravel, Filament, Vue.js e Inertia.js, creando un sistema de gestión de contenido que incluye categorización, gestión de medios (documentos PDF, galerías fotográficas, videos y audios), y SEO.`,
    category: "Web Application",
    technologies: ["Laravel", "Filament", "Vue.js", "Inertia.js", "MySQL"],
    featured: true,
    images: {
      thumbnail: "/assets/images/projects/segob/segob-hero.png",
      hero: "/assets/images/projects/segob/segob-hero.png",
      gallery: [
        "/assets/images/projects/segob/segob-gallery-1.png",
        "/assets/images/projects/segob/segob-gallery-2.png",
      ],
    },
    links: {
      live: "https://noticias.segob.gob.mx",
    },
  },
  {
    id: "4",
    slug: "sonata",
    title: "Sonata",
    shortDescription:
      "Mi primer proyecto freelance: plataforma de reservaciones para escuela de música.",
    longDescription: `Sonata Music School es una academia de música que necesitaba digitalizar su proceso de reservación de clases. Este fue mi primer proyecto como freelancer, y aunque fue desafiante, me permitió aplicar todo lo aprendido y descubrir mi pasión por crear soluciones web.

Desarrollé una plataforma completa donde estudiantes pueden ver la disponibilidad de profesores por instrumento, reservar clases individuales o paquetes, y gestionar su calendario. Los profesores tienen su propio panel para marcar disponibilidad, y el administrador puede supervisar todo desde un dashboard central.

Utilicé Laravel Livewire para crear una experiencia interactiva sin complejidad innecesaria. El stack TALL (TailwindCSS, Alpine.js, Laravel, Livewire) demostró ser perfecto para este proyecto, permitiéndome entregar una aplicación moderna y funcional.

Este proyecto marcó el inicio de mi carrera freelance y confirmó mi decisión de especializarme en desarrollo Laravel.`,
    category: "Web Application",
    technologies: ["Laravel", "Livewire", "TailwindCSS", "Alpine.js"],
    featured: false,
    images: {
      thumbnail: "/assets/images/projects/sonata/sonata-hero.png",
      hero: "/assets/images/projects/sonata/sonata-hero.png",
      gallery: [],
    },
    links: {
      live: "https://samborondon.sonata.com.ec",
    },
  },
  {
    id: "5",
    slug: "beaubella",
    title: "Beaubella",
    shortDescription:
      "Sistema de reservaciones para salón de belleza con administración de inventario y generación de reportes.",
    longDescription: `Beaubella es un spa de alta gama que necesitaba modernizar completamente su gestión operativa. El desafío era crear un sistema integral que manejara reservaciones, inventario de productos, registro de pagos y reportes administrativos, todo desde una plataforma centralizada.

Desarrollé una plataforma completa utilizando Laravel, Livewire y Filament que gestiona el ciclo completo del negocio desde el panel administrativo: registro de citas con asignación de profesionales y servicios, control de inventario cuando se utilizan productos durante los tratamientos, y registro de pagos realizados. El sistema incluye gestión de múltiples sucursales y un sistema de roles que permite a administradores, personal de mostrador y profesionales acceder según sus responsabilidades.

La plataforma genera reportes detallados en Excel y PDF para análisis de ventas, uso de productos, y rendimiento por profesional o sucursal, permitiendo a los dueños tomar decisiones informadas sobre su negocio.`,
    category: "Web Application",
    technologies: ["Laravel", "Filament", "TailwindCSS", "Alpine.js"],
    featured: true,
    images: {
      thumbnail: "/assets/images/projects/beaubella/beaubella-hero.png",
      hero: "/assets/images/projects/beaubella/beaubella-hero.png",
      gallery: [
        "/assets/images/projects/beaubella/beaubella-gallery-1.png",
        "/assets/images/projects/beaubella/beaubella-gallery-2.png",
        "/assets/images/projects/beaubella/beaubella-gallery-3.png",
      ],
    },
    links: {
      live: "https://app.beaubella.com.mx",
    },
  },
];

// Validate all projects on import
const projectsArraySchema = z.array(projectSchema);
export const projects = projectsArraySchema.parse(projectsData);
