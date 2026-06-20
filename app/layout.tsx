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
  title: "Kashish Shah",
  description: "ML Engineer and software builder.",
  authors: [{ name: "Kashish Shah" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.className}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,400;1,9..144,600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
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
