"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { whatsappUrl } from "@/config/links";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-black/70 backdrop-blur-xl shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8 lg:px-10">

        {/* Logo */}
        <a
  href="#hero"
  className="flex items-center transition-opacity duration-300 hover:opacity-80"
>
  <Image
    src="/logo-navbar1.png"
    alt="Shiften"
    width={140}
    height={34}
    priority
  />
</a>

        {/* Navegación */}
        <nav className="hidden items-center gap-9 lg:flex">
          <a
            href="#solution"
            className="text-[14px] font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
          >
            Soluciones
          </a>

          <a
            href="#process"
            className="text-[14px] font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
          >
            Proceso
          </a>

          <a
            href="#use-cases"
            className="text-[14px] font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
          >
            Casos de uso
          </a>

          <a
            href="#why-us"
            className="text-[14px] font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
          >
            ¿Por qué Shiften?
          </a>
        </nav>

        {/* CTA */}
          <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Abrir WhatsApp"
          className="
          rounded-full
          border
          border-white/10
          bg-white
          px-5
          py-2.5
          text-[14px]
          font-medium
          text-black
          transition-all
          duration-300
          shadow-[0_0_25px_rgba(255,255,255,.08)]
          hover:-translate-y-0.5
          hover:scale-[1.02]
          hover:bg-zinc-100
          hover:shadow-[0_0_45px_rgba(255,255,255,.18)]
  "
>
  Agendar llamada
</a>

      </div>
    </header>
  );
}