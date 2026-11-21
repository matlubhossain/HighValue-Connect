export interface Provider {
  id: string;
  name: string;
  slug: string;
  category: 'AI & Automation' | 'Software Development' | 'Web & Mobile Development' | 'Cloud & IT Solutions' | 'Business Consulting';
  location: 'Bengaluru' | 'Mumbai' | 'Delhi-NCR' | 'Hyderabad' | 'Pune' | 'Pan-India / Remote';
  tagline: string;
  description: string;
  rating: number;
  reviewCount: number;
  demoRatingLabel: string;
  minBudget: string;
  minBudgetNumber: number; // in INR Lakhs
  avgProjectSize: string;
  teamSize: string;
  established: string;
  specializations: string[];
  keyHighlight: string;
  clientImpact: string;
  pastClients: string[];
  responseRate: string;
}

export interface ServiceCategory {
  id: string;
  title: 'AI & Automation' | 'Software Development' | 'Web & Mobile Development' | 'Cloud & IT Solutions' | 'Business Consulting';
  description: string;
  leadBudgetRange: string;
  activeProviders: number;
  popularSubcategories: string[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    description: 'Generative AI applications, custom LLM fine-tuning, autonomous workflow agents, computer vision, and RPA systems.',
    leadBudgetRange: '₹12L – ₹85L',
    activeProviders: 118,
    popularSubcategories: ['Agentic Workflows', 'LLM Integration', 'Computer Vision', 'RPA Automation', 'Data Pipeline ETL']
  },
  {
    id: 'software-dev',
    title: 'Software Development',
    description: 'Mission-critical enterprise software, distributed architectures, microservices, and bespoke SaaS platforms.',
    leadBudgetRange: '₹15L – ₹1.2Cr',
    activeProviders: 142,
    popularSubcategories: ['Enterprise SaaS', 'High-Throughput APIs', 'Core Banking / FinTech', 'Legacy Modernization', 'ERP Systems']
  },
  {
    id: 'web-mobile',
    title: 'Web & Mobile Development',
    description: 'High-performance web applications, iOS/Android native & cross-platform apps, consumer portals, and e-commerce platforms.',
    leadBudgetRange: '₹8L – ₹45L',
    activeProviders: 96,
    popularSubcategories: ['React / Next.js', 'React Native & Flutter', 'Direct-to-Consumer Platforms', 'Progressive Web Apps', 'Design Systems']
  },
  {
    id: 'cloud-it',
    title: 'Cloud & IT Solutions',
    description: 'Cloud infrastructure migration, AWS/Azure/GCP DevOps, multi-region Kubernetes, cybersecurity audits, and 24/7 SRE.',
    leadBudgetRange: '₹10L – ₹65L',
    activeProviders: 84,
    popularSubcategories: ['Kubernetes Orchestration', 'AWS/Azure Migration', 'DevSecOps & CI/CD', 'SOC2 / ISO Audits', 'Disaster Recovery']
  },
  {
    id: 'business-consulting',
    title: 'Business Consulting',
    description: 'Technology roadmap advisory, digital transformation strategy, fractional CTO leadership, and M&A technical due diligence.',
    leadBudgetRange: '₹15L – ₹50L',
    activeProviders: 52,
    popularSubcategories: ['Fractional CTO / Architect', 'Tech Due Diligence', 'Digital Transformation', 'Cost Optimization', 'Governance & Risk']
  }
];

export const FEATURED_PROVIDERS: Provider[] = [
  {
    id: 'prov-1',
    name: 'CognitiveScale Labs',
    slug: 'cognitivescale-labs',
    category: 'AI & Automation',
    location: 'Bengaluru',
    tagline: 'Enterprise generative AI, intelligent agents & fine-tuned LLM architectures.',
    description: 'Specialized deep-tech studio helping fintech and healthcare enterprises deploy production-grade autonomous agent workflows with strict hallucination controls and private data isolation.',
    rating: 4.9,
    reviewCount: 38,
    demoRatingLabel: 'Demo Rating (Based on 38 simulated client evaluations)',
    minBudget: '₹15 Lakhs',
    minBudgetNumber: 15,
    avgProjectSize: '₹32 Lakhs',
    teamSize: '45+ Engineers & ML Scientists',
    established: '2021',
    specializations: ['Autonomous AI Agents', 'Private LLM Deployment', 'Retrieval Augmented Generation (RAG)', 'LangChain / LlamaIndex'],
    keyHighlight: 'Deployed healthcare triage AI reducing clinician administrative burden by 68%.',
    clientImpact: '68% decrease in support triage time for 4.2M patient health network.',
    pastClients: ['Apollo Health Net', 'FinVenture Capital', 'QuickScale SaaS'],
    responseRate: '< 2 hours'
  },
  {
    id: 'prov-2',
    name: 'NexusForge Software',
    slug: 'nexusforge-software',
    category: 'Software Development',
    location: 'Pune',
    tagline: 'High-concurrency distributed systems and resilient enterprise platforms.',
    description: 'Elite backend and platform engineering team built by ex-FAANG engineers specializing in low-latency transaction processing, microservices migration, and complex database clustering.',
    rating: 4.8,
    reviewCount: 44,
    demoRatingLabel: 'Demo Rating (Based on 44 simulated client evaluations)',
    minBudget: '₹20 Lakhs',
    minBudgetNumber: 20,
    avgProjectSize: '₹48 Lakhs',
    teamSize: '80+ Full-Stack Engineers',
    established: '2019',
    specializations: ['Go & Rust Microservices', 'Kafka Event Streaming', 'Core Payment Rails', 'Database Sharding'],
    keyHighlight: 'Engineered high-throughput clearing system processing ₹250Cr daily transaction volume.',
    clientImpact: 'Zero downtime across 18 consecutive months at 45,000 requests/sec peak.',
    pastClients: ['PayMatrix India', 'TransactBridge', 'LogiLogix Global'],
    responseRate: '< 3 hours'
  },
  {
    id: 'prov-3',
    name: 'VedicCloud Architects',
    slug: 'vediccloud-architects',
    category: 'Cloud & IT Solutions',
    location: 'Hyderabad',
    tagline: 'AWS Premier & GCP Partner for multi-region Kubernetes and zero-trust security.',
    description: 'DevOps and infrastructure consulting practice accelerating cloud migrations, cost optimization audits, and automated compliance frameworks for Indian unicorns and global corporations.',
    rating: 4.9,
    reviewCount: 29,
    demoRatingLabel: 'Demo Rating (Based on 29 simulated client evaluations)',
    minBudget: '₹12 Lakhs',
    minBudgetNumber: 12,
    avgProjectSize: '₹28 Lakhs',
    teamSize: '35+ Certified Cloud Architects',
    established: '2020',
    specializations: ['Kubernetes Cluster Ops', 'AWS Well-Architected Reviews', 'SOC2 Type II Compliance', 'Terraform GitOps'],
    keyHighlight: 'Reduced AWS monthly infrastructure spend by 41% for a Tier-1 Indian logistics unicorn.',
    clientImpact: '₹1.8 Cr annualized cloud savings with zero degradation in SLAs.',
    pastClients: ['Bharat Express Logistics', 'Credio Fintech', 'OmniMart Online'],
    responseRate: '< 1 hour'
  },
  {
    id: 'prov-4',
    name: 'StrideWave Digital',
    slug: 'stridewave-digital',
    category: 'Web & Mobile Development',
    location: 'Mumbai',
    tagline: 'Bespoke mobile products and digital commerce experiences with extreme fidelity.',
    description: 'Product studio pairing award-winning UI/UX design with performant React Native and Next.js engineering to launch high-conversion consumer applications and enterprise customer portals.',
    rating: 4.7,
    reviewCount: 52,
    demoRatingLabel: 'Demo Rating (Based on 52 simulated client evaluations)',
    minBudget: '₹10 Lakhs',
    minBudgetNumber: 10,
    avgProjectSize: '₹24 Lakhs',
    teamSize: '50+ Designers & Mobile Engineers',
    established: '2018',
    specializations: ['React Native & Flutter', 'Next.js 15 App Architecture', 'Design Systems', 'Micro-Interactions'],
    keyHighlight: 'Built flagship iOS/Android app reaching 1.2M active users in 100 days.',
    clientImpact: '4.8 App Store rating with 99.94% crash-free sessions across 800k monthly devices.',
    pastClients: ['Zenith Life Insurance', 'UrbanDine Tech', 'Velocita Fashion'],
    responseRate: '< 4 hours'
  },
  {
    id: 'prov-5',
    name: 'StratEdge Advisory',
    slug: 'stratedge-advisory',
    category: 'Business Consulting',
    location: 'Delhi-NCR',
    tagline: 'Fractional CTOs, technology governance, and M&A technical due diligence.',
    description: 'Senior technology leadership consulting firm advising boards, private equity firms, and growth-stage founders on engineering team restructuring, vendor selection, and scalable product architecture.',
    rating: 4.9,
    reviewCount: 21,
    demoRatingLabel: 'Demo Rating (Based on 21 simulated client evaluations)',
    minBudget: '₹15 Lakhs',
    minBudgetNumber: 15,
    avgProjectSize: '₹35 Lakhs',
    teamSize: '18 Principal Consultants',
    established: '2017',
    specializations: ['Fractional CTO Advisory', 'Tech Due Diligence for PE', 'Vendor RFP Management', 'Engineering Org Design'],
    keyHighlight: 'Conducted technical audit for a $45M SaaS buyout and engineered turnaround roadmap.',
    clientImpact: 'Uncovered 3 critical licensing vulnerabilities, saving $1.2M during acquisition diligence.',
    pastClients: ['Apex Capital Partners', 'Indus Horizon Ventures', 'NorthStar Diagnostics'],
    responseRate: '< 6 hours'
  },
  {
    id: 'prov-6',
    name: 'NeuralMatrix Systems',
    slug: 'neuralmatrix-systems',
    category: 'AI & Automation',
    location: 'Hyderabad',
    tagline: 'Computer vision, automated video analytics & industrial IoT sensor AI.',
    description: 'Computer vision and industrial intelligence engineering firm creating automated inspection cameras, retail heatmaps, and smart warehouse robotics pipelines.',
    rating: 4.8,
    reviewCount: 31,
    demoRatingLabel: 'Demo Rating (Based on 31 simulated client evaluations)',
    minBudget: '₹18 Lakhs',
    minBudgetNumber: 18,
    avgProjectSize: '₹42 Lakhs',
    teamSize: '40+ AI Researchers',
    established: '2021',
    specializations: ['Real-Time Computer Vision', 'Edge AI Deployment', 'Optical Quality Inspection', 'PyTorch / TensorRT'],
    keyHighlight: 'Implemented zero-defect visual inspection line across 3 automotive manufacturing plants.',
    clientImpact: 'Reduced defect escape rate by 93% while accelerating line speed by 18%.',
    pastClients: ['Tata Component Works', 'SteelCraft India', 'VisionFlow'],
    responseRate: '< 3 hours'
  },
  {
    id: 'prov-7',
    name: 'ApexCore Systems',
    slug: 'apexcore-systems',
    category: 'Software Development',
    location: 'Bengaluru',
    tagline: 'Multi-tenant enterprise ERP modernization and custom billing engines.',
    description: 'Specialists in unravelling legacy monoliths into high-velocity domain-driven service meshes, compliance-ready audit trails, and multi-currency billing engines.',
    rating: 4.9,
    reviewCount: 36,
    demoRatingLabel: 'Demo Rating (Based on 36 simulated client evaluations)',
    minBudget: '₹25 Lakhs',
    minBudgetNumber: 25,
    avgProjectSize: '₹60 Lakhs',
    teamSize: '65+ Senior Developers',
    established: '2019',
    specializations: ['Domain-Driven Design', 'Event Sourcing', 'PostgreSQL Scale Optimization', 'Legacy Refactoring'],
    keyHighlight: 'Migrated 14-year-old monolith with zero data loss during live business operations.',
    clientImpact: 'Reduced deployment cycles from 3 weeks to 18 minutes with full automated test coverage.',
    pastClients: ['Bajaj FinCorp', 'Metro Logistics', 'SaaSGrid Systems'],
    responseRate: '< 2 hours'
  },
  {
    id: 'prov-8',
    name: 'Zenith Cloud Ops',
    slug: 'zenith-cloud-ops',
    category: 'Cloud & IT Solutions',
    location: 'Mumbai',
    tagline: 'SOC2 Type II, ISO 27001 readiness & high-security enterprise cloud environments.',
    description: 'Cybersecurity engineering and managed SRE partner ensuring enterprise data residency compliance, automated penetrative testing, and 99.99% multi-cloud uptime.',
    rating: 4.8,
    reviewCount: 27,
    demoRatingLabel: 'Demo Rating (Based on 27 simulated client evaluations)',
    minBudget: '₹14 Lakhs',
    minBudgetNumber: 14,
    avgProjectSize: '₹30 Lakhs',
    teamSize: '30+ Security Engineers & SREs',
    established: '2020',
    specializations: ['Zero-Trust Architecture', 'Penetration Testing', 'SIEM / Threat Detection', 'Disaster Recovery Warm Sites'],
    keyHighlight: 'Prepared 5 high-growth B2B startups for SOC2 Type II audit pass in under 90 days.',
    clientImpact: 'Zero non-conformities during formal independent third-party compliance audits.',
    pastClients: ['Kuber Wealth Tech', 'HealthShield India', 'CloudNode Systems'],
    responseRate: '< 1 hour'
  }
];

export const WHY_CHOOSE_US = [
  {
    id: '1',
    title: 'Relevant Provider Matching',
    description: 'We do not throw random directories at you. Every requirement is mapped by domain architects to agencies with verified prior delivery experience in your exact technology stack.'
  },
  {
    id: '2',
    title: 'Qualified Project Enquiries',
    description: 'Service providers only receive vetted, serious project briefs with confirmed executive budgets (₹5 Lakhs to ₹1 Crore+), detailed scope outlines, and defined decision timelines.'
  },
  {
    id: '3',
    title: 'Transparent Information',
    description: 'Review honest team sizes, real budget brackets in Indian Rupees, historical client impact numbers, and objective capabilities without promotional exaggeration.'
  },
  {
    id: '4',
    title: 'Convenient Discovery',
    description: 'Search across India’s premier technology corridors—Bengaluru, Mumbai, Delhi-NCR, Hyderabad, and Pune—or find remote teams capable of seamless global delivery.'
  },
  {
    id: '5',
    title: 'Privacy-Conscious Lead Sharing',
    description: 'Your contact credentials and project specifications are never broadcast to public spam lists. We only share your brief with up to 3 hand-matched providers you approve.'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Describe Your Project',
    summary: 'Share your requirements, desired technology stack, target launch timeline, and estimated budget through our guided enterprise enquiry form.',
    bulletPoints: [
      'Takes under 3 minutes',
      'Confidential and secure',
      'High-value budgets (₹5L+)'
    ]
  },
  {
    step: '02',
    title: 'Get Matched with Experts',
    summary: 'Our matching engine and senior technical advisors review your specifications and shortlist 2 to 3 pre-vetted agencies with proven domain mastery.',
    bulletPoints: [
      'Tailored capabilities matching',
      'Verified delivery records',
      'Turnaround in 48 hours'
    ]
  },
  {
    step: '03',
    title: 'Connect & Compare Proposals',
    summary: 'Receive structured technical proposals, compare architectural approaches and price models, interview lead architects, and hire with certainty.',
    bulletPoints: [
      'Direct provider introductions',
      'No upfront aggregator fee for clients',
      'Transparent milestones'
    ]
  }
];

export const PLATFORM_METRICS = [
  { value: '₹145 Cr+', label: 'Project Pipeline Mapped', detail: 'Across high-ticket enterprise contracts' },
  { value: '480+', label: 'Vetted Tech Providers', detail: 'Studios & consultancies across India' },
  { value: '48 Hours', label: 'Average Proposal Match', detail: 'From enquiry submission to initial brief' },
  { value: '94%', label: 'Match Satisfaction Rate', detail: 'Based on client proposal selection feedback' }
];

export const INDIAN_TECH_HUBS = [
  'All India',
  'Bengaluru',
  'Mumbai',
  'Delhi-NCR',
  'Hyderabad',
  'Pune',
  'Pan-India / Remote'
];

export const BUDGET_RANGES = [
  { label: 'All Budgets', min: 0, max: 9999 },
  { label: '₹5L – ₹15L', min: 5, max: 15 },
  { label: '₹15L – ₹35L', min: 15, max: 35 },
  { label: '₹35L – ₹75L', min: 35, max: 75 },
  { label: '₹75L+', min: 75, max: 9999 }
];
