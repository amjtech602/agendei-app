"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";

type Service = {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number;
};

export default function ServiceForm() {
  const [services, setServices] = useState<Service[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price || !duration) return;

    const newService: Service = {
      id: Date.now(),
      name,
      description,
      price: parseFloat(price),
      duration: parseInt(duration),
    };

    setServices([...services, newService]);
    setName("");
    setDescription("");
    setPrice("");
    setDuration("");
  };

  const handleDelete = (id: number) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md transition-colors">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Cadastro de Serviços
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nome */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            Nome do serviço
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg border-gray-300 dark:border-gray-700 
                       bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Descrição */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            Descrição
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full p-3 border rounded-lg border-gray-300 dark:border-gray-700 
                       bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Preço */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Preço
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-3 border rounded-lg border-gray-300 dark:border-gray-700 
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
              className="w-full p-3 border rounded-lg border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Salvar
        </button>
      </form>

      {/* Lista de serviços */}
      {services.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Serviços Cadastrados
          </h3>
          <ul className="space-y-3">
            {services.map((service) => (
              <li
                key={service.id}
                className="flex justify-between items-center p-4 rounded-lg border 
                           border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 
                           text-gray-800 dark:text-gray-100"
              >
                <span>
                  {service.name} - R$ {service.price} - {service.duration} min
                </span>
                <button
                  onClick={() => handleDelete(service.id)}
                  className="p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900 transition-colors"
                >
                  <Trash2 size={18} className="text-red-500" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
