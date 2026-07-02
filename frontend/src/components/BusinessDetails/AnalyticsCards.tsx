import {
  FaMoneyBillWave,
  FaWallet,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

import StatCard from "../common/StatCard";

type AnalyticsCardsProps = {
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
}: AnalyticsCardsProps) {
  const profit = revenue - expenses;

  const risk =
    score >= 80
      ? "Low"
      : score >= 60
      ? "Medium"
      : "High";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      <StatCard
        title="Revenue"
        value={`₹${revenue.toLocaleString()}`}
        color="text-green-400"
        icon={<FaMoneyBillWave className="text-green-400" />}
      />

      <StatCard
        title="Profit"
        value={`₹${profit.toLocaleString()}`}
        color="text-cyan-400"
        icon={<FaChartLine className="text-cyan-400" />}
      />

      <StatCard
        title="Budget"
        value={`₹${budget.toLocaleString()}`}
        color="text-yellow-400"
        icon={<FaWallet className="text-yellow-400" />}
      />

      <StatCard
        title="Risk Level"
        value={risk}
        color={
          risk === "Low"
            ? "text-green-400"
            : risk === "Medium"
            ? "text-yellow-400"
            : "text-red-400"
        }
        icon={<FaShieldAlt className="text-red-400" />}
      />

    </div>
  );
}

export default AnalyticsCards;