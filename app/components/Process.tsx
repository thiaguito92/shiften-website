import SplitLines from "./SplitLines";
import Reveal, { Rule } from "./Reveal";

const STEPS = [
  {
    title: "Diagnóstico de 20 minutos.",
    body: "Una charla para entender cómo te llegan hoy las consultas y dónde se pierden clientes o tiempo.",
  },
  {
    title: "Propuesta con números.",
    body: "Qué haríamos, cuánto cuesta y qué esperamos mejorar, por escrito.",
  },
  {
    title: "Demo personalizada, sin costo.",
    body: "Ves funcionando una versión del sistema con tu negocio antes de decidir.",
  },
  {
    title: "Implementación y medición.",
    body: "Lo ponemos en marcha y medimos si funciona. Si algo no rinde, se ajusta.",
  },
];

// Escalera: cada paso entra un poco más a la derecha que el anterior.
const indent = ["md:ml-0", "md:ml-[8%]", "md:ml-[16%]", "md:ml-[24%]"];

export default function Process() {
  return (
    <section
      id="como-trabajamos"
      data-bg="paper2"
      className="px-4 py-28 md:px-10 md:py-44"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="font-display text-[15vw] font-semibold leading-[0.9] tracking-[-0.05em] md:text-[8vw]">
          <SplitLines text="Cómo trabajamos" />
        </h2>
        <Reveal as="p" delay={200} className="max-w-[28ch] text-[18px] leading-[1.45] text-graphite md:pb-4 md:text-right">
          Paso a paso, y sin compromiso hasta que veas algo funcionando.
        </Reveal>
      </div>

      <ol className="mt-20 md:mt-28">
        {STEPS.map((s, i) => (
          <li key={s.title} className={indent[i]}>
            <Rule className="bg-ink/20" />
            <div className="flex flex-col gap-4 py-8 md:flex-row md:items-baseline md:justify-between md:gap-12 md:py-10">
              <h3 className="font-display text-[9vw] font-medium leading-[1] tracking-[-0.04em] md:text-[4.2vw]">
                <SplitLines text={s.title} />
              </h3>
              <Reveal as="p" delay={150} className="max-w-[34ch] text-[17px] leading-[1.5] text-graphite md:shrink-0">
                {s.body}
              </Reveal>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
