# Portfolio Next.js - Miguel Bonifaz

Portfolio profesional construido con Next.js 15, TypeScript, y TailwindCSS 4.

## 🚀 Stack Tecnológico

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** TailwindCSS 4.x
- **Validación:** Zod
- **Iconos:** Lucide React
- **Emails:** Nodemailer
- **Notificaciones:** React Hot Toast
- **Renderizado:** Static Site Generation (SSG)

## 📁 Estructura del Proyecto

```
portfolio-nextjs/
├── app/
│   ├── actions/
│   │   └── contact.ts          # Server Action para formulario
│   ├── projects/[slug]/
│   │   └── page.tsx            # Páginas dinámicas de proyectos
│   ├── layout.tsx              # Layout principal con metadata
│   ├── page.tsx                # Homepage
│   ├── sitemap.ts              # Sitemap dinámico
│   └── robots.ts               # Robots.txt
├── components/
│   ├── sections/               # Secciones de la homepage
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Works.tsx
│   │   ├── Automations.tsx
│   │   └── Contact.tsx
│   ├── projects/               # Componentes de proyectos
│   │   ├── ProjectCard.tsx
│   │   └── ProjectGallery.tsx
│   ├── seo/
│   │   └── JsonLd.tsx          # Componente para JSON-LD schemas
│   └── ui/                     # Componentes UI base
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Button.tsx
├── data/                       # Data layer con TypeScript
│   ├── types.ts                # Tipos TypeScript
│   ├── schemas.ts              # Schemas de validación Zod
│   ├── profile.ts              # Información personal
│   ├── projects.ts             # Datos de proyectos
│   ├── automations.ts          # Agentes de automatización
│   ├── skills.ts               # Skills y experiencia
│   └── index.ts                # Helper functions
├── lib/
│   ├── json-ld.ts              # Generadores de JSON-LD schemas
│   ├── utils.ts                # Utilidades
│   └── constants.ts            # Constantes
├── public/
│   └── assets/
│       └── images/
│           └── projects/       # Imágenes de proyectos
└── docs/                       # Documentación completa
    ├── README.md
    ├── SEO-IMPLEMENTATION.md
    ├── SEO-GUIDE.md
    ├── SEO-EXAMPLES.md
    ├── CONTACT-FORM.md
    └── TESTING-CHECKLIST.md
```

## 🛠️ Instalación y Setup

### Requisitos Previos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd portfolio-nextjs

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.local.example .env.local
# Editar .env.local con tus credenciales
```

### Variables de Entorno

Crea un archivo `.env.local` con las siguientes variables:

```bash
# Mailtrap Configuration (Desarrollo)
MAILTRAP_HOST=sandbox.smtp.mailtrap.io
MAILTRAP_PORT=2525
MAILTRAP_USER=tu_usuario_mailtrap
MAILTRAP_PASS=tu_password_mailtrap

# Email Configuration
MAILTRAP_FROM=portfolio@miguelbonifaz.dev
CONTACT_EMAIL=miguelbonifaz126@gmail.com
```

**Para obtener credenciales de Mailtrap:**
1. Ir a [https://mailtrap.io/](https://mailtrap.io/)
2. Crear cuenta gratuita
3. Ir a "Email Testing" → "Inboxes"
4. Copiar credenciales SMTP

## 🚀 Comandos

```bash
# Desarrollo
npm run dev          # Inicia servidor en http://localhost:3000

# Producción
npm run build        # Crea build optimizado
npm run start        # Ejecuta build de producción

# Linting
npm run lint         # Ejecuta ESLint
```

## 📝 Actualizar Contenido

### Agregar un Nuevo Proyecto

1. Edita `/data/projects.ts`:

```typescript
{
  id: '6',
  slug: 'nuevo-proyecto',
  title: 'Nuevo Proyecto',
  shortDescription: 'Descripción corta para SEO',
  longDescription: 'Descripción completa del proyecto...',
  year: 2025,
  category: 'Web Application',
  technologies: ['Laravel', 'Vue.js', 'TailwindCSS'],
  featured: true,
  images: {
    thumbnail: '/assets/images/projects/nuevo-proyecto-thumb.png',
    hero: '/assets/images/projects/nuevo-proyecto-hero.png',
    gallery: [],
  },
  links: {
    github: 'https://github.com/...',
    live: 'https://...',
  },
}
```

2. Añade las imágenes a `/public/assets/images/projects/`

3. Rebuild:

```bash
npm run build
```

**Eso es todo.** El proyecto automáticamente:
- ✅ Aparece en el sitemap
- ✅ Tiene su propia página con metadata
- ✅ Tiene JSON-LD schemas generados
- ✅ Tiene Open Graph y Twitter Cards

### Actualizar Información Personal

Edita `/data/profile.ts`:

```typescript
const profileData: Profile = {
  name: 'Tu Nombre',
  title: 'Tu Título',
  bio: 'Tu biografía...',
  email: 'tu@email.com',
  phone: '+1234567890',
  location: 'Tu Ubicación',
  image: '/assets/images/profile.jpg',
  availability: true,
  socials: [
    // ... tus redes sociales
  ],
}
```

### Actualizar Skills y Experiencia

Edita `/data/skills.ts`:

```typescript
export const experience: Experience[] = [
  {
    id: '1',
    company: 'Empresa',
    position: 'Cargo',
    period: '2020 - Presente',
    description: 'Descripción...',
  },
]

export const skills: Skill[] = [
  {
    id: '1',
    name: 'Laravel',
    category: 'Backend',
  },
]
```

## 🎨 Características

### SEO Optimizado

- ✅ Metadata API de Next.js 15
- ✅ Canonical URLs en todas las páginas
- ✅ Open Graph completo para social media
- ✅ Twitter Cards configuradas
- ✅ Sitemap XML dinámico (`/sitemap.xml`)
- ✅ Robots.txt configurado (`/robots.txt`)
- ✅ JSON-LD Schemas (Person, WebSite, Article, Breadcrumb)

### Performance

- ✅ Static Site Generation (SSG)
- ✅ Optimización automática de imágenes (AVIF/WebP)
- ✅ Lazy loading de imágenes
- ✅ Code splitting por ruta
- ✅ Lighthouse score > 90

### Formulario de Contacto

- ✅ Server Actions de Next.js 15
- ✅ Validación con Zod
- ✅ Rate limiting (5 mensajes/hora)
- ✅ Envío de emails con Nodemailer
- ✅ Templates HTML profesionales
- ✅ Auto-reply al remitente
- ✅ Toast notifications
- ✅ Estados de loading

### Type Safety

- ✅ TypeScript en todo el proyecto
- ✅ Validación con Zod en runtime
- ✅ Type-safe data layer
- ✅ No any types

## 📚 Documentación

La documentación completa está en la carpeta `/docs`:

- **[README.md](./docs/README.md)** - Índice de documentación
- **[SEO-IMPLEMENTATION.md](./docs/SEO-IMPLEMENTATION.md)** - Implementación técnica de SEO
- **[SEO-GUIDE.md](./docs/SEO-GUIDE.md)** - Guía de uso y mantenimiento
- **[SEO-EXAMPLES.md](./docs/SEO-EXAMPLES.md)** - Ejemplos visuales
- **[CONTACT-FORM.md](./docs/CONTACT-FORM.md)** - Documentación del formulario
- **[TESTING-CHECKLIST.md](./docs/TESTING-CHECKLIST.md)** - Checklist de testing

## 🧪 Testing

### Testing Local

```bash
# Iniciar servidor de desarrollo
npm run dev

# Abrir en navegador
http://localhost:3000
```

Seguir el checklist completo en [TESTING-CHECKLIST.md](./docs/TESTING-CHECKLIST.md)

### Build de Producción

```bash
# Crear build
npm run build

# Verificar output
# Debe mostrar todas las rutas generadas sin errores

# Probar build localmente
npm run start
```

### Lighthouse Audit

1. Abrir Chrome DevTools (F12)
2. Ir a pestaña "Lighthouse"
3. Seleccionar todas las categorías
4. Click "Analyze page load"

**Objetivos:**
- Performance: >90
- Accessibility: >90
- Best Practices: >90
- SEO: 100

## 🚢 Deployment

### Vercel (Recomendado)

1. Push tu código a GitHub
2. Ir a [vercel.com](https://vercel.com)
3. Importar repositorio
4. Configurar variables de entorno
5. Deploy

### Netlify

1. Push tu código a GitHub
2. Ir a [netlify.com](https://netlify.com)
3. Importar repositorio
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Configurar variables de entorno
7. Deploy

### Static Export (Opcional)

Para generar HTML estático puro:

1. Descomentar en `next.config.ts`:
```typescript
output: 'export'
```

2. Build:
```bash
npm run build
```

3. Deploy la carpeta `out/` a cualquier hosting estático

## 🔧 Configuración Adicional

### Cambiar URL del Sitio

1. Actualizar `metadataBase` en `app/layout.tsx`:
```typescript
metadataBase: new URL("https://tu-dominio.com")
```

2. Actualizar URLs en `lib/json-ld.ts`:
```typescript
// Buscar y reemplazar:
'https://miguelbonifaz.dev'
// Por:
'https://tu-dominio.com'
```

### Cambiar Servicio de Email (Producción)

Para producción, reemplazar Mailtrap con un servicio real:

**Opción 1: Resend (Recomendado)**
```bash
npm install resend
```

**Opción 2: SendGrid**
```bash
npm install @sendgrid/mail
```

Ver [CONTACT-FORM.md](./docs/CONTACT-FORM.md) para más detalles.

## 🐛 Troubleshooting

### Build Errors

**Error: "Cannot find module"**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error: "Type error"**
- Verificar tipos en TypeScript
- Ejecutar: `npx tsc --noEmit`

### Runtime Errors

**Formulario no envía:**
- Verificar variables de entorno en `.env.local`
- Verificar credenciales de Mailtrap
- Revisar console para errores

**Imágenes no cargan:**
- Verificar que estén en `/public/`
- Verificar rutas en datos
- Usar rutas relativas desde `/public`

## 📊 Performance

### Resultados de Build

```
Route (app)
┌ ○ /                           (Static)
├ ○ /_not-found                 (Static)
├ ● /projects/[slug]            (SSG)
│ ├ /projects/bonifaz-peluqueros
│ ├ /projects/exchange
│ ├ /projects/segob
│ ├ /projects/sonata
│ └ /projects/beaubella
├ ○ /robots.txt                 (Static)
└ ○ /sitemap.xml                (Static)

✓ 11 páginas generadas
✓ Build time: ~5s
```

### Lighthouse Scores

- **Performance:** 95+
- **Accessibility:** 98+
- **Best Practices:** 100
- **SEO:** 100

## 🤝 Contribuir

Este es un proyecto personal, pero si encuentras bugs o tienes sugerencias:

1. Abre un issue
2. Describe el problema o sugerencia
3. Incluye screenshots si es relevante

## 📄 Licencia

© 2025 Miguel Bonifaz. Todos los derechos reservados.

## 📞 Contacto

- **Email:** miguelbonifaz126@gmail.com
- **LinkedIn:** [linkedin.com/in/miguelbonifaz126](https://www.linkedin.com/in/miguelbonifaz126/)
- **Twitter:** [@MBonifaz126](https://x.com/MBonifaz126)
- **WhatsApp:** [+593 968 204 300](https://wa.me/593968204300)

---

**Construido con ❤️ usando Next.js 15**

**Última actualización:** Diciembre 2025
