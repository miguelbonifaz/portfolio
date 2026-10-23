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
    id: "5",
    slug: "english-app",
    title: "Expertise",
    shortDescription:
      "Plataforma de aprendizaje de inglés con plan semanal por niveles, test de ubicación y ejercicios calificados con IA.",
    longDescription: `Expertise by Exchange es una plataforma de aprendizaje de inglés. Necesitaban acompañar a cada estudiante con un plan de estudio estructurado y retroalimentación inmediata, sin depender de que un docente revise cada ejercicio.

Desarrollé una aplicación completa donde el estudiante rinde un test de ubicación, recibe su nivel de inglés y sigue un plan semanal de ejercicios de gramática, vocabulario, lectura, escritura, listening y speaking. Cada respuesta se califica con OpenAI y el estudiante recibe un puntaje y feedback personalizado al instante.

El proyecto se construyó con React e Inertia.js sobre Laravel. Los administradores gestionan estudiantes, docentes, matrículas y syllabus, configuran las habilidades activas por semana y siguen el progreso de cada estudiante con su línea de tiempo, racha y avance del curso.

El resultado es una experiencia de aprendizaje constante y medible: los estudiantes practican todos los días a su ritmo y el equipo académico tiene visibilidad completa del avance de cada uno.`,
    category: "Web Application",
    technologies: ["Laravel", "Inertia.js", "React", "TailwindCSS", "OpenAI"],
    featured: true,
    images: {
      thumbnail: "/assets/images/projects/english-app/english-app-hero.png",
      hero: "/assets/images/projects/english-app/english-app-hero.png",
      gallery: [
        "/assets/images/projects/english-app/english-app-gallery-1.png",
        "/assets/images/projects/english-app/english-app-gallery-2.png",
        "/assets/images/projects/english-app/english-app-gallery-3.png",
        "/assets/images/projects/english-app/english-app-gallery-4.png",
      ],
    },
    links: {
      live: "https://english-app.laravel.cloud",
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
      live: "https://samborondon.laravel.cloud",
    },
  },
];

// Validate all projects on import
const projectsArraySchema = z.array(projectSchema);
export const projects = projectsArraySchema.parse(projectsData);
