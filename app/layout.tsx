import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata = {
  title: "Shiften | IA y Automatización",
  description:
    "Diseñamos sistemas inteligentes para empresas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className={`${spaceGrotesk.className} min-h-full bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}