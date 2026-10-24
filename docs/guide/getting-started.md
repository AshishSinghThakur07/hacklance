# Getting Started

Welcome to the developer documentation for **HACKLANCE**, the technical society and developer community of **R.R. Institute of Modern Technology (RRGI)**.

## Prerequisites

- **Node.js:** v18.0.0 or later (tested on Node v24.11.0)
- **Package Manager:** npm v9+ or pnpm
- **Git:** Version 2.30+

## Local Installation

```bash
# Clone the repository
git clone https://github.com/AshishSinghThakur07/hacklance.git
cd hacklance

# Install dependencies
npm install

# Run the development server
npm run dev
```

Visit `http://localhost:5173` to explore the live application.

## Available Scripts

| Script | Command | Purpose |
|---|---|---|
| `dev` | `vite` | Starts the local dev server with HMR |
| `build` | `vite build` | Builds optimized production bundle in `dist/` |
| `preview` | `vite preview` | Previews the production build locally |
| `docs:dev` | `vitepress dev docs` | Runs VitePress docs server |
| `docs:build` | `vitepress build docs` | Builds static documentation site |
