"use client";
import { motion } from "framer-motion";

type Project = {
  title: string;
  category: string;
  description: string;
  stack: readonly string[];
  link: string | null;
};

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "0" }}>
      {projects.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94], delay: (i % 2) * 0.06 }}
          style={{
            borderTop: "1px solid var(--border)",
            padding: "26px 0",
            transition: "background .15s",
            cursor: p.link ? "pointer" : "default",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "var(--bg-2)")}
          onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          onClick={() => p.link && window.open(p.link, "_blank", "noopener,noreferrer")}
        >
          <div style={{ padding: "0 0" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "10px" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "15.5px", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)", lineHeight: 1.25 }}>
                {p.title}
                {p.link && (
                  <span style={{ fontSize: "12px", fontFamily: "var(--font-sans)", fontWeight: 400, marginLeft: "7px", color: "var(--green)" }}>↗</span>
                )}
              </p>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", color: "var(--text-3)", whiteSpace: "nowrap", flexShrink: 0, paddingTop: "2px" }}>
                {p.category}
              </span>
            </div>

            <p style={{ fontSize: "13.5px", color: "var(--text-2)", lineHeight: 1.7, marginBottom: "12px" }}>
              {p.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {p.stack.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
