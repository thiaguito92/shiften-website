import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import BackgroundController from "./components/BackgroundController";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  weight: ["400", "500", "600", "700"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Shiften | Tecnología para que tu empresa no pierda clientes ni tiempo",
  description:
    "Sistemas que ordenan tus consultas, automatizan las tareas repetidas y te muestran dónde se te escapan clientes y tiempo. Para fábricas, inmobiliarias, comercios y PyMEs.",
  openGraph: {
    title: "Shiften",
    description:
      "Tecnología para que tu empresa no pierda clientes ni tiempo.",
    locale: "es_AR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f2efe8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${schibsted.variable} ${hanken.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="min-h-full font-sans text-ink">
        <SmoothScroll />
        <BackgroundController />
        {children}
      </body>
    </html>
  );
}
