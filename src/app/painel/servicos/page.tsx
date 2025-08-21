"use client";

import { useState } from "react";
import ServiceForm from "../../../components/serviceForm/ServiceForm";
import { useSession } from 'next-auth/react';

export default function ServicosPage() {
    const [showForm, setShowForm] = useState(false);
    const { data: session, status } = useSession();
    return (
        <div className="w-full h-screen bg-gray-100 flex flex-col">

            {/* HEADER TOPO FIXO */}
            

            {/* Conteúdo principal (painel ocupa toda a página abaixo do header) */}
            <div className="flex flex-1 pt-16 pb-0 h-full overflow-hidden">
               

                {/* Painel principal desktop */}
                <ServiceForm />
            </div>
        </div>

    );
}
