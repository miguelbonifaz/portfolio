# Project Context: Portfolio - Miguel Bonifaz

## Project Overview

This is a professional portfolio website built with **Next.js 16 (App Router)**, **TypeScript**, and **TailwindCSS 4**. The project utilizes a **data-driven architecture** where content is separated from presentation, allowing for easy updates and automatic page generation. It features **Static Site Generation (SSG)** for performance and comprehensive **SEO** optimization including JSON-LD structured data.

### Tech Stack
*   **Framework:** Next.js 16.0.10 (App Router)
*   **Language:** TypeScript 5.9
*   **Styling:** TailwindCSS 4, PostCSS
*   **Validation:** Zod
*   **Forms:** React Hook Form + Server Actions
*   **Email:** Nodemailer (Mailtrap for dev)
*   **Icons:** Lucide React

## Building and Running

The project uses `npm` for dependency management and script execution.

### Key Commands
*   **Install Dependencies:** `npm install`
*   **Start Development Server:** `npm run dev`
*   **Production Build:** `npm run build` (Generates SSG pages and optimizes assets)
*   **Run Production Build:** `npm run start` (Preview the built site locally)
*   **Lint Code:** `npm run lint` (ESLint)
*   **Type Check:** `npx tsc --noEmit` (Run TypeScript compiler without emitting files)

## Development Conventions

### 1. Data-Driven Architecture
Content is **strictly separated** from components. Do not hardcode content in TSX files.
*   **Source of Truth:** All content resides in the `/data` directory.
*   **Key Files:**
    *   `data/projects.ts`: Defines projects. Adding an entry here **automatically generates** the project page (`/projects/[slug]`), sitemap entry, and SEO metadata.
    *   `data/profile.ts`: Personal info (bio, social links).
    *   `data/skills.ts`: Technical skills and experience.
    *   `data/automations.ts`: Automation services info.
    *   `data/types.ts` & `data/schemas.ts`: TypeScript interfaces and Zod schemas for strict data validation.

### 2. Component Structure
*   `components/sections/`: Landing page sections (Hero, About, Works, Contact).
*   `components/projects/`: Components specific to project detail pages (ProjectCard, ProjectGallery).
*   `components/ui/`: Reusable UI atoms (Header, Footer, specialized buttons).
*   `components/seo/`: SEO-specific components (JsonLd).

### 3. SEO & Metadata
*   **Global:** Base metadata and font loading in `app/layout.tsx`.
*   **Dynamic:** `generateMetadata` used in `app/projects/[slug]/page.tsx` for project-specific SEO.
*   **Structured Data:** `lib/json-ld.ts` generates JSON-LD schemas (Person, WebSite, Article). `JsonLd.tsx` renders them.
*   **Base URL:** Configured via `metadataBase` in `layout.tsx`. Must be updated for production deployment.

### 4. Server Actions & Forms
*   **Contact Form:** Handled via Next.js Server Actions in `app/actions/contact.ts`.
*   **Validation:** Inputs are validated on the server using Zod (`data/schemas.ts`).
*   **Rate Limiting:** In-memory rate limiting implemented in the server action.
*   **Email:** Uses Nodemailer. Requires environment variables (`MAILTRAP_*`) for development.

### 5. Styling
*   **TailwindCSS 4:** Used for all styling.
*   **Fonts:** Google Fonts (`Space Mono`, `Playfair Display`) loaded via `next/font/google` and exposed as CSS variables.
*   **Responsive:** Mobile-first approach using standard Tailwind breakpoints.

### 6. File Structure Reference
```
/
├── app/
│   ├── actions/        # Server Actions
│   ├── projects/       # Dynamic project routes [slug]
│   └── layout.tsx      # Root layout & global metadata
├── components/         # React components
├── data/               # Content & Types (Single Source of Truth)
├── hooks/              # Custom React hooks
├── lib/                # Utilities (JSON-LD, navigation)
└── public/
    └── assets/         # Static assets (images, icons)
```
