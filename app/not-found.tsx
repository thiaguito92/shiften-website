export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#090909] text-white px-6 text-center">
      <h1 className="text-7xl font-bold">404</h1>

      <p className="mt-4 text-zinc-400">
        Esta página no existe.
      </p>

      <a
        href="/"
        className="mt-10 rounded-full border border-white/10 bg-white px-6 py-3 text-black transition hover:scale-[1.02]"
      >
        Volver al inicio
      </a>
    </main>
  );
}