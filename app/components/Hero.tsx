import { whatsappUrl } from "@/config/links";
import SplitLines from "./SplitLines";
import Reveal from "./Reveal";
import { MagneticButton, TextLink } from "./Cta";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`font-display text-[22px] font-semibold tracking-[-0.04em] ${className ?? ""}`}>
      Shiften<span className="text-signal">.</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      data-bg="paper"
      className="relative flex min-h-[100svh] flex-col px-4 pb-8 pt-5 md:px-10 md:pb-12 md:pt-8"
    >
      <header className="flex items-center justify-between">
        <a href="#inicio" aria-label="Shiften, inicio">
          <Wordmark />
        </a>
        <nav className="flex items-center gap-7 text-[15px]">
          <a href="#que-hacemos" className="ulink hidden md:inline">Qué hacemos</a>
          <a href="#como-trabajamos" className="ulink hidden md:inline">Cómo trabajamos</a>
          <a href="#contacto" className="ulink">Contacto</a>
        </nav>
      </header>

      <div className="flex flex-1 flex-col justify-end pt-24">
        <Reveal className="mb-6 flex items-center gap-3 text-[13px] uppercase tracking-[0.14em] text-graphite md:mb-10">
          <span className="inline-block h-2 w-2 bg-signal" aria-hidden />
          Para fábricas, inmobiliarias, comercios y PyMEs
        </Reveal>

        <h1 className="font-display text-[12.4vw] font-semibold leading-[0.92] tracking-[-0.05em] md:max-w-[13ch] md:text-[7.6vw]">
          <SplitLines
            text="Tecnología para que tu empresa no pierda clientes ni tiempo."
            accentPeriod
            delay={150}
          />
        </h1>

        <div className="mt-12 grid gap-8 border-t border-line pt-6 md:mt-16 md:grid-cols-12 md:pt-8">
          <Reveal delay={700} className="md:col-span-3">
            <a href="#recorrido" className="group hidden items-center gap-3 text-[14px] text-graphite md:inline-flex">
              <span className="ulink">Bajá y mirá dónde se pierde un cliente</span>
            </a>
          </Reveal>
          <Reveal
            as="p"
            delay={500}
            className="max-w-[34ch] text-[19px] leading-[1.45] md:col-span-4 md:col-start-6 md:text-[21px]"
          >
            Sistemas que ordenan tus consultas, automatizan las tareas repetidas y
            te muestran dónde se te escapan clientes y tiempo.
          </Reveal>
          <Reveal
            delay={650}
            className="flex flex-col items-start gap-5 md:col-span-3 md:col-start-10 md:items-end"
          >
            <MagneticButton href={whatsappUrl}>Escribinos por WhatsApp</MagneticButton>
            <TextLink href="#que-hacemos" className="text-[15px] text-graphite">
              Ver qué hacemos
            </TextLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
