// ============================================================================
//  EXPERIENCE, EDUCATION & AWARDS — edit entries here; pages render from them.
// ============================================================================

export type Role = {
  title: string;
  org: string;
  location?: string;
  period: string;
  current?: boolean;
  summary?: string;
  points?: string[];
  tags?: string[];
};

export const experience: Role[] = [
  {
    title: 'Co-founder & CEO',
    org: 'Kimova AI',
    location: 'Remote-first',
    period: '2024 — Present',
    current: true,
    summary:
      'Pioneering AI-driven ISO auditing — transforming how organizations achieve and maintain cybersecurity compliance.',
    points: [
      'Revolutionizing ISO/IEC 27001:2022 compliance assessments with AI automation.',
      'Lead product strategy, fundraising, partnerships and client engagements.',
      'Driving the roadmap from research-grade models to enterprise-ready product.',
    ],
    tags: ['Startup', 'AI/ML', 'Cybersecurity', 'Leadership'],
  },
  {
    title: 'Postdoctoral Researcher',
    org: 'TalTech University, Estonia',
    location: 'Tallinn, Estonia',
    period: '2024 — Present',
    current: true,
    summary:
      'Leading multidisciplinary research under the EXAI grant on multimodal reasoning agents.',
    points: [
      'Designing novel evaluation pipelines for large vision-language models.',
      'Developed AI agents with enhanced reasoning capabilities.',
      'Established new state-of-the-art benchmarks on real-world datasets.',
    ],
    tags: ['Research', 'VLMs', 'Academia'],
  },
  {
    title: 'Data Scientist',
    org: 'Sandvik — Center for AI and Automation',
    location: 'Germany',
    period: '2024',
    summary:
      'End-to-end AI solutions delivered within an Azure cloud environment.',
    points: [
      'Led development and deployment of production AI services.',
      'Aligned business needs with technical execution across stakeholders.',
      'Owned platform reliability and seamless integration of AI services.',
    ],
    tags: ['Industry', 'Azure', 'AI/ML'],
  },
  {
    title: 'Researcher',
    org: 'German Research Center for AI (DFKI)',
    location: 'Germany',
    period: '2023',
    summary:
      'Perception systems for driver behavioral modeling in connected & automated mobility (CCAM).',
    points: [
      'Applied Bayesian Belief Networks for scalable Driver Behavioral Models.',
      'Contributed to the EU Horizon project BERTHA.',
    ],
    tags: ['Research', 'Automotive', 'EU Project'],
  },
  {
    title: 'Doctoral Researcher',
    org: 'Serre Lab, Brown University / ANITI',
    location: 'USA / France',
    period: '2019 — 2023',
    summary:
      'Research on abstract reasoning and attention mechanisms in cognitive and computer vision.',
    points: [
      'Developed novel architectures combining attention and memory (GAMR).',
      'Published in NeurIPS, ICLR and Neural Computation.',
      'Optimized multi-million-parameter Transformers on multi-GPU HPC (Slurm).',
    ],
    tags: ['PhD', 'Research', 'Publications'],
  },
  {
    title: 'Research Engineer',
    org: 'WeDiagnostiX',
    location: 'France',
    period: 'Feb 2019 — Jul 2019',
    summary:
      'First working prototype for maxillary structure classification from X-ray images.',
    points: [
      'Deep learning for semantic & instance segmentation of teeth.',
      'Built an end-to-end pipeline from data collection to functional prototype.',
    ],
    tags: ['Medical AI', 'Computer Vision'],
  },
];

export type EarlyVenture = {
  name: string;
  role: string;
  location: string;
  description: string;
  tags: string[];
};

export const earlyVentures: EarlyVenture[] = [
  {
    name: 'Kevin Technology',
    role: 'Co-founder',
    location: 'Ajmer, India · 2016–2017',
    description:
      'Co-founded a startup developing surveillance systems based on computer vision.',
    tags: ['Startup', 'Computer Vision'],
  },
  {
    name: 'Shree Bherunath Granite',
    role: 'Operations',
    location: 'Rajsamand, India · 2014–2016',
    description:
      'Helped set up family granite mines; oversaw daily operations supervising 20 employees.',
    tags: ['Business', 'Operations'],
  },
];

export type Education = {
  degree: string;
  field?: string;
  institutions: string;
  period: string;
  thesis?: string;
  supervisor?: string;
};

export const education: Education[] = [
  {
    degree: 'Doctor of Philosophy (PhD)',
    field: 'Cognitive AI & Computer Vision',
    institutions: 'Brown University (USA) · ANITI / Université Paul Sabatier (France)',
    period: '2019 — 2023',
    thesis:
      'Exploring the role of (self-)attention in cognitive and computer vision architectures',
    supervisor: 'Prof. Thomas Serre (Brown University)',
  },
  {
    degree: 'Erasmus Joint MSc — Vision & Robotics (VIBOT)',
    institutions: 'Heriot-Watt (UK) · Univ. of Bourgogne (France) · Univ. of Girona (Spain)',
    period: '2017 — 2019',
    thesis: 'MU-Net: a deep learning model for teeth segmentation from panoramic X-ray images',
    supervisor: 'Prof. Hugues Talbot (CentraleSupélec)',
  },
  {
    degree: 'B.Tech (Hons.) — Electronics & Communication Engineering',
    institutions: 'LNM Institute of Information Technology, India',
    period: '2009 — 2013',
    thesis: 'Residue coding technique for video compression',
    supervisor: 'Assoc. Prof. Anil Kumar Tiwari (IIT Jodhpur)',
  },
];

export type Award = {
  year: string;
  title: string;
  org: string;
  description: string;
  tags: string[];
};

export const awards: Award[] = [
  {
    year: '2022',
    title: 'Top 5 Global — Kaggle Half-Earth Challenge',
    org: 'Kaggle',
    description:
      'Top-5 of 3000+ participants (99.9th percentile) in advanced plant-species identification using state-of-the-art computer vision.',
    tags: ['Global AI Competition'],
  },
  {
    year: '2024',
    title: 'Google Cloud Startup Program',
    org: 'Google Cloud',
    description:
      'Selected for Kimova AI — enterprise-grade infrastructure, technical support and strategic guidance to scale AI-driven cybersecurity.',
    tags: ['Startup Accelerator'],
  },
  {
    year: '2020',
    title: 'Arctic Code Vault Contributor',
    org: 'GitHub & Long Now Foundation',
    description:
      'Selected contributor to GitHub’s 1,000-year preservation of critical open-source software.',
    tags: ['Open Source'],
  },
  {
    year: '2019–2022',
    title: 'ANR Doctoral Fellowship',
    org: 'ANITI — French National Research Agency',
    description:
      'Prestigious doctoral fellowship from one of France’s four flagship AI institutes.',
    tags: ['PhD Fellowship'],
  },
  {
    year: '2017',
    title: 'Charpak Excellence Scholarship',
    org: 'Government of France',
    description:
      'Scholarship for outstanding international students, named after Nobel laureate Georges Charpak.',
    tags: ['Excellence Scholarship'],
  },
  {
    year: '2010–2013',
    title: 'KVPY National Fellowship',
    org: 'Dept. of Science & Technology, India',
    description:
      'National fellowship recognizing exceptional promise in engineering and scientific research.',
    tags: ['National Fellowship'],
  },
];
