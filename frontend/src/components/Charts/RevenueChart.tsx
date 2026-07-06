import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  revenue: number[];
};

function RevenueChart({ revenue }: Props) {
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
        label: "Revenue",
        data: revenue,
        borderColor: "#4F46E5",
        backgroundColor: "#4F46E5",
        tension: 0.4,
        fill: false,
      },
    ],
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-6">
      <h2 className="text-2xl text-white font-bold mb-6">
        Revenue Trend
      </h2>

      <Line data={data} />
    </div>
  );
}

export default RevenueChart;