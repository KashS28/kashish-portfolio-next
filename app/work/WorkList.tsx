"use client";
import { motion } from "framer-motion";

type Job = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  stack: readonly string[];
  link: string | null;
};

export default function WorkList({ jobs }: { jobs: Job[] }) {
  return (
    <div>
      {jobs.map((job, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94], delay: i === 0 ? 0 : 0.04 }}
          style={{ borderTop: "1px solid var(--border)", padding: "32px 0" }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "24px", marginBottom: "5px" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, letterSpacing: "-0.025em", color: "var(--text)", lineHeight: 1.2 }}>
              {job.company}
              {job.link && (
                <a href={job.link} target="_blank" rel="noopener noreferrer"
                  className="ul-green"
                  style={{ fontSize: "12px", fontFamily: "var(--font-sans)", fontWeight: 400, marginLeft: "8px" }}>
                  ↗
                </a>
              )}
            </h2>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11.5px", color: "var(--text-3)", whiteSpace: "nowrap", paddingTop: "3px", flexShrink: 0 }}>
              {job.period}
            </span>
          </div>

          <p style={{ fontSize: "13.5px", color: "var(--green)", fontWeight: 500, marginBottom: "16px" }}>
            {job.role}
            <span style={{ color: "var(--text-3)", fontWeight: 400, marginLeft: "8px" }}>· {job.location}</span>
          </p>

          <p style={{ fontSize: "14.5px", color: "var(--text-2)", lineHeight: 1.75, marginBottom: "16px", maxWidth: "720px" }}>
            {job.summary}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {job.stack.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </motion.div>
      ))}
      <div style={{ borderTop: "1px solid var(--border)" }} />
    </div>
  );
}
