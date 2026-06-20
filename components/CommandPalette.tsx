"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";

const COMMANDS = [
  { label: "Home",     desc: "Back to start",                      href: "/",                                          external: false },
  { label: "Work",     desc: "Experience & roles",                  href: "/work",                                      external: false },
  { label: "Projects", desc: "Things I've built",                   href: "/projects",                                  external: false },
  { label: "Resume",   desc: "Open PDF ↗",                          href: "/Kashish_Shah_Resume.pdf",                   external: true  },
  { label: "Email",    desc: "kashishah2804@gmail.com",             href: "mailto:kashishah2804@gmail.com",             external: true  },
  { label: "GitHub",   desc: "github.com/kashish-shah",             href: "https://github.com/kashish-shah",            external: true  },
  { label: "LinkedIn", desc: "linkedin.com/in/kashish-shah-2804",   href: "https://linkedin.com/in/kashish-shah-2804",  external: true  },
];

export default function CommandPalette() {
  const [open, setOpen]         = useState(false);
  const [query, setQuery]       = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef                = useRef<HTMLInputElement>(null);
  const router                  = useRouter();

  const filtered = COMMANDS.filter(
    (c) =>
      c.label.toLowerCase().includes(query.toLowerCase()) ||
      c.desc.toLowerCase().includes(query.toLowerCase())
  );

  const execute = useCallback(
    (cmd: (typeof COMMANDS)[0]) => {
      setOpen(false);
      setQuery("");
      if (cmd.external) {
        window.open(cmd.href, "_blank", "noopener,noreferrer");
      } else {
        router.push(cmd.href);
      }
    },
    [router]
  );

  // open / close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => {
          if (!o) { setQuery(""); setSelected(0); }
          return !o;
        });
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // arrow nav + enter
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => Math.min(s + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => Math.max(s - 1, 0));
      }
      if (e.key === "Enter" && filtered[selected]) {
        execute(filtered[selected]);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, filtered, selected, execute]);

  useEffect(() => { setSelected(0); }, [query]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 10);
  }, [open]);

  if (!open) return null;

  return (
    <>
      {/* backdrop */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: "fixed", inset: 0, zIndex: 200,
          background: "rgba(23,43,28,0.12)",
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
        }}
      />

      {/* panel */}
      <div
        style={{
          position: "fixed", top: "20%", left: "50%",
          transform: "translateX(-50%)",
          zIndex: 201, width: "min(560px, 90vw)",
          background: "var(--bg)",
          border: "1px solid var(--border-mid)",
          borderRadius: "12px",
          boxShadow: "0 32px 80px rgba(23,43,28,0.14), 0 0 0 1px rgba(23,43,28,0.04)",
          overflow: "hidden",
        }}
      >
        {/* input row */}
        <div style={{
          display: "flex", alignItems: "center", gap: "10px",
          padding: "14px 16px",
          borderBottom: "1px solid var(--border)",
        }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--text-3)" }}>⌘</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search…"
            style={{
              flex: 1, border: "none", outline: "none",
              background: "transparent",
              fontSize: "14px", color: "var(--text)",
              fontFamily: "var(--font-sans)",
            }}
          />
          <kbd style={{
            fontFamily: "var(--font-mono)", fontSize: "10px",
            color: "var(--text-3)", background: "var(--bg-2)",
            padding: "2px 6px", borderRadius: "4px",
            border: "1px solid var(--border)",
          }}>esc</kbd>
        </div>

        {/* results */}
        <div style={{ padding: "6px 0", maxHeight: "300px", overflowY: "auto" }}>
          {filtered.length === 0 ? (
            <p style={{ padding: "12px 16px", fontSize: "13px", color: "var(--text-3)" }}>
              No results.
            </p>
          ) : (
            filtered.map((cmd, i) => (
              <button
                key={cmd.label}
                onClick={() => execute(cmd)}
                onMouseEnter={() => setSelected(i)}
                style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  width: "100%", padding: "10px 16px",
                  border: "none", cursor: "pointer",
                  background: i === selected ? "var(--bg-2)" : "transparent",
                  textAlign: "left", transition: "background .08s",
                }}
              >
                <span style={{
                  fontSize: "13px", fontWeight: 500,
                  color: "var(--text)", flex: 1,
                  fontFamily: "var(--font-sans)",
                }}>
                  {cmd.label}
                </span>
                <span style={{
                  fontSize: "12px", color: "var(--text-3)",
                  fontFamily: "var(--font-mono)",
                }}>
                  {cmd.desc}
                </span>
              </button>
            ))
          )}
        </div>

        {/* footer hints */}
        <div style={{
          padding: "8px 16px",
          borderTop: "1px solid var(--border)",
          display: "flex", gap: "20px",
        }}>
          {([ ["↑↓", "navigate"], ["↵", "open"], ["esc", "close"] ] as const).map(([key, label]) => (
            <span key={key} style={{
              fontSize: "11px", color: "var(--text-3)",
              display: "flex", alignItems: "center", gap: "5px",
            }}>
              <kbd style={{
                fontFamily: "var(--font-mono)",
                background: "var(--bg-2)", padding: "1px 5px",
                borderRadius: "3px", border: "1px solid var(--border)",
                fontSize: "10px",
              }}>{key}</kbd>
              {label}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
