"use client";

import Sidebar from "./Sidebar";
import { useState } from "react";
import { Menu } from "lucide-react";
import { useSession } from "next-auth/react";

export default function PainelLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
console.log(session)
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col">
        {/* Header fixo */}
        <header className="w-full h-16 bg-white dark:bg-gray-900 flex items-center justify-between px-8 shadow-sm fixed z-300 top-0 left-0 right-0">
          <div className="flex items-center gap-4">
            {/* Botão menu mobile */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Menu size={24} />
            </button>
            <span className="font-bold text-3xl">Agendei</span>
          </div>
          <div className="flex items-center space-x-3">
            <span>Olá, {session?.user?.name ?? "Usuário"}</span>
            <img src={`${session?.user?.image}`} className="w-7 h-7 rounded-full bg-blue-600" />
          </div>
        </header>

        {/* Conteúdo da página (com margem pra não ficar atrás do header) */}
        <main className="flex-1 p-6 mt-16 md:ml-64">{children}</main>
      </div>
    </div>
  );
}
