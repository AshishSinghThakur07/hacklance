# HACKLANCE — RRGI Technical Club & Developer Community

> **Build. Break. Learn. Launch.**  
> The premier technical society and developer community of **R.R. Institute of Modern Technology (RRGI)**, Lucknow.

[![Production Build](https://img.shields.io/badge/build-passing-brightgreen.svg)](#)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](#)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](#)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?logo=tailwind-css&logoColor=white)](#)
[![Design](https://img.shields.io/badge/Aesthetic-Crimson%20Editorial-B91F35)](#)

---

## ⚡ Overview

**HACKLANCE** is the student-led technical society and innovation hub at **R.R. Institute of Modern Technology (RRGI)**. Designed for curious minds and ambitious builders, HACKLANCE organizes competitive hackathons, algorithmic coding contests, collaborative open-source engineering, technical masterclasses, and project incubations.

This digital platform delivers an editorial developer-community experience combining:
- **Refined Crimson Identity:** Bespoke visual language with high-contrast crimson accents (`#B91F35` / `#F05263`) over deep charcoal and warm ivory surfaces.
- **Subtle Technical Grid:** Low-contrast mathematical grid and coordinate markers that adapt across themes.
- **Functional Discovery:** Real-time event registration, filterable project directories, verifiable certificate credentials, live coding contest leaderboards, and interactive galleries.
- **Admin CMS & Persistence:** LocalStorage-powered offline-first client architecture with administrative moderation, participant management, and credential issuance.
- **VitePress Documentation:** Comprehensive engineering and architectural docs built right alongside the application.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Core Framework** | React 19, JavaScript (ES2024+) |
| **Build Tooling** | Vite 8, `@tailwindcss/vite` |
| **Styling** | Tailwind CSS v4, Vanilla CSS Custom Properties |
| **Routing** | React Router v7 (`react-router-dom`) |
| **Typography** | Manrope (Headings), Inter (Interface), JetBrains Mono (Code) |
| **Icons & Motion** | Lucide React, CSS Transitions & Hardware-Accelerated Transforms |
| **Documentation** | VitePress |
| **Persistence** | Modular Storage Service (Client State + Ready for Supabase/Node backend) |

---

## 🚀 Quick Start & Development

### Prerequisites
- Node.js `v18.0.0+` (tested on Node `v24.11.0`)
- npm `v9.0.0+`

### Installation
```bash
# Clone the repository
git clone https://github.com/AshishSinghThakur07/hacklance.git
cd hacklance

# Install dependencies
npm install
```

### Running Locally
```bash
# Start development server
npm run dev

# Open in browser: http://localhost:5173
```

### Production Build & Preview
```bash
# Run production build
npm run build

# Preview production artifacts
npm run preview
```

---

## 📁 Repository Architecture

```
hacklance/
├── docs/                   # VitePress documentation & project plan
│   └── project-plan.md     # Module tracker, sprint roadmap & QA criteria
├── public/                 # Static assets, favicon.svg, robots.txt, sitemap.xml
├── src/
│   ├── assets/             # Brand logos, icons, vector illustrations
│   ├── components/         # Modular, reusable UI components
│   │   ├── admin/          # Admin CMS management consoles
│   │   ├── certificates/   # Credential verification & rendering
│   │   ├── common/         # Navbar, Footer, ThemeToggle, GridBackground
│   │   ├── contests/       # Coding contest leaderboards & problem views
│   │   ├── events/         # Event cards, timelines, registration
│   │   ├── forms/          # Accessible validated forms
│   │   ├── gallery/        # Lightbox & masonry grid
│   │   ├── home/           # Editorial hero, metrics, community previews
│   │   ├── projects/       # Project cards, filtering, tech tags
│   │   ├── resources/      # Technical tutorials & guides
│   │   └── team/           # Member cards & departmental directory
│   ├── context/            # React Contexts (ThemeContext, DataContext, AuthContext)
│   ├── data/               # Verified initial datasets (events, projects, team, etc.)
│   ├── pages/              # Primary route pages (Home, About, Events, Projects...)
│   ├── services/           # StorageService, AuthService, CertificateService
│   ├── styles/             # Design tokens, variables & typography rules
│   └── utils/              # Helper functions, formatters, validation
├── index.html              # HTML shell with Google Fonts & OpenGraph metadata
├── package.json            # Scripts & project dependencies
└── vite.config.js          # Vite 8 & Tailwind v4 build pipeline
```

---

## 🏛️ Institutional Attribution
- **Institution:** R.R. Institute of Modern Technology (RRGI), Lucknow
- **Community:** HACKLANCE Technical Club & Developer Society
- **License:** MIT License
