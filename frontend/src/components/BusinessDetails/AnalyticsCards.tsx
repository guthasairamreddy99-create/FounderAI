import StatCard from "../common/StatCard";

type Props = {
  revenue: number;
  expenses: number;
  budget: number;
  score: number;
};

function AnalyticsCards({
  revenue,
  expenses,
  budget,
  score,
}: Props) {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

      <StatCard
        title="Health Score"
        value={`${score}%`}
        color="text-green-400"
        icon="💚"
      />

      <StatCard
        title="Revenue"
        value={`₹${revenue.toLocaleString()}`}
        color="text-cyan-400"
        icon="📈"
      />

      <StatCard
        title="Expenses"
        value={`₹${expenses.toLocaleString()}`}
        color="text-red-400"
        icon="💸"
      />

      <StatCard
        title="Budget"
        value={`₹${budget.toLocaleString()}`}
        color="text-yellow-400"
        icon="💰"
      />

    </div>
  );
}

export default AnalyticsCards;