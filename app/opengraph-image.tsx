import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#F3FAF0",
        padding: "72px 80px",
      }}
    >
      {/* top label */}
      <span
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "15px",
          fontWeight: 400,
          color: "#3A8A5C",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        Portfolio
      </span>

      {/* main content */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "96px",
            fontWeight: 700,
            color: "#172B1C",
            lineHeight: 1.0,
            margin: 0,
            letterSpacing: "-0.03em",
          }}
        >
          Kashish Shah
        </h1>
        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: "28px",
            color: "rgba(23,43,28,0.55)",
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          ML Engineer · Mumbai → Boston
        </p>
      </div>

      {/* bottom row */}
      <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
        {["kashishah2804@gmail.com", "github.com/KashS28", "linkedin.com/in/kashish-shah-2804"].map((item) => (
          <span
            key={item}
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              color: "rgba(23,43,28,0.35)",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>,
    { ...size }
  );
}
