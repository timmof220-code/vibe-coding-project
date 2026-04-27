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

## Don't

1. **Don't install new npm packages without checking existing dependencies first.**
   The stack already covers animations (Framer Motion), carousels (Embla), charts (Recharts), dates (date-fns), and icons (Lucide). Adding duplicates bloats the bundle. Check `package.json` before reaching for a new library.

2. **Don't use `any` types or `// @ts-ignore` to bypass TypeScript.**
   The project uses TypeScript 5 with strict settings and shadcn-ui's precise component types. Bypassing types hides bugs that only surface at runtime in the browser.

3. **Don't write manual form validation — always use Zod + React Hook Form.**
   The project already has `zod` and `@hookform/resolvers` wired up. Hand-rolled `useState`-based validation is incompatible with the existing pattern, harder to test, and easy to get wrong on edge cases (empty strings, whitespace).

4. **Don't use inline `style={{}}` for layout or colors — use Tailwind classes and CSS variables.**
   Theme tokens (colors, fonts) live in `src/index.css` as CSS variables. Inline styles ignore the `dark:` class and break theme switching.

5. **Don't create new utility functions without checking `src/lib/utils.ts` and `src/hooks/` first.**
   The project already has `cn()`, `useMobile()`, and `useToast()`. Duplicating these creates two sources of truth. Always check existing hooks and utilities before writing new ones.

## ASCII Diagrams — Visual Spec

### In documentation
When creating or updating any `.md` file, add ASCII diagrams in sections where a visual helps grasp the idea faster than text:

| Context | What to draw |
|---------|-------------|
| Architecture | Service blocks with arrows and protocol labels |
| Project structure | Folder tree with inline explanations |
| User flow | Screens and transitions with arrows |
| UI layout | Page blocks with labels and sample data |
| Component relations | Blocks and import arrows |

Add diagrams inside ` ``` ` blocks. Do not rewrite existing text — only supplement it.

**Examples:**

```
# Architecture
┌─────────────┐   props   ┌──────────────────┐
│  Index.tsx  │ ────────► │  FaqSection.tsx  │
└─────────────┘           └──────────────────┘
                                   │ hash
                                   ▼
                          ┌──────────────────────┐
                          │  SeoQuestionsSection │
                          └──────────────────────┘

# UI layout
┌────────────────────────────────────────┐
│  [О психологии] [Организация] [Цены]  │  ← category pills
├────────────────────────────────────────┤
│  ▶ Чем психолог отличается...?        │  ← accordion item
│  ▶ Нужна ли серьёзная проблема?       │
└────────────────────────────────────────┘
```

### Before writing new code
If the task is to add a new screen, module, or integration:
1. **Draw the ASCII diagram first** (UI wireframe, architecture, user flow, or component relations)
2. **Show it to the user and wait for confirmation**
3. Only then write the code

## What Claude Should Know

- **The actual source code is one level deep.** All `npm` commands, imports, and file edits operate inside `lovable-project-e8950dcd-ba0f-4c25-9abf-b9a85a4d663f-2026-03-15/`. The repo root only contains this subdirectory, a zip archive, and `CLAUDE.md`. Always `cd` into the project directory before running any command.

- **shadcn-ui components are scaffolded, not authored.** The 50+ files in `src/components/ui/` were generated by the shadcn CLI and should be regenerated via `npx shadcn-ui@latest add <name>` rather than edited by hand. When a UI primitive is missing, check the shadcn-ui catalogue before building from scratch.

- **This is a content-heavy landing page, not an app.** There is no authentication, no database, no API layer, and no global state management beyond React Query (which is present but unused — likely added for future use). Changes are almost always scoped to a single section component. Side effects from edits are minimal; the main risk is breaking the visual layout or animation flow.
