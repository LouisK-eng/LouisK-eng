// All site content lives here. Text comes from Louis's LinkedIn profile.
// In `highlights`, **double asterisks** mark the figures shown brighter on the page.

export type YearMonth = { year: number; month: number };

export type Role = {
  title: string;
  company: string;
  employmentType: string;
  location: string;
  workplace: string;
  start: YearMonth;
  end: YearMonth | null;
  highlights: string[];
};

export type ImpactItem = {
  metric: string;
  title: string;
  body: string;
  company: string;
  tags: string[];
};

export type SkillGroup = {
  id: string;
  short: string;
  title: string;
  items: string[];
};

export const profile = {
  name: "Louis Karl Lafata",
  nameLines: ["Louis Karl", "Lafata"],
  headline: "AI/ML | Data Science | Full-Stack Engineer",
  role: "Senior Software & AI Engineer",
  location: "New York City Metropolitan Area",
  contact: {
    linkedin: "https://www.linkedin.com/in/louis-l-2863753/",
    // Leave empty to hide the email button.
    email: "",
  },
  about: [
    "Senior Software & AI Engineer with over 10 years of experience architecting highly scalable Microservices Architectures and pioneering advanced full-stack development initiatives.",
    "Proven track record of seamlessly integrating Python, Generative AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and GPU-accelerated computing to build next-generation, high-availability enterprise systems.",
    "Deep expertise in CUDA, DeepSpeed, and distributed GPU training for large-scale deep learning workloads.",
    "Recognized for orchestrating a multi-tier AWS cloud deployment that surged system scalability by 80% and optimizing backend infrastructure to seamlessly support over 1 million monthly active users with sub-150ms latency.",
  ],
  stats: [
    { value: "10+", label: "Years of experience" },
    { value: "1M+", label: "Monthly active users supported" },
    { value: "<150ms", label: "Latency at that scale" },
    { value: "80%", label: "Scalability gain, multi-tier AWS deployment" },
  ],
  education: {
    school: "New York University",
    degree: "Bachelor of Science, Computer Science",
    dates: "Aug 2010 – May 2014",
  },
  languages: [{ name: "English", level: "Native or bilingual proficiency" }],
};

// Used for the current role's duration until the visitor's browser takes over.
export const contentAsOf: YearMonth = { year: 2026, month: 11 };

export const experience: Role[] = [
  {
    title: "Staff Full Stack & AI Engineer",
    company: "Dell Technologies",
    employmentType: "Full-time",
    location: "Round Rock, Texas, United States",
    workplace: "Remote",
    start: { year: 2021, month: 11 },
    end: null,
    highlights: [
      "Architected a resilient Microservices Architecture deployed on Cloud-Native Infrastructure (AWS EC2/S3/Lambda), elevating system scalability and availability by **67%** for core enterprise applications.",
      "Spearheaded the optimization of back-end services using Python 3.12+ and FastAPI, slashing service request latency from **700ms to 150ms** and enhancing the overall Event-Driven Architecture.",
      "Orchestrated the integration of Retrieval-Augmented Generation (RAG) and Vector Databases to power intelligent search features within a new Learning Management System (LMS), streamlining data processing efficiency by **70%**.",
      "Engineered robust CI/CD Pipelines utilizing GitHub Actions and Kubernetes (K8s) to automate software delivery workflows, accelerating software delivery rates by **30%** while maintaining zero-downtime releases.",
      "Mentored a **10-person** Agile team while developing dynamic frontends with React / Next.js and TypeScript, achieving a **90%** user responsiveness rate and reducing technical debt by **15%** through strict Test-Driven Development (TDD) practices.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Qualcomm",
    employmentType: "Full-time",
    location: "San Diego, California, United States",
    workplace: "Remote",
    start: { year: 2017, month: 4 },
    end: { year: 2021, month: 10 },
    highlights: [
      "Directed a cross-functional engineering team to build a high-throughput web application utilizing Django and PostgreSQL, achieving **99.8%** uptime and seamlessly supporting over **500,000** monthly active users.",
      "Engineered a real-time communications hub leveraging WebSockets and Redis, sustaining concurrent connections for **10,000+** users and guaranteeing an average response time under **100ms**.",
      "Developed highly interactive user interfaces deploying React, TypeScript, and GraphQL, which elevated user engagement by **30%** and improved Core Web Vitals and website performance metrics by **20%**.",
      "Re-architected legacy data architecture into modern ETL / ELT Pipelines utilizing GCP and Serverless Computing tools, increasing data processing throughput by **25%**.",
      "Optimized a legacy PHP e-commerce platform serving **1 million** monthly users, modernizing components toward a scalable REST API Design that directly boosted sales conversion rates by **15%**.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "TechMD",
    employmentType: "Full-time",
    location: "Endicott, New York, United States",
    workplace: "Hybrid",
    start: { year: 2014, month: 6 },
    end: { year: 2017, month: 3 },
    highlights: [
      "Translated complex Figma designs into responsive, pixel-perfect web pages using JavaScript and Tailwind CSS, driving a **35%** increase in user retention for a flagship clinical SaaS product.",
      "Executed targeted optimizations on front-end asset management and the browser event loop, reducing application load times by **50%** and improving page speed scores by **30%**.",
      "Collaborated closely with backend teams to integrate RESTful APIs and establish reusable component libraries, scaling total development lifecycle efficiency by **40%**.",
      "Designed a specialized real-time data analysis utility using Node.js and Asynchronous Programming techniques, streamlining operational workflows and enhancing decision-making efficiency by **25%**.",
      "Championed quality assurance initiatives by instituting the Cypress end-to-end testing framework across the team, achieving a **50%** improvement in code coverage and significantly accelerating bug resolution times.",
    ],
  },
];

// A short, scannable selection drawn from the experience entries above.
export const impact: ImpactItem[] = [
  {
    metric: "700 → 150ms",
    title: "Back-end latency",
    body: "Optimized back-end services with Python 3.12+ and FastAPI, slashing service request latency and enhancing the overall Event-Driven Architecture.",
    company: "Dell Technologies",
    tags: ["Python", "FastAPI"],
  },
  {
    metric: "70%",
    title: "RAG-powered search",
    body: "Integrated Retrieval-Augmented Generation and Vector Databases to power intelligent search in a new Learning Management System, streamlining data processing efficiency.",
    company: "Dell Technologies",
    tags: ["RAG", "Vector Databases"],
  },
  {
    metric: "67%",
    title: "Cloud-native microservices",
    body: "Architected a resilient Microservices Architecture on AWS EC2, S3 and Lambda, elevating scalability and availability for core enterprise applications.",
    company: "Dell Technologies",
    tags: ["AWS", "Microservices"],
  },
  {
    metric: "99.8%",
    title: "High-throughput web application",
    body: "Directed a cross-functional team building a Django and PostgreSQL application with 99.8% uptime, supporting over 500,000 monthly active users.",
    company: "Qualcomm",
    tags: ["Django", "PostgreSQL"],
  },
  {
    metric: "10,000+",
    title: "Real-time communications hub",
    body: "Sustained concurrent connections for 10,000+ users with WebSockets and Redis, at an average response time under 100ms.",
    company: "Qualcomm",
    tags: ["WebSockets", "Redis"],
  },
  {
    metric: "35%",
    title: "Clinical SaaS front end",
    body: "Translated complex Figma designs into responsive, pixel-perfect pages, driving a 35% increase in user retention for a flagship clinical SaaS product.",
    company: "TechMD",
    tags: ["JavaScript", "Tailwind CSS"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "core",
    short: "Core",
    title: "Languages & Core Engineering",
    items: [
      "Python 3.12+",
      "Javascript",
      "Object-Oriented Programming (OOP)",
      "TypeScript/JavaScript",
      "C#/.NET",
      "PHP",
      "Golang",
      "CUDA C/C++",
      "Swift",
      "Kotlin",
      "Typescript"
    ],
  },
  {
    id: "gpu",
    short: "GPU & HPC",
    title: "GPU & High-Performance Computing",
    items: [
      "NVIDIA CUDA",
      "cuDNN",
      "DeepSpeed",
      "NCCL",
      "Tensor Parallelism",
      "Pipeline Parallelism",
      "Mixed Precision Training (FP16/BF16)",
      "GPU Memory Optimization",
      "Multi-GPU Distributed Training",
      "AWS EC2 GPU Instances (P3/P4/G4)",
      "NVIDIA A100 / H100 / V100",
      "GPU Profiling & Benchmarking",
    ],
  },
  {
    id: "ai",
    short: "AI & NLP",
    title: "AI, Machine Learning & NLP",
    items: [
      "Generative AI",
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "LLM Fine-Tuning (LoRA / QLoRA)",
      "Prompt Engineering",
      "Natural Language Processing (NLP)",
      "TensorFlow / PyTorch",
      "Computer Vision",
      "Deep Learning",
      "Tokenization & Embeddings",
      "Model Evaluation & Optimization",
    ],
  },
  {
    id: "backend",
    short: "Backend",
    title: "Backend & API Architecture",
    items: [
      "FastAPI",
      "Django",
      "RESTful APIs",
      "Microservices Architecture",
      "SQLAlchemy",
      "Celery / RabbitMQ",
    ],
  },
  {
    id: "data",
    short: "Data",
    title: "Databases & Vector Storage",
    items: [
      "PostgreSQL",
      "Redis",
      "Vector Databases (Chroma/Pinecone)",
      "MongoDB",
      "DynamoDB",
      "Oracle",
    ],
  },
  {
    id: "cloud",
    short: "Cloud & MLOps",
    title: "Cloud, DevOps & MLOps",
    items: [
      "AWS (EC2/S3/Lambda)",
      "AWS SageMaker / Google Vertex AI",
      "Kubernetes (K8s)",
      "Docker",
      "CI/CD (GitHub Actions)",
      "Pytest",
      "Test-Driven Development (TDD)",
      "MLOps",
      "Distributed Training",
      "CUDA / DeepSpeed",
    ],
  },
  {
    id: "frontend",
    short: "Frontend",
    title: "Frontend & Tooling",
    items: [
      "React / Next.js",
      "Angular",
      "Vue.js",
      "Streamlit / Gradio",
      "LangChain / LlamaIndex",
      "Agentic Workflows / AI Agents",
      "AI Ethics & Compliance (Responsible AI)",
      "Tailwind CSS",
    ],
  },
  {
    // LinkedIn skills not already listed in the groups above.
    id: "more",
    short: "More",
    title: "Additional Skills",
    items: [
      "PL/SQL",
      "OAuth",
      "Microsoft Azure",
      "ASP.NET",
      "Node.js",
      "Data Engineering",
    ],
  },
];

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function formatYearMonth({ year, month }: YearMonth): string {
  return `${MONTHS[month - 1]} ${year}`;
}

// Counts both the first and last month, the same way LinkedIn does.
export function formatDuration(start: YearMonth, end: YearMonth): string {
  const total = (end.year - start.year) * 12 + (end.month - start.month) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  return parts.join(" ");
}
