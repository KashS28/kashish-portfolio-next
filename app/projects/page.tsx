import type { Metadata } from "next";
import s from "./projects.module.css";

export const metadata: Metadata = { title: "Projects — Kashish Shah" };

const projects = [
  {
    title: "Harmonetics",
    category: "Full-Stack · Social Impact",
    description: "Music therapy web app for autistic toddlers. Words → musical sequences across 3 languages and 5 instruments, <100ms audio latency via Web Audio API. WCAG AAA. Live at 8 therapy centers, 150+ users, 4.8/5 rating.",
    stack: ["React", "Next.js", "Web Audio API", "Tone.js", "Tailwind CSS"],
    link: "https://harmonetics.vercel.app/",
  },
  {
    title: "ISO RAG Pipeline",
    category: "GenAI · Backend",
    description: "Production RAG system for ISO 9001/27001 compliance. 2,000+ pages indexed via LangChain + Pinecone, <2s retrieval. FastAPI + Redis cut repeat query time 78%. 91% accuracy, 45 enterprise users.",
    stack: ["Python", "LangChain", "GPT-4", "Pinecone", "FastAPI", "Redis"],
    link: null,
  },
  {
    title: "MindScope",
    category: "NLP · Data Science",
    description: "Real-time NLP dashboard processing 10K+ mental health tweets/day via Twitter API. 92% sentiment accuracy combining VADER, NRCLex, and BERTopic. Six Plotly visualizations — timeline, emotion radar, geographic heatmap.",
    stack: ["Python", "VADER", "BERTopic", "spaCy", "Streamlit", "Plotly"],
    link: null,
  },
  {
    title: "Predictive Maintenance LSTM",
    category: "ML · Time-Series",
    description: "LSTM on NASA Turbofan Engine dataset — 100+ engines, 24 sensors at 120Hz. 50-timestep sliding windows over 20K+ samples. 97.4% accuracy predicting failure within a 30-day window.",
    stack: ["Python", "Keras", "TensorFlow", "LSTM", "scikit-learn"],
    link: null,
  },
  {
    title: "3D Gaussian Splatting",
    category: "Computer Vision · Research",
    description: "Full implementation of the 3DGS paper on an NVIDIA A100 cluster. COLMAP-based SfM, 7K–30K training iterations. PSNR 28.5, SSIM 0.91, LPIPS 0.12 at 150+ FPS. Enhanced EPFL's WebGL viewer for side-by-side comparisons.",
    stack: ["Python", "PyTorch", "CUDA", "OpenGL", "COLMAP", "WebGL"],
    link: null,
  },
  {
    title: "DEX Order Execution Engine",
    category: "Backend · Web3",
    description: "TypeScript engine for DEX market orders with WebSocket real-time updates. 50 concurrent orders via Promise.all, exponential backoff retry — 99.2% success rate on 500+ daily transactions, 1.8s avg execution.",
    stack: ["TypeScript", "Node.js", "WebSocket", "ethers.js", "Docker"],
    link: null,
  },
  {
    title: "Customer Segmentation Engine",
    category: "ML · Data Science",
    description: "15 behavioral features from 376K e-commerce transactions (RFM, spending trends). K-means + PCA (15→6 components, 85% variance) segmented 3,416 customers. Collaborative filtering for top-3 product recommendations per cluster.",
    stack: ["Python", "scikit-learn", "PCA", "K-means", "Pandas", "Plotly"],
    link: null,
  },
  {
    title: "Breast Cancer Detection",
    category: "Computer Vision · Healthcare",
    description: "Ablation study across VGG16, VGG19, Inception-V3, ResNet50 on MIAS mammogram dataset. 8× data augmentation. ResNet50 achieved 85.5% accuracy, F1 0.92, AUC 0.91, 15% false positive reduction.",
    stack: ["Python", "TensorFlow", "ResNet50", "Keras", "OpenCV"],
    link: null,
  },
  {
    title: "NYC Taxi Fare Prediction",
    category: "Big Data · ML",
    description: "Linear Regression vs Decision Trees on 5.4M taxi records in PySpark. Depth-8 tree: RMSE 9.58, MAE 5.00 — 68% better than linear. 4-fold cross-validation, 65% training time reduction via distributed compute.",
    stack: ["Python", "PySpark", "Spark MLlib", "scikit-learn"],
    link: null,
  },
  {
    title: "PillAlert",
    category: "Mobile · Social Impact",
    description: "React Native medication reminder for elderly users. Push notifications with 15-min grace + automated SMS/email caregiver escalation. 85% reduction in missed doses, 93% adherence rate vs 62% baseline across 50+ users.",
    stack: ["React Native", "Firebase", "Twilio", "SendGrid", "Expo"],
    link: null,
  },
  {
    title: "Productivity Tracker AI",
    category: "Full-Stack · ML",
    description: "MERN stack SaaS for 200+ users tracking tasks, time, and habits. Random Forest reduced task completion time 23%. Real-time Chart.js analytics; 15K+ tasks tracked; 90% DAU rate.",
    stack: ["React", "Node.js", "MongoDB", "scikit-learn", "Chart.js", "Socket.io"],
    link: null,
  },
  {
    title: "Garbage Waste Segregation",
    category: "Computer Vision · Capstone",
    description: "Dual CNN: MIRNet for low-light enhancement + TrashNet for 6-class waste classification. Flask app with modular architecture. Accuracy improved from 36% → 73% for low-light, 80% for clean images (2,527-image dataset).",
    stack: ["Python", "TensorFlow", "MIRNet", "TrashNet", "OpenCV", "Flask"],
    link: null,
  },
];

export default function ProjectsPage() {
  return (
    <div className="pw" style={{ paddingTop: "64px", paddingBottom: "96px" }}>

      {/* Header */}
      <div style={{ marginBottom: "56px" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "32px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: "8px" }}>
          Projects
        </h1>
        <p style={{ fontSize: "14px", color: "var(--text-3)", lineHeight: 1.6 }}>
          ML systems, AI applications, full-stack builds, and research implementations.
        </p>
      </div>

      {/* 2-column grid */}
      <div className={s.grid}>
        {projects.map((p, i) => (
          <div key={i} style={{ borderTop: "1px solid var(--border)", padding: "26px 0" }}>

            {/* Title + Category */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "10px" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "15.5px", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)", lineHeight: 1.25 }}>
                {p.title}
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="ul-green"
                    style={{ fontSize: "12px", fontFamily: "var(--font-sans)", fontWeight: 400, marginLeft: "7px" }}>
                    ↗
                  </a>
                )}
              </p>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", color: "var(--text-3)", whiteSpace: "nowrap", flexShrink: 0, paddingTop: "2px" }}>
                {p.category}
              </span>
            </div>

            {/* Description */}
            <p style={{ fontSize: "13.5px", color: "var(--text-2)", lineHeight: 1.7, marginBottom: "12px" }}>
              {p.description}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {p.stack.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}

        {projects.length % 2 !== 0 && (
          <div style={{ borderTop: "1px solid var(--border)" }} />
        )}
      </div>
    </div>
  );
}
