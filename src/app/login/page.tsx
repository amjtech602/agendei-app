// "use client";

// import { signIn } from "next-auth/react";
// import Image from "next/image";
// import { useState } from "react";

// export default function LoginCadastro() {
//     const [isLogin, setIsLogin] = useState(true);

//     return (
//         <div className="flex h-screen w-screen">
//             {/* Lado da imagem */}
//             <div className="hidden md:flex md:w-1/2 bg-blue-600 p-15">
//                 <div className="flex flex-col gap-3">
//                     <div className="flex items-center gap-2">
//                         <Image
//                             src="/icons/calendar-static-white.png"
//                             alt="Agendei"
//                             width={45}
//                             height={45}
//                             className=""
//                         />
//                         <span className="text-white font-bold text-3xl">Agendei</span>
//                     </div>
//                     <div className="text-white font-bold text-4xl">
//                         <h2>Bem-vindo ao Agendei</h2>
//                     </div>
//                     <div className="text-white text-2xl">
//                         <span>Agende seus compromissos de foram fácil e rápida.</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Lado do formulário */}
//             <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white p-8 sm:p-12">
//                 <div className="w-full max-w-md">
//                     <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//                         {isLogin ? "Entrar" : "Cadastrar"}
//                     </h2>

//                     <form className="space-y-4">
//                         {!isLogin && (
//                             <input
//                                 type="text"
//                                 placeholder="Nome completo"
//                                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             />
//                         )}
//                         <input
//                             type="email"
//                             placeholder="Email"
//                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                         />
//                         <input
//                             type="password"
//                             placeholder="Senha"
//                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                         />

//                         <button
//                             type="submit"
//                             className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition"
//                         >
//                             {isLogin ? "Entrar" : "Cadastrar"}
//                         </button>
//                     </form>

//                     <p className="mt-4 text-sm text-gray-600 text-center">
//                         {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
//                         <button
//                             onClick={() => setIsLogin(!isLogin)}
//                             className="text-blue-500 font-semibold hover:underline"
//                         >
//                             {isLogin ? "Cadastre-se" : "Entre"}
//                         </button>
//                     </p>
//                     <div className="relative mt-6 mb-6">
//                         <div className="absolute inset-0 flex items-center">
//                             <span className="w-full border-t border-gray-300 dark:border-gray-700"></span>
//                         </div>
//                         <div className="relative flex justify-center text-sm">
//                             <span className="bg-white dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-400">
//                                 ou
//                             </span>
//                         </div>
//                     </div>

//                     {/* Botão Google */}
//                     <button
//                         onClick={() => signIn("google", { callbackUrl: "/painel" })}
//                         className="w-full flex items-center justify-center gap-3 py-2 mb-6 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
//                     >
//                         <Image
//                             src="/icons/google-icon.png"
//                             alt="Google"
//                             width={20}
//                             height={20}
//                         />
//                         Entrar com Google
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function LoginCadastro() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex h-screen w-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Lado da imagem */}
      <div className="hidden md:flex md:w-1/2 bg-blue-600 p-15">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/calendar-static-white.png"
              alt="Agendei"
              width={45}
              height={45}
            />
            <span className="text-white font-bold text-3xl">Agendei</span>
          </div>
          <div className="text-white font-bold text-4xl">
            <h2>Bem-vindo ao Agendei</h2>
          </div>
          <div className="text-white text-2xl">
            <span>Agende seus compromissos de forma fácil e rápida.</span>
          </div>
        </div>
      </div>

      {/* Lado do formulário */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white dark:bg-gray-900 p-8 sm:p-12 transition-colors">
        {/* Cabeçalho com botão de tema */}
        <div className="w-full flex justify-end mb-6">
          <ThemeToggle />
        </div>

        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
            {isLogin ? "Entrar" : "Cadastrar"}
          </h2>

          <form className="space-y-4">
            {!isLogin && (
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
            <input
              type="password"
              placeholder="Senha"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              {isLogin ? "Entrar" : "Cadastrar"}
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
            {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 dark:text-blue-400 font-semibold hover:underline"
            >
              {isLogin ? "Cadastre-se" : "Entre"}
            </button>
          </p>

          <div className="relative mt-6 mb-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300 dark:border-gray-700"></span>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-400">
                ou
              </span>
            </div>
          </div>

          {/* Botão Google */}
          <button
            onClick={() => signIn("google", { callbackUrl: "/painel" })}
            className="w-full flex items-center justify-center gap-3 py-2 mb-6 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <Image src="/icons/google-icon.png" alt="Google" width={20} height={20} />
            Entrar com Google
          </button>
        </div>
      </div>
    </div>
  );
}
