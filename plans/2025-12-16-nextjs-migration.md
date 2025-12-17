# Migración a Next.js con Gestión de Contenido Dinámico

**IMPORTANT:** As you complete each task below, update this file to mark checkboxes as done `- [x]` for real-time progress tracking.

## Resumen

Migrar el portfolio actual (HTML estático con Vite/React) a **Next.js 15** (última versión) con capacidades de contenido dinámico. Dado que no hay backend, se proponen soluciones modernas de gestión de contenido sin necesidad de servidor propio.

## Arquitectura Propuesta

### Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Styling**: TailwindCSS 4.x
- **Gestión de Contenido**: JSON Local + TypeScript
- **Validación**: Zod para type-safety en runtime
- **Imágenes**: next/image con assets locales
- **Iconos**: Lucide React

### Por qué JSON Local + TypeScript

**Ventajas:**

- Control total del contenido versionado en Git
- Zero dependencies externas para contenido
- Type-safety completo con TypeScript
- Deploy instantáneo sin configuración adicional
- Sin costos ni límites de API
- Actualizaciones directas vía commits
- Migraciones futuras sencillas (a DB si lo necesitas)

## Fases de Implementación

### Fase 1: Setup de Next.js 15

- [x] Crear nuevo proyecto Next.js 15 con App Router: `npx create-next-app@latest`
- [x] Configurar TypeScript (incluido en create-next-app)
- [x] Instalar y configurar TailwindCSS 4.x
- [x] Instalar dependencias adicionales:
  - [x] `zod` - Validación de schemas
  - [x] `lucide-react` - Iconos
  - [x] `react-hook-form` - Formularios
  - [x] `@hookform/resolvers` - Integración Zod + React Hook Form
- [x] Migrar fuentes (Space Mono, Playfair Display) usando `next/font/google`
- [x] Setup de estructura de carpetas:
  ```
  app/
  ├── page.tsx                 # Homepage
  ├── projects/
  │   └── [slug]/
  │       └── page.tsx         # Project detail pages
  ├── automations/
  │   └── page.tsx             # Automations page
  ├── layout.tsx               # Root layout
  └── api/
      └── contact/
          └── route.ts         # Contact form API
  components/
  ├── ui/
  │   ├── Header.tsx
  │   ├── Footer.tsx
  │   └── Button.tsx
  ├── sections/
  │   ├── Hero.tsx
  │   ├── About.tsx
  │   ├── Works.tsx
  │   ├── Automations.tsx
  │   └── Contact.tsx
  └── projects/
      ├── ProjectCard.tsx
      └── ProjectGallery.tsx
  data/                        # JSON data layer
  ├── types.ts                 # TypeScript types
  ├── profile.ts               # Personal info
  ├── projects.ts              # Projects data
  ├── automations.ts           # Automation agents
  └── skills.ts                # Skills & experience
  lib/
  ├── utils.ts                 # Utilities
  └── constants.ts             # Constants
  public/
  └── assets/
      └── images/
          └── projects/
  ```

### Fase 2: Creación de Data Layer con TypeScript

- [x] Crear tipos TypeScript en `/data/types.ts`:
  - [x] `Profile` - Info personal, contacto, redes sociales
  - [x] `Experience` - Historial laboral
  - [x] `Skill` - Habilidades técnicas
  - [x] `Project` - Proyectos completos
  - [x] `Automation` - Agentes de automatización
  - [x] `SocialLink` - Enlaces a redes
- [x] Crear schemas de validación con Zod en `/data/schemas.ts`
- [x] Implementar archivos de datos:
  - [x] `/data/profile.ts` - Exporta objeto `profile` con info personal
  - [x] `/data/projects.ts` - Exporta array `projects` con todos los proyectos
  - [x] `/data/automations.ts` - Exporta array `automations` con agentes
  - [x] `/data/skills.ts` - Exporta arrays `experience` y `skills`
- [x] Crear helpers en `/data/index.ts`:
  - [x] `getProfile()` - Retorna perfil validado
  - [x] `getAllProjects()` - Retorna proyectos ordenados
  - [x] `getProjectBySlug(slug)` - Busca proyecto específico
  - [x] `getAutomations()` - Retorna automatizaciones
- [x] Validar todos los datos con Zod al importar

### Fase 3: Migración de Componentes UI

- [x] Crear layout principal (`app/layout.tsx`):
  - [x] Configurar fuentes con `next/font/google`
  - [x] Meta tags base
  - [x] Estilos globales de TailwindCSS
- [x] Crear componentes UI base:
  - [x] `Header.tsx` - Navegación sticky con clock
  - [x] `Footer.tsx` - Footer minimalista
- [x] Migrar Hero Section (`components/sections/Hero.tsx`):
  - [x] Implementar optimización de imagen con `next/image`
  - [x] Importar datos desde `data/profile`
  - [x] Mantener efectos visuales (clip-path, grayscale)
  - [x] Badge "Disponible para Trabajar"
  - [x] Links a redes sociales con iconos Lucide
- [x] Migrar About Section (`components/sections/About.tsx`):
  - [x] Importar experiencia desde `data/skills`
  - [x] Renderizar skills como pills dinámicos
  - [x] Layout con grid responsive
- [x] Migrar Works Section (`components/sections/Works.tsx`):
  - [x] Crear `ProjectCard.tsx` reutilizable
  - [x] Grid de proyectos desde `data/projects`
  - [x] Lazy loading de imágenes con `next/image`
  - [x] Hover effects y transiciones CSS
  - [x] Links a páginas de detalle
- [x] Migrar Automations Section (`components/sections/Automations.tsx`):
  - [x] Cards de agentes desde `data/automations`
  - [x] Iconos con Lucide React
  - [x] Badges de estado (En Vivo, En Desarrollo)
- [x] Migrar Contact Section (`components/sections/Contact.tsx`):
  - [x] Formulario con React Hook Form
  - [x] Validación con Zod
  - [x] Datos de contacto desde `data/profile`

### Fase 4: Páginas Dinámicas de Proyectos

- [x] Crear `/app/projects/[slug]/page.tsx`:
  - [x] Implementar `generateStaticParams()` usando `getAllProjects()`
  - [x] Implementar `generateMetadata()` para SEO dinámico
  - [x] Obtener proyecto con `getProjectBySlug(params.slug)`
- [x] Diseño de página de detalle:
  - [x] Hero con imagen principal y título
  - [x] Grid de información (año, tecnologías, categoría)
  - [x] Descripción larga del proyecto
  - [x] Galería de imágenes con `ProjectGallery.tsx`
  - [x] Stack tecnológico como pills
  - [x] Links a GitHub/Demo (condicional)
  - [x] CTA para contacto
- [x] Implementar navegación entre proyectos (Anterior/Siguiente)
- [x] Breadcrumbs con Link de Next.js
- [x] Página 404 personalizada si slug no existe
- [x] Migrar contenido de HTML a `/data/projects.ts`:
  - [x] bonifaz-peluqueros.html → objeto en projects array
  - [x] exchange.html → objeto en projects array
  - [x] segob.html → objeto en projects array
  - [x] sonata.html → objeto en projects array
  - [x] beaubella.html → objeto en projects array

### Fase 5: SEO y Optimizaciones

- [x] Configurar Metadata API de Next.js 15:
  - [x] `metadata` object en `app/layout.tsx` (title, description, OG)
  - [x] `generateMetadata()` en `app/projects/[slug]/page.tsx`
  - [x] Open Graph images (usar imagen del proyecto)
  - [x] Twitter Cards metadata
  - [x] Canonical URLs
- [x] Crear `app/sitemap.ts`:
  - [x] Generar dinámicamente con `getAllProjects()`
  - [x] Incluir homepage, automations, y proyectos
  - [x] Configurar lastModified y changeFrequency
- [x] Crear `app/robots.ts` para SEO
- [x] Añadir JSON-LD para Schema.org:
  - [x] `Person` schema en homepage
  - [x] `WebSite` schema en layout
  - [x] `Article` schema en proyectos
  - [x] `Breadcrumb` schema en proyectos
- [x] Optimizar imágenes:
  - [x] Configurar `next.config.ts` para optimización
  - [x] Definir formats (AVIF, WebP)
  - [x] Configurar deviceSizes y imageSizes
  - [x] Lazy loading automático de next/image (ya implementado)
- [x] Performance:
  - [x] Comentario para habilitar `output: 'export'` para SSG puro
  - [x] `force-static` configurado en páginas dinámicas

### Fase 6: Formulario de Contacto Funcional

- [x] Crear Server Action en `app/actions/contact.ts`:
  - [x] Validar datos con Zod
  - [x] Rate limiting simple (5 mensajes por hora)
  - [x] Retornar success/error states
- [x] Integrar servicio de email con **Nodemailer**:
  - [x] Configurar con Mailtrap (desarrollo)
  - [x] Variables de entorno en `.env.local.example`
  - [x] Template de email HTML profesional
  - [x] Auto-reply al remitente
- [x] Actualizar componente Contact:
  - [x] Conectar formulario con Server Action usando useFormState
  - [x] Manejar estados loading/success/error
  - [x] Toast notifications (react-hot-toast)
  - [x] Reset form al enviar exitosamente
  - [x] Mostrar errores de validación por campo
- [x] Testing del formulario:
  - [x] Build exitoso sin errores
  - [x] Validación de campos funcional
  - [x] Estados de loading implementados

### Fase 7: Testing Local

- [x] Testing local:
  - [x] Navegación entre todas las páginas
  - [x] Carga de imágenes optimizadas
  - [x] Formulario de contacto end-to-end
  - [x] Responsive design (mobile 375px / tablet 768px / desktop 1440px)
  - [x] Verificar todos los links externos
- [x] Build de producción:
  - [x] `npm run build` sin errores
  - [x] Verificar output estático generado (11 páginas)
  - [x] Probar con `npm run start`
- [x] Optimización de performance:
  - [x] Build time optimizado (~4-5s)
  - [x] Todas las rutas pre-renderizadas
  - [x] Bundle size verificado
- [x] Configuración local final:
  - [x] Archivo `.env.local.example` creado
  - [x] Variables de entorno documentadas en README
- [x] Documentación:
  - [x] README completo con instrucciones
  - [x] TESTING-CHECKLIST.md con guía completa
  - [x] Documentación de todas las fases en /docs
  - [x] Comentarios en archivos de datos

## Estructura de Datos Propuesta

### Ejemplo de `/data/types.ts`:

```typescript
export interface Profile {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  image: string;
  availability: boolean;
  socials: SocialLink[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  year: number;
  category: string;
  technologies: string[];
  featured: boolean;
  images: {
    thumbnail: string;
    hero: string;
    gallery: string[];
  };
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
}

export interface Automation {
  id: string;
  name: string;
  description: string;
  features: string[];
  status: "live" | "development" | "planned";
  icon: string;
}
```

### Ejemplo de `/data/projects.ts`:

```typescript
import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "bonifaz-peluqueros",
    title: "Sistema de Gestión de Peluquería",
    shortDescription: "Agendamiento en Tiempo Real / Laravel + Vue.js",
    longDescription: "Sistema completo de gestión...",
    year: 2024,
    category: "Web Application",
    technologies: ["Laravel", "Vue.js", "TailwindCSS"],
    featured: true,
    images: {
      thumbnail: "/assets/images/projects/bonifazpeluqueros.com__(1).png",
      hero: "/assets/images/projects/bonifazpeluqueros.com__(1).png",
      gallery: [],
    },
  },
  // ... más proyectos
];
```

## Notas Técnicas

- **Next.js 15**: App Router exclusivamente (no Pages Router)
- **Renderizado**: Static Site Generation (SSG) puro
  - Usar `export const dynamic = 'force-static'` en páginas
  - `generateStaticParams()` para rutas dinámicas
  - Todo se genera en build time
- **Datos**: TypeScript + validación Zod en import time
- **Imágenes**:
  - Migrar todas a `/public/assets/images/`
  - Usar `next/image` con width/height explícitos
  - Generar placeholders blur con herramienta externa
- **Estilos**:
  - TailwindCSS 4.x con configuración CSS-first
  - Mantener diseño minimalista actual
  - Fuentes con `next/font/google` (optimización automática)
- **Performance**:
  - Code splitting automático por ruta
  - Tree shaking de componentes no usados
  - Lazy loading de imágenes
- **Deployment**: Desarrollo local
  - Build estático con `npm run build`
  - Servidor local con `npm run start`

## Migración de Datos

### Contenido a migrar desde HTML:

1. **Información personal** (nombre, bio, ubicación, email)
2. **Experiencia laboral** (3 posiciones)
3. **Habilidades/Stack** (Laravel, Vue.js, Livewire, etc.)
4. **Proyectos** (5 proyectos principales)
5. **Automatizaciones** (2 agentes)
6. **Links y redes sociales**

### Assets:

- Imágenes de proyectos en `assets/images/projects/`
- Foto de perfil (placeholder actual de Unsplash)
- Favicon y og-image

## Ventajas de JSON Local vs CMS Headless

| Aspecto              | JSON Local                  | Sanity/Contentful     |
| -------------------- | --------------------------- | --------------------- |
| **Setup**            | Inmediato                   | ~2 horas config       |
| **Costo**            | $0 siempre                  | Gratis con límites    |
| **Velocidad build**  | Instantáneo                 | Fetch API en build    |
| **Type Safety**      | TypeScript nativo           | SDK + tipos generados |
| **Versionado**       | Git directo                 | API + webhooks        |
| **Complejidad**      | Mínima                      | Media                 |
| **Migración futura** | Fácil a cualquier DB        | Lock-in parcial       |
| **Ideal para**       | Portfolios, sites estáticos | Equipos, multi-editor |

## Comandos Clave

```bash
# Crear proyecto
npx create-next-app@latest portfolio-nextjs --typescript --tailwind --app --no-src-dir

# Instalar dependencias
npm install zod lucide-react react-hook-form @hookform/resolvers nodemailer react-hot-toast
npm install -D @types/nodemailer

# Development
npm run dev

# Build
npm run build

# Producción local
npm run build
npm run start
```

## Próximos Pasos

1. ✅ Plan actualizado con JSON Local + TypeScript
2. Comenzar Fase 1: Setup de Next.js 15
3. Crear data layer con TypeScript
4. Migrar componentes UI progresivamente
5. Testing local

**¿Listo para comenzar con Fase 1?** 🚀

---

**Nota:** Si tienes dudas sobre Next.js, TailwindCSS, Zod o cualquier tecnología usada, usa Context7 para consultar documentación actualizada.
