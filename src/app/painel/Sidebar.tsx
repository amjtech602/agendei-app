"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react"; // ícone de três traços

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/painel", label: "Painel" },
    { href: "/painel/servicos", label: "Serviços" },
    { href: "/painel/agenda", label: "Agenda" },
    { href: "/painel/clientes", label: "Clientes" },
    { href: "/painel/configuracoes", label: "Configurações" },
  ];

  return (
    <>
      {/* Botão hambúrguer (visível só no mobile) */}
      <button
        className="lg:hidden fixed top-4 left-.5 z-20 p-2 rounded-md  dark:bg-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} className="text-gray-700 dark:text-gray-200" />
      </button>

      {/* Sidebar (desktop sempre visível / mobile abre com slide) */}
      <nav
        className={`fixed top-16 left-0 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-4 transform transition-transform duration-300 lg:translate-x-0
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <ul>
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li
                key={link.href}
                className={`rounded mb-1 cursor-pointer ${
                  isActive
                    ? "font-semibold text-gray-700 bg-gray-200 dark:text-white dark:bg-gray-800"
                    : "text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
                }`}
              >
                <Link href={link.href} className="block px-3 py-2">
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
