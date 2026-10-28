import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col justify-end px-4 pb-16 md:px-10">
      <h1 className="font-display text-[30vw] font-semibold leading-[0.85] tracking-[-0.06em] md:text-[20vw]">
        404<span className="text-signal">.</span>
      </h1>
      <p className="mt-6 text-[19px] text-graphite">Esta página no existe.</p>
      <Link href="/" className="ulink mt-8 w-fit text-[17px]">
        Volver al inicio
      </Link>
    </main>
  );
}
