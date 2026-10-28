"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { useMedia } from "./useMedia";

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden
      className={`arrow h-[0.8em] w-[0.8em] shrink-0 ${className ?? ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M4 12 12 4M5.5 4H12v6.5" />
    </svg>
  );
}

function Roll({ children }: { children: string }) {
  return (
    <span className="roll">
      <span>{children}</span>
      <span aria-hidden>{children}</span>
    </span>
  );
}

// Botón que se acerca un poco al mouse. Solo con mouse y sin
// "reducir movimiento"; en el celular queda quieto.
export function MagneticButton({
  href,
  children,
  tone = "ink",
  external = true,
}: {
  href: string;
  children: string;
  tone?: "ink" | "paper";
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const fine = useMedia("(hover: hover) and (pointer: fine)");
  const reduced = useMedia("(prefers-reduced-motion: reduce)");
  const enabled = fine && !reduced;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 16, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 180, damping: 16, mass: 0.5 });

  const move = (e: React.PointerEvent) => {
    if (!enabled || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.28);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.36);
  };
  const leave = () => {
    x.set(0);
    y.set(0);
  };

  const colors =
    tone === "ink"
      ? "bg-ink text-paper"
      : "bg-paper text-ink";

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onPointerMove={move}
      onPointerLeave={leave}
      style={{ x: sx, y: sy }}
      className={`group inline-flex items-center gap-4 rounded-[3px] px-6 py-5 text-[17px] font-medium md:px-8 md:py-6 md:text-lg ${colors} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal`}
    >
      <Roll>{children}</Roll>
      <Arrow className="text-signal" />
    </motion.a>
  );
}

export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const external = href.startsWith("http") || href.startsWith("mailto");
  return (
    <a
      href={href}
      target={external && !href.startsWith("mailto") ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center gap-2 ${className ?? ""}`}
    >
      <span className="ulink">{children}</span>
      <Arrow />
    </a>
  );
}
