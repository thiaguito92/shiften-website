"use client";

import { motion } from "framer-motion";
import {
  Target,
  Workflow,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#090909] py-40 text-white"
    >
      {/* Glow */}

      <div className="absolute right-0 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-violet-500/10 blur-[240px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-24 lg:grid-cols-[1.1fr_.9fr]">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500">
              ¿POR QUÉ SHIFTEN?
            </p>

            <h2 className="text-5xl font-bold leading-tight tracking-[-0.04em] md:text-7xl">
              No implementamos
              <br />
              herramientas.
              <br />
              Diseñamos sistemas
              <br />
              que hacen crecer
              <br />
              empresas.
            </h2>

            <p className="mt-10 max-w-xl text-xl leading-9 text-zinc-400">
              La inteligencia artificial por sí sola no resuelve problemas.
              Lo importante es cómo se integra a los procesos de tu empresa
              para ahorrar tiempo, reducir errores y permitir que el negocio
              siga creciendo.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: .4 }}
              viewport={{ once: true }}
              className="mt-14 rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm"
            >
              <p className="text-lg leading-8 text-zinc-300">
                Cada automatización que construimos tiene un objetivo:
              </p>

              <p className="mt-4 text-3xl font-semibold leading-relaxed tracking-[-0.03em]">
                Ahorrarte tiempo hoy
                <span className="text-zinc-500">
                  {" "}y permitir que tu empresa
                </span>

                <span className="block bg-gradient-to-r from-blue-300 via-white to-violet-300 bg-clip-text text-transparent">
                  escale mañana.
                </span>

              </p>

            </motion.div>

          </motion.div>

          {/* RIGHT */}

          <div className="space-y-6">

            <WhyCard
              delay={0}
              icon={<Target size={24} />}
              title="Pensamos en resultados"
              description="No elegimos herramientas por moda. Elegimos las que generan el mayor impacto."
            />

            <WhyCard
              delay={0.1}
              icon={<Workflow size={24} />}
              title="Todo conectado"
              description="Integramos tus sistemas para eliminar tareas repetitivas y evitar errores."
            />

            <WhyCard
              delay={0.2}
              icon={<TrendingUp size={24} />}
              title="Escalable"
              description="Las soluciones están preparadas para acompañar el crecimiento de tu empresa."
            />

            <WhyCard
              delay={0.3}
              icon={<ShieldCheck size={24} />}
              title="Mejora continua"
              description="Seguimos optimizando los procesos para que generen cada vez más valor."
            />

          </div>

        </div>

      </div>

    </section>
  );
}
function WhyCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 35 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      whileHover={{
        x: 8,
        transition: { duration: 0.25 },
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
    >
      {/* Glow */}

      <div className="absolute -left-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-violet-500/0 blur-[90px] transition-all duration-500 group-hover:bg-violet-500/10" />

      <div className="relative flex gap-6">

        {/* Icon */}

        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-100 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>

        {/* Content */}

        <div>

          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
            {title}
          </h3>

          <p className="mt-4 leading-8 text-zinc-400">
            {description}
          </p>

        </div>

      </div>

      {/* Bottom line */}

      <div className="mt-8 h-px w-full bg-gradient-to-r from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}