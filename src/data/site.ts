// ============================================================================
//  SITE CONFIG — edit this file to update your name, taglines, links, stats.
//  Everything below flows into the header, footer, SEO tags and JSON-LD.
// ============================================================================

export const site = {
  name: 'Mohit Vaishnav',
  fullName: 'Dr. Mohit Vaishnav',
  // Used in the browser tab + as the default <title> suffix
  shortTitle: 'Dr. Mohit Vaishnav',
  role: 'Co-founder & CEO, Kimova AI · AI Researcher',
  // One-line value proposition shown in the hero
  tagline: 'AI researcher turned founder — building intelligent automation for cybersecurity compliance.',
  // Longer description for meta tags / about
  description:
    'Dr. Mohit Vaishnav is Co-founder & CEO of Kimova AI, building AI-powered ISO 27001 compliance automation. PhD in Cognitive AI & Visual Reasoning (Brown University / ANITI). Former researcher at DFKI, Sandvik and TalTech. Published at NeurIPS, ICLR and Neural Computation.',
  url: 'https://vaishnavmohit.github.io',
  // Your email is NOT rendered anywhere on the site (to avoid scrapers/spam).
  // The contact form delivers messages to the inbox tied to your Web3Forms key.
  // Get a free key at https://web3forms.com (it emails you one) and paste it below.
  web3formsKey: '58a60631-e5b5-42f1-a600-bbf0cf626654',
  company: {
    name: 'Kimova AI',
    url: 'https://kimova.ai',
    description: 'AI-powered ISO 27001 cybersecurity compliance automation.',
  },
  location: 'Global · remote-first',
  // Default social card image (place a 1200x630 PNG at public/img/og-default.png)
  ogImage: '/img/og-default.png',

  // Google Analytics 4 measurement ID (carried over from the old site).
  // Only loads in the production build — never on localhost. Leave '' to disable.
  analyticsId: 'G-CJ1FLXGREG',

  keywords: [
    'Mohit Vaishnav', 'AI Entrepreneur', 'Kimova AI', 'Cybersecurity AI',
    'ISO 27001', 'Computer Vision', 'Deep Learning', 'Visual Reasoning',
    'Brown University', 'ANITI', 'Cognitive AI', 'Vision-Language Models',
    'NeurIPS', 'ICLR', 'AI CEO',
  ],
};

// Order here = order in the navbar.
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Research', href: '/research' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

// Social links — set `primary: true` on the ones to feature in the hero.
export const socials = [
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohit-vaishnav', primary: true },
  { id: 'scholar', label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=jGOzdbgAAAAJ', primary: true },
  { id: 'github', label: 'GitHub', href: 'https://github.com/vaishnavmohit', primary: true },
  { id: 'twitter', label: 'X / Twitter', href: 'https://twitter.com/mohitvaishnav', primary: true },
  { id: 'orcid', label: 'ORCID', href: 'https://orcid.org/0000-0002-9795-493X', primary: false },
];

// Headline metrics shown on Home + About.
export const stats = [
  { value: 'Top 5', label: 'Kaggle global rank', detail: 'of 3000+ — Half-Earth Challenge' },
  { value: '15+', label: 'Publications', detail: 'NeurIPS · ICLR · Neural Computation' },
  { value: '10+', label: 'Countries', detail: 'research & work experience' },
  { value: 'PhD', label: 'Brown University / ANITI', detail: 'Cognitive AI & visual reasoning' },
];
