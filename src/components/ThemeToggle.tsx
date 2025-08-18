"use client";

import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react"; // precisa instalar: npm i lucide-react

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-gray-300 dark:border-gray-700 
                 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100
                 hover:scale-105 transition-transform"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
