"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function LoginCadastro() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full">

                {/* Lado da imagem */}
                <div className="md:w-1/2 hidden md:block bg-blue-600 p-5">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/icons/calendar-static-white.png"
                                alt="Agendei"
                                width={45}
                                height={45}
                                className=""
                            />
                            <span className="text-white font-light text-2xl">Agenda.aí</span>
                        </div>
                        <div className="text-white font-bold text-2xl">
                            <h2>Bem-vindo ao Agenda.aí</h2>
                        </div>
                        <div className="text-white">
                            <span>Agende seus compromissos de foram fácil e rápida.</span>
                        </div>
                    </div>
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
                            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition"
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
                        onClick={() => signIn("google", { callbackUrl: "/" })}
                        className="w-full flex items-center justify-center gap-3 py-2 mb-6 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                         <Image
                                src="/icons/google-icon.png"
                                alt="Google"
                                width={20}
                                height={20}
                            />
                        Entrar com Google
                    </button>
                </div>
            </div>
        </div>
    );
}
