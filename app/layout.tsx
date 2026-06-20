import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Nav from "@/components/Nav";
import CommandPalette from "@/components/CommandPalette";
import PageTransition from "@/components/PageTransition";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kashish-portfolio-v2.vercel.app"),
  title: {
    default: "Kashish Shah — ML Engineer & Software Developer",
    template: "%s — Kashish Shah",
  },
  description:
    "Kashish Shah is an ML Engineer and software developer based in Boston. Builds machine learning systems, AI applications, and full-stack products. MS ECE, Northeastern University.",
  authors: [{ name: "Kashish Shah" }],
  keywords: [
    "ML Engineer", "Machine Learning Engineer", "Software Developer",
    "Software Engineer", "AI Engineer", "Full-Stack Developer",
    "Kashish Shah", "Boston", "Northeastern University",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kashish Shah",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.className}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,400;1,9..144,600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kashish Shah",
              url: "https://kashish-portfolio-v2.vercel.app",
              email: "kashishah2804@gmail.com",
              jobTitle: "ML Engineer",
              description:
                "ML Engineer and software developer specializing in machine learning systems, AI applications, and full-stack engineering.",
              alumniOf: [
                { "@type": "CollegeOrUniversity", name: "Northeastern University" },
                { "@type": "CollegeOrUniversity", name: "University of Mumbai" },
              ],
              sameAs: [
                "https://linkedin.com/in/kashish-shah-2804",
                "https://github.com/KashS28",
              ],
              knowsAbout: [
                "Machine Learning", "Artificial Intelligence", "Software Engineering",
                "Full-Stack Development", "Python", "React", "Next.js",
              ],
            }),
          }}
        />
      </head>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Nav />
        <CommandPalette />
        <PageTransition>{children}</PageTransition>
        <Analytics />
        <footer style={{ borderTop: "1px solid var(--border)" }}>
          <div
            className="pw"
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 0", fontSize: "13px", color: "var(--text-3)" }}
          >
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "14px", color: "var(--text-2)" }}>
              Kashish Shah
            </span>
            <a href="mailto:kashishah2804@gmail.com" className="ul-green" style={{ fontSize: "13px" }}>
              kashishah2804@gmail.com
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
