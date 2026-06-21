import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="pw"
      style={{
        paddingTop: "96px",
        paddingBottom: "96px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--text-3)",
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "48px",
          fontWeight: 700,
          letterSpacing: "-0.04em",
          color: "var(--text)",
          lineHeight: 1.05,
          marginBottom: "8px",
        }}
      >
        Nothing here.
      </h1>
      <p style={{ fontSize: "15px", color: "var(--text-2)", maxWidth: "360px", lineHeight: 1.7 }}>
        This page doesn&apos;t exist. Maybe it moved, maybe it never did.
      </p>
      <Link
        href="/"
        className="ul-green"
        style={{ fontSize: "14px", width: "fit-content", marginTop: "8px" }}
      >
        ← Back home
      </Link>
    </div>
  );
}
