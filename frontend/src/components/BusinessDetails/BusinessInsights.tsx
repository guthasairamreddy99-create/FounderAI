type Props = {
  revenue: number;
  expenses: number;
};

function BusinessInsights({ revenue, expenses }: Props) {
  const profit = revenue - expenses;
  const margin = revenue ? ((profit / revenue) * 100).toFixed(1) : "0";
  const expenseRatio = revenue
    ? ((expenses / revenue) * 100).toFixed(1)
    : "0";

  return (
    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-slate-900 rounded-xl p-6">
        <p className="text-gray-400">Profit</p>
        <h2 className="text-4xl font-bold text-green-400">
          ₹{profit.toLocaleString()}
        </h2>
      </div>

      <div className="bg-slate-900 rounded-xl p-6">
        <p className="text-gray-400">Profit Margin</p>
        <h2 className="text-4xl font-bold text-cyan-400">
          {margin}%
        </h2>
      </div>

      <div className="bg-slate-900 rounded-xl p-6">
        <p className="text-gray-400">Expense Ratio</p>
        <h2 className="text-4xl font-bold text-yellow-400">
          {expenseRatio}%
        </h2>
      </div>

    </div>
  );
}

export default BusinessInsights;