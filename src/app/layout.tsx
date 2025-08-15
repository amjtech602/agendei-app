import type { Metadata } from "next";

import Providers from "@/providers";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: "Agenda aí",
  description: "Plataforma de agendamento de serviços para profissionais liberais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
