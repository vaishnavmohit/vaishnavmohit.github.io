// ============================================================================
//  RESEARCH PAGE — edit entries here; /research renders from them.
//  Published papers live in publications.json; this file holds the research
//  vision pillars, application horizons, news highlights, trajectory themes,
//  active projects and collaboration tracks.
// ============================================================================

export type VisionPillar = {
  step: string;
  title: string;
  subtitle: string;
  body: string;
  anchors: string[];
};

// The 3-pillar core niche — futuristic, beyond text-models-of-images.
export const visionPillars: VisionPillar[] = [
  {
    step: '01',
    title: 'Native Visual & Spatial World Models',
    subtitle: 'Reasoning in perceptual space — beyond word-models or flat scene graphs',
    body:
      'Flattening a continuous 3D scene into discrete word-models or symbolic graphs discards the exact spatial, relational and compositional geometry downstream tasks depend on. I diagnose where multimodal architectures hit representational ceilings and design alignment objectives that keep relational structure natively grounded in visual state.',
    anchors: ['TMLR · NeurIPS 2026 J2C', 'CoNLL · ACL 2026 Oral'],
  },
  {
    step: '02',
    title: 'Active Perception & Working Memory',
    subtitle: 'From passive single-pass snapshots to sequential visual routines',
    body:
      'Biological intelligence does not see everything in one forward pass — it actively decides where to attend next and routes task-relevant state into working memory. Grounded in active-vision theory, I build controllers (such as GAMR) that compose multi-step visual routines sample-efficiently and generalize zero-shot.',
    anchors: ['GAMR · ICLR 2023', 'CVR · NeurIPS 2022', 'Neural Computation'],
  },
  {
    step: '03',
    title: 'Verifiable Agentic Workflows',
    subtitle: 'Multimodal agents that know what they see before they act',
    body:
      'Scaling test-time compute or multi-agent orchestration fails when an agent confuses a surface shortcut for genuine scene understanding. I design cognitive evaluation harnesses and human–agent verification loops so autonomous workflows know when a conclusion is grounded, when to re-inspect, and when to defer.',
    anchors: ['CVPRW 2026', 'Cognitive Probes', 'Multi-Agent Systems'],
  },
];

export type Horizon = {
  tag: string;
  title: string;
  body: string;
  foot: string;
};

// Pure research & physical-world horizons (strictly independent of startup work).
export const horizons: Horizon[] = [
  {
    tag: 'Robotics & Embodied AI',
    title: 'Generalist embodied agents',
    body:
      'Manipulating unfamiliar objects or navigating cluttered spaces requires spatial world models, active sensor/gaze routines and working memory that adapt in a handful of trials rather than relying on brittle word-models of scenes.',
    foot: 'Active vision (GAMR) · Vision & Robotics (VIBOT)',
  },
  {
    tag: 'Physical-World Systems',
    title: 'Autonomous mobility & dynamic scenes',
    body:
      'Safety-critical physical systems must integrate perception, memory and behavioral intent over continuous, partially occluded environments where shortcut learning breaks down.',
    foot: 'Connected & Automated Mobility · EU Horizon BERTHA (DFKI)',
  },
  {
    tag: 'AI for Science',
    title: 'Scientific discovery workflows',
    body:
      'Multi-agent scientific pipelines that inspect high-resolution imagery, surface interpretable visual concepts and partner with domain experts across biology, medicine and earth sciences.',
    foot: 'Conviformers · Leaf Lens · Google Antigravity for Science',
  },
];

export type Highlight = {
  date: string;      // shown as-is, e.g. 'Dec 2026'
  title: string;
  detail: string;
  href?: string;
};

// Newest first. Keep 3–6 items; older ones can be removed.
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
    detail: '“Beyond the Linear Separability Ceiling” (TMLR 2026), selected for the NeurIPS Journal-to-Conference track.',
    href: 'https://arxiv.org/abs/2507.07574',
  },
  {
    date: 'Nov 2026',
    title: 'Google Antigravity for Science',
    detail: 'Selected for complimentary frontier-tier access to Google Antigravity (Gemini 4 Argon & Carbon) to accelerate agentic multimodal reasoning research at TalTech.',
    href: 'https://antigravity.google/use-cases/science',
  },
  {
    date: 'Jul 2026',
    title: 'Oral presentation at ACL 2026',
    detail: '“Symbolic Grounding Reveals Representational Bottlenecks in Abstract Visual Reasoning” (CoNLL 2026, co-located with ACL 2026).',
    href: 'https://arxiv.org/abs/2604.21346',
  },
  {
    date: 'Jun 2026',
    title: 'CVPR 2026 Workshop',
    detail: '“Concept Cues Reshape Human Verification in Bongard-LOGO Visual Reasoning” at Knowledge-Intensive Multimodal Reasoning.',
  },
];

export type Theme = {
  title: string;
  period: string;
  summary: string;
  papers: { label: string; href?: string }[];
};

// The research trajectory, most recent first.
export const themes: Theme[] = [
  {
    title: 'Latent grounding & perceptual bottlenecks in multimodal agents',
    period: '2024 — now · TalTech & EXAI',
    summary:
      'When a multimodal system fails a spatial or relational task, did its reasoning policy fail — or was the visual geometry already lost in the encoder or interface? I build diagnostic baselines and representation-alignment objectives that push visual understanding past the linear separability ceiling without relying on brittle text intermediaries.',
    papers: [
      { label: 'TMLR 2026 · J2C at NeurIPS 2026', href: 'https://arxiv.org/abs/2507.07574' },
      { label: 'CoNLL 2026 · Oral at ACL 2026', href: 'https://arxiv.org/abs/2604.21346' },
      { label: 'Cognitive paradigm probe (2025)', href: 'https://arxiv.org/abs/2501.13620' },
    ],
  },
  {
    title: 'Human–agent visual verification & decision workflows',
    period: '2025 — now',
    summary:
      'Running humans and multimodal models through matched verification paradigms to disentangle perceptual representation from response criteria — a foundation for trustworthy human-in-the-loop and multi-agent verification workflows.',
    papers: [
      { label: 'CVPR Workshop 2026' },
      { label: 'Active manuscripts ↓', href: '#in-progress' },
    ],
  },
  {
    title: 'Active vision & working-memory controllers',
    period: '2019 — 2023 · PhD, Brown / ANITI',
    summary:
      'Established a computational taxonomy of visual reasoning demands, introduced the CVR benchmark for sample-efficient compositionality, and built GAMR — a guided-attention and working-memory controller inspired by active vision that executes sequential visual routines and generalizes zero-shot to unseen tasks.',
    papers: [
      { label: 'ICLR 2023 · GAMR', href: 'https://openreview.net/forum?id=iLMgk2IGNyv' },
      { label: 'NeurIPS 2022 · CVR', href: 'https://arxiv.org/abs/2206.05379' },
      { label: 'Neural Computation 2022', href: 'https://doi.org/10.1162/neco_a_01485' },
      { label: 'PhD thesis', href: '/phd-thesis' },
    ],
  },
  {
    title: 'High-resolution & interpretable vision for science',
    period: '2020 — 2023 · Brown & DFKI',
    summary:
      'Compute-efficient convolutional vision transformers for high-resolution biodiversity recognition (Conviformers, SOTA on Herbarium 202x and iNaturalist), concept-grounded palaeobotany (Leaf Lens), and probabilistic behavioral modeling for automated mobility (EU Horizon BERTHA at DFKI).',
    papers: [
      { label: 'Conviformers', href: 'https://arxiv.org/abs/2208.08900' },
      { label: 'Leaf Lens', href: 'https://serre-lab.github.io/LeafLens/' },
    ],
  },
  {
    title: 'Predictive visual coding & spatiotemporal modeling',
    period: '2011 — 2014 · LNMIIT',
    summary:
      'Early work on adaptive spatiotemporal prediction and residue coding for lossless video streams — published as an undergraduate across three IEEE Data Compression Conference (CORE A*) papers and ACM ICVGIP.',
    papers: [
      { label: 'IEEE DCC 2011 · 2013 · 2014', href: '#publications' },
    ],
  },
];

export type WorkInProgress = {
  title: string;
  authors: string;
  status: string;
  tag: string;
  summary?: string;
};

export const workInProgress: WorkInProgress[] = [
  {
    title: 'Diagnosing Textual Interfaces Between Perception and Reasoning in Multimodal Language Models',
    authors: 'Mohit Vaishnav, Tanel Tammet',
    status: 'In progress',
    tag: 'Agentic Interfaces & Latent Grounding',
    summary:
      'Quantifies the spatial and relational information lost when agentic pipelines funnel visual perception through language — motivating direct latent perceptual handoffs.',
  },
  {
    title: 'Representation and Response Criterion Shape Visual Verification in Humans and Models',
    authors: 'Mohit Vaishnav, Tanel Tammet, Halil Ibrahim Ayse, Meelis Kull',
    status: 'In progress',
    tag: 'Human–Agent Verification',
    summary:
      'Signal-detection framework separating perceptual representation quality from decision thresholds across human verifiers and multimodal reasoning systems.',
  },
];

export type CollaborationTrack = {
  badge: string;
  title: string;
  body: string;
  note: string;
  cta: string;
  href: string;
};

export const collaborationTracks: CollaborationTrack[] = [
  {
    badge: 'Academic & Frontier Labs',
    title: 'Collaborate on research',
    body:
      'Always excited to team up on joint papers, open benchmarks, EU/Horizon consortia, workshops or visiting exchanges around active perception, multimodal agents and embodied reasoning.',
    note: 'Open across computer vision, cognitive science & robotics groups.',
    cta: 'Start a research chat',
    href: '/contact?topic=collaboration',
  },
  {
    badge: 'PhD, MSc & Research Interns',
    title: 'Join / thesis supervision',
    body:
      'Supervising and co-supervising thesis projects at TalTech (and cross-institutional collaborations) on latent visual reasoning, active perception–memory architectures and embodied agent workflows.',
    note: 'Tip: share a problem or paper that excites you + your GitHub or CV.',
    cta: 'Reach out as a student',
    href: '/contact?topic=join',
  },
  {
    badge: 'Deep-Tech & R&D Teams',
    title: 'Research consultation & talks',
    body:
      'Independent scientific advisory, multimodal & agentic architecture reviews, evaluation-harness design and invited talks for robotics, physical-AI and computer-vision teams.',
    note: 'Focused on perceptual grounding, failure diagnostics & agent reliability.',
    cta: 'Book a consultation or talk',
    href: '/contact?topic=consultation',
  },
];
