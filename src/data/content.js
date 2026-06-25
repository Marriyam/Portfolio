export const profile = {
  name: "Marriyam Nadeem",
  tagline: "I build AI and software systems for situations where failure has a real cost.",
  subtitle:
    "Associate Software Engineer & AI/Data Science practitioner — clinical AI, fraud detection, full-stack product engineering.",
  email: "marriyamnadeem759@gmail.com",
  phone: "+92 307 0885939",
  linkedin: "https://linkedin.com/in/marriyam-nadeem/",
  location: "Bahawalpur, Pakistan",
};

export const caseStudies = [
  {
    id: "cdss",
    tag: "Featured Case Study",
    title: "CDSS for Unani Medicine",
    oneLiner:
      "A published research system that encodes how human experts actually diagnose — not just what they diagnose.",
    problem:
      "Unani medicine practitioners in underserved parts of Pakistan and India had no digital diagnostic tools. Expert diagnostic reasoning didn't exist as labeled data — it lived only in practitioners' heads, built from years of pattern recognition.",
    approach:
      "Built a knowledge base translating expert reasoning into structured logic, combined with a fine-tuned BioBERT model for clinical text and decision trees that mirrored practitioners' actual reasoning steps.",
    decision:
      "Chose traceable decision trees over a black-box deep learning pipeline so practitioners could see why the system reached a conclusion — there was no specialist fallback to double-check it.",
    outcome:
      "Physician-validated diagnostic accuracy. Published research: arXiv:2310.18361.",
    stack: ["Python", "TensorFlow", "BioBERT", "NLP", "Decision Trees", "React", "FastAPI", "MySQL"],
    images: [
      { file: "cdss-classification.png", caption: "Symptom input → ranked diagnosis output", primary: true },
      { file: "cdss-dashboard.png", caption: "UNANIX clinician dashboard" },
      { file: "cdss-treatments.png", caption: "Treatments reference page" },
    ],
    link: "https://arxiv.org/abs/2310.18361",
  },
  {
    id: "lumsx",
    tag: "Case Study",
    title: "LUMSx Data Portal",
    oneLiner:
      "Solved a distributed-information problem, then optimized the result from days to seconds.",
    problem:
      "LUMSx's operational data — payments, certificates, course stats — was scattered across disconnected sources with no central access point.",
    approach:
      "Built and contributed to a centralized data portal consolidating that scattered data into one place, making it readily accessible to the team for the first time.",
    decision:
      "After centralizing, rewrote and optimized the underlying SQL queries specifically for retrieval speed, not just correctness — a portal that exists isn't the same as one that's usable in real time.",
    outcome:
      "Data retrieval time cut from days to seconds — a 95% improvement in system responsiveness. Supported two cohorts of 70+ learners.",
    stack: ["React.js", "PHP", "Laravel", "PostgreSQL", "SQL Optimization"],
    stat: { before: "Days", after: "Seconds", label: "Data retrieval time" },
    images: [],
  },
  {
    id: "aimp",
    tag: "Case Study",
    title: "OPEN AIMP Fraud Detection",
    oneLiner:
      "Cut a 25+ variable feature set down to 15 by separating real predictive signal from noise.",
    problem:
      "Fraud detection pipeline for 1.5M loan records started with 25+ candidate variables. Many added noise rather than predictive value, diluting signal in the model.",
    approach:
      "Used feature importance analysis and statistical testing to isolate which variables actually carried predictive weight for fraud versus which were just along for the ride.",
    decision:
      "Deliberately cut variables that seemed intuitively relevant but tested as noise — prioritized model clarity and signal quality over having more data feeding the pipeline.",
    outcome:
      "40% efficiency gain in the pipeline; 15% improvement in fraud detection accuracy. Named Intern of the Month, July 2022.",
    stack: ["Python", "Pandas", "Scikit-learn", "Feature Engineering"],
    stat: { before: "25+", after: "15", label: "Variables, by predictive signal" },
    images: [],
  },
  {
    id: "skyporter",
    tag: "Case Study",
    title: "Skyporter Luggage Sharing",
    oneLiner:
      "Owned the production frontend end-to-end — live site, payments, and admin tooling.",
    problem:
      "Skyporter needed a working consumer product with real payment flows and internal tooling for the team to operate it, built and shipped to production.",
    approach:
      "Owned the live production site end-to-end (skyporter.us): deployment, real users, real bugs in production. Set up the architecture and base structure for the internal admin panel, which a teammate then built features on top of. Implemented Stripe and Payoneer for checkout and payouts.",
    decision:
      "Prioritized getting a working payment infrastructure and admin tooling into production over perfecting it first — enabling the team to iterate on real user feedback.",
    outcome:
      "Live production app at skyporter.us, with working payment infrastructure and admin tooling actively used by the team.",
    stack: ["React", "TypeScript", "Stripe", "Payoneer", "Auth0"],
    images: [{ file: "skyporter-home.png", caption: "Skyporter homepage", primary: true }],
    link: "https://skyporter.us",
  },
];

export const otherProjects = [
  {
    title: "Vitae — Electronic Health Record System",
    description:
      "30+ Django REST API endpoints for hospital management, with role-based access control and telehealth integration for virtual consultations across a multi-hospital architecture.",
  },
  {
    title: "Code Clause — Data Science Internship",
    description:
      "Predictive models for stock prediction, wine quality, and personalised medicine recommendations across 10,000+ record datasets, achieving 80%+ accuracy end-to-end.",
  },
  {
    title: "Netflix & Image Processing Analysis",
    description:
      "Text mining across 8,807 Netflix records to surface dominant content themes; comparative image classification benchmarking grayscale (72%) vs. colored (80%) accuracy.",
  },
];

export const skills = {
  "AI / ML": ["Feature Engineering", "NLP", "Deep Learning", "PCA", "Federated Learning"],
  "Languages": ["Python", "JavaScript", "TypeScript", "PHP", "SQL"],
  "Frameworks": ["React.js", "Django", "Laravel", "Node.js", "FastAPI"],
  "Data & Cloud": ["PostgreSQL", "MySQL", "MongoDB", "Microsoft Azure"],
};

export const education = {
  degree: "Bachelor of Computer Science",
  institution: "University of Engineering and Technology, Lahore",
  years: "2019 – 2023",
  gpa: "CGPA 3.57/4.0",
  notes: "Final year project became a published paper (arXiv:2310.18361). Content Lead, Google Developer Students Club. Director, UET Blood Donor Society.",
};

export const certifications = [
  "Microsoft Azure AI Fundamentals (AI-900) — 945/1000",
  "Google Data Analytics Professional Certificate",
  "Machine Learning for All — Coursera",
  "Intern of the Month — OPEN AIMP, July 2022",
];
