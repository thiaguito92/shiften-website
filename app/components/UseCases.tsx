"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  TrendingUp,
  Calendar,
  FileText,
  Bot,
  BarChart3,
  Check,
} from "lucide-react";

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="relative overflow-hidden bg-[#090909] py-40 text-white"
    >
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
            CASOS DE USO
          </p>

          <h2 className="text-5xl font-bold leading-tight tracking-[-0.04em] md:text-7xl">
            Automatizaciones
            <br />
            para los procesos
            <br />
            que más tiempo consumen.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
            Cada empresa tiene necesidades distintas. Diseñamos soluciones
            adaptadas a los procesos que realmente generan impacto en el negocio.
          </p>

        </motion.div>

        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <UseCaseCard
            delay={0}
            icon={<MessageCircle size={26} />}
            title="Atención al cliente"
            description="Respondé más rápido y atendé consultas incluso fuera del horario laboral."
            items={[
              "WhatsApp",
              "Respuestas automáticas",
              "Derivación inteligente",
              "Atención 24/7",
            ]}
          />

          <UseCaseCard
            delay={0.1}
            icon={<TrendingUp size={26} />}
            title="Ventas"
            description="Automatizá el seguimiento de oportunidades para vender más."
            items={[
              "Seguimiento",
              "CRM",
              "Emails",
              "Leads",
            ]}
          />

          <UseCaseCard
            delay={0.2}
            icon={<Calendar size={26} />}
            title="Agenda"
            description="Organizá turnos y reuniones sin intercambio infinito de mensajes."
            items={[
              "Reservas",
              "Recordatorios",
              "Calendario",
              "Confirmaciones",
            ]}
          />

          <UseCaseCard
            delay={0.3}
            icon={<FileText size={26} />}
            title="Administración"
            description="Reducí el trabajo manual y mantené toda la información organizada."
            items={[
              "Facturas",
              "Documentos",
              "Bases de datos",
              "Formularios",
            ]}
          />

          <UseCaseCard
            delay={0.4}
            icon={<Bot size={26} />}
            title="Agentes de IA"
            description="Asistentes inteligentes capaces de ejecutar tareas y responder consultas."
            items={[
              "Buscar información",
              "Responder clientes",
              "Ejecutar acciones",
              "Trabajar 24/7",
            ]}
          />

          <UseCaseCard
            delay={0.5}
            icon={<BarChart3 size={26} />}
            title="Reportes"
            description="Obtené información actualizada automáticamente para tomar mejores decisiones."
            items={[
              "Dashboards",
              "KPIs",
              "Alertas",
              "Resúmenes",
            ]}
          />

        </div>

      </div>
    </section>
  );
}
function UseCaseCard({
  icon,
  title,
  description,
  items,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
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
      className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04]"
    >
      {/* Glow */}

      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/0 blur-[90px] transition-all duration-500 group-hover:bg-violet-500/10" />

      {/* Icon */}

      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-100 transition-all duration-300 group-hover:scale-110 group-hover:border-violet-400/20">
        {icon}
      </div>

      {/* Title */}

      <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-5 leading-8 text-zinc-400">
        {description}
      </p>

      {/* Divider */}

      <div className="my-8 h-px bg-gradient-to-r from-white/10 to-transparent" />

      {/* List */}

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 text-zinc-300"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-violet-400/20 bg-violet-400/10">
              <Check
                size={14}
                className="text-violet-300"
              />
            </div>

            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Bottom */}

      <div className="mt-10 flex items-center justify-between border-t border-white/5 pt-6">
        <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">
          Automatizable
        </span>

        <motion.div
          animate={{
            x: [0, 4, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          className="text-zinc-600 transition-colors group-hover:text-violet-300"
        >
          →
        </motion.div>
      </div>
    </motion.div>
  );
}