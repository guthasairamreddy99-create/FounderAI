import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  revenue: number;
  expenses: number;
};

function RevenueVsExpenseChart({
  revenue,
  expenses,
}: Props) {
  const data = {
    labels: ["Financial Overview"],

    datasets: [
      {
        label: "Revenue",
        data: [revenue],
        backgroundColor: "#22C55E",
      },
      {
        label: "Expenses",
        data: [expenses],
        backgroundColor: "#EF4444",
      },
    ],
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        Revenue vs Expenses
      </h2>

      <Bar data={data} />
    </div>
  );
}

export default RevenueVsExpenseChart;