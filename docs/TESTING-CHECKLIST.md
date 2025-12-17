# Testing Checklist - Portfolio Next.js

Esta es una guía completa para probar el portfolio antes del deployment.

## 📋 Pre-Testing Setup

### 1. Configurar Variables de Entorno

```bash
# Copiar archivo de ejemplo
cp .env.local.example .env.local

# Editar con tus credenciales
nano .env.local
```

Variables necesarias:
- `MAILTRAP_HOST`
- `MAILTRAP_PORT`
- `MAILTRAP_USER`
- `MAILTRAP_PASS`
- `MAILTRAP_FROM`
- `CONTACT_EMAIL`

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Iniciar Servidor de Desarrollo

```bash
npm run dev
```

Abrir: http://localhost:3000

---

## ✅ Testing Checklist

### 1. Navegación y Páginas

#### Homepage (/)
- [ ] La página carga sin errores
- [ ] Header sticky funciona al hacer scroll
- [ ] Clock en el header muestra la hora correcta
- [ ] Badge "Disponible para Trabajar" es visible
- [ ] Hero section muestra imagen de perfil
- [ ] Links a redes sociales funcionan
- [ ] About section muestra experiencia y skills
- [ ] Works section muestra todos los proyectos (5)
- [ ] Automations section muestra agentes (2)
- [ ] Contact section muestra formulario
- [ ] Footer muestra copyright y links

#### Navegación entre Secciones
- [ ] Click en "About" → scroll a #about
- [ ] Click en "Works" → scroll a #works
- [ ] Click en "Automations" → scroll a #automations
- [ ] Click en "Contact" → scroll a #contact
- [ ] Scroll suave (smooth scroll) funciona

#### Páginas de Proyectos
- [ ] `/projects/bonifaz-peluqueros` carga correctamente
- [ ] `/projects/exchange` carga correctamente
- [ ] `/projects/segob` carga correctamente
- [ ] `/projects/sonata` carga correctamente
- [ ] `/projects/beaubella` carga correctamente

Para cada página de proyecto verificar:
- [ ] Hero image carga y tiene efecto grayscale
- [ ] Título y metadata correctos
- [ ] Información del proyecto (año, categoría, stack)
- [ ] Descripción completa visible
- [ ] Galería de imágenes (si aplica)
- [ ] Links externos funcionan (GitHub/Demo/Live)
- [ ] Navegación anterior/siguiente funciona
- [ ] Breadcrumbs visibles
- [ ] Botón "Volver a Trabajos" funciona
- [ ] CTA de contacto al final

#### Página 404
- [ ] Ir a `/ruta-inexistente`
- [ ] Muestra página 404 personalizada
- [ ] Link para volver al inicio funciona

---

### 2. Imágenes y Assets

#### Optimización de Imágenes
- [ ] Todas las imágenes cargan correctamente
- [ ] Imágenes usan next/image
- [ ] Lazy loading funciona (imágenes cargan al hacer scroll)
- [ ] Efecto blur placeholder visible (si configurado)
- [ ] Formato WebP/AVIF se sirve en navegadores compatibles

#### Verificar en DevTools
1. Abrir Chrome DevTools → Network tab
2. Filtrar por "Img"
3. Recargar página
4. Verificar:
   - [ ] Imágenes se sirven en formato moderno (webp/avif)
   - [ ] Tamaños apropiados para el viewport
   - [ ] No hay imágenes 404

#### Imágenes Específicas
- [ ] Profile image en Hero
- [ ] Thumbnails de proyectos en Works section
- [ ] Hero images en páginas de proyectos
- [ ] Gallery images en proyectos (si aplica)
- [ ] OG image para social sharing

---

### 3. Formulario de Contacto

#### Validación de Campos

**Campo Nombre:**
- [ ] Dejar vacío → Error: "El nombre debe tener al menos 2 caracteres"
- [ ] Escribir "A" → Error visible
- [ ] Escribir "Juan" → Sin error

**Campo Email:**
- [ ] Dejar vacío → Error: "Email inválido"
- [ ] Escribir "test" → Error visible
- [ ] Escribir "test@" → Error visible
- [ ] Escribir "test@example.com" → Sin error

**Campo Mensaje:**
- [ ] Dejar vacío → Error: "El mensaje debe tener al menos 10 caracteres"
- [ ] Escribir "Hola" → Error visible
- [ ] Escribir "Hola, me interesa tu trabajo" → Sin error

#### Flujo Completo

**Envío Exitoso:**
1. [ ] Llenar todos los campos correctamente
2. [ ] Click en "Enviar Mensaje"
3. [ ] Botón muestra "Enviando..." con spinner
4. [ ] Botón está deshabilitado durante envío
5. [ ] Toast success aparece: "¡Mensaje enviado exitosamente!"
6. [ ] Formulario se resetea automáticamente
7. [ ] Verificar en Mailtrap inbox:
   - [ ] Email principal recibido con datos correctos
   - [ ] Auto-reply enviado al remitente

**Rate Limiting:**
1. [ ] Enviar 5 mensajes con el mismo email
2. [ ] Intentar enviar el 6to mensaje
3. [ ] Toast error: "Has enviado demasiados mensajes..."
4. [ ] Esperar 1 hora o reiniciar servidor

**Error de Envío:**
1. [ ] Detener servidor de desarrollo
2. [ ] Intentar enviar formulario
3. [ ] Toast error: "Hubo un error al enviar el mensaje..."

---

### 4. Responsive Design

#### Mobile (375px)
```bash
# En Chrome DevTools
1. F12 → Toggle device toolbar (Ctrl+Shift+M)
2. Seleccionar "iPhone SE" o custom 375px
```

Verificar:
- [ ] Header se adapta correctamente
- [ ] Menú de navegación legible
- [ ] Hero section stack vertical
- [ ] Imagen de perfil tamaño apropiado
- [ ] About section legible
- [ ] Projects grid en 1 columna
- [ ] Project cards legibles
- [ ] Formulario de contacto en 1 columna
- [ ] Footer legible
- [ ] No hay scroll horizontal
- [ ] Touch targets suficientemente grandes (min 44px)

**Páginas de Proyecto:**
- [ ] Hero image responsive
- [ ] Sidebar info stack vertical
- [ ] Descripción legible
- [ ] Gallery responsive
- [ ] Navegación anterior/siguiente legible

#### Tablet (768px)
```bash
# En Chrome DevTools
Seleccionar "iPad Mini" o custom 768px
```

Verificar:
- [ ] Layout se adapta a tablet
- [ ] Projects grid en 2 columnas
- [ ] Formulario usa 2 columnas
- [ ] Sidebar en páginas de proyecto funciona
- [ ] Navegación apropiada

#### Desktop (1440px)
```bash
# En Chrome DevTools
Seleccionar "Laptop L" o custom 1440px
```

Verificar:
- [ ] Layout completo visible
- [ ] Max-width containers centrados
- [ ] Projects grid en 3 columnas
- [ ] Sidebar sticky funciona
- [ ] Espaciado apropiado
- [ ] No hay elementos cortados

#### Breakpoints Críticos
Probar en:
- [ ] 320px (móviles pequeños)
- [ ] 375px (iPhone SE)
- [ ] 390px (iPhone 12/13/14)
- [ ] 768px (iPad)
- [ ] 1024px (iPad Pro)
- [ ] 1280px (Laptop)
- [ ] 1440px (Desktop)
- [ ] 1920px (Full HD)

---

### 5. Links y Navegación Externa

#### Links en Header
- [ ] Logo → Vuelve a homepage
- [ ] About → Scroll a #about
- [ ] Works → Scroll a #works
- [ ] Automations → Scroll a #automations
- [ ] Contact → Scroll a #contact

#### Links en Hero Section
- [ ] LinkedIn → Abre en nueva pestaña
- [ ] Twitter/X → Abre en nueva pestaña
- [ ] GitHub → Abre en nueva pestaña (si aplica)

#### Links en Works Section
- [ ] Cada project card → Va a página de detalle
- [ ] Hover effects funcionan

#### Links en Contact Section
- [ ] LinkedIn → https://www.linkedin.com/in/miguelbonifaz126/
- [ ] X (Twitter) → https://x.com/MBonifaz126
- [ ] WhatsApp → https://wa.me/593968204300
- [ ] Email → miguelbonifaz126@gmail.com

#### Links en Páginas de Proyecto
- [ ] GitHub link (si aplica) → Abre en nueva pestaña
- [ ] Live site link (si aplica) → Abre en nueva pestaña
- [ ] Demo link (si aplica) → Abre en nueva pestaña
- [ ] "Volver a Trabajos" → Vuelve a homepage #works
- [ ] "Contáctame" CTA → Va a homepage #contact

#### Links en Footer
- [ ] Todos los links funcionan
- [ ] Se abren en nueva pestaña cuando corresponde

---

### 6. Build de Producción

#### Ejecutar Build

```bash
npm run build
```

Verificar:
- [ ] Build completa sin errores
- [ ] No hay errores de TypeScript
- [ ] No hay warnings críticos
- [ ] Todas las páginas se generan correctamente

**Output esperado:**
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
```

#### Probar Build Localmente

```bash
npm run start
```

Abrir: http://localhost:3000

Repetir todos los tests anteriores en modo producción:
- [ ] Navegación funciona
- [ ] Imágenes cargan
- [ ] Formulario funciona
- [ ] Responsive design correcto
- [ ] Links externos funcionan

---

### 7. Performance y Lighthouse

#### Ejecutar Lighthouse Audit

1. Abrir Chrome
2. Ir a http://localhost:3000
3. F12 → Lighthouse tab
4. Configuración:
   - Mode: Navigation
   - Device: Mobile y Desktop
   - Categories: Performance, Accessibility, Best Practices, SEO
5. Click "Analyze page load"

#### Objetivos (Mobile)
- [ ] Performance: >90
- [ ] Accessibility: >90
- [ ] Best Practices: >90
- [ ] SEO: 100

#### Objetivos (Desktop)
- [ ] Performance: >95
- [ ] Accessibility: >95
- [ ] Best Practices: >95
- [ ] SEO: 100

#### Core Web Vitals

**LCP (Largest Contentful Paint):**
- [ ] < 2.5s (Good)
- [ ] Verificar que imagen hero carga rápido

**FID (First Input Delay):**
- [ ] < 100ms (Good)
- [ ] Interacciones responden rápido

**CLS (Cumulative Layout Shift):**
- [ ] < 0.1 (Good)
- [ ] No hay saltos de layout al cargar

#### Bundle Size

```bash
npm run build
```

Verificar en output:
- [ ] First Load JS < 200KB (ideal)
- [ ] Cada ruta tiene bundle razonable
- [ ] No hay chunks excesivamente grandes

---

### 8. SEO y Metadata

#### Verificar Metadata en Páginas

**Homepage:**
1. Click derecho → Ver código fuente
2. Verificar:
   - [ ] `<title>` correcto
   - [ ] `<meta name="description">` presente
   - [ ] `<meta property="og:*">` tags presentes
   - [ ] `<meta name="twitter:*">` tags presentes
   - [ ] `<link rel="canonical">` presente
   - [ ] JSON-LD Person schema presente
   - [ ] JSON-LD WebSite schema presente

**Páginas de Proyecto:**
1. Ir a cualquier proyecto
2. Ver código fuente
3. Verificar:
   - [ ] `<title>` incluye nombre del proyecto
   - [ ] `<meta name="description">` específica del proyecto
   - [ ] `og:image` usa imagen del proyecto
   - [ ] JSON-LD Article schema presente
   - [ ] JSON-LD Breadcrumb schema presente

#### Sitemap y Robots

**Sitemap:**
- [ ] Visitar http://localhost:3000/sitemap.xml
- [ ] XML válido
- [ ] Todas las páginas listadas
- [ ] URLs correctas
- [ ] Prioridades asignadas

**Robots:**
- [ ] Visitar http://localhost:3000/robots.txt
- [ ] Configuración correcta
- [ ] Sitemap URL presente

#### Herramientas Externas

**Google Rich Results Test:**
1. Ir a https://search.google.com/test/rich-results
2. Ingresar URL (necesita estar en producción)
3. Verificar schemas válidos

**Facebook Sharing Debugger:**
1. Ir a https://developers.facebook.com/tools/debug/
2. Ingresar URL
3. Verificar preview correcto

**Twitter Card Validator:**
1. Ir a https://cards-dev.twitter.com/validator
2. Ingresar URL
3. Verificar card preview

---

### 9. Funcionalidad JavaScript

#### Interacciones
- [ ] Smooth scroll funciona
- [ ] Hover effects en botones
- [ ] Hover effects en project cards
- [ ] Hover effects en links
- [ ] Click events responden
- [ ] Form submission funciona
- [ ] Toast notifications aparecen

#### Estados
- [ ] Loading states visibles
- [ ] Error states visibles
- [ ] Success states visibles
- [ ] Disabled states funcionan

#### Console Errors
1. Abrir DevTools → Console
2. Navegar por todo el sitio
3. Verificar:
   - [ ] No hay errores en console
   - [ ] No hay warnings críticos
   - [ ] No hay 404s de recursos

---

### 10. Accesibilidad

#### Keyboard Navigation
- [ ] Tab navega por todos los elementos interactivos
- [ ] Enter activa links y botones
- [ ] Escape cierra modals (si aplica)
- [ ] Focus visible en todos los elementos

#### Screen Reader
- [ ] Todos los links tienen texto descriptivo
- [ ] Imágenes tienen alt text
- [ ] Formulario tiene labels asociados
- [ ] Headings en orden jerárquico (h1, h2, h3)

#### Color Contrast
- [ ] Texto legible sobre fondos
- [ ] Ratio de contraste > 4.5:1 para texto normal
- [ ] Ratio de contraste > 3:1 para texto grande

#### ARIA
- [ ] Elementos interactivos tienen roles apropiados
- [ ] Estados comunicados correctamente
- [ ] Landmarks semánticos usados

---

## 🐛 Issues Comunes y Soluciones

### Build Errors

**Error: "Cannot find module"**
```bash
npm install
npm run build
```

**Error: "Type error in..."**
- Revisar tipos en TypeScript
- Verificar imports

### Runtime Errors

**Error: "Hydration failed"**
- Verificar que no haya HTML inválido
- Verificar que client/server rendering coincidan

**Error: "Failed to fetch"**
- Verificar variables de entorno
- Verificar que servidor esté corriendo

### Performance Issues

**LCP alto:**
- Optimizar imagen hero
- Añadir priority a imagen principal
- Preload recursos críticos

**CLS alto:**
- Especificar width/height en imágenes
- Reservar espacio para contenido dinámico

---

## 📊 Reporte de Testing

Después de completar todos los tests, documentar:

### Resultados

```
✅ Navegación: OK
✅ Imágenes: OK
✅ Formulario: OK
✅ Responsive: OK
✅ Links: OK
✅ Build: OK
✅ Lighthouse: 
   - Performance: 95
   - Accessibility: 98
   - Best Practices: 100
   - SEO: 100
✅ SEO: OK
✅ JavaScript: OK
✅ Accesibilidad: OK
```

### Issues Encontrados

| Issue | Severidad | Status | Notas |
|-------|-----------|--------|-------|
| Ejemplo | Low | Fixed | Descripción |

---

## ✅ Checklist Final Pre-Deployment

- [ ] Todos los tests pasaron
- [ ] Build de producción exitoso
- [ ] Lighthouse scores > 90
- [ ] No hay console errors
- [ ] Variables de entorno documentadas
- [ ] README actualizado
- [ ] Commits limpios
- [ ] Código reviewed

---

**Fecha de testing:** _______________
**Testeado por:** _______________
**Status:** ✅ Listo para deployment / ⚠️ Requiere fixes

---

## 📚 Recursos

- [Next.js Testing](https://nextjs.org/docs/app/building-your-application/testing)
- [Lighthouse Documentation](https://developer.chrome.com/docs/lighthouse/)
- [Web Vitals](https://web.dev/vitals/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

