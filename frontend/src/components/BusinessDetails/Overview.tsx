type Props = {
  revenue: number;
  expenses: number;
  customers: number;
};

function Overview({ revenue, expenses, customers }: Props) {
  const profit = revenue - expenses;

  return (
    <div className="bg-slate-900 rounded-2xl p-8">

      <h2 className="text-3xl font-bold text-white mb-8">
        📊 Business Overview
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-slate-800 rounded-xl p-6">
          <h3 className="text-gray-400">
            Revenue
          </h3>

          <p className="text-3xl text-green-400 font-bold mt-3">
            ₹{revenue.toLocaleString()}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-6">
          <h3 className="text-gray-400">
            Expenses
          </h3>

          <p className="text-3xl text-red-400 font-bold mt-3">
            ₹{expenses.toLocaleString()}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-6">
          <h3 className="text-gray-400">
            Profit
          </h3>

          <p className="text-3xl text-cyan-400 font-bold mt-3">
            ₹{profit.toLocaleString()}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-6">
          <h3 className="text-gray-400">
            Customers
          </h3>

          <p className="text-3xl text-yellow-400 font-bold mt-3">
            {customers}
          </p>
        </div>

      </div>

    </div>
  );
}

export default Overview;