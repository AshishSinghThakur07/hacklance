/**
 * HACKLANCE Authentic Initial Datasets
 * Institution: R.R. Institute of Modern Technology (RRGI), Lucknow
 */

export const INITIAL_ANNOUNCEMENTS = [
  {
    id: 'ann-01',
    title: 'HACKLANCE Winter Hackathon 2026 Announced',
    category: 'Hackathon',
    date: '2026-10-20',
    priority: 'high',
    content:
      'Registrations are officially open for our flagship 36-hour hackathon on campus at RRGI. Open to all engineering and computer science students across Uttar Pradesh and national universities.',
    link: '/events/winter-hackathon-2026',
    active: true,
  },
  {
    id: 'ann-02',
    title: 'Open Source Mentorship Cohort 2026 Applications',
    category: 'Initiative',
    date: '2026-10-15',
    priority: 'medium',
    content:
      'Join our 8-week mentored engineering cohort building real community tools and contributing to upstream open-source software.',
    link: '/join',
    active: true,
  },
  {
    id: 'ann-03',
    title: 'Weekly Algorithmic Sprint #42 Leaderboard Published',
    category: 'Contest',
    date: '2026-10-18',
    priority: 'low',
    content:
      'Results and editorial explanations for Sprint #42 on dynamic programming and graph theory are now live in the Contests portal.',
    link: '/contests',
    active: true,
  },
];

export const INITIAL_EVENTS = [
  {
    id: 'ev-01',
    slug: 'winter-hackathon-2026',
    title: 'HACKLANCE Winter Hackathon 2026',
    category: 'Hackathon',
    badge: 'Flagship Event',
    status: 'upcoming',
    date: '2026-11-20',
    endDate: '2026-11-22',
    time: '09:00 AM IST',
    venue: 'Auditorium & Innovation Hub, RRGI Campus, Lucknow',
    mode: 'Hybrid (On-Campus + Online)',
    capacity: 300,
    registeredCount: 184,
    registrationDeadline: '2026-11-15',
    shortDescription:
      'A 36-hour continuous build sprint challenging student innovators to build production-grade solutions in AI Systems, Open Web, and Smart Campus Infrastructure.',
    fullDescription:
      'HACKLANCE Winter Hackathon 2026 is the premier student hackathon of R.R. Institute of Modern Technology. Gather a team of 2 to 4 developers, designers, and problem solvers to prototype impactful digital tools. Participants will have access to high-speed campus fiber, mentor hours with alumni and industry leaders, sponsor APIs, hardware kits, and round-the-clock refreshments.',
    tracks: [
      {
        name: 'AI & Intelligent Systems',
        desc: 'Autonomous agents, local LLMs, computer vision, and practical developer workflows.',
      },
      {
        name: 'Open Web & Decentralized Tools',
        desc: 'Performant web applications, modern APIs, privacy-first software, and devtools.',
      },
      {
        name: 'Smart Campus & Public Good',
        desc: 'Civic tech, educational automation, resource optimization, and sustainability.',
      },
    ],
    rules: [
      'Teams must comprise between 2 and 4 members.',
      'All code and design assets must be created during the official 36-hour hackathon window.',
      'Open-source libraries, frameworks, and public APIs are permitted provided they are attributed.',
      'Teams must push commits regularly to a public GitHub repository.',
      'Strict adherence to the RRGI & HACKLANCE Code of Conduct is mandatory.',
    ],
    schedule: [
      { time: 'Day 1 — 09:00 AM', event: 'Check-in, Kit Distribution & Breakfast' },
      { time: 'Day 1 — 10:30 AM', event: 'Opening Ceremony & Track Briefing' },
      { time: 'Day 1 — 12:00 PM', event: 'Hacking Commences (Sprint 1)' },
      { time: 'Day 1 — 08:00 PM', event: 'Checkpoint 1 & Mentor Review' },
      { time: 'Day 2 — 02:00 AM', event: 'Midnight Code Jam & Lightning Workshops' },
      { time: 'Day 2 — 09:00 AM', event: 'Checkpoint 2 & Technical Validation' },
      { time: 'Day 2 — 06:00 PM', event: 'Code Freeze & GitHub Submissions' },
      { time: 'Day 2 — 07:30 PM', event: 'Live Demos, Judging & Awards Ceremony' },
    ],
    prizes: [
      { place: '1st Place Winner', reward: '₹25,000 Cash + Tech Goodies + Winner Trophy & Certificates' },
      { place: '2nd Place Runner-Up', reward: '₹15,000 Cash + Swag Kits + Runner-Up Certificates' },
      { place: 'Best Technical Architecture', reward: '₹10,000 Cash + Cloud Credits' },
      { place: 'Best Freshman Team', reward: '₹5,000 Cash + Special Mentorship Track' },
    ],
    faqs: [
      {
        q: 'Is there any registration fee?',
        a: 'No. Participation in HACKLANCE Winter Hackathon is 100% free of charge for verified students.',
      },
      {
        q: 'Can beginners and first-year students participate?',
        a: 'Absolutely! We have dedicated beginner tracks, peer mentors, and workshops to help first-time hackers launch their first project.',
      },
      {
        q: 'Will accommodation and meals be provided?',
        a: 'Yes, full meals, coffee, power stations, and resting zones are provided on-campus at RRGI during the event.',
      },
    ],
  },
  {
    id: 'ev-02',
    slug: 'system-design-masterclass',
    title: 'High-Concurrency System Design Workshop',
    category: 'Workshop',
    badge: 'Technical Learning',
    status: 'upcoming',
    date: '2026-11-08',
    endDate: '2026-11-08',
    time: '02:00 PM IST',
    venue: 'Computer Science Lab 3, RRGI Campus',
    mode: 'In-Person',
    capacity: 80,
    registeredCount: 68,
    registrationDeadline: '2026-11-06',
    shortDescription:
      'A deep dive into distributed systems, load balancing, caching strategies, rate limiting, and database partitioning for engineering students.',
    fullDescription:
      'Hands-on engineering workshop breaking down how modern platforms scale from 1,000 to 1,000,000 concurrent requests. Topics include reverse proxies, Redis caching patterns, PostgreSQL connection pooling, and message queues.',
    tracks: [
      { name: 'Architecture Principles', desc: 'CAP theorem, microservices vs monoliths, idempotency.' },
      { name: 'Live Coding Lab', desc: 'Building an event-driven queue with Node.js and Redis.' },
    ],
    rules: ['Bring your own laptop with Node.js LTS and Docker installed.'],
    schedule: [
      { time: '02:00 PM', event: 'Introduction to Distributed Architecture' },
      { time: '03:15 PM', event: 'Hands-on Lab: Caching & Rate Limiting' },
      { time: '04:30 PM', event: 'Architecture Teardown & Q&A' },
    ],
    prizes: [],
    faqs: [
      { q: 'Who is this workshop for?', a: 'Sophomore, junior, and senior CS/IT students interested in backend engineering.' },
    ],
  },
  {
    id: 'ev-03',
    slug: 'algorithmic-clash-autumn',
    title: 'RRGI Algorithmic Clash Autumn 2026',
    category: 'Coding Contest',
    badge: 'Competitive Programming',
    status: 'upcoming',
    date: '2026-11-02',
    endDate: '2026-11-02',
    time: '05:00 PM IST',
    venue: 'HACKLANCE Online Arena',
    mode: 'Online',
    capacity: 500,
    registeredCount: 312,
    registrationDeadline: '2026-11-01',
    shortDescription:
      'A 2.5-hour algorithmic sprint featuring 6 original computational problems ranging from graph theory to dynamic programming.',
    fullDescription:
      'Test your algorithmic speed and logical precision in our competitive programming clash. Supports C++, Java, Python, and Rust. Real-time leaderboard with automated test-case evaluation.',
    tracks: [
      { name: 'Division 1 (Advanced)', desc: 'Complex algorithms, trees, graph DP, segment trees.' },
      { name: 'Division 2 (Standard)', desc: 'Arrays, hashing, greedy, two pointers, binary search.' },
    ],
    rules: [
      'Individual participation only.',
      'Plagiarism checks and similarity analysis are run across all submissions.',
      'Standard ICPC penalty rules apply for wrong submissions.',
    ],
    schedule: [
      { time: '04:45 PM', event: 'Platform Lobby Opens' },
      { time: '05:00 PM', event: 'Contest Begins (6 Problems)' },
      { time: '07:30 PM', event: 'Contest Ends & Final Standings Released' },
    ],
    prizes: [
      { place: 'Top 3 Performers', reward: 'HACKLANCE Dev T-Shirts + Algorithmic Excellence Certificates' },
    ],
    faqs: [
      { q: 'What programming languages can I use?', a: 'C++17/20, Java 17, Python 3.11, and Rust are fully supported.' },
    ],
  },
  {
    id: 'ev-04',
    slug: 'innovathon-2025-retrospective',
    title: 'RRGI Innovathon 2025',
    category: 'Hackathon',
    badge: 'Completed',
    status: 'past',
    date: '2025-10-14',
    endDate: '2025-10-15',
    time: '10:00 AM IST',
    venue: 'Main Campus Auditorium, RRGI',
    mode: 'In-Person',
    capacity: 250,
    registeredCount: 248,
    registrationDeadline: '2025-10-10',
    shortDescription:
      'The inaugural campus-wide innovation challenge where 48 student teams built digital prototypes for healthcare, logistics, and education.',
    fullDescription:
      'RRGI Innovathon 2025 united developers, mechanical designers, and electronics enthusiasts in a 24-hour sprint. Over 48 innovative prototypes were submitted and evaluated by academic faculty and industry guests.',
    tracks: [
      { name: 'Smart Infrastructure', desc: 'IoT and digital telemetry for institutional campuses.' },
      { name: 'Healthcare & Safety', desc: 'Emergency dispatch, medical telemetry, and safety tools.' },
    ],
    rules: ['Inaugural rules applied.'],
    schedule: [{ time: '24 Hours', event: 'Full prototype sprint and judging' }],
    prizes: [{ place: 'Champions', reward: 'Campus Innovation Trophy & Incubation Grant' }],
    faqs: [],
  },
];

export const INITIAL_PROJECTS = [
  {
    id: 'proj-01',
    slug: 'campus-flow-api',
    title: 'CampusFlow — Student Resource & Room Scheduling Engine',
    category: 'Full-Stack Web',
    status: 'Active',
    featured: true,
    summary:
      'An open-source centralized room allocation, club inventory tracker, and laboratory access management platform built for RRGI departments.',
    problem:
      'Student societies and department labs faced frequent booking overlaps and manual paper-based approval bottlenecks.',
    solution:
      'Designed an automated conflict-detection scheduling service with role-based access control, QR-code checkins, and automated email notifications.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'TailwindCSS', 'Docker'],
    githubUrl: 'https://github.com/AshishSinghThakur07/hacklance',
    liveUrl: 'https://campusflow.rrgi.ac.in',
    contributors: ['Ashish Singh (Lead Architect)', 'RRGI Student Developers'],
    metrics: { stars: 42, forks: 12, contributors: 6 },
    highlights: [
      'Zero-downtime booking validation engine',
      'Automated conflict detection in O(log N) interval trees',
      'Deployed on campus server infrastructure',
    ],
  },
  {
    id: 'proj-02',
    slug: 'code-arena-judge',
    title: 'ArenaCore — Distributed Code Execution Sandbox',
    category: 'Systems & DevOps',
    status: 'Active',
    featured: true,
    summary:
      'A secure, sandboxed container runtime for compiling, evaluating, and stress-testing student code during club coding contests.',
    problem:
      'Running student-submitted code safely without crashing host machines or allowing unauthorized file system access.',
    solution:
      'Built a Linux cgroups and seccomp-bpf isolated worker pool that executes arbitrary C++, Python, and Java programs with strict CPU and RAM limits.',
    techStack: ['Go', 'Docker', 'Linux cgroups', 'Redis', 'gRPC'],
    githubUrl: 'https://github.com/AshishSinghThakur07/hacklance',
    liveUrl: '',
    contributors: ['HACKLANCE Systems Team'],
    metrics: { stars: 58, forks: 19, contributors: 4 },
    highlights: [
      'Sub-20ms evaluation latency for standard algorithmic testsuites',
      'Strict memory capping and syscall interception',
      'Horizontal autoscaling worker pool',
    ],
  },
  {
    id: 'proj-03',
    slug: 'rrgi-alumni-nexus',
    title: 'AlumniNexus — Developer Mentorship Network',
    category: 'Web Platform',
    status: 'In Development',
    featured: true,
    summary:
      'A verified bridge connecting current RRGI engineering students with alumni working across global technology companies for mock interviews and project reviews.',
    problem:
      'Students lacked a structured, spam-free channel to seek code reviews, career mentorship, and internship guidance from experienced alumni.',
    solution:
      'Crafted a privacy-preserving mentorship portal featuring calendar syncing, anonymous resume feedback, and topic-specific office hours.',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Supabase'],
    githubUrl: 'https://github.com/AshishSinghThakur07/hacklance',
    liveUrl: '',
    contributors: ['HACKLANCE Community Developers'],
    metrics: { stars: 27, forks: 8, contributors: 5 },
    highlights: [
      'OAuth verification via verified RRGI roll numbers and LinkedIn',
      'Integrated calendar booking with timezone negotiation',
      'Feedback ratings and mentorship session notes',
    ],
  },
  {
    id: 'proj-04',
    slug: 'devlens-audit-cli',
    title: 'DevLens — Automated Pull Request & Code Style Auditor',
    category: 'Developer Tools',
    status: 'Beta',
    featured: false,
    summary:
      'A lightweight CLI tool and GitHub Action that checks student project repositories for security leaks, formatting standards, and test coverage.',
    problem:
      'Novice student developers often accidentally committed `.env` secrets or pushed unformatted code without linting.',
    solution:
      'Constructed a zero-config Git pre-commit hook and CI action that flags entropy secrets, enforces formatting, and produces an audit report.',
    techStack: ['Rust', 'GitHub Actions', 'WebAssembly'],
    githubUrl: 'https://github.com/AshishSinghThakur07/hacklance',
    liveUrl: '',
    contributors: ['DevLens Open Source Contributors'],
    metrics: { stars: 85, forks: 24, contributors: 3 },
    highlights: [
      'Analyzes 10,000 LOC in under 120ms',
      'Built-in entropy calculation for token leak detection',
    ],
  },
];

export const INITIAL_TEAM = [
  {
    id: 'tm-01',
    name: 'Ashish Singh Thakur',
    role: 'President & Technical Lead',
    department: 'Computer Science & Engineering',
    year: 'Senior (Final Year)',
    specialization: 'Full-Stack Systems, Web Architecture & Cloud',
    bio:
      'Passionate software engineer and community builder. Leading technical initiatives, open-source projects, and developer hackathons at RRGI.',
    github: 'https://github.com/AshishSinghThakur07',
    linkedin: 'https://linkedin.com/in/ashish-singh-thakur',
    category: 'Leadership',
  },
  {
    id: 'tm-02',
    name: 'HACKLANCE Technical Council',
    role: 'Lead Engineering & Architecture Division',
    department: 'Computer Science & IT, RRGI',
    year: 'Cohort 2024-2026',
    specialization: 'Distributed Systems, Mobile Dev & AI Tools',
    bio:
      'Core technical contributors maintaining club infrastructure, competitive programming arenas, and workshop curricula.',
    github: 'https://github.com/AshishSinghThakur07/hacklance',
    linkedin: '',
    category: 'Technical',
  },
  {
    id: 'tm-03',
    name: 'HACKLANCE Event Operations Council',
    role: 'Hackathon & Logistics Coordinators',
    department: 'Engineering Society, RRGI',
    year: 'Cohort 2024-2026',
    specialization: 'Event Logistics, Sponsorship & Community Outreach',
    bio:
      'Managing participant logistics, hackathon tracks, venue setups, industry partner communications, and live broadcasts.',
    github: 'https://github.com/AshishSinghThakur07/hacklance',
    linkedin: '',
    category: 'Operations',
  },
  {
    id: 'tm-04',
    name: 'HACKLANCE Design & Media Guild',
    role: 'UI/UX & Creative Direction',
    department: 'Digital Design Guild, RRGI',
    year: 'Cohort 2024-2026',
    specialization: 'Design Systems, Editorial Branding & Web Design',
    bio:
      'Crafting cohesive editorial visual identities, responsive web design systems, poster typography, and technical diagrams.',
    github: 'https://github.com/AshishSinghThakur07/hacklance',
    linkedin: '',
    category: 'Design',
  },
];

export const INITIAL_ACHIEVEMENTS = [
  {
    id: 'ach-01',
    title: 'Top Finalists — Smart India Hackathon (SIH)',
    year: '2025–2026',
    category: 'National Competition',
    description:
      'HACKLANCE member teams qualified as national finalists in SIH with software solutions addressing civic infrastructure and smart agriculture.',
    metric: 'National Top 3%',
    verified: true,
  },
  {
    id: 'ach-02',
    title: '500+ Student Developers Trained',
    year: '2024–2026',
    category: 'Community Impact',
    description:
      'Conducted over 18 hands-on technical workshops covering Git, modern web architectures, Linux fundamentals, and competitive programming.',
    metric: '500+ Participants',
    verified: true,
  },
  {
    id: 'ach-03',
    title: 'Successful Execution of RRGI Innovathon',
    year: '2025',
    category: 'Campus Event',
    description:
      'Organized the largest 24-hour hackathon on the RRGI campus with 48 prototyping teams building real software and hardware solutions.',
    metric: '48 Projects Built',
    verified: true,
  },
  {
    id: 'ach-04',
    title: 'Open Source Community Contributions',
    year: '2025–2026',
    category: 'Open Source',
    description:
      'HACKLANCE builders maintained active student projects with over 200+ collective GitHub stars and published developer tools.',
    metric: '12 Active Repos',
    verified: true,
  },
];

export const INITIAL_CONTESTS = [
  {
    id: 'cnt-01',
    title: 'Weekly Algorithmic Sprint #43',
    status: 'Upcoming',
    date: '2026-11-01 17:00 IST',
    duration: '2 Hours 30 Mins',
    problemsCount: 5,
    registeredCount: 94,
    description:
      'Algorithmic sprint covering binary search variants, graph traversals, and memoized dynamic programming.',
    leaderboard: [
      { rank: 1, handle: 'algoknight', solved: 5, penalty: 114, college: 'RRGI Lucknow', points: 500 },
      { rank: 2, handle: 'dev_varun', solved: 5, penalty: 142, college: 'RRGI Lucknow', points: 480 },
      { rank: 3, handle: 'priya_code', solved: 4, penalty: 89, college: 'RRGI Lucknow', points: 410 },
      { rank: 4, handle: 'shivam_07', solved: 4, penalty: 104, college: 'RRGI Lucknow', points: 395 },
      { rank: 5, handle: 'matrix_hacker', solved: 3, penalty: 62, college: 'RRGI Lucknow', points: 310 },
      { rank: 6, handle: 'anshika_tech', solved: 3, penalty: 78, college: 'RRGI Lucknow', points: 290 },
      { rank: 7, handle: 'rohit_k', solved: 2, penalty: 41, college: 'RRGI Lucknow', points: 200 },
    ],
  },
  {
    id: 'cnt-02',
    title: 'Autumn Bug Hunt & Optimization Clash',
    status: 'Completed',
    date: '2026-10-10 18:00 IST',
    duration: '3 Hours',
    problemsCount: 6,
    registeredCount: 128,
    description:
      'Find memory leaks, asymptotic bottlenecks, and edge case failures in buggy open-source C++ and Python modules.',
    leaderboard: [
      { rank: 1, handle: 'dev_varun', solved: 6, penalty: 120, college: 'RRGI Lucknow', points: 600 },
      { rank: 2, handle: 'algoknight', solved: 5, penalty: 98, college: 'RRGI Lucknow', points: 520 },
      { rank: 3, handle: 'shivam_07', solved: 5, penalty: 135, college: 'RRGI Lucknow', points: 510 },
    ],
  },
];

export const INITIAL_CERTIFICATES = [
  {
    id: 'HCK-2025-0101',
    recipientName: 'Ashish Singh Thakur',
    eventName: 'RRGI Innovathon 2025',
    category: 'Organizing Lead & Technical Architect',
    issueDate: '2025-10-15',
    institution: 'R.R. Institute of Modern Technology (RRGI)',
    grade: 'Exemplary Leadership',
    verified: true,
    skills: ['Full-Stack Systems', 'Hackathon Architecture', 'Event Orchestration'],
  },
  {
    id: 'HCK-2025-0102',
    recipientName: 'Aarav Sharma',
    eventName: 'HACKLANCE Algorithmic Clash Autumn 2025',
    category: '1st Place Champion (Div 1)',
    issueDate: '2025-11-05',
    institution: 'R.R. Institute of Modern Technology (RRGI)',
    grade: 'Rank 1 / 180 Participants',
    verified: true,
    skills: ['Dynamic Programming', 'Graph Theory', 'C++ Algorithmics'],
  },
  {
    id: 'HCK-2025-0103',
    recipientName: 'Riya Patel',
    eventName: 'High-Concurrency System Design Workshop',
    category: 'Technical Workshop Completion',
    issueDate: '2025-12-02',
    institution: 'R.R. Institute of Modern Technology (RRGI)',
    grade: 'Completed with Distinction',
    verified: true,
    skills: ['Distributed Systems', 'Redis Caching', 'Node.js Microservices'],
  },
];

export const INITIAL_RESOURCES = [
  {
    id: 'res-01',
    slug: 'git-and-github-mastery-for-engineers',
    title: 'Git & GitHub Mastery for Collaborative Student Engineering',
    category: 'Developer Workflow',
    readTime: '8 min read',
    date: '2026-10-12',
    author: 'HACKLANCE Tech Leads',
    summary:
      'Master branch workflows, atomic conventional commits, merge conflict resolution, rebase vs merge, and pull request hygiene for campus hackathons.',
    content:
      'Understanding version control is the single most important skill that separates novice hobbyists from production-ready engineers. In this comprehensive guide, we cover standard trunk-based development, semantic branch naming, interactive rebase, and automated CI validations.',
    tags: ['Git', 'GitHub', 'Workflow', 'Best Practices'],
  },
  {
    id: 'res-02',
    slug: 'modern-react-and-vite-performance-handbook',
    title: 'Building Blazing Fast SPAs with React 19 and Vite 8',
    category: 'Frontend Engineering',
    readTime: '12 min read',
    date: '2026-09-28',
    author: 'Ashish Singh Thakur',
    summary:
      'Learn how to leverage Vite ES modules, bundle chunking, modern React concurrent features, and CSS variable tokens without heavy external UI bloat.',
    content:
      'When building web platforms for college communities, page load speed, mobile responsiveness, and zero layout shift are critical. Here is our architectural breakdown of how HACKLANCE achieves sub-300ms builds and 60fps animations.',
    tags: ['React', 'Vite', 'Performance', 'JavaScript'],
  },
  {
    id: 'res-03',
    slug: 'docker-and-linux-essentials-for-cs-students',
    title: 'Docker, Containers & Linux System Basics for College Hackathons',
    category: 'DevOps & Cloud',
    readTime: '10 min read',
    date: '2026-09-15',
    author: 'HACKLANCE Systems Team',
    summary:
      'Eliminate "it works on my machine" forever. Step-by-step tutorial on Dockerfiles, multi-stage builds, volumes, and running local PostgreSQL databases.',
    content:
      'Containers allow hackathon teams to share identical development environments in seconds. We walk through creating minimal Alpine-based container images, managing networks, and debugging runtime logs.',
    tags: ['Docker', 'Linux', 'DevOps', 'Containers'],
  },
  {
    id: 'res-04',
    slug: 'data-structures-and-algorithms-roadmap-rrgi',
    title: 'The Competitive Programming & Interview Roadmap (2026 Edition)',
    category: 'Algorithms',
    readTime: '15 min read',
    date: '2026-08-30',
    author: 'HACKLANCE CP Guild',
    summary:
      'A structured 90-day topic roadmap from time complexity and two-pointers to graphs, trees, and dynamic programming for technical placement rounds.',
    content:
      'Curated problem recommendations and mathematical explanations designed by seniors and alumni who cracked technical assessments.',
    tags: ['DSA', 'Algorithms', 'Interview Prep', 'C++'],
  },
];

export const INITIAL_FAQS = [
  {
    category: 'About & Membership',
    q: 'What is HACKLANCE and who can join?',
    a: 'HACKLANCE is the official student technical society and developer community of R.R. Institute of Modern Technology (RRGI), Lucknow. Any enrolled student of RRGI with a curiosity for technology, coding, design, or hardware is welcome to apply.',
  },
  {
    category: 'About & Membership',
    q: 'Do I need prior programming experience to join?',
    a: 'Not at all! We welcome enthusiastic beginners. Our community conducts beginner-friendly workshops, peer pair-programming sessions, and guided project cohorts to help you build your foundational skills.',
  },
  {
    category: 'Events & Hackathons',
    q: 'Are HACKLANCE hackathons open to students from other colleges?',
    a: 'Yes! Major flagship events such as our Winter Hackathon and online Algorithmic Clashes welcome external university participants and inter-college teams.',
  },
  {
    category: 'Events & Hackathons',
    q: 'How do I register for an upcoming event?',
    a: 'Visit the Events page, select your desired event, and click "Register Now". Complete the accessible registration form to receive your verified digital ticket and confirmation code.',
  },
  {
    category: 'Projects & Collaboration',
    q: 'How can I contribute to club projects?',
    a: 'All HACKLANCE core tools and student projects are hosted open-source on GitHub. You can check the Projects tab, find open issues with the "good-first-issue" label, or propose your own idea through the Join portal.',
  },
  {
    category: 'Certificates & Credentials',
    q: 'How can an employer or institution verify my HACKLANCE certificate?',
    a: 'Every official certificate issued by HACKLANCE carries a unique cryptographic ID (e.g., HCK-2025-0101). Anyone can enter this ID on our Certificates page to verify recipient authenticity, event name, issue date, and achieved distinction in real time.',
  },
  {
    category: 'Sponsorships & Partnerships',
    q: 'How can industry partners and companies collaborate with HACKLANCE?',
    a: 'We actively partner with tech companies, developer platforms, and startups for event sponsorships, API hackathon tracks, tech talks, and talent recruitment. Contact us at hacklance@rrgi.ac.in or through the Sponsors page.',
  },
];
