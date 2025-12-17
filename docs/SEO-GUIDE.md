# Guía de SEO - Portfolio Next.js

Esta guía explica cómo funciona el SEO en el portfolio y cómo mantenerlo optimizado.

## 📋 Tabla de Contenidos

1. [Estructura de SEO](#estructura-de-seo)
2. [Metadata Automático](#metadata-automático)
3. [JSON-LD Schemas](#json-ld-schemas)
4. [Sitemap y Robots](#sitemap-y-robots)
5. [Optimización de Imágenes](#optimización-de-imágenes)
6. [Cómo Actualizar Contenido](#cómo-actualizar-contenido)
7. [Testing y Validación](#testing-y-validación)

## 🏗️ Estructura de SEO

### Archivos Principales

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx              # Metadata global + WebSite schema
│   ├── page.tsx                # Homepage + Person schema
│   ├── projects/[slug]/page.tsx # Metadata dinámico + Article schema
│   ├── sitemap.ts              # Sitemap XML dinámico
│   └── robots.ts               # Robots.txt
├── components/
│   └── seo/
│       └── JsonLd.tsx          # Componente para JSON-LD
└── lib/
    └── json-ld.ts              # Funciones para generar schemas
```

## 🎯 Metadata Automático

### Metadata Global (Layout)

El archivo `app/layout.tsx` define metadata que se aplica a todas las páginas:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://miguelbonifaz.dev"),
  title: {
    default: "Miguel Bonifaz - Desarrollador Laravel | Portafolio",
    template: "%s | Miguel Bonifaz", // Para páginas hijas
  },
  description: "...",
  // ... más configuración
}
```

**¿Qué hace esto?**
- Define el título base del sitio
- Crea un template para páginas hijas (ej: "Proyecto X | Miguel Bonifaz")
- Establece la URL base para todas las rutas relativas
- Configura Open Graph y Twitter Cards globales

### Metadata Dinámico (Proyectos)

Cada proyecto genera su propio metadata automáticamente:

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  
  return {
    title: project.title, // Usa el template del layout
    description: project.shortDescription,
    // ... metadata específico del proyecto
  }
}
```

**¿Qué hace esto?**
- Lee los datos del proyecto desde `/data/projects.ts`
- Genera título único: "Bonifaz Peluqueros | Miguel Bonifaz"
- Usa la imagen del proyecto para Open Graph
- Crea canonical URL único: `/projects/bonifaz-peluqueros`

## 📊 JSON-LD Schemas

### ¿Qué es JSON-LD?

JSON-LD es un formato que ayuda a los motores de búsqueda a entender mejor tu contenido. Google lo usa para crear "Rich Results" (resultados enriquecidos).

### Schemas Implementados

#### 1. Person Schema (Homepage)

```typescript
{
  "@type": "Person",
  "name": "Miguel Bonifaz",
  "jobTitle": "Full-Stack Developer",
  "email": "contacto@zilverdev.com",
  "sameAs": ["https://github.com/...", "https://linkedin.com/..."],
  "knowsAbout": ["Laravel", "Vue.js", ...]
}
```

**Beneficio:** Google puede mostrar tu perfil profesional en resultados de búsqueda.

#### 2. WebSite Schema (Global)

```typescript
{
  "@type": "WebSite",
  "name": "Miguel Bonifaz Portfolio",
  "url": "https://miguelbonifaz.dev",
  "author": { "@type": "Person", "name": "Miguel Bonifaz" }
}
```

**Beneficio:** Identifica tu sitio como un portfolio profesional.

#### 3. Article Schema (Proyectos)

```typescript
{
  "@type": "Article",
  "headline": "Bonifaz Peluqueros",
  "description": "Sistema integral de gestión...",
  "image": "https://miguelbonifaz.dev/assets/images/...",
  "author": { "@type": "Person", "name": "Miguel Bonifaz" },
  "keywords": "Laravel, Vue.js, Inertia.js"
}
```

**Beneficio:** Proyectos pueden aparecer como artículos en resultados de búsqueda.

#### 4. Breadcrumb Schema (Proyectos)

```typescript
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "position": 1, "name": "Inicio", "item": "/" },
    { "position": 2, "name": "Proyectos", "item": "/#works" },
    { "position": 3, "name": "Bonifaz Peluqueros", "item": "/projects/bonifaz-peluqueros" }
  ]
}
```

**Beneficio:** Google muestra breadcrumbs en resultados de búsqueda.

### Cómo Funcionan los Schemas

Los schemas se generan automáticamente desde tus datos:

1. **Homepage:** Lee `data/profile.ts` → genera Person schema
2. **Proyectos:** Lee `data/projects.ts` → genera Article schema

**No necesitas hacer nada manualmente.** Solo actualiza los datos y los schemas se regeneran automáticamente.

## 🗺️ Sitemap y Robots

### Sitemap Dinámico

**Archivo:** `app/sitemap.ts`

El sitemap se genera automáticamente en cada build:

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects()
  
  return [
    { url: '/', priority: 1.0 },
    ...projects.map(project => ({
      url: `/projects/${project.slug}`,
      priority: project.featured ? 0.9 : 0.7
    }))
  ]
}
```

**¿Cómo funciona?**
1. Lee todos los proyectos desde `/data/projects.ts`
2. Genera una entrada por cada proyecto
3. Proyectos featured tienen mayor prioridad (0.9 vs 0.7)
4. Se actualiza automáticamente al agregar/quitar proyectos

**Acceso:** `https://miguelbonifaz.dev/sitemap.xml`

### Robots.txt

**Archivo:** `app/robots.ts`

```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/']
    },
    sitemap: 'https://miguelbonifaz.dev/sitemap.xml'
  }
}
```

**¿Qué hace?**
- Permite a todos los crawlers indexar el sitio
- Bloquea rutas privadas (`/api/`, `/private/`)
- Indica la ubicación del sitemap

**Acceso:** `https://miguelbonifaz.dev/robots.txt`

## 🖼️ Optimización de Imágenes

### Configuración en next.config.ts

```typescript
images: {
  formats: ["image/avif", "image/webp"],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
}
```

### ¿Qué hace Next.js automáticamente?

1. **Conversión de formatos:**
   - Sirve AVIF si el navegador lo soporta (mejor compresión)
   - Fallback a WebP si no
   - Fallback a formato original si no

2. **Responsive images:**
   - Genera múltiples tamaños automáticamente
   - Sirve el tamaño correcto según el dispositivo
   - Usa `srcset` para optimización

3. **Lazy loading:**
   - Imágenes se cargan solo cuando están visibles
   - Mejora tiempo de carga inicial

### Cómo Usar Imágenes

```tsx
import Image from 'next/image'

<Image
  src="/assets/images/projects/proyecto.png"
  alt="Descripción del proyecto"
  width={1200}
  height={630}
  className="..."
/>
```

**Importante:**
- Siempre especifica `width` y `height`
- Usa rutas relativas desde `/public`
- Next.js optimiza automáticamente

## 🔄 Cómo Actualizar Contenido

### Agregar un Nuevo Proyecto

1. **Añade el proyecto a `/data/projects.ts`:**

```typescript
{
  id: '6',
  slug: 'nuevo-proyecto',
  title: 'Nuevo Proyecto',
  shortDescription: 'Descripción corta para SEO',
  longDescription: 'Descripción larga...',
  year: 2025,
  category: 'Web Application',
  technologies: ['Laravel', 'Vue.js'],
  featured: true,
  images: {
    thumbnail: '/assets/images/projects/nuevo-proyecto-thumb.png',
    hero: '/assets/images/projects/nuevo-proyecto-hero.png',
    gallery: [],
  },
}
```

2. **Añade las imágenes a `/public/assets/images/projects/`**

3. **Rebuild el proyecto:**

```bash
npm run build
```

**Eso es todo.** El nuevo proyecto automáticamente:
- ✅ Aparece en el sitemap
- ✅ Tiene su propia página con metadata optimizado
- ✅ Tiene JSON-LD schema generado
- ✅ Tiene Open Graph y Twitter Cards

### Actualizar Información Personal

Edita `/data/profile.ts`:

```typescript
const profileData: Profile = {
  name: 'Tu Nombre',
  title: 'Tu Título',
  bio: 'Tu biografía...',
  email: 'tu@email.com',
  // ...
}
```

El Person schema se actualiza automáticamente en el próximo build.

### Cambiar URL del Sitio

Si cambias de dominio:

1. Actualiza `metadataBase` en `app/layout.tsx`:

```typescript
metadataBase: new URL("https://tu-nuevo-dominio.com")
```

2. Actualiza la constante en `lib/json-ld.ts`:

```typescript
// Busca y reemplaza todas las instancias de:
'https://miguelbonifaz.dev'
// Por:
'https://tu-nuevo-dominio.com'
```

3. Rebuild:

```bash
npm run build
```

## ✅ Testing y Validación

### 1. Verificar Build Local

```bash
npm run build
npm run start
```

Verifica que no haya errores en la consola.

### 2. Google Rich Results Test

1. Ve a: https://search.google.com/test/rich-results
2. Ingresa la URL de tu sitio
3. Verifica que los schemas sean válidos

**Qué buscar:**
- ✅ Person schema en homepage
- ✅ Article schema en proyectos
- ✅ Breadcrumb schema en proyectos
- ✅ Sin errores o warnings

### 3. Facebook Sharing Debugger

1. Ve a: https://developers.facebook.com/tools/debug/
2. Ingresa tu URL
3. Haz clic en "Scrape Again"

**Qué buscar:**
- ✅ Imagen de preview (1200x630)
- ✅ Título correcto
- ✅ Descripción correcta

### 4. Twitter Card Validator

1. Ve a: https://cards-dev.twitter.com/validator
2. Ingresa tu URL

**Qué buscar:**
- ✅ Summary Large Image card
- ✅ Imagen de preview
- ✅ Título y descripción

### 5. Lighthouse Audit

1. Abre Chrome DevTools (F12)
2. Ve a la pestaña "Lighthouse"
3. Selecciona "SEO" y "Performance"
4. Haz clic en "Generate report"

**Objetivos:**
- SEO: >90
- Performance: >90
- Accessibility: >90
- Best Practices: >90

### 6. Verificar Sitemap

Visita: `https://tu-dominio.com/sitemap.xml`

**Qué verificar:**
- ✅ Todas las páginas listadas
- ✅ URLs correctas
- ✅ Fechas de modificación
- ✅ Prioridades asignadas

### 7. Verificar Robots.txt

Visita: `https://tu-dominio.com/robots.txt`

**Qué verificar:**
- ✅ Allow: /
- ✅ Disallow: /api/, /private/
- ✅ Sitemap URL correcto

## 🚀 Checklist de Deployment

Antes de hacer deploy a producción:

- [ ] Actualizar Google Verification code en `app/layout.tsx`
- [ ] Verificar que `metadataBase` tenga la URL correcta
- [ ] Verificar todas las URLs en `lib/json-ld.ts`
- [ ] Hacer build local y verificar que no haya errores
- [ ] Probar todas las páginas en navegador
- [ ] Verificar que las imágenes carguen correctamente
- [ ] Validar schemas con Google Rich Results Test
- [ ] Validar Open Graph con Facebook Debugger
- [ ] Validar Twitter Cards con Twitter Validator
- [ ] Ejecutar Lighthouse audit
- [ ] Verificar sitemap.xml
- [ ] Verificar robots.txt

## 📚 Recursos Adicionales

- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

## 💡 Tips y Mejores Prácticas

### 1. Títulos SEO

- **Homepage:** "Nombre - Profesión | Portafolio"
- **Proyectos:** "Nombre del Proyecto | Tu Nombre"
- Mantén títulos entre 50-60 caracteres
- Incluye keywords relevantes

### 2. Descripciones

- Homepage: 150-160 caracteres
- Proyectos: 120-150 caracteres
- Describe claramente el contenido
- Incluye call-to-action cuando sea apropiado

### 3. Imágenes

- Open Graph: 1200x630px (ratio 1.91:1)
- Formato: JPG o PNG
- Peso: < 300KB
- Incluye texto/branding en la imagen

### 4. Keywords

- No hagas keyword stuffing
- Usa keywords naturalmente en el contenido
- Incluye variaciones y sinónimos
- Enfócate en long-tail keywords

### 5. Performance

- Optimiza imágenes antes de subirlas
- Usa formatos modernos (WebP, AVIF)
- Minimiza el uso de JavaScript pesado
- Implementa lazy loading

---

**¿Preguntas?** Consulta la documentación oficial de Next.js o abre un issue en el repositorio.

