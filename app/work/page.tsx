import type { Metadata } from "next";
import WorkList from "./WorkList";

export const metadata: Metadata = { title: "Work — Kashish Shah" };

const jobs = [
  {
    company: "SquareResults",
    role: "ML Engineer",
    period: "Aug 2025 – Present",
    location: "Remote",
    summary: "Owned the full ML pipeline for an AI recruiting platform — built hybrid semantic resume matching (TF-IDF + keyword coverage), multi-format parsing for 5,000+ resumes, and led a 4-person engineering team to ship a real-time swipe-based job matching interface.",
    stack: ["Python", "spaCy", "scikit-learn", "TF-IDF", "PostgreSQL", "Redis", "Streamlit"],
    link: null,
  },
  {
    company: "Adaptive Concepts Academy",
    role: "Software Dev Engineer",
    period: "Aug 2025 – Present",
    location: "Remote · Volunteer",
    summary: "Built Harmonetics — a music therapy web app for autistic toddlers converting words to musical sequences across 3 languages and 5 instruments, with <100ms audio latency via Web Audio API. WCAG AAA. Live at 8 therapy centers, 150+ users.",
    stack: ["React", "Next.js", "Web Audio API", "Tone.js", "Tailwind CSS", "Vercel"],
    link: "https://harmonetics.vercel.app/",
  },
  {
    company: "KAP Ventures",
    role: "ML Engineer",
    period: "May – Aug 2025",
    location: "Remote",
    summary: "Rebuilt an agentic fashion chatbot from a monolithic Lambda into 3 FastAPI microservices (Memory, Profile, Generation) — cut latency 40% and infra costs 28%. Grew from 0 to 20K+ users in 2 months.",
    stack: ["Python", "GPT-4", "LLaMA", "LangChain", "FastAPI", "AWS Lambda", "DynamoDB", "Docker"],
    link: null,
  },
  {
    company: "Institute for Experiential AI — Northeastern",
    role: "AI Researcher",
    period: "Aug – Dec 2024",
    location: "Portland, ME",
    summary: "Research on infant autism detection using 3D pose estimation (SAPIENS, SMPL, SMIL). Built GPU-accelerated Pyskl pipelines — 87% faster preprocessing, 50% smaller datasets — and engineered 23 spatiotemporal features in collaboration with clinicians.",
    stack: ["Python", "PyTorch", "Pyskl", "SAPIENS", "OpenCV", "NVIDIA A100"],
    link: null,
  },
  {
    company: "Northeastern University",
    role: "Data Scientist · Researcher",
    period: "Mar – Jun 2024",
    location: "Boston, MA",
    summary: "Analyzed 200GB+ eye-tracking data from 180 patients to classify depression — ensemble of RF + XGBoost + 1D CNN reaching 87.3% accuracy, 0.89 F1. Identified 12 biomarkers with SHAP; containerized with Docker/K8s + MLflow + DVC.",
    stack: ["Python", "TensorFlow", "XGBoost", "SHAP", "MLflow", "DVC", "Docker", "Kubernetes"],
    link: null,
  },
  {
    company: "The Spiral Squad",
    role: "Co-Founder & Tech Lead",
    period: "Feb 2023 – Present",
    location: "Pune, India",
    summary: "Co-founded a digital agency from ₹0 to ₹40L/yr across 30+ clients in e-commerce and SaaS. Personally shipped 18 custom web apps; built and managed a 5-person team.",
    stack: ["React", "Next.js", "Node.js", "Figma", "Vercel", "WordPress", "Shopify"],
    link: null,
  },
  {
    company: "Kleren Oak Group",
    role: "Full-Stack Engineer",
    period: "Jan 2022 – Mar 2023",
    location: "Delhi, India",
    summary: "Built 20+ production apps for enterprise clients — e-commerce marketplace ($50K GMV, Q1), SaaS analytics for 200+ businesses, real estate platform at 50K monthly users. REST APIs, auth, database design.",
    stack: ["React", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "AWS", "Stripe"],
    link: null,
  },
  {
    company: "Blanc Space Branding",
    role: "Frontend Engineer",
    period: "Apr 2021 – Mar 2023",
    location: "Mumbai, India",
    summary: "20+ websites for SMBs end-to-end — design, development, SEO, deployment. Averaged 45% organic traffic increase and cut page load times 49% across the portfolio.",
    stack: ["HTML", "CSS", "JavaScript", "WordPress", "Figma", "Bootstrap"],
    link: null,
  },
] as const;

export default function WorkPage() {
  return (
    <div className="pw" style={{ paddingTop: "64px", paddingBottom: "96px" }}>
      <div style={{ marginBottom: "56px" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "32px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: "8px" }}>
          Work
        </h1>
        <p style={{ fontSize: "14px", color: "var(--text-3)", lineHeight: 1.6 }}>
          5+ years across ML research, production AI, full-stack engineering, and entrepreneurship.
        </p>
      </div>
      <WorkList jobs={jobs} />
    </div>
  );
}
