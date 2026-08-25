export const expertise = [
  {
    num: '01',
    title: 'AI & Machine Learning',
    body: 'Building and fine-tuning LLMs, RAG pipelines, and multi-agent systems. Hands-on with local and cloud ML stacks on Apple Silicon.',
    tags: ['Python', 'LangChain', 'LlamaIndex', 'ChromaDB', 'Hugging Face', 'Ollama', 'MLX', 'CrewAI', 'RAG', 'Fine-tuning'],
  },
  {
    num: '02',
    title: 'Agile & Program Leadership',
    body: 'Certified ScrumMaster with a track record of accelerating delivery, launching AI products, and aligning technical and business teams.',
    tags: ['Scrum', 'Kanban', 'Product Ownership', 'Backlog Mgmt', 'Jira Cloud', 'Agile Release Train', 'KPI Development'],
  },
  {
    num: '03',
    title: 'Education & Instructional Design',
    body: '15 years designing curriculum and developing instructors — from corporate language programs to university-level technical education.',
    tags: ['Instructional Design', 'ADDIE', 'Curriculum Dev', 'Technical Writing', 'LMS', 'Facilitation'],
  },
  {
    num: '04',
    title: 'Accessibility & Compliance Engineering',
    body: 'Designed and built a Custom GPT trained on WCAG 2.2 guidelines, embedded into the art team’s workflow to give real-time compliance feedback during asset creation — eliminating a 3-revision feedback loop to zero and saving $75K+ in operational costs.',
    tags: ['WCAG 2.2', 'Custom GPT', 'Prompt Engineering', 'Workflow Design', 'Instructional Design'],
  },
];

export const projects = [
  {
    status: 'delivered',
    title: 'MOB/GLOB Curriculum Pipeline',
    desc: 'Designed and delivered the MOB/GLOB pipeline — a serverless RAG + ETL system on AWS Bedrock processing module overviews in under 8 seconds each, in parallel — solo architect through POC, then led a two-engineer team to production across 6 grade levels. 216+ lesson plans processed, 72 module overviews, 6 grade-level overviews, and 144 bilingual parent letters produced.',
    tags: ['AWS Bedrock', 'Lambda', 'S3', 'RAG', 'ETL', 'Bedrock Knowledge Base', 'DeepL API'],
    caseStudy: '/case-study-curriculum-pipeline',
  },
  {
    status: 'delivered',
    title: 'Art Accessibility Workflow',
    desc: 'Designed and built a Custom GPT trained on WCAG 2.2 guidelines, embedded directly into the art team’s workflow to give artists real-time compliance feedback during asset creation. Reduced the average revision cycle from 3 rounds to 0, saving an estimated $75K in operational costs.',
    tags: ['Custom GPT', 'WCAG 2.2', 'Prompt Engineering', 'Workflow Design', 'Instructional Design'],
    caseStudy: '/case-study-accessibility-tech-check',
  },
  {
    status: 'delivered',
    title: 'High Drop Sum (HDS)',
    desc: 'Designed a real-time attendance KPI and led a cross-functional touchpoint redesign for a 10-day intro course, giving leadership same-day visibility into cohort health and triggering a tiger-team outreach protocol for at-risk students. Coordinated 5+ departments around a single communication calendar and increased course attendance by 10%.',
    tags: ['KPI Design', 'Touchpoint Mapping', 'Data Analysis', 'Qlik Cloud', 'Cross-functional Leadership', 'Instructional Design'],
    caseStudy: '/case-study-high-drop-sum',
  },
  {
    status: 'active',
    title: 'Premier Properties — Real Estate Site',
    desc: 'A professional real estate marketing site for a Middle Tennessee REALTOR®. Built with React + Vite and powered by Sanity.io as a headless CMS — the client manages listings, bio, reviews, and market articles through a web dashboard, no coding required.',
    tags: ['React', 'Vite', 'Sanity.io', 'Headless CMS', 'GH Pages', 'Claude code', 'Vanilla CSS'],
    href: 'https://github.com/Oso-Nice-Sites/isaiah-realestate',
    site: 'https://oso-nice-sites.github.io/isaiah-realestate',
  },
];

export const experience = [
  {
    company: 'QuaverED',
    location: 'Hybrid',
    dates: 'Oct 2025 – Mar 2026',
    role: 'Director of AI Integration  |  Agile Program Manager / Scrum Master',
    bullets: [
      'Built MOB/GLOB: a RAG/ETL/ELT pipeline converting 36 lesson plans into 12 Module Overviews and a Grade Level Overview via AWS Bedrock, Knowledge Base, Lambdas, Converse, Guardrails, CloudWatch, and S3 — each module generated in under 8 seconds in parallel.',
      'Drove continuous improvement from PoC → MVP → enterprise workflow using HIL review gates and iterative stakeholder feedback loops with content and graphics teams.',
      'Built a Python/SQL metadata pipeline for the Spanish localization team using AWS Bedrock and Lambda to improve accessible screen copy translation.',
      'Served as Scrum Master for a two-person team; used Agile coaching 1:1s to adapt Ways of Working — achieving a 78:9 completed-to-backlog task ratio tracked in Jira.',
    ],
  },
  {
    company: 'QuaverED',
    location: 'Hybrid',
    dates: 'Apr 2025 – Oct 2025',
    role: 'Director of Project Management',
    bullets: [
      'Led discovery across all departments: audited Asana workflows, met with every production director to map current-state processes, and defined a phased roadmap of improvements adoptable across all teams.',
      'Facilitated cross-team conflict resolution sessions to align stakeholders on workflow changes; managed dependencies and risks in Jira and Confluence throughout.',
      'Co-designed a custom GPT with Art and Accessibility stakeholders to automate WCAG 2.2 compliance review — delivered every requirement and saved an estimated $75K in operational costs.',
      'Brought Agile methodology, AI tooling, and hands-on training to the PM function; authored a phased transition plan for the incoming PM before promotion.',
    ],
  },
  {
    company: 'ThriveDX',
    location: 'Remote',
    dates: 'Sept 2023 – Aug 2024',
    role: 'Sr. Product Owner',
    bullets: [
      'Launched the AI Software Development Program — owned roadmap, backlog, and Epic/Story mapping in Jira.',
      'Ran all Agile ceremonies as program lead; improved team velocity and production efficiency by 20%.',
      'Redesigned grading workflow, cutting costs by $10K/month through continuous improvement.',
    ],
  },
  {
    company: 'ThriveDX',
    location: 'Remote',
    dates: 'Apr 2022 – Sept 2023',
    role: 'Sr. Manager of Program Performance & Success',
    bullets: [
      'Managed Agile delivery, course launches, and real-time dashboards across cross-functional remote teams.',
      'Established KPIs that increased course attendance by 10% through data-informed stakeholder alignment.',
    ],
  },
  {
    company: 'E-Performax',
    location: 'Remote',
    dates: 'Apr 2017 – Mar 2020',
    role: 'Comms Training Developer, Instructional Design',
    bullets: [
      'Designed enterprise communications training; used data analysis to measure effectiveness and improve curriculum.',
    ],
  },
  {
    company: 'EF Education',
    location: 'Surabaya, Indonesia',
    dates: 'Sept 2005 – May 2012',
    role: 'Director of Studies — Corporate Language Learning Solutions',
    bullets: [
      'Led corporate training programs for clients including Coca-Cola and Alstom Power; scaled enrollment 100% in three years.',
    ],
  },
];

export const credentials = [
  {
    eyebrow: 'Certification',
    title: 'Certified ScrumMaster (CSM)',
    sub: 'Scrum Alliance · ID 001517151\nExpires April 2027',
  },
  {
    eyebrow: 'Certificate',
    title: 'Full Stack Development',
    sub: 'Vanderbilt University · 2020',
  },
  {
    eyebrow: 'Degree',
    title: 'BA Music Education',
    sub: 'Tennessee Technological University\n1991 – 1996',
  },
];

export const contactLinks = [
  { label: 'Email',    value: 'john.pendergrass@me.com',       href: 'mailto:john.pendergrass@me.com' },
  { label: 'Phone',    value: '(615) 714-6019',                href: 'tel:+16157146019' },
  { label: 'LinkedIn', value: 'linkedin.com/in/j-pendergrass', href: 'https://www.linkedin.com/in/j-pendergrass' },
  { label: 'GitHub',   value: 'github.com/JohnWP8253',         href: 'https://github.com/JohnWP8253' },
];

export const stats = [
  { num: '15+',  label: 'Years in education & leadership' },
  { num: '20%',  label: 'Team velocity improvement delivered' },
  { num: '$10K', label: 'Monthly cost savings from workflow optimization' },
];
