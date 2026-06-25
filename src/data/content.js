export const profile = {
  name: "Marriyam Nadeem",
  tagline: "I build AI and software systems for situations where failure has a real cost.",
  subtitle:
    "Associate Software Engineer & AI/Data Science practitioner, working across clinical AI, fraud detection, and full-stack product engineering.",
  email: "marriyamnadeem759@gmail.com",
  phone: "+92 307 0885939",
  linkedin: "https://linkedin.com/in/marriyam-nadeem/",
  location: "Bahawalpur, Pakistan",
};

export const story = {
  photo: null,
  paragraphs: [
    "I grew up in Bahawalpur, Pakistan, where the career paths that got drawn for you were medicine or engineering. I picked computer science because of something simpler: time disappeared when I was at a keyboard.",
    "It took a process of elimination to find AI. App development cost me sleep and didn't hold my interest. Cybersecurity didn't stick. Web development, the field I now work in professionally, gave me a real, satisfying craft to build with. AI was the one thing I'd sit with for two, three days straight and still want to keep going, not because I had to, but because I couldn't put it down.",
    "Web development is the work I do well and take seriously every day. AI became the thing I built toward in parallel, through projects, a published paper, and self-study, alongside that full-time work.",
    "The throughline became clear with one project: a clinical decision support system for Unani medicine practitioners, in communities where a missed diagnosis carries a real human cost. That's when 'reliable AI' stopped being an abstract phrase. It became the actual question I wanted to spend a career answering, not how to make a model accurate on a benchmark, but how to make it trustworthy enough to lean on when it actually matters.",
    "That's what I'm chasing now, to put my effort into bringing reliability to AI, and work that doesn't fail the people who have no backup plan.",
  ],
};

export const caseStudies = [
  {
    id: "cdss",
    theme: "herbs",
    skipIntro: true,
    tag: "Featured Case Study",
    metaTags: ["Healthcare AI", "NLP", "Research", "Published"],
    title: "CDSS for Unani Medicine",
    headline: "Built a diagnostic AI that earned physician trust and got published",
    oneLiner:
      "A published research system that encodes how human experts actually diagnose, not just what they diagnose.",
    color: "#f97316",
    colorSoft: "rgba(249, 115, 22, 0.12)",
    problem:
      "Unani medicine practitioners in underserved parts of Pakistan and India had no digital diagnostic tools. Expert diagnostic reasoning didn't exist as labeled data, it lived only in practitioners' heads, built from years of pattern recognition.",
    approach:
      "Built a knowledge base translating expert reasoning into structured logic, combined with a fine-tuned BioBERT model for clinical text and decision trees that mirrored practitioners' actual reasoning steps.",
    decision:
      "Chose traceable decision trees over a black-box deep learning pipeline so practitioners could see why the system reached a conclusion, since there was no specialist fallback to double-check it.",
    outcome:
      "Physician-validated diagnostic accuracy. Published research: arXiv:2310.18361.",
    stack: ["Python", "TensorFlow", "BioBERT", "NLP", "Decision Trees", "React", "FastAPI", "MySQL"],
    metrics: [{ end: 1, suffix: "", label: "Published Paper" }],
    images: [
      { file: "cdss-classification.jpeg", caption: "Symptom input → ranked diagnosis output", primary: true },
      { file: "cdss-dashboard.jpeg", caption: "UNANIX clinician dashboard" },
      { file: "cdss-treatments.jpeg", caption: "Treatments reference page" },
    ],
    link: "https://arxiv.org/abs/2310.18361",
  },
  {
    id: "lumsx",
    theme: "network",
    tag: "Case Study",
    metaTags: ["Data Portal", "SQL Optimization", "EdTech"],
    title: "LUMSx Data Portal",
    headline: "Took data retrieval from days to seconds with one optimization pass",
    oneLiner:
      "Solved a distributed-information problem, then optimized the result from days to seconds.",
    color: "#22d3ee",
    colorSoft: "rgba(34, 211, 238, 0.12)",
    problem:
      "LUMSx's operational data, payments, certificates, course stats, was scattered across disconnected sources with no central access point.",
    approach:
      "Built and contributed to a centralized data portal consolidating that scattered data into one place, making it readily accessible to the team for the first time.",
    decision:
      "After centralizing, rewrote and optimized the underlying SQL queries specifically for retrieval speed, not just correctness, since a portal that exists isn't the same as one that's usable in real time.",
    outcome:
      "Data retrieval time cut from days to seconds, a 95% improvement in system responsiveness. Supported two cohorts of 70+ learners.",
    stack: ["React.js", "PHP", "Laravel", "PostgreSQL", "SQL Optimization"],
    stat: { before: "Days", after: "Seconds", label: "Data retrieval time" },
    metrics: [
      { end: 95, suffix: "%", label: "Responsiveness gain" },
      { end: 70, suffix: "+", label: "Learners per cohort" },
    ],
    images: [
      { file: "lumsx-analytics-overview.jpeg", caption: "Learners analytics, fiscal year overview", primary: true },
      { file: "lumsx-revenue-trend.jpeg", caption: "Revenue & learners trend by quarter" },
    ],
  },
  {
    id: "aimp",
    theme: "radar",
    tag: "Case Study",
    metaTags: ["Fraud Detection", "Feature Engineering", "FinTech"],
    title: "OPEN AIMP Fraud Detection",
    headline: "Cut noisy features in half and improved fraud accuracy by 15%",
    oneLiner:
      "Cut a 25+ variable feature set down to 15 by separating real predictive signal from noise.",
    color: "#a855f7",
    colorSoft: "rgba(168, 85, 247, 0.12)",
    problem:
      "Fraud detection pipeline for 1.5M loan records started with 25+ candidate variables. Many added noise rather than predictive value, diluting signal in the model.",
    approach:
      "Used feature importance analysis and statistical testing to isolate which variables actually carried predictive weight for fraud versus which were just along for the ride.",
    decision:
      "Deliberately cut variables that seemed intuitively relevant but tested as noise, prioritizing model clarity and signal quality over having more data feeding the pipeline.",
    outcome:
      "40% efficiency gain in the pipeline; 15% improvement in fraud detection accuracy. Named Intern of the Month, July 2022.",
    stack: ["Python", "Pandas", "Scikit-learn", "Feature Engineering"],
    stat: { before: "25+", after: "15", label: "Variables, by predictive signal" },
    metrics: [
      { end: 1.5, decimals: 1, suffix: "M", label: "Records processed" },
      { end: 40, suffix: "%", label: "Efficiency gain" },
      { end: 15, suffix: "%", label: "Accuracy improvement" },
    ],
    images: [
      { file: "aimp-risk-score.png", caption: "Risk score vs. amount requested", primary: true },
      { file: "aimp-fico-high.png", caption: "FICO range (high) distribution" },
      { file: "aimp-fico-low.png", caption: "FICO range (low) distribution" },
    ],
  },
  {
    id: "skyporter",
    theme: "transit",
    tag: "Case Study",
    metaTags: ["Architecture", "Payments", "Full-stack"],
    title: "Skyporter Luggage Sharing",
    headline: "Architected and built the web app, then rebuilt the public site",
    oneLiner:
      "Travelers have unused luggage space. People shipping items pay high traditional carrier costs. Skyporter matches the two so senders pay less and travelers earn money along a route they're already taking.",
    color: "#ec4899",
    colorSoft: "rgba(236, 72, 153, 0.12)",
    problem:
      "Shipping items the traditional way is expensive, and people traveling on the same route already have luggage space going unused. Skyporter needed a platform connecting the two sides: a consumer web app for senders and travelers, an admin panel for the team to operate it, and a public-facing site to bring users in.",
    approach:
      "Designed the architecture for both the web app and the admin panel, then built the web app solo and co-built the admin panel with a teammate working from that architecture. Separately, took the existing Skyporter marketing site and substantially redeveloped it.",
    decision:
      "Designed the admin panel's architecture to be extendable from the start, since a teammate would be building features on top of it after the initial structure was in place. The web app's architecture was built solo end-to-end, with payment flows (Stripe, Payoneer) integrated directly into it.",
    outcome:
      "Working web app, admin panel, and redeveloped public site, with payment infrastructure integrated and the admin panel actively used by the team to run operations.",
    stack: ["React", "TypeScript", "Stripe", "Payoneer", "Auth0"],
    metrics: [{ end: 3, suffix: "", label: "Surfaces built: app, admin, site" }],
    images: [{ file: "skyporter-home.jpeg", caption: "Skyporter marketing site", primary: true }],
    link: "https://skyporter.us",
  },
  {
    id: "wetterauer",
    theme: "ambulance",
    tag: "Case Study",
    metaTags: ["Healthcare Logistics", "Fleet Management", "B2B", "Germany"],
    title: "Wetterauer Fahrdienst Systems",
    headline: "Built the systems that run a German patient-transport company",
    oneLiner:
      "Four systems built over time for one client: ambulance booking, dialysis transport, driver management, and insurance billing.",
    color: "#10b981",
    colorSoft: "rgba(16, 185, 129, 0.12)",
    problem:
      "Wetterauer Fahrdienst needed to track ambulance bookings for patients and insurance companies, manage a fleet of drivers and their performance, and calculate insurance bills accurately by rate, all without one connected system.",
    approach:
      "Built four separate systems over multiple engagements: a booking portal for general ambulance transport, a dedicated portal for dialysis patient transport, a driver management system tracking attendance, leaves, and earnings across the fleet, and a billing calculator that computes insurance charges based on the company's rate card.",
    decision:
      "Built each system as its own focused tool rather than one monolithic platform, since booking and dialysis transport have different patient flows, and the driver/billing tools serve internal operations, not patients. Keeping them separate matched how the team actually worked.",
    outcome:
      "Four systems in active use: ambulance booking, dialysis transport booking, driver management (38 drivers, 3,873+ hours tracked monthly), and an insurance billing calculator.",
    stack: ["Web App", "Admin Dashboards", "Analytics", "Booking Systems"],
    metrics: [
      { end: 38, suffix: "", label: "Drivers managed" },
      { end: 4, suffix: "", label: "Systems built" },
    ],
    images: [
      { file: "wetterauer-driver-dashboard.jpeg", caption: "Driver Management, fleet dashboard", primary: true },
      { file: "wetterauer-driver-analytics.jpeg", caption: "Driver analytics & monthly comparisons" },
      { file: "wetterauer-calculator.jpeg", caption: "Insurance billing price calculator" },
    ],
    link: "http://wetterauer-fahrdienst.de/",
  },
  {
    id: "netflix",
    theme: "stream",
    tag: "Case Study",
    metaTags: ["Data Analysis", "Text Mining", "Image Classification"],
    title: "Netflix Content Analysis",
    headline: "Mined 8,807 titles to find what actually drives Netflix's catalog",
    oneLiner:
      "Text mining and image classification combined to surface real patterns in streaming content, not just summary stats.",
    color: "#dc2626",
    colorSoft: "rgba(220, 38, 38, 0.12)",
    problem:
      "Netflix's catalog data was just a spreadsheet of titles, genres, and dates, with no clear picture of what content patterns actually drove the platform, or how release timing and genre mix played out at scale.",
    approach:
      "Ran text mining across 8,807 records to surface dominant themes and genre distribution, then separately built an image classification benchmark comparing grayscale vs. colored input on a neural network, to test how much color information mattered for accuracy.",
    decision:
      "Treated the two analyses as genuinely separate questions: content pattern analysis answers 'what is on Netflix,' image classification answers 'how much does visual detail matter to a model.' Kept them as distinct deliverables instead of forcing a single narrative.",
    outcome:
      "Identified International Movies, Dramas, and Comedies as the dominant genres by volume. Image classification hit 72% accuracy on grayscale vs. 80% on colored input, an 8-point gap attributable purely to color information.",
    stack: ["Python", "Pandas", "TensorFlow", "OpenCV", "Text Mining"],
    metrics: [
      { end: 8807, suffix: "", label: "Records analyzed" },
      { end: 80, suffix: "%", label: "Colored image accuracy" },
      { end: 72, suffix: "%", label: "Grayscale image accuracy" },
    ],
    images: [
      { file: "netflix-top-genres.jpeg", caption: "Top 10 genres by content count", primary: true },
      { file: "netflix-release-months.jpeg", caption: "Release month distribution" },
    ],
  },
];

export const otherProjects = [
  {
    title: "Vitae: Electronic Health Record System",
    description:
      "30+ Django REST API endpoints for hospital management, with role-based access control and telehealth integration for virtual consultations across a multi-hospital architecture.",
    color: "#3b82f6",
    images: [
      { file: "vitae-hero.jpeg", caption: "Vitae EHR, landing page" },
      { file: "vitae-cta.jpeg", caption: "Vitae EHR, trial signup" },
    ],
  },
  {
    title: "Code Clause: Data Science Internship",
    description:
      "Predictive models for stock prediction, wine quality, and personalised medicine recommendations across 10,000+ record datasets, achieving 80%+ accuracy end-to-end.",
    color: "#eab308",
    images: [
      { file: "codeclause-wordcloud.png", caption: "Symptom frequency word cloud" },
      { file: "codeclause-medicine-bar.png", caption: "Recommended medicine frequency" },
    ],
  },
];

export const skills = {
  "AI / ML": ["Feature Engineering", "NLP", "Deep Learning", "PCA", "Federated Learning"],
  "Languages": ["Python", "JavaScript", "TypeScript", "PHP", "SQL"],
  "Frameworks": ["React.js", "Django", "Laravel", "Node.js", "FastAPI"],
  "Data & Cloud": ["PostgreSQL", "MySQL", "MongoDB", "Microsoft Azure"],
};

export const skillGraph = {
  nodes: [
    { id: "python", label: "Python", group: "ai" },
    { id: "tensorflow", label: "TensorFlow", group: "ai" },
    { id: "nlp", label: "NLP", group: "ai" },
    { id: "deeplearning", label: "Deep Learning", group: "ai" },
    { id: "biobert", label: "BioBERT", group: "ai" },
    { id: "decisiontrees", label: "Decision Trees", group: "ai" },
    { id: "featureeng", label: "Feature Engineering", group: "ai" },
    { id: "pca", label: "PCA", group: "ai" },
    { id: "federated", label: "Federated Learning", group: "ai" },
    { id: "sklearn", label: "Scikit-learn", group: "ai" },
    { id: "pandas", label: "Pandas", group: "ai" },

    { id: "javascript", label: "JavaScript", group: "web" },
    { id: "typescript", label: "TypeScript", group: "web" },
    { id: "react", label: "React.js", group: "web" },
    { id: "fastapi", label: "FastAPI", group: "web" },
    { id: "django", label: "Django", group: "web" },
    { id: "laravel", label: "Laravel", group: "web" },
    { id: "php", label: "PHP", group: "web" },
    { id: "nodejs", label: "Node.js", group: "web" },
    { id: "stripe", label: "Stripe", group: "web" },
    { id: "auth0", label: "Auth0", group: "web" },

    { id: "sql", label: "SQL", group: "data" },
    { id: "postgresql", label: "PostgreSQL", group: "data" },
    { id: "mysql", label: "MySQL", group: "data" },
    { id: "mongodb", label: "MongoDB", group: "data" },
    { id: "azure", label: "Microsoft Azure", group: "data" },
  ],
  links: [
    ["python", "tensorflow"], ["python", "nlp"], ["python", "pandas"], ["python", "sklearn"],
    ["tensorflow", "deeplearning"], ["nlp", "biobert"], ["biobert", "deeplearning"],
    ["deeplearning", "decisiontrees"], ["decisiontrees", "featureeng"],
    ["featureeng", "pca"], ["featureeng", "sklearn"], ["sklearn", "federated"],
    ["pandas", "featureeng"],
    ["javascript", "typescript"], ["javascript", "react"], ["typescript", "react"],
    ["react", "stripe"], ["react", "auth0"], ["react", "nodejs"],
    ["nodejs", "fastapi"], ["php", "laravel"], ["laravel", "mysql"],
    ["django", "fastapi"], ["django", "python"],
    ["sql", "postgresql"], ["sql", "mysql"], ["sql", "mongodb"],
    ["postgresql", "laravel"], ["azure", "tensorflow"], ["mongodb", "nodejs"],
  ],
};

export const education = {
  degree: "Bachelor of Computer Science",
  institution: "University of Engineering and Technology, Lahore",
  years: "2019 to 2023",
  gpa: "CGPA 3.57/4.0",
  notes: "Final year project became a published paper (arXiv:2310.18361). Content Lead, Google Developer Students Club. Director, UET Blood Donor Society.",
};

export const certifications = [
  {
    title: "Microsoft Azure AI Fundamentals (AI-900), 945/1000",
    image: "cert-azure-ai.png",
  },
  {
    title: "Google Data Analytics Professional Certificate",
    image: "cert-google-data-analytics.png",
  },
  {
    title: "Machine Learning for All, Coursera",
    image: "cert-ml-for-all.png",
  },
  {
    title: "TechXplore 23, Ultimate Tech Crew",
    image: "cert-techxplore23.png",
  },
  {
    title: "Intern of the Month, OPEN AIMP, July 2022",
    image: "cert-intern-of-month.png",
  },
];
