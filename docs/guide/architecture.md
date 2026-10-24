# System Architecture

HACKLANCE is structured as a static-first Single Page Application (SPA) powered by React 19, Vite 8, and Tailwind CSS v4.

## Layered Hierarchy

```
┌────────────────────────────────────────────────────────┐
│                      UI Presentation                   │
│   (Pages: Home, Events, Projects, Team, Certificates)   │
└──────────────────────────┬─────────────────────────────┘
                           │
┌──────────────────────────▼─────────────────────────────┐
│                 React Context Layer                    │
│      ThemeContext   •   DataContext   •   AuthContext  │
└──────────────────────────┬─────────────────────────────┘
                           │
┌──────────────────────────▼─────────────────────────────┐
│             Persistence & Service Abstraction          │
│               StorageService (LocalStorage)            │
│       [Ready for REST API / Supabase integration]      │
└────────────────────────────────────────────────────────┘
```

## Directory Structure

- `src/components/common`: Shared atomic design components (`BrandLogo`, `Button`, `Badge`, `Card`, `GridBackground`, `ThemeToggle`, `Navbar`, `Footer`, `Icons`).
- `src/components/home`: Modular homepage feature blocks (`Hero`, `MetricsBar`, `WhatWeDo`, `FeaturedEvents`, `FeaturedProjects`, `CommunityValues`, `ResourcesPreview`, `FinalCTA`).
- `src/components/forms`: Validated input models (`EventRegistrationModal`).
- `src/context`: React context state providers (`ThemeContext`, `DataContext`, `AuthContext`).
- `src/data`: Verified mock and initial dataset structures (`initialData.js`).
- `src/pages`: Route entry points.
- `src/services`: Decoupled persistence logic (`storageService.js`).
- `src/styles`: Design tokens (`tokens.js`) and global styles (`index.css`, `App.css`).
