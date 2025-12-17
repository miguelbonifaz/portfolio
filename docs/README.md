# Documentación del Portfolio

Bienvenido a la documentación completa del portfolio Next.js.

## 📚 Índice de Documentación

### SEO y Optimización

1. **[SEO-IMPLEMENTATION.md](./SEO-IMPLEMENTATION.md)**
   - Resumen técnico de todas las implementaciones de SEO
   - Configuraciones realizadas
   - Resultados del build
   - Checklist de verificación

2. **[SEO-GUIDE.md](./SEO-GUIDE.md)**
   - Guía completa de cómo funciona el SEO
   - Cómo actualizar contenido manteniendo el SEO
   - Testing y validación
   - Mejores prácticas

3. **[SEO-EXAMPLES.md](./SEO-EXAMPLES.md)**
   - Ejemplos visuales de cómo se ven los resultados
   - Previews en Google, Facebook, Twitter
   - Ejemplos de schemas JSON-LD
   - Lighthouse reports esperados

## 🚀 Quick Start

### Para Desarrolladores

Si eres nuevo en el proyecto:

1. Lee [SEO-IMPLEMENTATION.md](./SEO-IMPLEMENTATION.md) para entender qué se implementó
2. Revisa [SEO-GUIDE.md](./SEO-GUIDE.md) para aprender a mantener el SEO

### Para Crear Contenido

Si solo necesitas actualizar contenido:

1. Lee la sección "Cómo Actualizar Contenido" en [SEO-GUIDE.md](./SEO-GUIDE.md)
2. Sigue el checklist de deployment antes de publicar

## 📖 Estructura del Proyecto

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx              # Metadata global + WebSite schema
│   ├── page.tsx                # Homepage + Person schema
│   ├── projects/[slug]/
│   │   └── page.tsx            # Metadata dinámico + Article schema
│   ├── sitemap.ts              # Sitemap XML dinámico
│   └── robots.ts               # Robots.txt
├── components/
│   ├── seo/
│   │   └── JsonLd.tsx          # Componente para JSON-LD
│   ├── sections/               # Secciones de la homepage
│   ├── projects/               # Componentes de proyectos
│   └── ui/                     # Componentes UI base
├── data/
│   ├── types.ts                # TypeScript types
│   ├── schemas.ts              # Zod validation schemas
│   ├── profile.ts              # Información personal
│   ├── projects.ts             # Datos de proyectos
│   ├── automations.ts          # Agentes de automatización
│   ├── skills.ts               # Skills y experiencia
│   └── index.ts                # Helper functions
├── lib/
│   ├── json-ld.ts              # Funciones para generar schemas
│   ├── utils.ts                # Utilidades generales
│   └── constants.ts            # Constantes
├── public/
│   └── assets/
│       └── images/
│           └── projects/       # Imágenes de proyectos
└── docs/                       # Esta carpeta
    ├── README.md               # Este archivo
    ├── SEO-IMPLEMENTATION.md   # Implementación técnica
    ├── SEO-GUIDE.md            # Guía de uso
    └── SEO-EXAMPLES.md         # Ejemplos visuales
```

## 🎯 Características Principales

### SEO Técnico
- ✅ Metadata API de Next.js 15
- ✅ Canonical URLs
- ✅ Open Graph completo
- ✅ Twitter Cards
- ✅ Sitemap XML dinámico
- ✅ Robots.txt configurado

### Rich Results
- ✅ Person Schema (Homepage)
- ✅ WebSite Schema (Global)
- ✅ Article Schema (Proyectos)
- ✅ Breadcrumb Schema (Proyectos)

### Performance
- ✅ Static Site Generation (SSG)
- ✅ Optimización de imágenes (AVIF/WebP)
- ✅ Lazy loading automático
- ✅ Code splitting por ruta

### Type Safety
- ✅ TypeScript en todo el proyecto
- ✅ Validación con Zod
- ✅ Type-safe data layer

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Ejecutar build localmente
npm run start

# Linting
npm run lint

# Type checking
npx tsc --noEmit
```

## 📝 Tareas Comunes

### Agregar un Nuevo Proyecto

1. Edita `/data/projects.ts`
2. Añade las imágenes a `/public/assets/images/projects/`
3. Rebuild: `npm run build`

Ver detalles en [SEO-GUIDE.md](./SEO-GUIDE.md#agregar-un-nuevo-proyecto)

### Actualizar Información Personal

1. Edita `/data/profile.ts`
2. Rebuild: `npm run build`

Ver detalles en [SEO-GUIDE.md](./SEO-GUIDE.md#actualizar-información-personal)

### Validar SEO

1. Build local: `npm run build && npm run start`
2. Google Rich Results Test
3. Facebook Sharing Debugger
4. Twitter Card Validator
5. Lighthouse Audit

Ver detalles en [SEO-GUIDE.md](./SEO-GUIDE.md#testing-y-validación)

## 🐛 Troubleshooting

### Build Errors

**Error: Invalid metadata**
- Verifica que todos los campos requeridos estén presentes
- Revisa que las URLs sean válidas
- Asegúrate de que las imágenes existan

**Error: Zod validation failed**
- Revisa los datos en `/data/`
- Verifica que cumplan con los schemas en `/data/schemas.ts`
- Revisa la consola para ver qué campo falló

### SEO Issues

**Sitemap no se genera**
- Verifica que `getAllProjects()` retorne datos
- Revisa que no haya errores en `app/sitemap.ts`
- Rebuild el proyecto

**Schemas no aparecen en Google**
- Usa Google Rich Results Test para validar
- Verifica que los schemas estén en el HTML
- Espera 24-48 horas para indexación

**Imágenes no se optimizan**
- Verifica que estén en `/public/`
- Usa el componente `next/image`
- Especifica `width` y `height`

## 📚 Recursos Adicionales

### Documentación Oficial
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)

### SEO
- [Schema.org](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

### Herramientas
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Google Search Console](https://search.google.com/search-console)

## 🤝 Contribuir

Si encuentras errores o tienes sugerencias:

1. Documenta el problema
2. Propón una solución
3. Actualiza la documentación si es necesario

## 📄 Licencia

Este proyecto es privado y confidencial.

---

**Última actualización:** 16 de diciembre, 2025
**Versión Next.js:** 16.0.10
**Fase completada:** Fase 5 - SEO y Optimizaciones ✅

