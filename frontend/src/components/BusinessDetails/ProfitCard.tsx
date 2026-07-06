type Props = {
  revenue: number;
  budget: number;
};

function ProfitCard({ revenue, budget }: Props) {
  const profit = revenue - budget;

  return (
    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

      <h2 className="text-2xl text-white font-bold">
        Profit Analysis
      </h2>

      <div className="mt-6 text-5xl font-bold text-green-400">
        ₹{profit.toLocaleString()}
      </div>

      <p className="text-gray-400 mt-3">
        Revenue − Budget
      </p>

    </div>
  );
}

export default ProfitCard;