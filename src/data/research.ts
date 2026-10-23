// ============================================================================
//  RESEARCH PAGE — edit entries here; /research renders from them.
//  Published papers live in publications.json; this file holds the narrative
//  (research dimensions), news highlights and unpublished work in progress.
// ============================================================================

export type Highlight = {
  date: string;      // shown as-is, e.g. 'Dec 2026'
  title: string;
  detail: string;
  href?: string;
};

// Newest first. Keep 3–5 items; older ones can be removed.
export const highlights: Highlight[] = [
  {
    date: 'Jan 2027',
    title: 'Global Young Scientists Summit (GYSS) 2027, Singapore',
    detail: 'Selected participant at the National Research Foundation’s summit with Nobel, Fields, Turing and Millennium Technology Prize laureates.',
    href: 'https://gyss.nrf.gov.sg/',
  },
  {
    date: 'Dec 2026',
    title: 'J2C at NeurIPS 2026',
    detail: '“Beyond the Linear Separability Ceiling” (TMLR 2026), in the NeurIPS Journal-to-Conference track.',
    href: 'https://arxiv.org/abs/2507.07574',
  },
  {
    date: '2026',
    title: 'Oral presentation at ACL 2026',
    detail: '“Symbolic Grounding Reveals Representational Bottlenecks in Abstract Visual Reasoning” (CoNLL 2026).',
    href: 'https://arxiv.org/abs/2604.21346',
  },
  {
    date: '2026',
    title: 'CVPR 2026 Workshop',
    detail: '“Concept Cues Reshape Human Verification in Bongard-LOGO Visual Reasoning” at the Knowledge-Intensive Multimodal Reasoning workshop.',
  },
];

export type Theme = {
  title: string;
  period: string;
  summary: string;
  papers: { label: string; href?: string }[];
};

// The research dimensions, most recent first.
export const themes: Theme[] = [
  {
    title: 'Perception vs. reasoning in vision-language models',
    period: '2024 — now · TalTech',
    summary:
      'When a VLM fails an abstract visual puzzle, did it fail to see or fail to think? I build diagnostics that separate the two — cognitive-paradigm evaluations, linear-probe baselines on visual embeddings, and symbolic grounding — and training objectives that move models past the bottleneck.',
    papers: [
      { label: 'TMLR 2026 · J2C at NeurIPS 2026', href: 'https://arxiv.org/abs/2507.07574' },
      { label: 'CoNLL 2026 · Oral at ACL 2026', href: 'https://arxiv.org/abs/2604.21346' },
      { label: 'Cognitive paradigm probe (2025)', href: 'https://arxiv.org/abs/2501.13620' },
    ],
  },
  {
    title: 'Humans and models on the same task',
    period: '2025 — now',
    summary:
      'Running people and models through the same visual-verification experiments to ask which differences come from representation and which from the decision rule — and what concept cues change for each.',
    papers: [
      { label: 'CVPR Workshop 2026' },
      { label: 'Work in progress ↓', href: '#in-progress' },
    ],
  },
  {
    title: 'Attention & memory for visual reasoning',
    period: '2019 — 2023 · PhD, Brown / ANITI',
    summary:
      'A taxonomy of the computational demands of visual reasoning, a benchmark for compositional reasoning, and GAMR — a guided-attention architecture that routes task-relevant information into memory and generalises zero-shot to new tasks.',
    papers: [
      { label: 'ICLR 2023 · GAMR', href: 'https://openreview.net/forum?id=iLMgk2IGNyv' },
      { label: 'NeurIPS 2022 · CVR', href: 'https://arxiv.org/abs/2206.05379' },
      { label: 'Neural Computation 2022', href: 'https://doi.org/10.1162/neco_a_01485' },
      { label: 'PhD thesis', href: '/phd-thesis' },
    ],
  },
  {
    title: 'Vision at scale for science',
    period: '2020 — 2022',
    summary:
      'High-resolution vision transformers for fine-grained species recognition (Conviformers, state of the art on Herbarium 202x and iNaturalist 2019) and explainable leaf classification for palaeobotany (Leaf Lens).',
    papers: [
      { label: 'Conviformers', href: 'https://arxiv.org/abs/2208.08900' },
      { label: 'Leaf Lens', href: 'https://serre-lab.github.io/LeafLens/' },
    ],
  },
  {
    title: 'Lossless video coding',
    period: '2011 — 2014 · LNMIIT',
    summary:
      'Prediction and residue-coding methods for lossless video compression, published as an undergraduate at the IEEE Data Compression Conference (ranked CORE A* from 2013 to 2020) and ACM ICVGIP.',
    papers: [
      { label: 'DCC 2011 · 2013 · 2014', href: '#publications' },
    ],
  },
];

export type WorkInProgress = {
  title: string;
  authors: string;
  status: string;
  summary?: string;
};

export const workInProgress: WorkInProgress[] = [
  {
    title: 'Diagnosing Textual Interfaces Between Perception and Reasoning in Multimodal Language Models',
    authors: 'Mohit Vaishnav, Tanel Tammet',
    status: 'In progress',
    summary:
      'What is lost — or gained — when a multimodal model’s perception is passed to its reasoning through text.',
  },
  {
    title: 'Representation and Response Criterion Shape Visual Verification in Humans and Models',
    authors: 'Mohit Vaishnav, Tanel Tammet, Halil Ibrahim Ayse, Meelis Kull',
    status: 'In progress',
    summary:
      'Separating what a system represents from how it decides, to compare visual verification in people and in models.',
  },
];
