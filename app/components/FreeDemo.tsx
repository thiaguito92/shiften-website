import { whatsappUrl } from "@/config/links";
import SplitLines from "./SplitLines";
import Reveal from "./Reveal";
import { MagneticButton } from "./Cta";

export default function FreeDemo() {
  return (
    <section
      id="demo"
      data-bg="signal"
      className="flex min-h-[90svh] flex-col justify-between px-4 py-20 text-ink md:px-10 md:py-28"
    >
      <Reveal className="text-[13px] uppercase tracking-[0.14em]">Antes de decidir</Reveal>

      <h2 className="mt-16 max-w-[16ch] font-display text-[12vw] font-semibold leading-[0.93] tracking-[-0.05em] md:text-[7vw]">
        <SplitLines text="Te armamos una demo con tus datos. Sin costo." />
      </h2>

      <div className="mt-16 grid gap-8 md:grid-cols-12">
        <Reveal
          as="p"
          delay={200}
          className="max-w-[36ch] text-[18px] leading-[1.5] md:col-span-5 md:col-start-6 md:text-[20px]"
        >
          Ves cómo funcionaría el sistema con tus consultas y tu forma de trabajar.
          Si te sirve, avanzamos. Si no, no pasa nada.
        </Reveal>
        <Reveal delay={300} className="md:col-span-2 md:col-start-11 md:flex md:justify-end md:self-end">
          <MagneticButton href={whatsappUrl}>Pedir mi demo</MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
