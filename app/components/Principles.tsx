import SplitLines from "./SplitLines";
import Reveal from "./Reveal";

const PRINCIPLES = [
  {
    title: "Primero el problema, después la tecnología.",
    body: "Antes de proponer nada, entendemos cómo trabaja tu empresa y dónde se pierden clientes o tiempo. La herramienta viene después.",
    place: "md:col-span-7 md:col-start-1",
  },
  {
    title: "Si algo no te conviene, te lo decimos.",
    body: "Aunque eso signifique hacer menos, o no hacer nada. Preferimos una recomendación honesta a un proyecto que no te sirva.",
    place: "md:col-span-6 md:col-start-7",
  },
  {
    title: "Medimos si funciona.",
    body: "Acordamos desde el principio qué queremos mejorar y lo revisamos juntos una vez puesto en marcha.",
    place: "md:col-span-6 md:col-start-3",
  },
];

export default function Principles() {
  return (
    <section
      id="como-pensamos"
      data-bg="ink"
      className="px-4 py-28 text-paper md:px-10 md:py-44"
    >
      <Reveal className="flex items-center gap-3 text-[13px] uppercase tracking-[0.14em] text-mist">
        <span className="inline-block h-2 w-2 bg-signal" aria-hidden />
        <h2>Cómo pensamos</h2>
      </Reveal>

      <div className="mt-20 grid gap-24 md:mt-28 md:grid-cols-12 md:gap-y-40">
        {PRINCIPLES.map((p) => (
          <div key={p.title} className={p.place}>
            <h3 className="font-display text-[10.5vw] font-semibold leading-[0.98] tracking-[-0.045em] md:text-[4.6vw]">
              <SplitLines text={p.title} />
            </h3>
            <Reveal as="p" delay={200} className="mt-6 max-w-[40ch] text-[17px] leading-[1.55] text-mist md:text-[18px]">
              {p.body}
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
