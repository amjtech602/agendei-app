"use client";

import StatusBadge from "@/components/painel/StatusBadge";
import { Calendar, Clock, Menu, Settings, Users } from "lucide-react";
import { useState } from "react";

export default function PainelProfissional() {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("Todos");

    const agendamentos = [
        { horario: "09:00", cliente: "Maria Silva", servico: "Corte de cabelo", status: "Confirmado" },
        { horario: "10:30", cliente: "João Santos", servico: "Manicure", status: "Pendente" },
        { horario: "14:00", cliente: "Ana Costa", servico: "Massagem", status: "Cancelado" },
    ];

    const filteredAgendamentos = agendamentos.filter((a) => {
        const matchesSearch =
            a.cliente.toLowerCase().includes(search.toLowerCase()) ||
            a.servico.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = statusFilter === "Todos" || a.status === statusFilter;
        return matchesSearch && matchesStatus;
        
    });

    return (
        <div className="flex min-h-screen">
            {/* Sidebar - Desktop only */}
            <aside className="hidden md:flex w-64 bg-blue-600 text-white flex-col p-4">
                <h2 className="text-xl font-bold mb-6">Agendou</h2>
                <nav className="space-y-2">
                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-200 text-gray-900 font-medium">
                        <Menu size={18} /> Painel
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-white">
                        Serviços
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-white">
                        <Calendar size={18} /> Agenda
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-white">
                        <Users size={18} /> Clientes
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-white">
                        <Settings size={18} /> Configurações
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 bg-gray-50">
                <h1 className="text-3xl font-bold mb-6">Painel do Profissional</h1>

                {/* Cards exemplo */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl shadow p-4 h-32 flex flex-col justify-between">
                        <div className="flex items-center gap-2 text-blue-600 font-semibold">
                            <Clock size={18} /> Próximo Atendimento
                        </div>
                        <div>
                            <p className="text-gray-900 font-bold">Maria Souza</p>
                            <p className="text-gray-600 text-sm">14:00 - Limpeza de Pele</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl shadow p-4 h-32 flex flex-col justify-between">
                        <div className="flex items-center gap-2 text-green-600 font-semibold">
                            <Calendar size={18} /> Agendamentos Hoje
                        </div>
                        <p className="text-3xl font-bold text-gray-900">5</p>
                        <p className="text-sm text-gray-500">Clientes confirmados</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl shadow p-4 h-32 flex flex-col justify-between">
                        <div className="flex items-center gap-2 text-purple-600 font-semibold">
                            <Users size={18} /> Novos Clientes
                        </div>
                        <p className="text-3xl font-bold text-gray-900">2</p>
                        <p className="text-sm text-gray-500">Nesta semana</p>
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl font-bold mb-6">Agendamentos de Hoje</h2>
                </div>

                {/* Filtros */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="Buscar por cliente ou serviço..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="p-2 bg-white rounded w-full md:w-1/2"
                    />
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="p-2 bg-white rounded w-full md:w-1/4"
                    >
                        <option>Todos</option>
                        <option>Confirmado</option>
                        <option>Pendente</option>
                        <option>Cancelado</option>
                    </select>
                </div>

                {/* Lista de Agendamentos */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="w-full text-left border-collapse table-auto">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-3">Horário</th>
                                <th className="p-3">Cliente</th>
                                <th className="p-3">Serviço</th>
                                <th className="p-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAgendamentos.map((a, idx) => (
                                <tr key={idx} className="hover:bg-gray-50">
                                    <td className="p-3">{a.horario}</td>
                                    <td className="p-3">{a.cliente}</td>
                                    <td className="p-3">{a.servico}</td>
                                    <td className="p-3"><StatusBadge status={a.status} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}