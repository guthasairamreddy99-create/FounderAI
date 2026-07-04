import { useNavigate } from "react-router-dom";

type BusinessCardProps = {
  id: string;
  title: string;
  status: string;
  location?: string;
  budget?: string;
  customer?: string;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

function BusinessCard({
  id,
  title,
  status,
  location,
  budget,
  customer,
  onDelete,
  onEdit,
}: BusinessCardProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500 hover:shadow-xl transition-all duration-300">

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">
          {title}
        </h2>

        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
          {status}
        </span>
      </div>

      <div className="mt-6 space-y-3">
        <p className="text-gray-300">
          📍 <span className="text-white">{location}</span>
        </p>

        <p className="text-gray-300">
          💰 <span className="text-white">{budget}</span>
        </p>

        <p className="text-gray-300">
          🎯 <span className="text-white">{customer}</span>
        </p>
      </div>

      <div className="mt-8 flex gap-3">
        <button
          onClick={() => navigate(`/business/${id}`)}
          className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Open →
        </button>

        <button
          onClick={() => onEdit(id)}
          className="bg-slate-800 hover:bg-slate-700 text-white px-5 rounded-xl"
        >
          ✏️
        </button>

        <button
          onClick={() => {
            if (window.confirm("Delete this business?")) {
              onDelete(id);
            }
          }}
          className="bg-red-600 hover:bg-red-700 text-white px-5 rounded-xl"
        >
          🗑
        </button>
      </div>

    </div>
  );
}

export default BusinessCard;