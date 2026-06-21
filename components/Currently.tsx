"use client";
import { useState, useEffect } from "react";

const LINES = [
  "debugging a 40ms latency spike",
  "listening to: Nujabes",
  "Mumbai → Boston → SFO",
  "thinking about attention mechanisms",
  "missing Mumbai monsoons",
  "coffee #3 of the day",
  "rewriting a prompt for the 6th time",
  "explaining embeddings to a client",
  "reading about diffusion models",
  "building something at 2am",
  "pretending I understand transformers",
  "wishing I was eating vada pav",
  "somewhere between PyTorch and a deadline",
  "staring at a CUDA out of memory error",
  "wondering if RAG is enough",
  "reading papers I'll never finish",
  "in a meeting about the meeting",
  "caffeinating in SFO",
  "loss is going down. probably.",
  "on a flight probably",
  "figuring out why the loss isn't converging",
  "accidentally opened vim",
];

export default function Currently() {
  const [line, setLine] = useState<string | null>(null);

  useEffect(() => {
    setLine(LINES[Math.floor(Math.random() * LINES.length)]);
  }, []);

  return (
    <p
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        color: "var(--text-3)",
        marginBottom: "20px",
        minHeight: "16px",
        transition: "opacity .3s",
        opacity: line ? 1 : 0,
      }}
    >
      {line && (
        <>
          <span style={{ opacity: 0.5, marginRight: "5px" }}>→</span>
          {line}
        </>
      )}
    </p>
  );
}
