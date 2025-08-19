"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";

type Service = {
  id: number;
  name: string;
  description: string;
  price?: number;
  duration: number;
  active: boolean;
};

export default function ServiceForm() {
  const [services, setServices] = useState<Service[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [hasPrice, setHasPrice] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !duration) return;

    const newService: Service = {
      id: Date.now(),
      name,
      description,
      price: hasPrice && price ? parseFloat(price) : undefined,
      duration: parseInt(duration),
      active: true,
    };

    setServices([...services, newService]);
    setName("");
    setDescription("");
    setPrice("");
    setDuration("");
    setHasPrice(true);
  };

  const handleDelete = (id: number) => {
    setServices(services.filter((service) => service.id !== id));
  };

  const toggleActive = (id: number) => {
    setServices(
      services.map((s) =>
        s.id === id ? { ...s, active: !s.active } : s
      )
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md transition-colors">
      {/* Título */}
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100 text-center">
        Cadastro de Serviços
      </h2>

      {/* Formulário */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Nome */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Nome do serviço
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded-lg border-gray-300 dark:border-gray-700 
                        bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Duração */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Duração (minutos)
            </label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full p-2 border rounded-lg border-gray-300 dark:border-gray-700 
                        bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Checkbox para preço */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="hasPrice"
            checked={hasPrice}
            onChange={() => setHasPrice(!hasPrice)}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label htmlFor="hasPrice" className="text-gray-700 dark:text-gray-300 text-sm">
            Deseja informar valor do serviço?
          </label>
        </div>

        {/* Preço (só aparece se o checkbox estiver marcado) */}
        {hasPrice && (
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Preço
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 border rounded-lg border-gray-300 dark:border-gray-700 
                        bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {/* Descrição */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            Descrição
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={2}
            className="w-full p-2 border rounded-lg border-gray-300 dark:border-gray-700 
                      bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                      focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
        >
          Salvar
        </button>
      </form>

      {/* Lista de serviços */}
      {services.length > 0 && (
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Serviços Cadastrados
          </h3>
          <div className="overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700">
            <table className="w-full border-collapse">
              <thead className="bg-gray-200 dark:bg-gray-800">
                <tr className="text-left text-gray-700 dark:text-gray-300">
                  <th className="px-4 py-2">Nome</th>
                  <th className="px-4 py-2">Descrição</th>
                  <th className="px-4 py-2">Preço</th>
                  <th className="px-4 py-2">Duração</th>
                  <th className="px-4 py-2">Ativo</th>
                  <th className="px-4 py-2 text-center">Ações</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr
                    key={service.id}
                    className="border-t border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200"
                  >
                    <td className="px-4 py-2">{service.name}</td>
                    <td className="px-4 py-2">{service.description}</td>
                    <td className="px-4 py-2">
                      {service.price !== undefined ? `R$ ${service.price.toFixed(2)}` : "—"}
                    </td>
                    <td className="px-4 py-2">{service.duration} min</td>
                    <td className="px-4 py-2">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={service.active}
                          onChange={() => toggleActive(service.id)}
                          className="sr-only"
                        />
                        <div
                          className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${
                            service.active ? "bg-green-500" : "bg-gray-400"
                          }`}
                        >
                          <div
                            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                              service.active ? "translate-x-5" : "translate-x-0"
                            }`}
                          />
                        </div>
                      </label>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => handleDelete(service.id)}
                        className="p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900 transition-colors"
                      >
                        <Trash2 size={18} className="text-red-500" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
