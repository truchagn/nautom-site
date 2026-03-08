"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";

// ── SVG Logos ───────────────────────────────────────────────────────────────

const ClaudeLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 md:w-8 md:h-8">
    <path d="M16.098 10.268l-4.914 8.483-2.088-3.606 4.914-8.483 2.088 3.606z" fill="#D97757" />
    <path d="M7.9 14.145l2.088 3.606H5.074L2.986 14.145h4.914z" fill="#D97757" />
    <path d="M14.01 6.662l-4.914 8.483L7.008 11.54l4.914-8.484 2.088 3.606z" fill="#D97757" />
    <path d="M21.014 14.145l-2.088 3.606h-4.914l2.088-3.606h4.914z" fill="#D97757" />
  </svg>
);

const ChatGPTLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 md:w-8 md:h-8">
    <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 0011.67.254a6.046 6.046 0 00-5.771 4.213 5.985 5.985 0 00-4.008 2.895 6.046 6.046 0 00.749 7.112 5.985 5.985 0 00.516 4.911 6.046 6.046 0 006.51 2.9A6.065 6.065 0 0013.33 23.746a6.046 6.046 0 005.771-4.213 5.985 5.985 0 004.008-2.895 6.046 6.046 0 00-.749-7.112zM13.33 22.115a4.508 4.508 0 01-2.9-1.054l.144-.08 4.814-2.78a.783.783 0 00.395-.68v-6.789l2.035 1.175a.072.072 0 01.04.055v5.625a4.528 4.528 0 01-4.528 4.528zM3.478 18.006a4.506 4.506 0 01-.54-3.024l.144.086 4.814 2.78a.782.782 0 00.789 0l5.879-3.395v2.35a.072.072 0 01-.029.062l-4.868 2.812a4.528 4.528 0 01-6.189-1.671zM2.24 7.896a4.506 4.506 0 012.36-1.98V11.7a.782.782 0 00.395.68l5.879 3.394-2.035 1.175a.072.072 0 01-.068.005l-4.868-2.812A4.528 4.528 0 012.24 7.896zm17.552 4.09l-5.879-3.394 2.035-1.175a.072.072 0 01.068-.005l4.868 2.812a4.528 4.528 0 01-.7 8.143v-5.784a.782.782 0 00-.392-.597zm2.025-3.04l-.144-.086-4.814-2.78a.782.782 0 00-.789 0l-5.879 3.395v-2.35a.072.072 0 01.029-.062l4.868-2.812a4.528 4.528 0 016.729 4.695zm-12.72 4.188L7.06 11.96a.072.072 0 01-.04-.055V6.28a4.528 4.528 0 017.428-3.474l-.144.08-4.814 2.78a.783.783 0 00-.395.68zm1.105-2.383l2.62-1.513 2.62 1.513v3.025l-2.62 1.513-2.62-1.513z" fill="#10A37F" />
  </svg>
);

const GeminiLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8">
    <defs>
      <linearGradient id="gemG" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4285F4" />
        <stop offset="0.5" stopColor="#9B72CB" />
        <stop offset="1" stopColor="#D96570" />
      </linearGradient>
    </defs>
    <path d="M12 24C12 18.21 7.338 13.116 1.198 12.198L1 12c6.338-.116 11-5.21 11-11l.198-.198C12.116 7.14 17.21 11.802 23 12c-6.14.918-10.802 5.58-11 11.802L12 24z" fill="url(#gemG)" />
  </svg>
);

const VercelLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8" fill="white">
    <path d="M12 2L2 19.5h20L12 2z" />
  </svg>
);

const SupabaseLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8">
    <path d="M13.7 21.888c-.413.544-1.283.16-1.283-.566V13.5h8.3c.758 0 1.164.876.666 1.436L13.7 21.888z" fill="#3ECF8E" />
    <path d="M10.3 2.112c.413-.544 1.283-.16 1.283.566V10.5H3.283c-.758 0-1.164-.876-.666-1.436L10.3 2.112z" fill="#3ECF8E" />
  </svg>
);

const RailwayLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8" fill="white">
    <path d="M.113 14.725C.848 20.225 5.292 24 12 24c1.6 0 3.103-.263 4.469-.748l-8.822-8.573-7.534.046zm18.782 5.894C21.45 18.38 23 15.363 23 12c0-.298-.012-.594-.034-.886L14.32 2.59l-1.586 8.63 6.16 9.399zM12.93.065a11.482 11.482 0 00-2.27.067L6.69 9.549l10.838 10.528L12.93.065zM4.159 1.547C1.873 3.567.345 6.478.048 9.753L8.57 9.7 4.16 1.547z" />
  </svg>
);

const GitHubLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8" fill="white">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

// ── Hex ring: 7 nodes evenly around center ──────────────────────────────────

const RADIUS = 38; // % from center
const CX = 50;
const CY = 50;

const tools = [
  { name: "Claude",   Logo: ClaudeLogo },
  { name: "ChatGPT",  Logo: ChatGPTLogo },
  { name: "Gemini",   Logo: GeminiLogo },
  { name: "Vercel",   Logo: VercelLogo },
  { name: "Supabase", Logo: SupabaseLogo },
  { name: "Railway",  Logo: RailwayLogo },
  { name: "GitHub",   Logo: GitHubLogo },
];

const getNodePos = (index: number, total: number) => {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  return {
    x: CX + RADIUS * Math.cos(angle),
    y: CY + RADIUS * Math.sin(angle),
  };
};

// Pre-calculate positions (stable across renders)
const positions = tools.map((_, i) => getNodePos(i, tools.length));

export default function HeroAnimation() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  if (!ready) {
    return (
      <div className="w-full aspect-square mx-auto max-w-[280px] md:max-w-[420px]" />
    );
  }

  return (
    <div className="relative w-full aspect-square mx-auto max-w-[280px] md:max-w-[420px] select-none">

      {/* ── SVG layer: lines + pulses ─────────────────────────────── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.5" />
          </filter>
        </defs>

        {/* Connection lines — visible branches from each node to center */}
        {positions.map((pos, i) => (
          <motion.line
            key={`line-${i}`}
            x1={pos.x}
            y1={pos.y}
            x2={CX}
            y2={CY}
            stroke="white"
            strokeOpacity={0.15}
            strokeWidth={0.4}
            strokeDasharray="1.5 1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: "easeOut" }}
          />
        ))}

        {/* Data pulses traveling from each node to center */}
        {positions.map((pos, i) => (
          <motion.circle
            key={`pulse-${i}`}
            r={0.8}
            fill="#D97757"
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={{
              cx: [pos.x, CX],
              cy: [pos.y, CY],
              opacity: [0, 0.7, 0.7, 0],
            }}
            transition={{
              duration: 2,
              delay: 1.5 + i * 1.1,
              repeat: Infinity,
              repeatDelay: 5 + i * 0.5,
              ease: "linear",
            }}
          />
        ))}
      </svg>

      {/* ── Center AI hub — positioned at exact (50%, 50%) ────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {/* Breathing ring */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-3 md:-inset-4 rounded-full border border-primary/20"
        />
        <div
          className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border border-white/[0.12]"
          style={{
            background: "radial-gradient(circle, rgba(217,119,87,0.1) 0%, rgba(255,255,255,0.03) 50%, transparent 70%)",
          }}
        >
          <Logo className="w-8 h-8 md:w-10 md:h-10" />
        </div>
      </motion.div>

      {/* ── Tool nodes — positioned at same % coords as SVG lines ── */}
      {tools.map((tool, i) => {
        const pos = positions[i];
        return (
          <div
            key={tool.name}
            className="absolute z-10"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.35,
                delay: 0.1 + i * 0.07,
                type: "spring" as const,
                stiffness: 150,
                damping: 15,
              }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="group"
            >
              <div
                className="flex flex-col items-center gap-1 md:gap-1.5 px-2.5 py-1.5 md:px-5 md:py-3.5 rounded-lg md:rounded-xl border border-white/[0.08] transition-all duration-500 group-hover:border-white/[0.2]"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <tool.Logo />
                <span className="text-[7px] md:text-[11px] text-white/35 font-mono group-hover:text-white/60 transition-colors duration-500 whitespace-nowrap">
                  {tool.name}
                </span>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
