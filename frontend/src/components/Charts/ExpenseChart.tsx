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
  expenses: number[];
};

function ExpenseChart({ expenses }: Props) {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
    ],

    datasets: [
      {
        label: "Expenses",
        data: expenses,
        backgroundColor: "#EF4444",
      },
    ],
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-6">
      <h2 className="text-2xl text-white font-bold mb-6">
        Expense Analysis
      </h2>

      <Bar data={data} />
    </div>
  );
}

export default ExpenseChart;