import { email, instagramUrl, whatsappUrl } from "@/config/links";
import SplitLines from "./SplitLines";
import Reveal from "./Reveal";
import { MagneticButton, TextLink } from "./Cta";
import { Wordmark } from "./Hero";

export default function Contact() {
  return (
    <section id="contacto" data-bg="paper" className="flex flex-col px-4 pt-28 md:min-h-[100svh] md:px-10 md:pt-40">
      <div className="flex-1">
        <h2 className="max-w-[12ch] font-display text-[14vw] font-semibold leading-[0.9] tracking-[-0.055em] md:text-[9vw]">
          <SplitLines text="Empecemos por una charla." accentPeriod />
        </h2>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12">
          <Reveal
            as="p"
            delay={200}
            className="max-w-[32ch] text-[19px] leading-[1.45] md:col-span-5 md:col-start-6 md:text-[22px]"
          >
            Contanos cómo te llegan hoy las consultas y dónde sentís que se pierde tiempo.
          </Reveal>
          <Reveal delay={300} className="md:col-span-2 md:col-start-11 md:flex md:justify-end md:self-end">
            <MagneticButton href={whatsappUrl}>Escribir por WhatsApp</MagneticButton>
          </Reveal>
        </div>
      </div>

      <footer className="mt-24 border-t border-line py-8 md:mt-32">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Wordmark />
          <div className="flex flex-col gap-3 text-[15px] md:flex-row md:gap-10">
            <TextLink href={`mailto:${email}`}>{email}</TextLink>
            <TextLink href={instagramUrl}>Instagram</TextLink>
          </div>
          <p className="text-[13px] text-graphite">© {new Date().getFullYear()} Shiften</p>
        </div>
      </footer>
    </section>
  );
}
