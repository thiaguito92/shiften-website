"use client";

import Lenis from "lenis";
import { useEffect } from "react";

// Scroll suave en escritorio. En el celular se deja el scroll nativo,
// que ya es suave y es lo que la gente espera al tocar la pantalla.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: 0.1,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
