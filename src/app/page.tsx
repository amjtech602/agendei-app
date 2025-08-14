// app/page.tsx (Next.js 13+ com App Router)
"use client";

import Image from "next/image";
import { useState } from "react";

export default function LoginCadastro() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full">
        
        {/* Lado da imagem */}
        <div className="md:w-1/2 hidden md:block bg-blue-500">
          <Image
            src="/agendei-logo.png"
            alt="Agendei"
            width={50}
            height={50}
            className=""
          />
        </div>

        {/* Lado do formulário */}
        <div className="md:w-1/2 p-8 sm:p-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {isLogin ? "Entrar" : "Cadastrar"}
          </h2>

          <form className="space-y-4">
            {!isLogin && (
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Senha"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              {isLogin ? "Entrar" : "Cadastrar"}
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600 text-center">
            {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 font-semibold hover:underline"
            >
              {isLogin ? "Cadastre-se" : "Entre"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
