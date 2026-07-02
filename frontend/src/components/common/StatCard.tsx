import type { ReactNode } from "react";

type Props = {
  title: string;
  value: string | number;
  color: string;
  icon: ReactNode;
};

function StatCard({
  title,
  value,
  color,
  icon,
}: Props) {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:scale-105 transition">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-400">
            {title}
          </p>

          <h2 className={`text-3xl font-bold mt-3 ${color}`}>
            {value}
          </h2>

        </div>

        <div className="text-4xl">
          {icon}
        </div>

      </div>

    </div>
  );
}

export default StatCard;