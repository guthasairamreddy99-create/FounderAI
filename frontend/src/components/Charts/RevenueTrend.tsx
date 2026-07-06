import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 22000 },
  { month: "Apr", revenue: 35000 },
  { month: "May", revenue: 47000 },
  { month: "Jun", revenue: 65000 },
];

function RevenueTrend() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6">
      <h2 className="text-white text-xl font-bold mb-6">
        📈 Revenue Trend
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <AreaChart data={data}>
          <XAxis dataKey="month" />
          <Tooltip />
          <Area
            dataKey="revenue"
            stroke="#7C3AED"
            fill="#7C3AED"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueTrend;