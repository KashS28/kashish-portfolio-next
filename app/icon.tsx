import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#F3FAF0",
        borderRadius: "7px",
      }}
    >
      <span
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "19px",
          fontWeight: 700,
          color: "#3A8A5C",
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        K
      </span>
    </div>,
    { ...size }
  );
}
