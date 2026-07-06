type Props = {
  revenue: number;
  budget: number;
  customers: number;
  growth: number;
};

function AIAdvisor({
  revenue,
  budget,
  customers,
  growth,
}: Props) {
  const suggestions: string[] = [];

  if (budget > revenue) {
    suggestions.push(
      "💰 Expenses are higher than revenue. Reduce unnecessary costs."
    );
  }

  if (growth < 20) {
    suggestions.push(
      "📈 Invest more in digital marketing to increase growth."
    );
  }

  if (customers < 100) {
    suggestions.push(
      "🎯 Focus on customer acquisition campaigns."
    );
  }

  if (revenue > budget) {
    suggestions.push(
      "🚀 Business is profitable. Consider expanding to new locations."
    );
  }

  return (
    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
      <h2 className="text-2xl font-bold text-white mb-6">
        🤖 AI Business Advisor
      </h2>

      <div className="space-y-4">
        {suggestions.length === 0 ? (
          <p className="text-green-400">
            Your business looks healthy.
          </p>
        ) : (
          suggestions.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-4 text-white"
            >
              {item}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AIAdvisor;