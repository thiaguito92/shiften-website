export default function Hero() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090909] text-white">

      {/* Glow principal */}
      <div className="absolute left-1/2 top-[-220px] h-[1100px] w-[1100px] -translate-x-1/2 rounded-full bg-violet-500/[0.07] blur-[320px]" />

      {/* Glow secundario */}
      <div className="absolute bottom-[-260px] right-[-180px] h-[700px] w-[700px] rounded-full bg-white/[0.025] blur-[260px]" />

      {/* Glow lateral */}
      <div className="absolute left-[-180px] top-[30%] h-[450px] w-[450px] rounded-full bg-violet-400/[0.04] blur-[220px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <section
        id="hero"
        className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-16 text-center"
      >

        {/* Badge */}

        <div className="mb-10 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-xl">
          <p className="text-xs font-medium tracking-[0.3em] text-zinc-300">
            IA + Automatización para empresas
          </p>
        </div>

        {/* Título */}

        <h1
          className="
            max-w-5xl
            text-6xl
            font-bold
            tracking-[-0.055em]
            leading-[0.94]
            md:text-8xl
          "
        >
          Recuperá horas.

          <span className="mt-2 block bg-gradient-to-r from-white via-zinc-200 to-violet-300 bg-clip-text text-transparent">
            Impulsá tu empresa.
          </span>
        </h1>

        {/* Subtítulo */}

        <p className="mt-10 max-w-2xl text-xl leading-9 text-zinc-400">
          Creamos automatizaciones, agentes de IA e integraciones para que tu
          empresa funcione más rápido, con menos errores y sin tareas
          repetitivas.
        </p>

        {/* Indicadores */}

        <div className="mt-14 flex flex-wrap items-center justify-center gap-10">

          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(168,85,247,.8)]" />
            <span className="text-sm text-zinc-300">
              Disponible 24/7
            </span>
          </div>

          <div className="h-5 w-px bg-white/10" />

          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(168,85,247,.8)]" />
            <span className="text-sm text-zinc-300">
              IA integrada
            </span>
          </div>

          <div className="h-5 w-px bg-white/10" />

          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(168,85,247,.8)]" />
            <span className="text-sm text-zinc-300">
              Automatización completa
            </span>
          </div>

        </div>
                
<div className="mt-24 flex flex-col items-center">

  <div className="relative flex h-14 items-start justify-center">

    <div className="h-12 w-px bg-gradient-to-b from-transparent via-zinc-600 to-transparent" />

    <div className="absolute top-0 flex h-2.5 w-2.5 animate-bounce rounded-full bg-violet-400 shadow-[0_0_18px_rgba(168,85,247,.8)]" />

  </div>

</div>

      </section>

    </main>
  );
}