function AIInsights() {
  const insights = [
    "💡 Revenue has grown by 18% compared to last month.",
    "⚠ Marketing expenses are increasing faster than sales.",
    "🚀 Consider increasing inventory for next month.",
    "✅ Business health is excellent.",
  ];

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <h2 className="text-2xl font-bold text-white mb-5">
        🤖 AI Insights
      </h2>

      <div className="space-y-4">
        {insights.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-xl p-4 text-gray-300"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIInsights;