"use client";

import { useLayoutEffect } from "react";
import { useShown } from "./useShown";

type Props = {
  text: string;
  delay?: number;
  // Pinta de naranja el punto final.
  accentPeriod?: boolean;
  className?: string;
};

// Muestra un título línea por línea. Las líneas se calculan según
// cómo cortó el texto el navegador, así funciona igual en cualquier ancho.
export default function SplitLines({ text, delay = 0, accentPeriod, className }: Props) {
  const { ref, shown } = useShown<HTMLSpanElement>();
  const words = text.split(" ");

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const spans = el.querySelectorAll<HTMLSpanElement>(".rw");
      let line = -1;
      let lastTop = -Infinity;
      spans.forEach((s) => {
        if (s.offsetTop > lastTop + 4) {
          line += 1;
          lastTop = s.offsetTop;
        }
        s.style.setProperty("--l", String(line));
      });
    };
    measure();
    document.fonts?.ready.then(measure);
  }, [ref]);

  return (
    <span
      ref={ref}
      className={`split ${className ?? ""}`}
      data-shown={shown ? "" : undefined}
      style={{ ["--base" as string]: `${delay}ms` }}
    >
      {words.map((word, i) => {
        const last = i === words.length - 1;
        const withAccent = accentPeriod && last && word.endsWith(".");
        return (
          <span key={i}>
            <span className="rw">
              <span className="rwi">
                {withAccent ? (
                  <>
                    {word.slice(0, -1)}
                    <span className="text-signal">.</span>
                  </>
                ) : (
                  word
                )}
              </span>
            </span>
            {last ? null : " "}
          </span>
        );
      })}
    </span>
  );
}
