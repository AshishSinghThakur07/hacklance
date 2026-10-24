# HACKLANCE — Master Project Plan & Sprint Architecture
**Brand:** HACKLANCE  
**Institution:** R.R. Institute of Modern Technology (RRGI)  
**Repository:** [https://github.com/AshishSinghThakur07/hacklance](https://github.com/AshishSinghThakur07/hacklance)  
**Architecture:** Vite 8 + React 19 + Tailwind CSS v4 + React Router v7 + Lucide React + VitePress

---

## 1. Executive Summary & Repository Audit

### 1.1 Initial State Audit
- **Remote Origin:** Cloned empty repository at `main` branch.
- **Node & NPM:** Node v24.11.0, NPM 11.6.1 on Windows.
- **Core Stack Selected:** Vite 8 + React 19 with JSX, `@tailwindcss/vite` (Tailwind CSS v4), `react-router-dom` v7, `lucide-react`, `canvas-confetti`.
- **Documentation Engine:** VitePress configured in `./docs` with full architecture, API, and development guides.
- **Design Directives:** Crimson-red brand accents (`#B91F35` primary, `#8F182B` deep, `#5B1020` burgundy), dark and light theme system, subtle faded technical grid background, Apple-like minimalism, Linear-like hierarchy, editorial layout.

---

## 2. Module Breakdown & Sprint Plan

| Module | Name | Primary Deliverables | Target Commits | Status |
|---|---|---|---|---|
| **M01** | Repository Audit & Project Foundation | Stack initialization, directory structure, config, baseline assets | 10–12 | In Progress |
| **M02** | Brand Identity & Design System | Crimson palette, typography (Manrope/Inter/Mono), grid background, CSS tokens | 10–12 | Planned |
| **M03** | Global Layout & Navigation | Responsive header, mobile drawer, footer, breadcrumbs, command bar | 10–12 | Planned |
| **M04** | Homepage & Editorial Hero | Editorial hero, metrics, what-we-do cards, preview sections, final CTA | 10–14 | Planned |
| **M05** | About & Community Experience | Club purpose, history, pillars, verified RRGI context, core values | 10–12 | Planned |
| **M06** | Events & Hackathons | Filterable event directory, category tabs, event timeline, slug routing | 10–14 | Planned |
| **M07** | Registration & Applications | Multi-step accessible registration form, validation, pass generation | 10–12 | Planned |
| **M08** | Projects & Technical Showcases | Project catalog, tech stack filters, contributor links, project slug view | 10–12 | Planned |
| **M09** | Team & Member Profiles | Club leadership, technical leads, contributors, social links | 10–12 | Planned |
| **M10** | Achievements & Results | Verified awards, hackathon wins, community milestones | 10–12 | Planned |
| **M11** | Gallery & Media Experience | Categorized photo grid, lightbox modal, accessible captions | 10–12 | Planned |
| **M12** | Blog & Technical Resources | Technical guides, tutorials, cheatsheets, search filter | 10–12 | Planned |
| **M13** | Sponsors, Contact & Join | Contact form with validation, partnership tier info, membership application | 10–12 | Planned |
| **M14** | FAQ, Privacy & Terms | Accessible accordion FAQ, compliance-ready privacy policy and terms | 10–12 | Planned |
| **M15** | Theme System & Motion | Persistent dark/light theme engine, micro-animations, reduced-motion | 10–12 | Planned |
| **M16** | Backend, Data & Authentication | LocalStorage/IndexedDB state engine, authentication service, mock API | 10–12 | Planned |
| **M17** | Admin CMS & Club Management | Protected dashboard, event/project manager, registration reviewer | 10–14 | Planned |
| **M18** | Contests, Announcements & Certificates | Coding contest leaderboard, announcement banner, verifiable certificates | 10–12 | Planned |
| **M19** | VitePress Documentation | Documentation site, installation guides, architecture, API, deployment | 10–12 | Planned |
| **M20** | SEO, Accessibility & Performance | Meta tags, OpenGraph, sitemap, robots.txt, ARIA labels, contrast check | 10–12 | Planned |
| **M21** | Testing, Deployment & Final QA | Production build verification, direct route tests, browser tests, audit report | 10–12 | Planned |

---

## 3. Conventional Commit Standard
All commits adhere to Conventional Commits:
`<type>(<scope>): <imperative description>`
- `feat`: New feature or page
- `fix`: Bug fix or styling correction
- `style`: Design tokens, CSS adjustments
- `refactor`: Structural reorganization
- `docs`: Documentation updates
- `test`: Testing and verification
- `chore`: Build config, dependencies, maintenance

---

## 4. Acceptance Gate
Each module requires:
1. Zero TypeScript/JavaScript build errors.
2. Verified responsive behavior across mobile (360px-414px), tablet (768px), and desktop (1280px+).
3. Consistent light and dark theme contrast.
4. Working routes without dead ends or broken links.
5. Meaningful commit history with clear git messages.
