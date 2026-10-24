/**
 * HACKLANCE Design Tokens & Theme Constants
 * Primary Brand: HACKLANCE (R.R. Institute of Modern Technology - RRGI)
 * Distinctive Crimson Identity & Technical Editorial Aesthetic
 */

export const BRAND = {
  name: 'HACKLANCE',
  tagline: 'Build. Break. Learn. Launch.',
  subline: 'The Technical Club & Developer Community of R.R. Institute of Modern Technology (RRGI)',
  institution: 'R.R. Institute of Modern Technology (RRGI)',
  location: 'Lucknow, Uttar Pradesh, India',
  establishedYear: '2024',
  primaryEmail: 'hacklance@rrgi.ac.in',
  githubUrl: 'https://github.com/AshishSinghThakur07/hacklance',
};

export const COLOR_TOKENS = {
  light: {
    primaryCrimson: '#B91F35',
    deepCrimson: '#8F182B',
    burgundy: '#5B1020',
    accentRed: '#DC3545',
    softRed: '#FCEBED',
    paleRed: '#FFF5F5',
    warmWhite: '#FAF9F6',
    pureWhite: '#FFFFFF',
    primaryInk: '#171719',
    secondaryText: '#66656B',
    mutedText: '#85838A',
    border: '#E9E5E4',
    neutralSurface: '#F1EFED',
    cardSurface: '#FFFFFF',
    elevatedSurface: '#F7F5F3',
    success: '#16794B',
    warning: '#A76512',
    error: '#B42332',
    info: '#245CB5',
  },
  dark: {
    primaryCrimson: '#F05263',
    deepCrimson: '#B91F35',
    burgundy: '#7E1D30',
    accentRed: '#FF6675',
    softRed: '#321D23',
    paleRed: '#241419',
    warmWhite: '#101012',
    pureWhite: '#171719',
    primaryInk: '#F6F5F3',
    secondaryText: '#B6B4BA',
    mutedText: '#929098',
    border: '#343238',
    neutralSurface: '#171719',
    cardSurface: '#1D1D21',
    elevatedSurface: '#242429',
    success: '#50C58B',
    warning: '#F2B84B',
    error: '#FF6675',
    info: '#83B5FF',
  },
};

export const NAVIGATION_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Projects', path: '/projects' },
  { name: 'Team', path: '/team' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Resources', path: '/resources' },
  { name: 'Contests', path: '/contests' },
  { name: 'Certificates', path: '/certificates' },
  { name: 'Contact', path: '/contact' },
];

export const FOOTER_LINKS = {
  community: [
    { name: 'About HACKLANCE', path: '/about' },
    { name: 'Join Community', path: '/join' },
    { name: 'Our Team', path: '/team' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Partner With Us', path: '/sponsors' },
  ],
  programs: [
    { name: 'Upcoming Hackathons', path: '/events' },
    { name: 'Coding Contests', path: '/contests' },
    { name: 'Open Projects', path: '/projects' },
    { name: 'Tech Tutorials & Guides', path: '/resources' },
    { name: 'Verify Certificate', path: '/certificates' },
  ],
  resources: [
    { name: 'Documentation (VitePress)', path: '/docs' },
    { name: 'GitHub Repository', path: 'https://github.com/AshishSinghThakur07/hacklance', external: true },
    { name: 'Brand Guidelines', path: '/about#brand' },
    { name: 'Frequently Asked Questions', path: '/faq' },
    { name: 'Admin Portal', path: '/admin' },
  ],
  legal: [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Use', path: '/terms' },
    { name: 'Code of Conduct', path: '/terms#conduct' },
  ],
};
