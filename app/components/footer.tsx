"use client";

import { ArrowUpRight, Instagram, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#080808] text-white">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 bg-violet-500/5 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">

        <div className="grid gap-16 lg:grid-cols-3">

          {/* Marca */}

          <div>

            <Image
              src="/logo-navbar1.png"
              alt="Shiften"
              width={180}
              height={45}
              priority
            />

            <p className="mt-6 max-w-sm leading-8 text-zinc-400">
              Diseñamos automatizaciones y agentes de IA para eliminar tareas
              repetitivas, reducir errores y ayudar a empresas a crecer con
              sistemas inteligentes.
            </p>

          </div>

          {/* Navegación */}

          <div>

            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
              Navegación
            </p>

            <div className="space-y-4">

              <FooterLink href="#solution">
                Soluciones
              </FooterLink>

              <FooterLink href="#process">
                Proceso
              </FooterLink>

              <FooterLink href="#use-cases">
                Casos de uso
              </FooterLink>

              <FooterLink href="#why-us">
                ¿Por qué Shiften?
              </FooterLink>

            </div>

          </div>

          {/* Contacto */}

          <div>

            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
              Contacto
            </p>

            <div className="space-y-6">

              <a
                href="mailto:wthiagency@gmail.com"
                className="group flex w-fit items-center gap-2 text-zinc-300 transition-all duration-300 hover:text-white"
              >
                wthiagency@gmail.com

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              {/* Redes */}

              <div className="flex items-center gap-3">

                <a
                  href="https://instagram.com/shiften.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full
                    border border-white/10
                    text-zinc-500
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-violet-500/40
                    hover:bg-violet-500/10
                    hover:text-violet-300
                  "
                >
                  <Instagram size={17} strokeWidth={1.9} />
                </a>

                <a
                  href="https://wa.me/5491138888358"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full
                    border border-white/10
                    text-zinc-500
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-violet-500/40
                    hover:bg-violet-500/10
                    hover:text-violet-300
                  "
                >
                  <MessageCircle size={17} strokeWidth={1.9} />
                </a>

              </div>

              <p className="text-zinc-500">
                Trabajamos con empresas de Latinoamérica.
              </p>

              <p className="text-zinc-500">
                Respondemos normalmente en menos de 24 horas.
              </p>

            </div>

          </div>

        </div>

        {/* Línea */}

        <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          <div>

            <p className="text-sm text-zinc-600">
              © 2026 Shiften. Todos los derechos reservados.
            </p>

          </div>

          <div className="text-center md:text-right">

            <p className="text-xl font-semibold tracking-[-0.02em]">
              Diseñado para empresas
            </p>

            <p className="bg-gradient-to-r from-blue-300 via-white to-violet-300 bg-clip-text text-xl font-semibold text-transparent">
              que quieren crecer.
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group flex w-fit items-center gap-2 text-zinc-400 transition-all duration-300 hover:text-white"
    >
      <span className="relative">

        {children}

        <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />

      </span>

      <ArrowUpRight
        size={14}
        className="opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
      />

    </a>
  );
}