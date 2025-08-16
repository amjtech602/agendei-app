"use client";

import StatusBadge from '@/components/painel/StatusBadge';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type Agendamento = {
    hora: string;
    cliente: string;
    servico: string;
    status: 'Confirmado' | 'Pendente' | 'Cancelado';
};

type PanelCardProps = {
    title: string;
    value: string;
};

export default function Painel() {

    const { data: session, status } = useSession();
    const router = useRouter();
    const [selectedDay, setSelectedDay] = useState<number>(15);

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    if (status === "loading") {
        return <p>Carregando...</p>;
    }

    const agendamentos: Agendamento[] = [
        { hora: '09:00', cliente: 'Maria Souza', servico: 'Corte de cabelo', status: 'Confirmado' },
        { hora: '10:30', cliente: 'João Lima', servico: 'Barba', status: 'Pendente' },
        { hora: '13:00', cliente: 'Aline Farias', servico: 'Coloração', status: 'Cancelado' },
        { hora: '15:30', cliente: 'Pedro Alves', servico: 'Corte + Barba', status: 'Pendente' },
    ];

    return (
        <div className="w-full h-screen bg-gray-100 flex flex-col">

            {/* HEADER TOPO FIXO */}
            <header className="w-full h-16 bg-white flex items-center justify-between px-8 shadow-sm fixed z-10 top-0 left-0">
                <div>
                    <span className="font-bold text-3xl mb-10">Agendei</span>
                </div>
                <div className="flex items-center space-x-3">
                    <span>Olá, {session?.user?.name}</span>
                    <div className="w-7 h-7 rounded-full bg-blue-600" />
                </div>
            </header>

            {/* Conteúdo principal (painel ocupa toda a página abaixo do header) */}
            <div className="flex flex-1 pt-16 pb-0 h-full overflow-hidden">
                {/* Menu lateral desktop */}
                <aside className="hidden md:flex flex-col w-70 bg-white p-6">
                    <nav>
                        <ul>
                            <li className="font-semibold text-gray-700 bg-gray-200 p-3 rounded">Painel</li>
                            <li className="text-gray-500 p-3">Serviços</li>
                            <li className="text-gray-500 p-3">Agenda</li>
                            <li className="text-gray-500 p-3">Clientes</li>
                            <li className="text-gray-500 p-3">Configurações</li>
                        </ul>
                    </nav>
                </aside>

                {/* Painel principal desktop */}
                <main className="flex-1 flex flex-col md:flex-row items-start p-4 gap-4 overflow-y-auto">
                    <section className="hidden md:block bg-white rounded-xl shadow p-7 min-w-[650px] lg:mr-4">
                        <div className="flex justify-between items-center mb-7">
                            <div>
                                <h1 className="text-xl font-bold">Painel do Profissional</h1>
                                <span className="text-sm text-gray-400">Resumo do seu dia e próximos agendamentos</span>
                            </div>
                            <button className="bg-blue-700 text-white rounded-md px-5 py-1 font-semibold">Novo serviço</button>
                        </div>
                        <div className="flex gap-4 mb-8">
                            <PanelCard title="Agendamentos hoje" value="7" />
                            <PanelCard title="Confirmados" value="5" />
                            <PanelCard title="Pendentes" value="2" />
                            <PanelCard title="Cancelados" value="0" />
                        </div>
                        <div>
                            <h2 className="font-semibold">Agendamentos de hoje</h2>
                            <div className="w-full mt-5">
                                <div className="flex w-full justify-between px-4 py-1 bg-gray-100 rounded border-red-100">
                                    <div className="w-2xl">Hora</div>
                                    <div className="w-6xl">Cliente</div>
                                    <div className="w-6xl">Serviço</div>
                                    <div className="w-2xl">Status</div>
                                </div>
                            </div>
                            <div className="w-full">
                                {agendamentos.map((a, idx) => (
                                    <div key={idx} className="flex w-full justify-between px-4 py-1 bg-gray-50 rounded my-2">
                                        <div className="w-2xl">{a.hora}</div>
                                        <div className="w-6xl">{a.cliente}</div>
                                        <div className="w-6xl">{a.servico}</div>
                                        <div className="w-2xl">
                                            <StatusBadge status={a.status}/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex mt-8 gap-6">
                                {/* Próximos dias */}
                                <div>
                                    <span className="font-semibold">Próximos dias</span>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {[14, 15, 16, 17, 18, 19, 20, 21].map(day => (
                                            <button
                                                key={day}
                                                className={
                                                    `w-9 h-9 rounded ${selectedDay === day ? 'bg-blue-600 text-white' : 'bg-gray-100'}`
                                                }
                                                onClick={() => setSelectedDay(day)}
                                            >
                                                {day}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                {/* Notas rápidas */}
                                <div className="flex-1">
                                    <span className="font-semibold">Notas rápidas</span>
                                    <textarea className="w-full mt-2 h-16 bg-gray-50 border rounded p-2 resize-none" placeholder="Anote observações aqui..." />
                                </div>
                            </div>
                        </div>

                    </section>
                </main>
            </div>
        </div>
    );
}

// Componentes auxiliares
function PanelCard({ title, value }: PanelCardProps) {
    return (
        <div className="bg-gray-100 rounded-lg py-3 px-5 flex flex-col items-start w-200">
            <span className="text-gray-400 text-xs">{title}</span>
            <span className="text-xl font-bold mt-1">{value}</span>
        </div>
    );
}

