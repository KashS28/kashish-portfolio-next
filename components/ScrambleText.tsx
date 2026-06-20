"use client";
import { useRef, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#&*";

export default function ScrambleText({
  text,
  style,
  className,
}: {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);

  const scramble = useCallback(() => {
    if (!ref.current) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    // each char resolves after index * 1.5 frames
    const resolveAt = text.split("").map((_, i) => i * 1.5);
    let frame = 0;
    const maxFrame = Math.max(...resolveAt) + 1;

    const tick = () => {
      if (!ref.current) return;
      ref.current.textContent = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (frame >= resolveAt[i]) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");
      frame += 0.5;
      if (frame <= maxFrame) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        ref.current.textContent = text;
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [text]);

  return (
    <span ref={ref} onMouseEnter={scramble} style={style} className={className}>
      {text}
    </span>
  );
}
