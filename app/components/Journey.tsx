"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useMedia } from "./useMedia";

// Recorrido de una consulta: un grupo de consultas viaja por un camino
// guiado por el scroll. En cada etapa algunas se caen. La que llega al
// final se pone naranja. Todo se mueve con transform y opacidad para que
// ande fluido en el celular.

const VB_W = 1200;
const VB_H = 400;
const PATH =
  "M 40 250 C 190 250, 230 120, 400 130 S 620 310, 820 280 S 1020 130, 1160 160";

const STAGES = [
  {
    title: "Te escribe.",
    body: "La consulta llega por WhatsApp, por mail o por un portal, y se mezcla con todo lo demás.",
    at: 0.3,
    window: [0.16, 0.42],
  },
  {
    title: "Espera respuesta.",
    body: "Si la respuesta tarda, el interés se enfría y empieza a mirar a otro.",
    at: 0.56,
    window: [0.44, 0.68],
  },
  {
    title: "Queda en el aire.",
    body: "Nadie lo vuelve a contactar. No dijo que no: simplemente nadie lo siguió.",
    at: 0.8,
    window: [0.7, 0.99],
  },
] as const;

// lag: qué tan atrás viaja cada consulta. drop: en qué etapa se cae (-1 = llega).
const DOTS = [
  { lag: 0, drop: -1 },
  { lag: 0.035, drop: 0 },
  { lag: 0.07, drop: 1 },
  { lag: 0.105, drop: 0 },
  { lag: 0.14, drop: 2 },
  { lag: 0.175, drop: 1 },
  { lag: 0.21, drop: 2 },
];

const TAIL = 0.24;

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

function useReducedMotionPref() {
  return useMedia("(prefers-reduced-motion: reduce)");
}

const INTRO_TITLE = "¿Dónde se pierde un cliente?";
const INTRO_BODY =
  "Pocas veces se pierde de golpe. Se pierde de a poco, en el camino entre que te escribe y que alguien le responde.";
const CLOSE_TITLE = "Las que llegan al final son las que se venden.";
const CLOSE_BODY = "Nuestro trabajo es que se pierdan cada vez menos.";

export default function Journey() {
  const reduced = useReducedMotionPref();
  return reduced ? <JourneyStatic /> : <JourneyAnimated />;
}

function Road({
  travel,
  reduced,
}: {
  travel?: MotionValue<number>;
  reduced?: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const size = useRef({ w: 0, h: 0 });
  const [marks, setMarks] = useState<{ x: number; y: number }[]>([]);
  const one = useMotionValue(1);
  const drawn = useTransform(travel ?? one, (v) => clamp(v));

  const update = useCallback(
    (t: number) => {
      const path = pathRef.current;
      if (!path) return;
      const len = path.getTotalLength();
      const { w, h } = size.current;
      const sx = w / VB_W;
      const sy = h / VB_H;

      DOTS.forEach((dot, i) => {
        const el = dotRefs.current[i];
        if (!el) return;
        const f = t - dot.lag;
        const dropAt = dot.drop >= 0 ? STAGES[dot.drop].at : Infinity;
        const along = clamp(Math.min(f, dropAt));
        const p = path.getPointAtLength(along * len);
        const after = f > dropAt ? f - dropAt : 0;

        let x = p.x * sx;
        let y = p.y * sy;
        let opacity = clamp(f * 14);
        let scale = 1;

        if (dot.drop >= 0 && after > 0) {
          if (reduced) {
            y += 34;
            opacity = 0.28;
          } else {
            x += after * w * 0.06;
            y += after * after * h * 9 + after * h * 0.6;
            opacity = clamp(1 - after * 6);
          }
        }

        const arrived = dot.drop < 0 && f >= 0.985;
        if (arrived) scale = 1.7;
        el.style.opacity = String(opacity);
        el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
        if (arrived) el.dataset.arrived = "";
        else delete el.dataset.arrived;
        if (dot.drop >= 0 && after > 0) el.dataset.lost = "";
        else delete el.dataset.lost;
      });
    },
    [reduced],
  );

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const path = pathRef.current;
    if (!wrap || !path) return;
    const len = path.getTotalLength();
    setMarks(STAGES.map((s) => path.getPointAtLength(s.at * len)));

    const ro = new ResizeObserver(() => {
      size.current = { w: wrap.clientWidth, h: wrap.clientHeight };
      update(travel ? travel.get() : 1 + TAIL);
    });
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [travel, update]);

  useEffect(() => {
    if (!travel) return;
    return travel.on("change", update);
  }, [travel, update]);

  return (
    <div ref={wrapRef} className="relative h-[30svh] w-full md:h-[36svh]">
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden
      >
        <path
          d={PATH}
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.16}
          strokeWidth={1}
          strokeDasharray="2 6"
          vectorEffect="non-scaling-stroke"
        />
        <motion.path
          ref={pathRef}
          d={PATH}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          vectorEffect="non-scaling-stroke"
          style={travel ? { pathLength: drawn } : undefined}
        />
      </svg>

      {marks.map((m, i) => (
        <StageMark key={i} index={i} x={m.x} y={m.y} travel={travel} />
      ))}

      <span
        aria-hidden
        className="absolute text-[12px] uppercase tracking-[0.14em] text-mist"
        style={{ right: 0, top: `${(160 / VB_H) * 100}%`, transform: "translateY(-220%)" }}
      >
        Venta
      </span>

      {DOTS.map((_, i) => (
        <span
          key={i}
          ref={(el) => {
            dotRefs.current[i] = el;
          }}
          aria-hidden
          className="journey-dot absolute left-0 top-0 -ml-[7px] -mt-[7px] h-[14px] w-[14px] rounded-full rounded-bl-[2px] bg-paper opacity-0 will-change-transform"
        />
      ))}
    </div>
  );
}

function StageMark({
  index,
  x,
  y,
  travel,
}: {
  index: number;
  x: number;
  y: number;
  travel?: MotionValue<number>;
}) {
  const at = STAGES[index].at;
  const one = useMotionValue(1);
  const opacity = useTransform(travel ?? one, [at - 0.06, at], [0.35, 1]);
  const right = x > VB_W * 0.75;
  // La etapa del medio cae en un valle del camino: su etiqueta va abajo.
  const below = index === 1;
  return (
    <motion.div
      className="absolute"
      style={{
        left: `${(x / VB_W) * 100}%`,
        top: `${(y / VB_H) * 100}%`,
        opacity,
      }}
    >
      <span
        className={`absolute left-0 block h-6 w-px bg-current opacity-40 ${below ? "top-3" : "-top-8"}`}
      />
      <span
        className={`absolute whitespace-nowrap text-[11px] uppercase tracking-[0.14em] text-mist md:text-[13px] ${
          below ? "top-11" : "-top-14"
        } ${right ? "right-0" : "left-0"}`}
      >
        {STAGES[index].title.replace(".", "")}
      </span>
    </motion.div>
  );
}

function Phase({
  travel,
  from,
  to,
  children,
}: {
  travel: MotionValue<number>;
  from: number;
  to: number;
  children: React.ReactNode;
}) {
  const e = 0.04;
  const input = [from - e, from, to - e, to];
  const opacity = useTransform(
    travel,
    input,
    [from <= 0 ? 1 : 0, 1, 1, to >= 1 ? 1 : 0],
  );
  const y = useTransform(travel, input, [from <= 0 ? 0 : 40, 0, 0, to >= 1 ? 0 : -40]);
  return (
    <motion.div className="absolute inset-x-0 bottom-0" style={{ opacity, y }}>
      {children}
    </motion.div>
  );
}

function Title({ children, as = "p" }: { children: React.ReactNode; as?: "h2" | "p" }) {
  const Tag = as;
  return (
    <Tag className="font-display text-[11.5vw] font-semibold leading-[0.95] tracking-[-0.045em] md:text-[6.2vw]">
      {children}
    </Tag>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-5 max-w-[38ch] text-[18px] leading-[1.45] text-mist md:mt-6 md:text-[20px]">
      {children}
    </p>
  );
}

function JourneyAnimated() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  // travel = posición de la primera consulta en el camino (0 a 1). Sigue un
  // poco más allá de 1 para que las que vienen atrás terminen de caerse.
  const travel = useTransform(scrollYProgress, [0.05, 0.96], [0, 1 + TAIL], { clamp: true });
  const bar = useTransform(travel, [0, 1 + TAIL], [0, 1]);

  return (
    <section
      ref={ref}
      id="recorrido"
      data-bg="ink"
      className="relative h-[440vh] text-paper"
    >
      <div className="sticky top-0 flex h-[100svh] flex-col justify-between overflow-hidden px-4 pb-10 pt-8 md:px-10 md:pb-14 md:pt-10">
        <div className="flex items-center justify-between text-[13px] uppercase tracking-[0.14em] text-mist">
          <span>El recorrido de una consulta</span>
          <span className="relative hidden h-px w-40 bg-paper/15 md:block">
            <motion.span
              className="absolute inset-0 origin-left bg-paper"
              style={{ scaleX: bar }}
            />
          </span>
        </div>

        <div className="relative h-[40svh] md:h-[34svh]">
          <Phase travel={travel} from={-1} to={0.14}>
            <Title as="h2">{INTRO_TITLE}</Title>
            <Body>{INTRO_BODY}</Body>
          </Phase>
          {STAGES.map((s) => (
            <Phase key={s.title} travel={travel} from={s.window[0]} to={s.window[1]}>
              <Title>{s.title}</Title>
              <Body>{s.body}</Body>
            </Phase>
          ))}
          <Phase travel={travel} from={1.01} to={3}>
            <Title>
              {CLOSE_TITLE.slice(0, -1)}
              <span className="text-signal">.</span>
            </Title>
            <Body>{CLOSE_BODY}</Body>
          </Phase>
        </div>

        <Road travel={travel} />
      </div>
    </section>
  );
}

function JourneyStatic() {
  return (
    <section id="recorrido" data-bg="ink" className="px-4 py-24 text-paper md:px-10 md:py-36">
      <Title as="h2">{INTRO_TITLE}</Title>
      <Body>{INTRO_BODY}</Body>
      <div className="mt-24">
        <Road reduced />
      </div>
      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {STAGES.map((s) => (
          <div key={s.title}>
            <p className="font-display text-3xl font-semibold tracking-[-0.03em]">{s.title}</p>
            <p className="mt-3 text-mist">{s.body}</p>
          </div>
        ))}
      </div>
      <p className="mt-20 max-w-[22ch] font-display text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
        {CLOSE_TITLE}
      </p>
      <Body>{CLOSE_BODY}</Body>
    </section>
  );
}
