# CLAUDE.md

This file provides guidance for Claude Code when working with this repository.

## Repository Structure

The main project lives in the subdirectory:

```
lovable-project-e8950dcd-ba0f-4c25-9abf-b9a85a4d663f-2026-03-15/
```

All commands below should be run from inside that directory unless stated otherwise.

## Project Overview

A modern React SPA — a professional landing page for a psychology consulting business. Built with Vite, TypeScript, Tailwind CSS, and shadcn-ui. No backend or database.

## Common Commands

```bash
# From project directory
cd lovable-project-e8950dcd-ba0f-4c25-9abf-b9a85a4d663f-2026-03-15

npm run dev          # Dev server at http://localhost:8080
npm run build        # Production build → dist/
npm run preview      # Preview production build locally
npm run lint         # ESLint check
npm run test         # Run unit tests (vitest, single run)
npm run test:watch   # Run unit tests in watch mode
npx playwright test  # Run E2E tests
```

## Architecture

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Language | TypeScript 5 |
| Bundler | Vite 5 (SWC) |
| Styling | Tailwind CSS 3 + CSS variables |
| UI Components | shadcn-ui (Radix UI primitives) |
| Routing | React Router DOM 6 |
| Server State | TanStack React Query 5 |
| Forms | React Hook Form + Zod |
| Animations | Framer Motion |
| Unit Tests | Vitest + Testing Library |
| E2E Tests | Playwright |

### Directory Layout

```
src/
├── components/
│   ├── ui/          # shadcn-ui components — do not edit manually
│   └── *.tsx        # Page section components (Navbar, HeroSection, etc.)
├── pages/
│   ├── Index.tsx    # Main landing page (composes all sections)
│   └── NotFound.tsx # 404 page
├── hooks/           # Custom React hooks
├── lib/
│   └── utils.ts     # cn() helper for className merging
└── test/            # Unit test files (*.test.tsx / *.test.ts)
```

## Key Conventions

### Path Aliases

Use `@/` to import from `src/`:

```ts
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
```

### Styling

- Use Tailwind utility classes; avoid inline styles.
- Use `cn()` from `@/lib/utils` when combining conditional class names.
- Dark mode is class-based (`dark:`). Theme tokens are defined as CSS variables in `src/index.css`.
- Custom fonts: **Playfair Display** (headings), **Inter** (body).

### shadcn-ui Components

- Pre-built components live in `src/components/ui/` — add new ones via CLI:
  ```bash
  npx shadcn-ui@latest add <component-name>
  ```
- Do not hand-edit files in `src/components/ui/` directly; regenerate via CLI instead.

### Adding New Page Sections

1. Create `src/components/<SectionName>Section.tsx`.
2. Import and add it to `src/pages/Index.tsx` in the correct order.
3. Wrap with `<AnimatedSection>` for scroll-triggered entrance animations.

### Forms

Use React Hook Form with Zod schemas:

```ts
const schema = z.object({ email: z.string().email() });
const form = useForm({ resolver: zodResolver(schema) });
```

### Testing

- Unit tests go in `src/test/` with `.test.tsx` / `.test.ts` extension.
- Use `@testing-library/react` for component tests.
- E2E tests use Playwright (`playwright.config.ts`).
- Run unit tests before committing; CI is not yet configured.

## Environment Variables

No `.env` file required for the current frontend-only setup. If you add API integrations, create `.env.local` (gitignored) and prefix variables with `VITE_`:

```
VITE_API_URL=https://api.example.com
```

Access in code via `import.meta.env.VITE_API_URL`.

## Important Notes

- **No backend/database** — this is a static frontend project.
- The dev server runs on **port 8080** (configured in `vite.config.ts`).
- Both `package-lock.json` (npm) and `bun.lock` (Bun) are committed; use `npm` by default unless Bun is installed.
- Lovable Tagger (`lovable-tagger`) is a dev dependency used by the Lovable platform — do not remove it.
