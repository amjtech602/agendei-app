interface Props {
    status: 'Confirmado' | 'Pendente' | 'Cancelado';
}

const statusMap: Record<string, string> = {
    Confirmado: 'bg-green-100 text-green-700 font-bold',
    Pendente: 'bg-yellow-100 text-yellow-700 font-bold',
    Cancelado: 'bg-red-100 text-red-700 font-bold',
};

const StatusBadge: React.FC<Props> = ({ status }) => (
    <span className={`text-xs px-2 py-1 rounded-2xl ${statusMap[status] || 'bg-gray-200 text-gray-500'}`}>{status}</span>
);

export default StatusBadge;
