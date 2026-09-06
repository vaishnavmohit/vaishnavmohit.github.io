// ============================================================================
//  JSON-LD builders. Every page emits one <script type="application/ld+json">
//  containing an @graph of: WebSite, Person, Organization (Kimova AI), the
//  page itself (ProfilePage / WebPage / …), a BreadcrumbList, plus any
//  page-specific nodes (ScholarlyArticle list, Thesis, BlogPosting).
//
//  All nodes share stable @id URIs so Google can merge them into one entity
//  regardless of which page it crawls first.
// ============================================================================

import { site, identifiers, sameAsProfiles, almaMaters, university } from '@data/site';
import { awards, education } from '@data/experience';
import pubData from '@data/publications.json';

export const PERSON_ID = `${site.url}/#person`;
export const ORG_ID = `${site.url}/#kimova-ai`;
export const WEBSITE_ID = `${site.url}/#website`;
export const UNIVERSITY_ID = `${site.url}/#taltech`;

const abs = (path: string) => new URL(path, site.url).href;

type Node = Record<string, unknown>;

// Well-known co-authors / advisors with Wikidata items — lets Google connect
// your papers to people it already knows.
const KNOWN_PEOPLE: Record<string, string[]> = {
  'Thomas Serre': ['https://www.wikidata.org/wiki/Q60055958', 'https://serre.lab.brown.edu'],
  'Nicholas Asher': ['https://www.wikidata.org/wiki/Q76746460'],
  'Rufin VanRullen': ['https://www.wikidata.org/wiki/Q41045465'],
};

function personRef(name: string): Node {
  if (name === site.name) return { '@id': PERSON_ID };
  const p: Node = { '@type': 'Person', name };
  if (KNOWN_PEOPLE[name]) p.sameAs = KNOWN_PEOPLE[name];
  return p;
}

function collegeNode(u: { name: string; url: string; sameAs?: string; address?: Record<string, string> }): Node {
  const n: Node = { '@type': 'CollegeOrUniversity', name: u.name, url: u.url };
  if (u.sameAs) n.sameAs = u.sameAs;
  if (u.address) n.address = { '@type': 'PostalAddress', ...u.address };
  return n;
}

function imageObject(path: string, width: number, height: number, caption: string): Node {
  return {
    '@type': 'ImageObject',
    '@id': `${abs(path)}#image`,
    url: abs(path),
    contentUrl: abs(path),
    width,
    height,
    caption,
  };
}

export function organizationNode(): Node {
  const c = site.company;
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: c.name,
    legalName: c.legalName,
    url: c.url,
    description: c.description,
    foundingDate: c.foundingDate,
    foundingLocation: {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', addressLocality: 'Tallinn', addressCountry: 'EE' },
    },
    address: { '@type': 'PostalAddress', ...c.address },
    founder: [{ '@id': PERSON_ID }, { '@type': 'Person', name: 'Krishna Vaishnav' }],
    employee: { '@id': PERSON_ID },
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'Estonian business registry code',
      value: c.registryCode,
    },
    sameAs: c.sameAs,
  };
}

export function universityNode(): Node {
  return {
    ...collegeNode(university),
    '@id': UNIVERSITY_ID,
    department: { '@type': 'Organization', name: university.department },
  };
}

export function personNode(): Node {
  const phd = education[0];
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: site.name,
    alternateName: ['Dr. Mohit Vaishnav', 'Mohit Vaishnav, PhD'],
    givenName: 'Mohit',
    familyName: 'Vaishnav',
    honorificPrefix: 'Dr.',
    honorificSuffix: 'PhD',
    url: `${site.url}/`,
    mainEntityOfPage: `${site.url}/`,
    image: [
      imageObject(site.portraitSquare, 800, 800, 'Dr. Mohit Vaishnav'),
      imageObject(site.portrait, 900, 846, 'Dr. Mohit Vaishnav'),
      imageObject(site.ogImage, 1200, 630, 'Dr. Mohit Vaishnav — Co-founder & CEO, Kimova AI'),
    ],
    description: site.bio,
    jobTitle: site.jobTitles,
    hasOccupation: [
      {
        '@type': 'Occupation',
        name: 'Chief Executive Officer',
        occupationLocation: { '@type': 'City', name: 'Tallinn' },
        skills: 'Artificial intelligence, cybersecurity compliance automation, product strategy',
      },
      {
        '@type': 'Occupation',
        name: 'Postdoctoral Researcher',
        occupationLocation: { '@type': 'City', name: 'Tallinn' },
        skills: 'Vision-language models, visual reasoning, cognitive AI',
      },
    ],
    worksFor: [{ '@id': ORG_ID }, { '@id': UNIVERSITY_ID }],
    affiliation: [{ '@id': ORG_ID }, { '@id': UNIVERSITY_ID }],
    alumniOf: almaMaters.map(collegeNode),
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      educationalLevel: 'Doctorate',
      name: `${phd.degree} — ${phd.field}`,
      recognizedBy: collegeNode(almaMaters[0]),
      dateCreated: '2023-04-13',
    },
    homeLocation: {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', ...site.homeLocation },
    },
    knowsAbout: [
      'Artificial Intelligence', 'Machine Learning', 'Computer Vision', 'Deep Learning',
      'Cognitive AI', 'Visual Reasoning', 'Vision-Language Models', 'Transformer Architecture',
      'Cybersecurity Compliance', 'ISO 27001', 'Enterprise AI',
    ],
    knowsLanguage: 'en',
    award: awards.map((a) => a.title),
    identifier: [
      { '@type': 'PropertyValue', propertyID: 'ORCID', value: identifiers.orcid, url: `https://orcid.org/${identifiers.orcid}` },
      { '@type': 'PropertyValue', propertyID: 'Google Scholar ID', value: identifiers.googleScholar, url: `https://scholar.google.com/citations?user=${identifiers.googleScholar}` },
      { '@type': 'PropertyValue', propertyID: 'DBLP', value: identifiers.dblp, url: `https://dblp.org/pid/${identifiers.dblp}.html` },
      { '@type': 'PropertyValue', propertyID: 'Semantic Scholar author ID', value: identifiers.semanticScholar, url: `https://www.semanticscholar.org/author/${identifiers.semanticScholar}` },
      { '@type': 'PropertyValue', propertyID: 'IdRef', value: identifiers.idref, url: `https://www.idref.fr/${identifiers.idref}` },
      { '@type': 'PropertyValue', propertyID: 'VIAF', value: identifiers.viaf, url: `https://viaf.org/viaf/${identifiers.viaf}` },
      { '@type': 'PropertyValue', propertyID: 'theses.fr', value: identifiers.thesesFr, url: `https://theses.fr/${identifiers.thesesFr}` },
      { '@type': 'PropertyValue', propertyID: 'IdHAL', value: identifiers.halId, url: `https://cv.hal.science/${identifiers.halId}` },
    ],
    sameAs: sameAsProfiles,
  };
}

export function websiteNode(): Node {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${site.url}/`,
    name: site.fullName,
    alternateName: [site.name, 'Mohit Vaishnav portfolio'],
    description: site.description,
    inLanguage: 'en',
    publisher: { '@id': PERSON_ID },
    author: { '@id': PERSON_ID },
    copyrightHolder: { '@id': PERSON_ID },
  };
}

const SECTION_TITLES: Record<string, string> = {
  about: 'About',
  experience: 'Experience',
  research: 'Research',
  blog: 'Blog',
  contact: 'Contact',
  'phd-thesis': 'PhD Thesis',
  privacy: 'Privacy',
};

export function breadcrumbNode(pathname: string, pageTitle: string): Node {
  const segs = pathname.split('/').filter(Boolean);
  const items: Node[] = [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` }];
  let acc = '';
  segs.forEach((seg, i) => {
    acc += `/${seg}`;
    const last = i === segs.length - 1;
    items.push({
      '@type': 'ListItem',
      position: i + 2,
      name: last ? pageTitle : SECTION_TITLES[seg] ?? seg,
      item: `${site.url}${acc}/`,
    });
  });
  return { '@type': 'BreadcrumbList', '@id': `${abs(pathname)}#breadcrumb`, itemListElement: items };
}

export type PageType = 'ProfilePage' | 'WebPage' | 'CollectionPage' | 'ContactPage' | 'AboutPage';

export function pageNode(opts: {
  pathname: string;
  pageType: PageType;
  title: string;
  description: string;
  image: string;
}): Node {
  const url = abs(opts.pathname);
  const n: Node = {
    '@type': opts.pageType,
    '@id': `${url}#webpage`,
    url,
    name: opts.title,
    description: opts.description,
    inLanguage: 'en',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': PERSON_ID },
    primaryImageOfPage: { '@id': `${abs(opts.image)}#image` },
    breadcrumb: { '@id': `${url}#breadcrumb` },
  };
  if (opts.pageType === 'ProfilePage') {
    n.mainEntity = { '@id': PERSON_ID };
    n.dateModified = pubData.meta.lastSynced;
  }
  return n;
}

// ---------------------------------------------------------------------------
//  Page-specific nodes
// ---------------------------------------------------------------------------

function splitAuthors(authors: string): string[] {
  return authors
    .split(',')
    .map((a) => a.trim())
    .filter((a) => a && !/^et al\.?$/i.test(a));
}

export function publicationsListNode(): Node {
  const pubs = [...pubData.publications].sort((a, b) => (b.year - a.year) || (b.citations - a.citations));
  return {
    '@type': 'ItemList',
    '@id': `${site.url}/research/#publications`,
    name: `Publications by ${site.fullName}`,
    numberOfItems: pubs.length,
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    itemListElement: pubs.map((p, i) => {
      const links = Object.values(p.links ?? {});
      const item: Node = {
        '@type': p.type === 'thesis' ? 'Thesis' : 'ScholarlyArticle',
        name: p.title,
        headline: p.title,
        author: splitAuthors(p.authors).map(personRef),
        datePublished: String(p.year),
        isPartOf: { '@type': 'CreativeWork', name: p.venue },
        inLanguage: 'en',
      };
      if (p.abstract) item.abstract = p.abstract;
      if (links.length) {
        item.url = links[0];
        item.sameAs = links;
      }
      if (p.type === 'thesis') item['@id'] = `${site.url}/phd-thesis/#thesis`;
      return { '@type': 'ListItem', position: i + 1, item };
    }),
  };
}

export function thesisNode(): Node {
  const phd = education[0];
  return {
    '@type': 'Thesis',
    '@id': `${site.url}/phd-thesis/#thesis`,
    name: 'Exploring the role of (self-)attention in cognitive and computer vision architecture',
    headline: 'Exploring the role of (self-)attention in cognitive and computer vision architecture',
    author: { '@id': PERSON_ID },
    inSupportOf: `${phd.degree} — Computer Science and Telecommunications`,
    datePublished: '2023-04-13',
    inLanguage: 'en',
    url: `${site.url}/phd-thesis/`,
    publisher: collegeNode(almaMaters[0]),
    sourceOrganization: [collegeNode(almaMaters[1]), collegeNode(almaMaters[2])],
    contributor: [
      { ...personRef('Thomas Serre'), roleName: 'Thesis director' },
      { ...personRef('Nicholas Asher'), roleName: 'Thesis co-director' },
    ],
    identifier: [
      { '@type': 'PropertyValue', propertyID: 'NNT', value: identifiers.thesesFr },
      { '@type': 'PropertyValue', propertyID: 'arXiv', value: '2306.14650' },
      { '@type': 'PropertyValue', propertyID: 'HAL', value: 'tel-04354304' },
    ],
    sameAs: [
      `https://theses.fr/${identifiers.thesesFr}`,
      'https://arxiv.org/abs/2306.14650',
      'https://theses.hal.science/tel-04354304',
    ],
    abstract:
      'Investigates the role of attention and memory in complex visual reasoning. Analyses Transformer self-attention, extends it with memory, refines the taxonomy of SVRT reasoning tasks, and proposes GAMR — a cognitive architecture combining attention and memory inspired by active-vision theory.',
  };
}

export function blogPostingNode(opts: {
  slug: string;
  title: string;
  description: string;
  date: Date;
  tags: string[];
  image?: string;
}): Node {
  const url = `${site.url}/blog/${opts.slug}/`;
  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: opts.title,
    description: opts.description,
    datePublished: opts.date.toISOString(),
    dateModified: opts.date.toISOString(),
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    image: abs(opts.image ?? site.ogImage),
    keywords: opts.tags.join(', '),
    inLanguage: 'en',
    mainEntityOfPage: { '@id': `${url}#webpage` },
    isPartOf: { '@id': WEBSITE_ID },
  };
}

/** Assemble the full graph for a page. */
export function buildGraph(opts: {
  pathname: string;
  pageType: PageType;
  title: string;
  description: string;
  image: string;
  extra?: Node[];
}): Node {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      websiteNode(),
      personNode(),
      organizationNode(),
      universityNode(),
      pageNode(opts),
      breadcrumbNode(opts.pathname, opts.title),
      ...(opts.extra ?? []),
    ],
  };
}
