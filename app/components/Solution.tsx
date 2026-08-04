"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Bell,
  CheckCircle2,
  Database,
  Mail,
  MessageSquare,
  Search,
} from "lucide-react";

const steps = [
  {
    icon: <MessageSquare size={20} />,
    title: "Nuevo mensaje",
  },
  {
    icon: <Bot size={20} />,
    title: "La IA interpreta la solicitud",
  },
  {
    icon: <Search size={20} />,
    title: "Busca la información",
  },
  {
    icon: <Database size={20} />,
    title: "Actualiza el CRM",
  },
  {
    icon: <Mail size={20} />,
    title: "Envía un email",
  },
  {
    icon: <Bell size={20} />,
    title: "Notifica al equipo",
  },
];

export default function Solution() {
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= steps.length) {
          return -1;
        }

        return prev + 1;
      });
    }, 850);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="solution"
      className="scroll-mt-24 relative overflow-hidden bg-gradient-to-b from-[#090909] to-[#0d0d0d] pt-24 pb-36 text-white"
    >
      <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[220px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-white/[0.03] blur-[220px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-20 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: .9,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="max-w-[720px]"
        >

          <h2 className="text-5xl font-bold leading-tight tracking-[-0.04em] md:text-7xl">
            La IA trabaja.
            <br />
            Tu equipo hace crecer
            <br />
            la empresa.
          </h2>

          <p className="mt-8 max-w-xl text-xl leading-9 text-zinc-400">
            Diseñamos automatizaciones y agentes de IA que conectan tus
            herramientas, eliminan tareas manuales y permiten que tu empresa
            funcione las 24 horas con menos errores y más eficiencia.
          </p>

          <div className="mt-12 space-y-6">

            <Benefit>
              Automatizaciones funcionando 24/7
            </Benefit>

            <Benefit>
              Menos errores humanos
            </Benefit>

            <Benefit>
              Más tiempo para hacer crecer el negocio
            </Benefit>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: .9,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/5 bg-white/[0.02] p-10 backdrop-blur-sm transition-all duration-500 hover:border-white/10 hover:bg-white/[0.03]"
        >

          <p className="mb-8 text-xs uppercase tracking-[0.25em] text-zinc-500">
            ASÍ TRABAJA UN AGENTE DE IA
          </p>

          {steps.map((step, index) => (
            <div key={step.title}>
              <FlowItem
                icon={step.icon}
                title={step.title}
                delay={index * 0.08}
                active={index <= activeStep}
                current={index === activeStep}
              />

              {index !== steps.length - 1 && (
                <Connector
                  active={index < activeStep}
                />
              )}
            </div>
          ))}

          <ResultCard
            active={activeStep >= steps.length}
          />

        </motion.div>

      </div>

    </section>
  );
}
function Benefit({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className="flex items-center gap-4"
    >
      <CheckCircle2
        size={22}
        strokeWidth={1.8}
        className="text-zinc-100"
      />

      <span className="text-zinc-300">
        {children}
      </span>
    </motion.div>
  );
}

function Connector({
  active,
}: {
  active: boolean;
}) {
  return (
    <div className="flex flex-col items-center py-2">

      <motion.div
        animate={{
          scale: active ? [1, 1.35, 1] : 1,
          opacity: active ? 1 : .35,
        }}
        transition={{
          duration: .6,
        }}
        className={`h-2.5 w-2.5 rounded-full ${
          active
            ? "bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.9)]"
            : "bg-zinc-500"
        }`}
      />

      <motion.div
        animate={{
          backgroundColor: active
            ? "#4ade80"
            : "#3f3f46",
        }}
        transition={{
          duration: .5,
        }}
        className="mt-2 h-8 w-px"
      />

    </div>
  );
}

function FlowItem({
  icon,
  title,
  delay,
  active,
  current,
}: {
  icon: React.ReactNode;
  title: string;
  delay: number;
  active: boolean;
  current: boolean;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: .45,
        delay,
      }}
      viewport={{ once: true }}
      animate={{
        scale: current ? [1, 1.02, 1] : 1,
      }}
      className={`group flex items-center gap-5 rounded-2xl border px-6 py-5 transition-all duration-500 ${
        active
          ? "border-emerald-400/40 bg-emerald-400/10"
          : "border-white/5 bg-white/[0.02]"
      }`}
    >

      <motion.div
        animate={{
          scale: current ? [1, 1.12, 1] : 1,
          rotate: current ? [0, 5, -5, 0] : 0,
        }}
        transition={{
          duration: .6,
        }}
        className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
          active
            ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300 shadow-[0_0_25px_rgba(74,222,128,0.25)]"
            : "border-white/10 bg-white/5 text-zinc-200"
        }`}
      >
        {icon}
      </motion.div>

      <div>

        <p
          className={`font-medium transition-colors duration-500 ${
            active
              ? "text-white"
              : "text-zinc-300"
          }`}
        >
          {title}
        </p>

        {current && (
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="mt-1 text-xs uppercase tracking-[0.2em] text-emerald-400"
          >
            Ejecutando...
          </motion.p>
        )}

      </div>

    </motion.div>
  );
}

function ResultCard({
  active,
}: {
  active: boolean;
}) {
  return (
    <motion.div
      animate={{
        scale: active ? [1, 1.02, 1] : 1,
      }}
      transition={{
        duration: .6,
      }}
      className={`mt-6 rounded-3xl border p-6 transition-all duration-700 ${
        active
          ? "border-emerald-400/30 bg-gradient-to-br from-emerald-400/10 via-white/[0.02] to-white/[0.01] shadow-[0_0_40px_rgba(74,222,128,0.12)]"
          : "border-white/5 bg-white/[0.02]"
      }`}
    >

      <div className="flex items-center gap-3">

        <motion.div
          animate={{
            scale: active ? [1, 1.2, 1] : 1,
          }}
          transition={{
            duration: .5,
          }}
          className={`flex h-8 w-8 items-center justify-center rounded-full ${
            active
              ? "bg-emerald-400/20"
              : "bg-white/5"
          }`}
        >

          <CheckCircle2
            size={18}
            className={
              active
                ? "text-emerald-300"
                : "text-zinc-500"
            }
          />

        </motion.div>

        <span
          className={`font-medium ${
            active
              ? "text-white"
              : "text-zinc-500"
          }`}
        >
          Cliente atendido
        </span>

      </div>

      <p
        className={`mt-4 text-sm leading-7 transition-colors duration-500 ${
          active
            ? "text-zinc-300"
            : "text-zinc-500"
        }`}
      >
        La IA procesó la consulta, buscó la información,
        actualizó el CRM, notificó al equipo y dejó el
        proceso terminado automáticamente.
      </p>

    </motion.div>
  );
}