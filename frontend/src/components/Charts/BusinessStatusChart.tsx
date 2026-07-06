import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

type Props = {
  planning: number;
  running: number;
  completed: number;
};

function BusinessStatusChart({
  planning,
  running,
  completed,
}: Props) {
  const data = {
    labels: [
      "Planning",
      "Running",
      "Completed",
    ],

    datasets: [
      {
        data: [
          planning,
          running,
          completed,
        ],
        backgroundColor: [
          "#6366F1",
          "#22C55E",
          "#F59E0B",
        ],
      },
    ],
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        Business Status
      </h2>

      <Pie data={data} />
    </div>
  );
}

export default BusinessStatusChart;