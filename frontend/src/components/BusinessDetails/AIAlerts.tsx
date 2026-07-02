type Props = {
  revenue: number;
  expenses: number;
  budget: number;
};

function AIAlerts({ revenue, expenses, budget }: Props) {
  const profit = revenue - expenses;
  const margin = revenue > 0 ? (profit / revenue) * 100 : 0;

  const alerts: string[] = [];

  // Profit Margin
  if (margin >= 30) {
    alerts.push("✅ Excellent profit margin. Your business is highly profitable.");
  } else if (margin >= 15) {
    alerts.push("🟡 Profit margin is healthy, but there is room for improvement.");
  } else {
    alerts.push("🔴 Profit margin is low. Try reducing unnecessary expenses.");
  }

  // Expenses
  if (expenses > revenue * 0.8) {
    alerts.push("⚠ Expenses are consuming more than 80% of your revenue.");
  }

  // Cash Flow
  if (profit > 0) {
    alerts.push("💰 Positive cash flow detected.");
  } else {
    alerts.push("❌ Your business is currently running at a loss.");
  }

  // Budget
  if (budget < expenses) {
    alerts.push("🚨 Available budget is lower than monthly expenses.");
  } else if (budget > revenue) {
    alerts.push("🚀 You have enough budget to invest in business growth.");
  }

  return (
    <div className="bg-orange-900 rounded-xl p-6">

      <h2 className="text-2xl font-bold text-white mb-5">
        🚨 FounderAI Smart Alerts
      </h2>

      <div className="space-y-3">

        {alerts.map((alert, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-700 rounded-xl p-4 hover:border-orange-400 transition duration-300"
          >
            {alert}
          </div>
        ))}

      </div>

    </div>
  );
}

export default AIAlerts;