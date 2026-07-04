function Customers() {
  const totalCustomers = 284;
  const newCustomers = 36;
  const returningCustomers = 198;
  const retention = 70;

  return (
    <div className="space-y-8">

      <h1 className="text-4xl font-bold text-white">
        👥 Customer Analytics
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-slate-900 rounded-2xl p-6">
          <p className="text-gray-400">Total Customers</p>
          <h2 className="text-4xl font-bold text-cyan-400 mt-3">
            {totalCustomers}
          </h2>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6">
          <p className="text-gray-400">New Customers</p>
          <h2 className="text-4xl font-bold text-green-400 mt-3">
            {newCustomers}
          </h2>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6">
          <p className="text-gray-400">Returning Customers</p>
          <h2 className="text-4xl font-bold text-yellow-400 mt-3">
            {returningCustomers}
          </h2>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6">
          <p className="text-gray-400">Retention</p>
          <h2 className="text-4xl font-bold text-purple-400 mt-3">
            {retention}%
          </h2>
        </div>

      </div>

      <div className="bg-slate-900 rounded-2xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Customer Insights
        </h2>

        <ul className="space-y-4 text-gray-300">

          <li>✅ Customer satisfaction is improving.</li>

          <li>📈 Returning customers generate most of your revenue.</li>

          <li>💡 Referral campaigns can increase growth.</li>

          <li>🎯 Focus on retaining your top customers.</li>

        </ul>

      </div>

    </div>
  );
}

export default Customers;