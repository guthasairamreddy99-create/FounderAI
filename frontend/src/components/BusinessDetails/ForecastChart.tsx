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

type Forecast = {
  month: string;
  revenue: number;
  profit: number;
};

type Props = {
  forecast: Forecast[];
};

function ForecastChart({ forecast }: Props) {
  const data = {
    labels: forecast.map((item) => item.month),
    datasets: [
      {
        label: "Revenue",
        data: forecast.map((item) => item.revenue),
      },
      {
        label: "Profit",
        data: forecast.map((item) => item.profit),
      },
    ],
  };

  return (
    <div className="bg-slate-900 rounded-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        📈 6-Month AI Forecast
      </h2>

      <Line data={data} />
    </div>
  );
}

export default ForecastChart;