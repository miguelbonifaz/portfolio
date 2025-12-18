# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 15 portfolio website built with TypeScript, App Router, TailwindCSS 4, and Static Site Generation (SSG). Focused on SEO optimization, type safety, and performance.

## Commands

### Development
```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build (verifies all routes generate correctly)
npm run start        # Run production build locally
npm run lint         # ESLint
```

### Type Checking
```bash
npx tsc --noEmit     # Verify TypeScript types without build
```

## Architecture

### Data-Driven Content System

**All content lives in `/data` directory** as TypeScript objects, not in components:
- `data/types.ts` - TypeScript interfaces for all content types
- `data/schemas.ts` - Zod validation schemas
- `data/profile.ts` - Personal information, bio, social links
- `data/projects.ts` - Project definitions (generates pages automatically)
- `data/automations.ts` - Automation/agent information
- `data/skills.ts` - Skills and experience data
- `data/index.ts` - Helper functions

**Key principle:** Components are presentational; data files are the single source of truth.

### Static Site Generation (SSG)

Next.js 15 App Router with SSG for all pages:
- Homepage: pre-rendered at build time
- Project pages: dynamically generated via `generateStaticParams()` in `app/projects/[slug]/page.tsx`
- SEO pages: `sitemap.ts` and `robots.ts` auto-generate from data

**When adding projects:** Simply add to `data/projects.ts` and the build automatically creates the route, sitemap entry, and metadata.

### SEO Architecture

**Metadata Layer:**
- Root metadata in `app/layout.tsx` sets base URL, site-wide defaults
- Page-level metadata via Next.js `generateMetadata()` for canonical URLs, Open Graph, Twitter Cards
- `lib/json-ld.ts` generates JSON-LD schemas (Person, WebSite, Article, Breadcrumb)
- `components/seo/JsonLd.tsx` renders structured data

**URL Structure:**
- Base URL: `https://miguelbonifaz.com` (set in `metadataBase`)
- Projects: `/projects/[slug]`
- All URLs must update in two places when changing domain:
  1. `app/layout.tsx` - `metadataBase`
  2. `lib/json-ld.ts` - hardcoded URLs in schema generators

### Type Safety

**Three layers of validation:**
1. TypeScript interfaces in `data/types.ts`
2. Zod schemas in `data/schemas.ts` for runtime validation (contact form)
3. Type-safe data exports from `/data` files

**No `any` types allowed.** All data flows through typed interfaces.

### Component Organization

```
components/
├── sections/        # Homepage sections (Hero, About, Works, Contact)
├── projects/        # Project-specific components (Card, Gallery)
├── seo/            # SEO components (JsonLd)
└── ui/             # Reusable UI components (Header, Footer, Button)
```

### Server Actions

Contact form uses Next.js Server Actions (`app/actions/contact.ts`):
- Zod validation on server
- Rate limiting (5 messages/hour per email, in-memory)
- Nodemailer for email (Mailtrap in dev, configurable for production)
- HTML email templates embedded in action
- Auto-reply to sender

**Environment variables required:**
```
MAILTRAP_HOST, MAILTRAP_PORT, MAILTRAP_USER, MAILTRAP_PASS
MAILTRAP_FROM, CONTACT_EMAIL
```

### Image Optimization

Next.js Image component configured in `next.config.ts`:
- Formats: AVIF, WebP
- Responsive sizes: 640px to 3840px
- All project images in `/public/assets/images/projects/`
- Paths referenced from `/public` root in data files

### Font Configuration

Google Fonts loaded via `next/font/google` in `app/layout.tsx`:
- `Space_Mono` (400, 700) - `--font-space-mono`
- `Playfair_Display` (400, 700, 900) - `--font-playfair`

CSS variables used throughout with TailwindCSS 4.

## Adding New Content

### New Project

1. Add project object to `data/projects.ts` with all required fields
2. Add images to `/public/assets/images/projects/`
3. Run `npm run build` - page auto-generates
4. Verify at `/projects/[slug]`

No other steps needed. Sitemap, metadata, and JSON-LD auto-generate.

### Update Profile Info

Edit `data/profile.ts`. Changes reflect site-wide (Hero, About, Contact, SEO schemas).

### Update Skills/Experience

Edit `data/skills.ts`.

## Important Patterns

### Canonical URLs
Always relative in metadata (e.g., `/projects/foo`), combined with `metadataBase` by Next.js.

### Path Aliases
`@/*` maps to project root via `tsconfig.json`.

### Static Export
To export as pure static HTML, uncomment `output: 'export'` in `next.config.ts`. Disables Server Actions.

### Rate Limiting
Current implementation is in-memory (resets on server restart). For production, use Redis/database.

### Email Service
Development uses Mailtrap. For production, replace with Resend, SendGrid, or similar in `app/actions/contact.ts`.

## Common Issues

**Build fails with type errors:** Run `npx tsc --noEmit` to see all TypeScript issues.

**Images not loading:** Verify paths start from `/assets` (relative to `/public` root).

**Contact form not sending:** Check `.env.local` has all Mailtrap variables.

**Domain change:** Update both `app/layout.tsx` (`metadataBase`) and `lib/json-ld.ts` (hardcoded URLs).
