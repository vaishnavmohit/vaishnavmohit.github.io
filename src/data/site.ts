// ============================================================================
//  SITE CONFIG — edit this file to update your name, taglines, links, stats.
//  Everything below flows into the header, footer, SEO tags and JSON-LD.
//
//  Knowledge-Graph note: the identity data in this file (identifiers, sameAs
//  profiles, employers, alma maters, the canonical bio) is what every page's
//  JSON-LD "Person" node is built from — see src/lib/schema.ts. Keep it
//  factual and consistent with your ORCID, Scholar and LinkedIn profiles.
// ============================================================================

export const site = {
  name: 'Mohit Vaishnav',
  fullName: 'Dr. Mohit Vaishnav',
  // Used in the browser tab + as the default <title> suffix
  shortTitle: 'Dr. Mohit Vaishnav',
  role: 'Co-founder & CEO, Kimova AI · AI Researcher',
  // One-line value proposition shown in the hero
  tagline: 'AI researcher turned founder — building intelligent automation for cybersecurity compliance.',
  // Longer description for meta tags (home page)
  description:
    'Dr. Mohit Vaishnav is Co-founder & CEO of Kimova AI, building AI-powered ISO 27001 compliance automation. PhD in Cognitive AI & Visual Reasoning (Brown University / ANITI). Former researcher at DFKI, Sandvik and TalTech. Published at NeurIPS, ICLR and Neural Computation.',
  // Canonical biography — paste this VERBATIM on every profile (LinkedIn,
  // ORCID, Scholar, Crunchbase, Wikidata description…). Consistent wording
  // across the web is one of the strongest entity signals for Google.
  bio:
    'Dr. Mohit Vaishnav is the Co-founder & CEO of Kimova AI, a Tallinn-based company that automates ISO 27001 cybersecurity audits with AI, and a postdoctoral researcher in the Applied Artificial Intelligence Group at Tallinn University of Technology (TalTech). He earned his PhD in computer science (cognitive AI and visual reasoning) from Université Toulouse III, with research conducted at Brown University\'s Serre Lab and ANITI under Thomas Serre and Nicholas Asher. His work on visual reasoning, attention and vision-language models has been published at NeurIPS, ICLR and in Neural Computation.',
  url: 'https://vaishnavmohit.github.io',
  // Your email is NOT rendered anywhere on the site (to avoid scrapers/spam).
  // The contact form delivers messages to the inbox tied to your Web3Forms key.
  // Get a free key at https://web3forms.com (it emails you one) and paste it below.
  web3formsKey: '58a60631-e5b5-42f1-a600-bbf0cf626654',
  company: {
    name: 'Kimova AI',
    legalName: 'KIMOVA AI OÜ',
    url: 'https://kimova.ai',
    description: 'AI-powered ISO 27001 cybersecurity compliance automation.',
    // From the Estonian e-Business Register (ariregister.rik.ee)
    registryCode: '16986492',
    foundingDate: '2024-05-13',
    address: {
      streetAddress: 'Lõõtsa tn 5-11, Lasnamäe linnaosa',
      addressLocality: 'Tallinn',
      postalCode: '11415',
      addressCountry: 'EE',
    },
    // Authoritative pages about the company (Organization JSON-LD sameAs)
    sameAs: [
      'https://www.linkedin.com/company/kimova-ai',
      'https://www.crunchbase.com/organization/kimova-ai',
      'https://ariregister.rik.ee/eng/company/16986492',
      'https://medium.com/@KimovaAI',
    ],
  },
  location: 'Tallinn, Estonia · remote-first',
  homeLocation: { addressLocality: 'Tallinn', addressCountry: 'EE' },
  // Default social card image (place a 1200x630 PNG at public/img/og-default.png)
  ogImage: '/img/og-default.png',
  // Portrait photos used as the Person "image" in JSON-LD. Google prefers a
  // clear headshot; the square crop is generated from profile.jpg.
  portrait: '/img/profile.jpg',
  portraitSquare: '/img/profile-square.jpg',

  // Google Analytics 4 measurement ID (carried over from the old site).
  // Only loads in the production build — never on localhost. Leave '' to disable.
  analyticsId: 'G-CJ1FLXGREG',

  // Downloadable CV (place the PDF in public/pdf/). Replace with an up-to-date file.
  cvUrl: '/pdf/Mohit_Vaishnav_CV.pdf',

  // Google Search Console verification token. Get it from
  // search.google.com/search-console (HTML-tag method) and paste the content
  // value here. Leave '' until you have it. See README §4b.
  googleSiteVerification: '',

  // --- Knowledge-Graph entity signals ---------------------------------------
  // Primary roles, most-important first (used in the Person JSON-LD jobTitle).
  jobTitles: ['Co-founder & CEO', 'Postdoctoral Researcher'],
  // Proof-links that anchor your claims to authoritative third parties.
  kaggleUrl: 'https://www.kaggle.com/mohitvaishnav',
  crunchbaseUrl: '',       // your Crunchbase *person* page, once created
  wikidataUrl: '',         // e.g. https://www.wikidata.org/wiki/Q… once the item exists
  googleCloudProofUrl: '', // Google Cloud startup directory / press release

  keywords: [
    'Mohit Vaishnav', 'AI Entrepreneur', 'Kimova AI', 'Cybersecurity AI',
    'ISO 27001', 'Computer Vision', 'Deep Learning', 'Visual Reasoning',
    'Brown University', 'ANITI', 'Cognitive AI', 'Vision-Language Models',
    'NeurIPS', 'ICLR', 'AI CEO',
  ],
};

// Persistent identifiers — emitted as Person "identifier" PropertyValues and
// used to build the canonical profile URLs below.
export const identifiers = {
  orcid: '0000-0002-9795-493X',
  googleScholar: 'jGOzdbgAAAAJ',
  dblp: '82/9414',
  semanticScholar: '39892403',
  idref: '273963759',               // French national authority record (IdRef)
  viaf: '181170519565203301200',    // Virtual International Authority File
  thesesFr: '2023TOU30139',         // theses.fr national thesis number
  halId: 'mohitvaishnav',           // HAL open-archive author id (IdHAL)
  githubUser: 'vaishnavmohit',
  xHandle: 'mohitvaishnav',
  linkedinSlug: 'mohit-vaishnav',
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
  { id: 'linkedin', label: 'LinkedIn', href: `https://www.linkedin.com/in/${identifiers.linkedinSlug}`, primary: true },
  { id: 'scholar', label: 'Google Scholar', href: `https://scholar.google.com/citations?user=${identifiers.googleScholar}`, primary: true },
  { id: 'github', label: 'GitHub', href: `https://github.com/${identifiers.githubUser}`, primary: true },
  { id: 'twitter', label: 'X / Twitter', href: `https://x.com/${identifiers.xHandle}`, primary: true },
  { id: 'orcid', label: 'ORCID', href: `https://orcid.org/${identifiers.orcid}`, primary: false },
  { id: 'researchgate', label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Mohit-Vaishnav-2', primary: false },
];

// Canonical identity graph — every authoritative profile that proves "this is
// the same person". Used verbatim as the Person JSON-LD `sameAs` and as
// <link rel="me"> tags. Only list pages that are about YOU (not the company).
export const sameAsProfiles = [
  // Professional / social
  `https://www.linkedin.com/in/${identifiers.linkedinSlug}`,
  `https://github.com/${identifiers.githubUser}`,
  `https://x.com/${identifiers.xHandle}`,
  site.kaggleUrl,
  'https://www.f6s.com/member/mohit-vaishnav',
  // Academic identity
  `https://orcid.org/${identifiers.orcid}`,
  `https://scholar.google.com/citations?user=${identifiers.googleScholar}`,
  `https://dblp.org/pid/${identifiers.dblp}.html`,
  `https://www.semanticscholar.org/author/${identifiers.semanticScholar}`,
  'https://www.researchgate.net/profile/Mohit-Vaishnav-2',
  'https://openreview.net/profile?id=~Mohit_Vaishnav1',
  'https://aclanthology.org/people/m/mohit-vaishnav/',
  `https://cv.hal.science/${identifiers.halId}`,
  // Authority records (national libraries / thesis registries)
  `https://theses.fr/${identifiers.thesesFr}`,
  `https://www.idref.fr/${identifiers.idref}`,
  `https://viaf.org/viaf/${identifiers.viaf}`,
  // Institutional pages
  'https://taltech.ee/en/contacts/applied-artificial-intelligence-group/mohit-vaishnav',
  'https://www.etis.ee/CV/mohit-vaishnav/eng/',
  'https://serre.lab.brown.edu/#/people',
  // Company registry (lists you as board member of KIMOVA AI OÜ)
  'https://www.inforegister.ee/en/2418804-ID/',
  // Optional — light up automatically once filled in above
  site.crunchbaseUrl,
  site.wikidataUrl,
].filter(Boolean);

// Academic profiles surfaced as visible links on the Research page
// (visible backlinks reinforce the same identity signal).
export const academicProfiles = [
  { label: 'Google Scholar', href: `https://scholar.google.com/citations?user=${identifiers.googleScholar}` },
  { label: 'ORCID', href: `https://orcid.org/${identifiers.orcid}` },
  { label: 'DBLP', href: `https://dblp.org/pid/${identifiers.dblp}.html` },
  { label: 'Semantic Scholar', href: `https://www.semanticscholar.org/author/${identifiers.semanticScholar}` },
  { label: 'OpenReview', href: 'https://openreview.net/profile?id=~Mohit_Vaishnav1' },
  { label: 'ACL Anthology', href: 'https://aclanthology.org/people/m/mohit-vaishnav/' },
  { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Mohit-Vaishnav-2' },
  { label: 'HAL', href: `https://cv.hal.science/${identifiers.halId}` },
  { label: 'theses.fr', href: `https://theses.fr/${identifiers.thesesFr}` },
  { label: 'TalTech', href: 'https://taltech.ee/en/contacts/applied-artificial-intelligence-group/mohit-vaishnav' },
  { label: 'Serre Lab, Brown', href: 'https://serre.lab.brown.edu/#/people' },
];

// Compact "Elsewhere" list shown on the About page.
export const identityLinks = [
  { label: 'LinkedIn', href: `https://www.linkedin.com/in/${identifiers.linkedinSlug}` },
  { label: 'X', href: `https://x.com/${identifiers.xHandle}` },
  { label: 'GitHub', href: `https://github.com/${identifiers.githubUser}` },
  { label: 'Google Scholar', href: `https://scholar.google.com/citations?user=${identifiers.googleScholar}` },
  { label: 'ORCID', href: `https://orcid.org/${identifiers.orcid}` },
  { label: 'Kaggle', href: site.kaggleUrl },
  { label: 'F6S', href: 'https://www.f6s.com/member/mohit-vaishnav' },
  { label: 'TalTech', href: 'https://taltech.ee/en/contacts/applied-artificial-intelligence-group/mohit-vaishnav' },
  { label: 'ETIS (Estonian Research Portal)', href: 'https://www.etis.ee/CV/mohit-vaishnav/eng/' },
  { label: 'Kimova AI', href: site.company.url },
];

// Universities — order matters (most recent first). Used for Person.alumniOf.
export const almaMaters = [
  {
    name: 'Université Toulouse III – Paul Sabatier',
    url: 'https://www.univ-tlse3.fr',
    sameAs: 'https://en.wikipedia.org/wiki/Paul_Sabatier_University',
    address: { addressLocality: 'Toulouse', addressCountry: 'FR' },
  },
  {
    name: 'Brown University',
    url: 'https://www.brown.edu',
    sameAs: 'https://en.wikipedia.org/wiki/Brown_University',
    address: { addressLocality: 'Providence', addressRegion: 'RI', addressCountry: 'US' },
  },
  {
    name: 'ANITI — Artificial and Natural Intelligence Toulouse Institute',
    url: 'https://aniti.univ-toulouse.fr',
    address: { addressLocality: 'Toulouse', addressCountry: 'FR' },
  },
  {
    name: 'Heriot-Watt University',
    url: 'https://www.hw.ac.uk',
    sameAs: 'https://en.wikipedia.org/wiki/Heriot-Watt_University',
    address: { addressLocality: 'Edinburgh', addressCountry: 'GB' },
  },
  {
    name: 'Université de Bourgogne',
    url: 'https://www.u-bourgogne.fr',
    sameAs: 'https://en.wikipedia.org/wiki/University_of_Burgundy',
    address: { addressLocality: 'Dijon', addressCountry: 'FR' },
  },
  {
    name: 'Universitat de Girona',
    url: 'https://www.udg.edu',
    sameAs: 'https://en.wikipedia.org/wiki/University_of_Girona',
    address: { addressLocality: 'Girona', addressCountry: 'ES' },
  },
  {
    name: 'The LNM Institute of Information Technology',
    url: 'https://www.lnmiit.ac.in',
    sameAs: 'https://en.wikipedia.org/wiki/LNM_Institute_of_Information_Technology',
    address: { addressLocality: 'Jaipur', addressCountry: 'IN' },
  },
];

// Current academic employer (the company is described in site.company).
export const university = {
  name: 'Tallinn University of Technology (TalTech)',
  url: 'https://taltech.ee',
  sameAs: 'https://en.wikipedia.org/wiki/Tallinn_University_of_Technology',
  department: 'Applied Artificial Intelligence Group, Department of Software Science',
  address: { addressLocality: 'Tallinn', addressCountry: 'EE' },
};

// Headline metrics shown on Home + About.
export const stats = [
  { value: 'Top 5', label: 'Kaggle global rank', detail: 'of 3000+ — Half-Earth Challenge', link: site.kaggleUrl },
  { value: '15+', label: 'Publications', detail: 'NeurIPS · ICLR · Neural Computation', link: '/research' },
  { value: '10+', label: 'Countries', detail: 'research & work experience', link: '' },
  { value: 'PhD', label: 'Brown University / ANITI', detail: 'Cognitive AI & visual reasoning', link: '/about' },
];
