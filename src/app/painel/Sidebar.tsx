"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Scissors, Calendar, Users, Settings } from "lucide-react";

const links = [
  { href: "/painel", label: "Painel", icon: LayoutDashboard },
  { href: "/painel/servicos", label: "Serviços", icon: Scissors },
  { href: "/painel/agenda", label: "Agenda", icon: Calendar },
  { href: "/painel/clientes", label: "Clientes", icon: Users },
  { href: "/painel/configuracoes", label: "Configurações", icon: Settings },
];

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();

  return (
    <aside
      className={`
        fixed top-0 left-0 h-screen w-64 bg-blue-600 shadow-lg transform transition-transform
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 z-40
      `}
    >
      <nav className="mt-20 p-4">
        <ul className="space-y-2">
          {links.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-3 rounded-lg px-4 py-2 font-medium transition-colors ${
                    isActive
                      ? "bg-white text-blue-600"
                      : "text-white hover:bg-blue-500"
                  }`}
                  onClick={onClose}
                >
                  <Icon size={18} />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
