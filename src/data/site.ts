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

  // Downloadable CV (place the PDF in public/pdf/). Replace with an up-to-date file.
  cvUrl: '/pdf/Mohit_Vaishnav_CV.pdf',

  // Google Search Console verification token. Get it from
  // search.google.com/search-console (HTML-tag method) and paste the content
  // value here. Leave '' until you have it. See README §6.
  googleSiteVerification: '',

  // --- Knowledge-Graph entity signals ---------------------------------------
  // Primary roles, most-important first (used in the Person JSON-LD jobTitle).
  jobTitles: ['Co-founder & CEO', 'AI Researcher (Postdoctoral)'],
  // Proof-links that anchor your claims to authoritative third parties.
  // Fill these in and both the visible links + JSON-LD sameAs light up.
  kaggleUrl: '',        // e.g. https://www.kaggle.com/<username>
  crunchbaseUrl: '',    // Kimova AI Crunchbase profile (helps verify "CEO")
  googleCloudProofUrl: '', // Google Cloud startup directory / press release

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
  { id: 'researchgate', label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Mohit-Vaishnav-2', primary: false },
];

// Canonical identity graph — every authoritative profile that proves "this is
// the same person". Used verbatim as the Person JSON-LD `sameAs` (the single
// biggest signal for a Google Knowledge Panel). Add new verified profiles here.
export const sameAsProfiles = [
  'https://github.com/vaishnavmohit',
  'https://twitter.com/mohitvaishnav',
  'https://www.linkedin.com/in/mohit-vaishnav',
  'https://scholar.google.com/citations?user=jGOzdbgAAAAJ&hl',
  'https://www.researchgate.net/profile/Mohit-Vaishnav-2',
  'https://serre-lab.clps.brown.edu/person/mohit-vaishnav/',
  'https://orcid.org/0000-0002-9795-493X',
  'https://www.etis.ee/CV/mohit-vaishnav/eng/',
  'https://openreview.net/profile?id=~Mohit_Vaishnav1',
  'https://cv.hal.science/mohitvaishnav',
  'https://dblp.org/pid/82/9414.html',
];

// Academic profiles surfaced as visible links on the Research page
// (visible backlinks reinforce the same identity signal).
export const academicProfiles = [
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=jGOzdbgAAAAJ' },
  { label: 'DBLP', href: 'https://dblp.org/pid/82/9414.html' },
  { label: 'OpenReview', href: 'https://openreview.net/profile?id=~Mohit_Vaishnav1' },
  { label: 'ORCID', href: 'https://orcid.org/0000-0002-9795-493X' },
  { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Mohit-Vaishnav-2' },
  { label: 'HAL Science', href: 'https://cv.hal.science/mohitvaishnav' },
  { label: 'Serre Lab, Brown', href: 'https://serre-lab.clps.brown.edu/person/mohit-vaishnav/' },
];

// Headline metrics shown on Home + About.
export const stats = [
  { value: 'Top 5', label: 'Kaggle global rank', detail: 'of 3000+ — Half-Earth Challenge', link: site.kaggleUrl },
  { value: '15+', label: 'Publications', detail: 'NeurIPS · ICLR · Neural Computation', link: '/research' },
  { value: '10+', label: 'Countries', detail: 'research & work experience', link: '' },
  { value: 'PhD', label: 'Brown University / ANITI', detail: 'Cognitive AI & visual reasoning', link: '/about' },
];
