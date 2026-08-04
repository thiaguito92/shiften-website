"use client";

import { motion } from "framer-motion";

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#090909] py-40 text-white"
    >
      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[240px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >

          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500">
            PROCESO
          </p>

          <h2 className="text-5xl font-bold leading-tight tracking-[-0.04em] md:text-7xl">
            Implementar IA
            <br />
            no tiene que
            <br />
            ser complicado.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
            Nos encargamos de todo el proceso para que tu empresa empiece
            a ahorrar tiempo en pocas semanas, sin complicaciones técnicas.
          </p>

        </motion.div>

        <div className="mt-28 grid gap-8 lg:grid-cols-2">

          <ProcessCard
            delay={0}
            number="01"
            title="Descubrimiento"
            description="Analizamos tu empresa, detectamos procesos repetitivos y encontramos las mejores oportunidades para automatizar."
          />

          <ProcessCard
            delay={0.15}
            number="02"
            title="Diseño"
            description="Diseñamos la solución, definimos el flujo y elegimos las herramientas que mejor se adaptan a tu negocio."
          />

          <ProcessCard
            delay={0.30}
            number="03"
            title="Implementación"
            description="Construimos la automatización, conectamos tus sistemas y realizamos todas las pruebas necesarias."
          />

          <ProcessCard
            delay={0.45}
            number="04"
            title="Optimización"
            description="Medimos resultados, ajustamos el sistema y seguimos mejorándolo para generar cada vez más valor."
          />

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .5 }}
          viewport={{ once: true }}
          className="mx-auto mt-28 max-w-4xl text-center"
        >

          <p className="text-3xl font-semibold leading-relaxed md:text-5xl">
            En pocas semanas,
            <span className="text-zinc-500">
              {" "}tu empresa pasa
            </span>

            <span className="mt-2 block bg-gradient-to-r from-blue-300 via-white to-violet-300 bg-clip-text text-transparent">
              de hacer tareas manuales a tener procesos que trabajan solos.
            </span>

          </p>

        </motion.div>

      </div>

    </section>
  );
}
function ProcessCard({
  number,
  title,
  description,
  delay,
}: {
  number: string;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-10 backdrop-blur-sm transition-all duration-500 hover:border-white/10 hover:bg-white/[0.035]"
    >
      {/* Número gigante */}

      <div className="pointer-events-none absolute right-8 top-3 text-[110px] font-bold leading-none tracking-[-0.08em] text-white/[0.03] transition-all duration-500 group-hover:text-white/[0.05]">
        {number}
      </div>

      {/* Glow */}

      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-violet-500/0 blur-[90px] transition-all duration-500 group-hover:bg-violet-500/10" />

      {/* Número */}

      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-semibold text-white transition-transform duration-300 group-hover:scale-110">
        {number}
      </div>

      {/* Título */}

      <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white">
        {title}
      </h3>

      {/* Texto */}

      <p className="mt-6 max-w-md leading-8 text-zinc-400">
        {description}
      </p>

      {/* Línea */}

      <div className="mt-10 h-px w-full bg-gradient-to-r from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Indicador */}

      <motion.div
        animate={{
          x: [0, 5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        className="mt-8 flex items-center gap-2 text-sm text-zinc-500"
      >
        <div className="h-2 w-2 rounded-full bg-violet-300" />

        <span>Implementación guiada</span>
      </motion.div>
    </motion.div>
  );
}