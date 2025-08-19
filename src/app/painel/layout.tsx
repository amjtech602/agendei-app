"use client";

import Sidebar from "./Sidebar";
import { useSession } from "next-auth/react";

export default function PainelLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col">
        {/* Header fixo */}
        <header className="w-full h-16 bg-white dark:bg-gray-900 flex items-center justify-between px-8 shadow-sm fixed z-10 top-0 left-0 right-0">
          <div>
            <span className="font-bold text-3xl">Agendei</span>
          </div>
          <div className="flex items-center space-x-3">
            <span>Olá, {session?.user?.name ?? "Usuário"}</span>
            <div className="w-7 h-7 rounded-full bg-blue-600" />
          </div>
        </header>

        {/* Conteúdo da página (com margem pra não ficar atrás do header) */}
        <main className="flex-1 p-6 mt-16">{children}</main>
      </div>
    </div>
  );
}
