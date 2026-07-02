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

function RevenueChart({ revenue, expenses }: Props) {
  const data = {
    labels: ["Revenue", "Expenses"],
    datasets: [
      {
        label: "Amount (₹)",
        data: [revenue, expenses],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
      },
    },
  };

  return (
    <div className="bg-slate-900 rounded-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        📈 Revenue vs Expenses
      </h2>

      <Bar data={data} options={options} />
    </div>
  );
}

export default RevenueChart;