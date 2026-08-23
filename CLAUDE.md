# CLAUDE.md — AI Assistant System Instructions

This document provides architectural context, tech stack specifications, coding conventions, and workflow commands for AI coding assistants working within this repository.

---

## 1. Project Overview

This is a modern, high-performance personal portfolio web application for **Golam Saharier Omi**. Built with **Next.js 16** (App Router) and **React 19**, it showcases full-stack web development projects, technical skills, experience, education, and certifications with an interactive, motion-rich user experience.

---

## 2. Tech Stack & Libraries

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server Components)
- **UI Runtime**: [React 19](https://react.dev/) & React DOM 19
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS
- **Component Primitives**: [Shadcn UI](https://ui.shadcn.com/) & [@base-ui/react](https://base-ui.com/)
- **Theme Support**: [next-themes](https://github.com/pacocoursey/next-themes) (Light / Dark mode)
- **Animation & 3D**:
  - [Framer Motion](https://www.framer.com/motion/) (Declarative UI transitions)
  - [GSAP](https://greensock.com/gsap/) & `@gsap/react` (High-performance animations)
  - [OGL](https://github.com/oframe/ogl) (WebGL 3D canvas shader backgrounds)
- **Forms & Notifications**:
  - [Web3Forms API](https://web3forms.com/) (Serverless contact form processing)
  - [Sonner](https://sonner.emilkowal.ski/) (Toast notification management)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Class Utilities**: `clsx`, `tailwind-merge`, `class-variance-authority`

---

## 3. Architecture & File Structure

The project uses the standard Next.js App Router structure with source code housed inside `src/`.

```
portfolio/
├── .env.example              # Environment variable template
├── .env.local                # Local environment secrets (ignored by Git)
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── public/                   # Static assets (images, icons, etc.)
└── src/
    ├── app/                  # Next.js App Router pages & routing
    │   ├── layout.tsx        # Root layout with theme & font providers
    │   ├── page.tsx          # Main landing page assembling sections
    │   ├── globals.css       # Global CSS variables & Tailwind directives
    │   ├── loading.tsx       # Global loading state
    │   ├── not-found.tsx     # Custom 404 error page
    │   └── error.tsx         # Custom 500 error boundary with canvas
    ├── components/
    │   ├── layout/           # Global shell components (Navbar, Footer, etc.)
    │   ├── providers/        # Context providers (ThemeProvider)
    │   ├── sections/         # Page sections (Hero, About, Projects, Experience, Skills, Contact)
    │   ├── ui/               # Reusable Shadcn UI primitives
    │   └── ui-custom/        # Bespoke animations & custom UI components (WebGL ribbon, specular buttons)
    ├── data/                 # Static data sources (projects.ts, skills.ts, experience.ts, etc.)
    ├── fonts/                # Custom local font declarations
    └── lib/                  # Shared helper functions (utils.ts -> cn())
```

### Path Aliases
TypeScript path aliases are configured in `tsconfig.json` using the `@/*` prefix:
- `@/components/*` -> `src/components/*`
- `@/data/*` -> `src/data/*`
- `@/lib/*` -> `src/lib/*`
- `@/app/*` -> `src/app/*`

---

## 4. AI Coding Guidelines & Best Practices

When generating, refactoring, or reviewing code in this repository, always adhere to the following standards:

### 4.1 React & Component Architecture
- **Functional Components**: Write pure, functional React components utilizing modern hooks.
- **Client vs. Server Components**: Default to Server Components. Only mark components with `"use client"` at the very top when they require React hooks (`useState`, `useEffect`, `useRef`), browser APIs, Framer Motion/GSAP animations, or user event listeners.
- **Component Modularity**: Keep UI components small, reusable, and single-responsibility. Place general-purpose widgets in `src/components/ui/` or `src/components/ui-custom/`, and page-level layouts in `src/components/sections/`.

### 4.2 TypeScript Standards
- **Strict Typing**: Strict typing is enabled. Always declare explicit interface or type definitions for component props, state variables, and data schemas.
- **No `any`**: Avoid the use of `any`. Utilize `unknown`, generic types, or union types where flexibility is needed.
- **Data Schemas**: Maintain static data structures inside `src/data/` with dedicated TypeScript interfaces.

### 4.3 Styling & Design System
- **Tailwind CSS v4**: Use Tailwind CSS utilities for layout, spacing, and styling.
- **Class Merging**: Always use the `cn()` helper function from `@/lib/utils` when merging conditional classes or accepting external `className` props.
- **Theme Variables**: Use semantic CSS variables defined in `globals.css` (e.g., `text-text-primary`, `bg-background`, `text-accent`) to ensure seamless light and dark mode transitions.

### 4.4 Animations & WebGL
- Clean up any event listeners, GSAP timelines, or WebGL / canvas animation loops inside `useEffect` cleanup return functions to prevent memory leaks.
- Ensure all animations remain smooth and do not cause layout thrashing on lower-end or mobile devices.

### 4.5 Environment Variables & APIs
- Client-accessible environment variables must be prefixed with `NEXT_PUBLIC_` (e.g., `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`).
- Never hardcode API keys or secret credentials directly into components.

---

## 5. Terminal Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the local Next.js development server at `http://localhost:3000` |
| `npm run build` | Compiles and builds the production application |
| `npm run start` | Boots the compiled production build locally |
| `npm run lint` | Executes ESLint to check for code quality, syntax, and typing errors |
