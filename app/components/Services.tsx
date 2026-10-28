import SplitLines from "./SplitLines";
import Reveal, { Rule } from "./Reveal";

const SERVICES = [
  {
    title: "Consultas y seguimiento comercial",
    body: "Juntamos en un solo lugar las consultas que te llegan por WhatsApp, mail o portales. Cada una queda registrada, nadie se queda sin respuesta y sabés a quién volver a contactar.",
    example:
      "En una inmobiliaria, detectamos los interesados que quedaron sin seguimiento y los ordenamos por prioridad, para que el equipo sepa a quién llamar primero.",
  },
  {
    title: "Automatización de tareas repetitivas",
    body: "Esas tareas que alguien hace a mano todos los días: copiar datos de un lado a otro, pasar planillas, cargar pedidos, mandar recordatorios o avisos. Las hacemos automáticas para que tu equipo dedique ese tiempo a atender y vender.",
    example:
      "En una fábrica, que los pedidos que llegan por mail se carguen solos en la planilla de producción.",
  },
  {
    title: "Información clara para decidir",
    body: "Ves en un tablero simple cuántas consultas entran, cuántas se responden, cuánto se tarda en responder y cuáles se pierden y por qué. Sin armar planillas a mano.",
    example:
      "En un comercio, saber qué días y por qué canal llegan más consultas, y cuáles quedan sin cerrar.",
  },
  {
    title: "Sistemas a medida",
    body: "Cuando tu forma de trabajar es particular y el problema lo justifica, diseñamos una herramienta propia. Si no lo justifica, te lo decimos.",
    example:
      "Un control de stock y reservas para un comercio, o una agenda de visitas a propiedades para una inmobiliaria.",
  },
];

export default function Services() {
  return (
    <section
      id="que-hacemos"
      data-bg="paper"
      className="px-4 py-28 md:px-10 md:py-44"
    >
      <div className="grid gap-16 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-12">
            <h2 className="font-display text-[15vw] font-semibold leading-[0.9] tracking-[-0.05em] md:text-[5.6vw]">
              <SplitLines text="Qué hacemos" />
            </h2>
            <Reveal as="p" delay={200} className="mt-6 max-w-[30ch] text-[18px] leading-[1.45] text-graphite">
              Cuatro frentes con un mismo objetivo: que no se te escapen clientes ni tiempo.
            </Reveal>
          </div>
        </div>

        <ul className="md:col-span-8">
          {SERVICES.map((s) => (
            <li key={s.title} className="group pb-14 md:pb-20">
              <Rule />
              <div className="pt-7 md:grid md:grid-cols-8 md:gap-10 md:pt-9">
                <h3 className="relative font-display text-[34px] font-semibold leading-[1.02] tracking-[-0.035em] transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)] md:col-span-4 md:text-[3.1vw] md:group-hover:translate-x-6">
                  <span
                    aria-hidden
                    className="absolute -left-6 top-[0.42em] hidden h-3 w-3 scale-0 bg-signal transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)] group-hover:scale-100 md:block"
                  />
                  <SplitLines text={s.title} />
                </h3>
                <div className="mt-5 md:col-span-4 md:mt-2">
                  <Reveal as="p" className="text-[17px] leading-[1.55] md:text-[18px]">
                    {s.body}
                  </Reveal>
                  <Reveal delay={120} className="mt-6 border-l border-signal pl-4 text-[15px] leading-[1.5] text-graphite">
                    <span className="mb-1 block text-[12px] uppercase tracking-[0.14em]">Por ejemplo</span>
                    {s.example}
                  </Reveal>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
