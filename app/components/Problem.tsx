"use client";
import { motion } from "framer-motion";
import { Clock3, Wallet, TrendingUp } from "lucide-react";

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden bg-[#090909] py-40 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-5xl font-bold leading-tight tracking-[-0.04em] md:text-7xl">
            Cada hora dedicada
            <br />
            a tareas repetitivas
            <br />
            es una hora que tu empresa
            <br />
            deja de crecer.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
            Mientras tu equipo realiza tareas manuales, está dejando de vender,
            atender clientes o hacer crecer el negocio. La automatización libera
            ese tiempo para lo que realmente genera valor.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-28 grid gap-8 md:grid-cols-3">
          <ProblemCard
            delay={0}
            icon={<Clock3 size={34} strokeWidth={1.8} />}
            title="Tiempo desperdiciado"
            description="Horas invertidas en tareas repetitivas que podrían ejecutarse automáticamente para que tu equipo se concentre en tareas estratégicas."
          />

          <ProblemCard
            delay={0.15}
            icon={<Wallet size={34} strokeWidth={1.8} />}
            title="Costos invisibles"
            description="Errores, retrabajos y procesos manuales generan pérdidas silenciosas que impactan todos los días en la rentabilidad."
          />

          <ProblemCard
            delay={0.3}
            icon={<TrendingUp size={34} strokeWidth={1.8} />}
            title="Crecimiento limitado"
            description="Cuando los procesos dependen de personas en lugar de sistemas, escalar se vuelve cada vez más difícil."
          />
        </div>

        {/* Divider */}

        <motion.div
          initial={{ opacity: 0, scaleX: 0.8 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />

        {/* Quote */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-4xl text-center"
        >
          <p className="text-3xl font-semibold leading-relaxed tracking-[-0.03em] md:text-5xl">
            Tu empresa debería crecer
            <span className="text-zinc-500">
              {" "}gracias a sus procesos,
            </span>

            <span className="mt-2 block bg-gradient-to-r from-blue-300 via-white to-violet-300 bg-clip-text text-transparent">
              no a pesar de ellos.
            </span>
          </p>
        </motion.div>

        <div className="mt-40" />
      </div>
    </section>
  );
}
function ProblemCard({
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
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        transition: { duration: 0.25 },
      }}
      className="group rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
    >
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-200 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-zinc-400">
        {description}
      </p>

      <div className="mt-8 h-px w-full bg-gradient-to-r from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}