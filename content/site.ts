// Single source of content for the site: profile, publications, projects,
// research, experience, and honors rendered by the homepage.
export const profile = {
  name: 'Araj Shah',
  email: 'araj_shah@brown.edu',
  description: 'Araj Shah is a Computer Science Sc.M. student at Brown University interested in learned representations, world models, reinforcement learning, and planning and control.',
  links: [
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=uz2tAjwAAAAJ&hl=en' },
    { label: 'GitHub', href: 'https://github.com/arajshah' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/araj-shah-0313361ba/' },
    { label: 'Brown CS', href: 'https://cs.brown.edu/people/grad/ashah264/' },
  ],
};
export type Publication = {
  id: string; title: string; authors: string[]; venue: string; year: string;
  summary: string; image: string; imageAlt: string; award?: string;
  links: {label: string; href: string}[];
};
export const publications: Publication[] = [
  {
    id: 'mammography',
    title: 'An Open and Verifiable ConvNeXt-Based Pipeline for Breast Cancer Detection in Mammography Using CBIS-DDSM',
    authors: ['Araj Shah', 'Saujanya Thapaliya', 'Vijay Chaudhary', 'Fadel Lashhab', 'Kholood Ahmad'],
    venue: 'IEMTRONICS', year: '2026', award: 'Best Paper · Reviewers’ Choice',
    summary: 'Reproducible mammography benchmarking, from lesion-centered preprocessing to controlled ConvNeXt ablations.',
    image: '/papers/mammography.webp', imageAlt: 'ROC curve from the authors’ mammography project paper.',
    links: [
      {label:'Paper',href:'https://www.researchgate.net/publication/403742959_An_Open_and_Verifiable_ConvNeXt-Based_Pipeline_for_Breast_Cancer_Detection_in_Mammography_Using_CBIS-DDSM'},
      {label:'Code',href:'https://github.com/arajshah/breastcancer-rep'},
    ],
  },
  {
    id:'emotion',
    title:'AI4PC-Howard University and BisonAI4PC at SemEval-2026 Task 2: Fine-Tuning DistilBERT, DeBERTa and ModernBERT for Valence–Arousal Prediction and Change Estimation',
    authors:['Araj Shah','Utsav Shah','Saurav K. Aryal'],venue:'SemEval · ACL',year:'2026',
    summary:'Lightweight language models for estimating emotional state and predicting change across longitudinal text.',
    image:'/papers/emotion.webp',imageAlt:'Title and abstract excerpt from the official SemEval paper on longitudinal valence–arousal prediction.',
    links:[{label:'Paper',href:'https://aclanthology.org/2026.semeval-1.89/'},{label:'PDF',href:'https://aclanthology.org/2026.semeval-1.89.pdf'},{label:'Code',href:'https://github.com/arajshah/semeval-2-emotion-dynamics'},{label:'BibTeX',href:'https://aclanthology.org/2026.semeval-1.89.bib'}],
  },
  {
    id:'speaker',title:'Calibrated Fusion and Language-Adversarial Fine-Tuning for Cross-Lingual Speaker Verification',
    authors:['Araj Shah','Howard Prioleau','Saurav K. Aryal'],venue:'Manuscript / preprint',year:'2026',
    summary:'Cross-lingual speaker verification through calibrated model fusion and language-adversarial representation learning.',
    image:'/papers/speaker.webp',imageAlt:'Title thumbnail for the cross-lingual speaker verification manuscript.',
    links:[{label:'Manuscript',href:'https://www.researchgate.net/publication/401252672_Calibrated_Fusion_and_Language-Adversarial_Fine-Tuning_for_Cross-Lingual_Speaker_Verification'},{label:'Code',href:'https://github.com/arajshah/tidyvoice-speaker-verification/tree/pathC-ssl-grl-fusion'}],
  },
];
export const projects = [
 {title:'Distributed representations in spiking RNNs',category:'Computational neuroscience',meta:'Howard University · Sep 2024–Feb 2025',description:'A Julia framework for perturbing and lesioning balanced spiking networks, studying how task information is distributed and maintained in population activity.',href:'https://github.com/arajshah/distributedActivity',kind:'network'},
 {title:'Real-time neural physics simulation',category:'Learned dynamics & simulation',meta:'C++ · CUDA · OpenGL',description:'A GPU-accelerated physics engine combining rigid- and soft-body simulation with a neural predictive physics module trained on simulation data.',href:'https://github.com/arajshah/Neural_Physics_Sim_Engine',kind:'dynamics'},
 {title:'Modeling HIV evolution',category:'Scientific computing',meta:'Howard University · Jan 2023–Jan 2024',description:'Hybrid ODE and stochastic models of strain competition, with Bayesian parameter estimation and sensitivity analysis. Advised by Katharine Gurski.',href:null,kind:'trajectory'},
];
export const research = [
 {title:'Breast cancer mammography benchmarking',date:'Oct 2025–present',detail:'Howard University EECS · Vijay Chaudhary',description:'Leakage-resistant evaluation, ConvNeXt transfer learning, and reproducible dataset preparation.'},
 {title:'Cross-lingual speaker verification',date:'Dec 2025–present',detail:'Advised by Saurav Aryal',description:'WeSpeaker and WavLM systems, calibrated fusion, and language-adversarial fine-tuning.'},
 {title:'Temporal emotion trajectory modeling',date:'Sep 2025–present',detail:'Howard University EECS · Saurav Aryal',description:'Longitudinal valence–arousal models and user-aware forecasting with reproducible evaluation.'},
];
export const experience = [
 {organization:'Qualcomm',role:'Software Engineering Intern · Hexagon NPU',date:'May–Aug 2026',description:'Operator-level validation and performance profiling for quantized neural networks on the QNN and Hexagon/HTP inference stack.'},
 {organization:'Google',role:'Software Engineering Intern · Gmail Security',date:'May–Aug 2025',description:'Distributed data infrastructure for ML inference and adaptive anomaly detection for security signals.'},
 {organization:'Google',role:'Software Engineering Intern · Privacy Sandbox',date:'May–Aug 2024',description:'Reproducible testing infrastructure for Attribution Reporting APIs across Chrome and Android.'},
 {organization:'Google',role:'Software Engineering Intern · Google Chat',date:'May–Aug 2023',description:'Android file-sharing features, from architecture and implementation through testing and launch.'},
];
export const honors = [
 ['2026','Tau Beta Pi Fellowship'],['2025','Bison Bytes · Machine Learning Track Winner'],['2024','Generation Google Scholarship'],['2024','Dow Scholars Undergraduate Research Fellow'],['2023, 2024','NBCUniversal Academy Scholarship'],
];
