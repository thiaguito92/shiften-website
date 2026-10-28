"use client";

import { useEffect } from "react";

const colors: Record<string, string> = {
  paper: "var(--paper)",
  paper2: "var(--paper-2)",
  ink: "var(--ink)",
  signal: "var(--signal)",
};

// Cambia el color de fondo de la página según la sección que está
// en el medio de la pantalla. La transición la hace el CSS.
export default function BackgroundController() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    let current = "";

    const check = () => {
      frame = 0;
      const middle = window.innerHeight / 2;
      const sections = document.querySelectorAll<HTMLElement>("[data-bg]");
      for (const s of sections) {
        const r = s.getBoundingClientRect();
        if (r.top <= middle && r.bottom > middle) {
          const bg = s.dataset.bg ?? "paper";
          if (bg !== current) {
            current = bg;
            root.style.setProperty("--page-bg", colors[bg] ?? colors.paper);
          }
          return;
        }
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };

    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
