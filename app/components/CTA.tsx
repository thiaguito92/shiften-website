"use client";

import { whatsappUrl } from "@/config/links";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock3,
} from "lucide-react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[#090909] py-44 text-white"
    >
      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/15 blur-[240px]" />

      <div className="relative mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500">
            EMPECEMOS
          </p>

          <h2 className="text-5xl font-bold leading-tight tracking-[-0.04em] md:text-7xl">
            ¿Listo para dejar
            <br />
            de perder tiempo
            <br />
            en tareas repetitivas?
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-zinc-400">
            En una llamada de <span className="font-semibold text-white">20 minutos </span> 
            analizamos tu empresa, detectamos oportunidades de automatización
            y te mostramos cómo podrías ahorrar tiempo desde el primer día.
          </p>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-8">

            <Benefit
              icon={<CheckCircle2 size={20} />}
              text="Sin compromiso"
            />

            <Benefit
              icon={<Clock3 size={20} />}
              text="20 minutos"
            />

            <Benefit
              icon={<Calendar size={20} />}
              text="Análisis personalizado"
            />

          </div>

          <motion.a
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: .98,
            }}
            href={whatsappUrl}
            className="group mx-auto mt-16 inline-flex items-center gap-4 rounded-full bg-white px-8 py-5 text-lg font-semibold text-black transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.15)]"
          >
            Agendar llamada

            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </motion.a>

          <p className="mt-8 text-sm text-zinc-500">
            Respondemos normalmente en menos de 24 horas.
          </p>

        </motion.div>

      </div>

    </section>
  );
}
function Benefit({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{
        y: -3,
      }}
      className="flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.03] px-5 py-3 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05]"
    >
      <div className="text-violet-300">
        {icon}
      </div>

      <span className="text-zinc-300">
        {text}
      </span>
    </motion.div>
  );
}