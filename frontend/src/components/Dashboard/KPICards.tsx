import {
  FaMoneyBillWave,
  FaChartLine,
  FaUsers,
  FaPercentage,
} from "react-icons/fa";

type Props = {
  revenue: number;
  profit: number;
  customers: number;
  growth: number;
};

function KPICards({
  revenue,
  profit,
  customers,
  growth,
}: Props) {
  const cards = [
    {
      title: "Revenue",
      value: `₹${revenue.toLocaleString()}`,
      icon: <FaMoneyBillWave />,
      color: "bg-green-600",
    },
    {
      title: "Profit",
      value: `₹${profit.toLocaleString()}`,
      icon: <FaChartLine />,
      color: "bg-blue-600",
    },
    {
      title: "Customers",
      value: customers,
      icon: <FaUsers />,
      color: "bg-purple-600",
    },
    {
      title: "Growth",
      value: `${growth}%`,
      icon: <FaPercentage />,
      color: "bg-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-indigo-500 transition"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400">{card.title}</p>

              <h2 className="text-3xl font-bold text-white mt-2">
                {card.value}
              </h2>
            </div>

            <div
              className={`${card.color} w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl`}
            >
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default KPICards;