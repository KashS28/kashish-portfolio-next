"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
];

export default function Nav() {
  const path = usePathname();
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(243,250,240,0.92)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div className="pw" style={{ height: "56px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px", color: "var(--text)", letterSpacing: "-0.02em" }}>
          Kashish Shah
        </Link>
        <nav style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
          {links.map(({ href, label }) => {
            const active = path === href;
            return (
              <Link key={href} href={href} className="ul"
                style={{ fontSize: "14px", fontWeight: active ? 600 : 400, color: active ? "var(--text)" : "var(--text-2)", transition: "color .15s" }}>
                {label}
              </Link>
            );
          })}
          <a href="/Kashish_Shah_Resume.pdf" target="_blank" rel="noopener noreferrer"
            className="ul-green" style={{ fontSize: "14px", fontWeight: 500 }}>
            Resume ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
