import Link from "next/link";
import type { Metadata } from "next";
import Currently from "@/components/Currently";
import s from "./home.module.css";

export const metadata: Metadata = {
  title: "Kashish Shah — ML Engineer & Software Developer",
  description:
    "Kashish Shah is an ML Engineer and software developer based in San Francisco. Builds ML systems, AI applications, and full-stack products. MS ECE, Northeastern University.",
};

const LABEL_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "10.5px",
  fontWeight: 500,
  letterSpacing: "0.09em",
  textTransform: "uppercase",
  color: "var(--text-3)",
  marginBottom: "16px",
};

const RULE: React.CSSProperties = {
  border: "none",
  borderTop: "1px solid var(--border)",
};

export default function Home() {
  return (
    <div className="pw" style={{ paddingTop: "72px", paddingBottom: "96px" }}>

      {/* ── Two-column grid ───────────────────────────────── */}
      <div className={s.grid}>

        {/* LEFT: Name + bio */}
        <div>
          <h1 className={s.heroTitle}>
            Kashish Shah
          </h1>

          <p style={{ fontSize: "16px", color: "var(--text-2)", marginBottom: "10px" }}>
            ML Engineer · Mumbai → SFO
          </p>

          <Currently />

          {/* Social links */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0 24px", marginBottom: "44px" }}>
            {([
              { label: "Email",    href: "mailto:kashishah2804@gmail.com" },
              { label: "LinkedIn", href: "https://linkedin.com/in/kashish-shah-2804" },
              { label: "GitHub",   href: "https://github.com/kashish-shah" },
              { label: "Resume",   href: "/Kashish_Shah_Resume.pdf" },
            ] as const).map(({ label, href }) => (
              <a key={label} href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="ul-green"
                style={{ fontSize: "13.5px" }}>
                {label}
              </a>
            ))}
          </div>

          <hr style={{ ...RULE, marginBottom: "44px" }} />

          {/* Bio */}
          <div style={{ maxWidth: "540px" }}>
            <p style={{ fontSize: "15.5px", color: "var(--text-2)", lineHeight: 1.8, marginBottom: "16px" }}>
              Born in Mumbai, moved to Boston for grad school, now in San Francisco. Finished
              my MS in ECE at Northeastern — but the degree is the least interesting thing
              about the last two years.
            </p>
            <p style={{ fontSize: "15.5px", color: "var(--text-2)", lineHeight: 1.8 }}>
              Co-founded{" "}
              <strong style={{ color: "var(--text)", fontWeight: 600 }}>The Spiral Squad</strong>
              {" "}with ₹0 in 2023, grew it to ₹40L in revenue across 30+ clients. Built{" "}
              <a href="https://harmonetics.vercel.app/" target="_blank" rel="noopener noreferrer"
                className="ul-green" style={{ fontWeight: 500 }}>Harmonetics</a>
              {" "}— music therapy for autistic toddlers, live at 8 therapy centers.
              Nine roles in, the thread is always the same: make the thing feel human.
            </p>
          </div>
        </div>

        {/* RIGHT: Info sidebar */}
        <div>
          <p style={LABEL_STYLE}>Now</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "32px" }}>
            {([
              { role: "ML Engineer", company: "SquareResults", note: "AI recruiting — resume parsing & semantic matching at scale.", link: undefined },
              { role: "Software Dev Engineer", company: "Adaptive Concepts Academy", note: "Harmonetics — music therapy for autistic toddlers. Volunteer.", link: "https://harmonetics.vercel.app/" },
            ] as const).map(({ role, company, note, link }) => (
              <div key={company}>
                <p style={{ fontSize: "14px", fontWeight: 500, color: "var(--text)", marginBottom: "2px", lineHeight: 1.35 }}>
                  {role}
                </p>
                <p style={{ fontSize: "12.5px", color: "var(--text-3)", marginBottom: "4px" }}>
                  {company}
                  {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer"
                      className="ul-green" style={{ marginLeft: "5px", fontSize: "11px" }}>↗</a>
                  )}
                </p>
                <p style={{ fontSize: "12px", color: "var(--text-3)", lineHeight: 1.5 }}>{note}</p>
              </div>
            ))}
          </div>

          <hr style={{ ...RULE, marginBottom: "28px" }} />

          <p style={LABEL_STYLE}>Education</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {([
              { school: "Northeastern University", degree: "M.S. Electrical & Computer Engineering", meta: "2023 – 2025 · GPA 3.56 · Boston" },
              { school: "University of Mumbai",    degree: "B.Tech Electronics & Telecom Engineering", meta: "2019 – 2023 · GPA 3.52 · Mumbai" },
            ] as const).map(({ school, degree, meta }) => (
              <div key={school}>
                <p style={{ fontSize: "14px", fontWeight: 500, color: "var(--text)", marginBottom: "3px", lineHeight: 1.35 }}>
                  {school}
                </p>
                <p style={{ fontSize: "12.5px", color: "var(--text-2)", marginBottom: "2px", lineHeight: 1.4 }}>{degree}</p>
                <p style={{ fontSize: "12px", color: "var(--text-3)" }}>{meta}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom links ──────────────────────────────────── */}
      <hr style={{ ...RULE, marginBottom: "36px" }} />
      <div style={{ display: "flex", gap: "32px" }}>
        <Link href="/work"     className="ul-green" style={{ fontSize: "14px" }}>Work →</Link>
        <Link href="/projects" className="ul-green" style={{ fontSize: "14px" }}>Projects →</Link>
      </div>

    </div>
  );
}
