type Props = {
  businesses: number;
  budget: number;
  revenue: number;
  profit: number;
  customers: number;
  growth: number;
};

function KPICards({
  businesses,
  budget,
  revenue,
  profit,
  customers,
  growth,
}: Props) {
  const cards = [
    {
      title: "Businesses",
      value: businesses,
      color: "text-cyan-400",
      emoji: "🏢",
    },
    {
      title: "Budget",
      value: `₹${budget.toLocaleString()}`,
      color: "text-green-400",
      emoji: "💰",
    },
    {
      title: "Revenue",
      value: `₹${revenue.toLocaleString()}`,
      color: "text-blue-400",
      emoji: "📈",
    },
    {
      title: "Profit",
      value: `₹${profit.toLocaleString()}`,
      color: "text-emerald-400",
      emoji: "💵",
    },
    {
      title: "Customers",
      value: customers,
      color: "text-yellow-400",
      emoji: "👥",
    },
    {
      title: "Growth",
      value: `${growth}%`,
      color: "text-purple-400",
      emoji: "🚀",
    },
    {
      title: "AI Score",
      value: "94%",
      color: "text-pink-400",
      emoji: "🤖",
    },
    {
      title: "Reports",
      value: "Ready",
      color: "text-orange-400",
      emoji: "📄",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl p-6"
        >
          <p className="text-gray-400">
            {card.emoji} {card.title}
          </p>

          <h2 className={`text-3xl font-bold mt-3 ${card.color}`}>
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default KPICards;