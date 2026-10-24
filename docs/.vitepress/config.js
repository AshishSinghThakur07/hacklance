import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'HACKLANCE Docs',
  description: 'Technical Architecture & Engineering Guide — R.R. Institute of Modern Technology (RRGI)',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
  ],
  themeConfig: {
    siteTitle: 'HACKLANCE // RRGI',
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Architecture', link: '/guide/architecture' },
      { text: 'Design System', link: '/guide/design-system' },
      { text: 'Project Plan', link: '/project-plan' },
      { text: 'GitHub', link: 'https://github.com/AshishSinghThakur07/hacklance' },
    ],
    sidebar: [
      {
        text: 'Platform Foundation',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'System Architecture', link: '/guide/architecture' },
          { text: 'Design System & Tokens', link: '/guide/design-system' },
        ],
      },
      {
        text: 'Data & Governance',
        items: [
          { text: 'State & Persistence', link: '/guide/persistence' },
          { text: 'Admin CMS & Security', link: '/guide/governance' },
        ],
      },
      {
        text: 'Engineering Standards',
        items: [
          { text: 'Git & Sprint Discipline', link: '/guide/contributing' },
          { text: 'Production Deployment', link: '/guide/deployment' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AshishSinghThakur07/hacklance' },
    ],
    footer: {
      message: 'HACKLANCE — R.R. Institute of Modern Technology, Lucknow',
      copyright: 'Copyright © 2026 HACKLANCE Developers. MIT License.',
    },
  },
});
