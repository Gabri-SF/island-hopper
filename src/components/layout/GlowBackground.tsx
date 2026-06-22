"use client";

import { useEffect, useState } from "react";

const GLOW_COLORS = [
  "rgba(59,130,246,0.04)",
  "rgba(16,185,129,0.04)",
  "rgba(6,182,212,0.03)",
  "rgba(139,92,246,0.03)",
];

interface Glow {
  color: string;
  top: string;
  left: string;
  size: number;
  blur: number;
}

export default function GlowBackground() {
  const [glows, setGlows] = useState<Glow[]>([]);

  useEffect(() => {
    setGlows(
      Array.from({ length: 6 }, (_, i) => ({
        color: GLOW_COLORS[i % GLOW_COLORS.length],
        top: `${Math.random() * 90}%`,
        left: `${Math.random() * 85}%`,
        size: 400 + Math.floor(Math.random() * 300),
        blur: 140 + Math.floor(Math.random() * 80),
      }))
    );
  }, []);

  return (
    <>
      {glows.map((g, i) => (
        <div
          key={i}
          className="fixed rounded-full pointer-events-none z-0"
          style={{
            top: g.top,
            left: g.left,
            width: g.size,
            height: g.size,
            background: g.color,
            filter: `blur(${g.blur}px)`,
          }}
        />
      ))}
    </>
  );
}
