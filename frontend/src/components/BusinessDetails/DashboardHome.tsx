type Props = {
  revenue: number;
  expenses: number;
  score: number;
};

function DashboardHome({ revenue, expenses, score }: Props) {
  const profit = revenue - expenses;

  return (
    <div className="space-y-6">

      <div className="grid md:grid-cols-4 gap-5">

        <div className="bg-green-900 rounded-xl p-6">
          <p>Revenue</p>
          <h2 className="text-3xl font-bold">
            ₹{revenue.toLocaleString()}
          </h2>
        </div>

        <div className="bg-red-900 rounded-xl p-6">
          <p>Expenses</p>
          <h2 className="text-3xl font-bold">
            ₹{expenses.toLocaleString()}
          </h2>
        </div>

        <div className="bg-indigo-900 rounded-xl p-6">
          <p>Profit</p>
          <h2 className="text-3xl font-bold">
            ₹{profit.toLocaleString()}
          </h2>
        </div>

        <div className="bg-cyan-900 rounded-xl p-6">
          <p>Health Score</p>
          <h2 className="text-3xl font-bold">
            {score}/100
          </h2>
        </div>

      </div>

    </div>
  );
}

export default DashboardHome;