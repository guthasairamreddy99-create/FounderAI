export function generateFallbackAnalysis(
  revenue: number,
  expenses: number,
  budget: number
) {
  const profit = revenue - expenses;

  const score =
    profit > 0
      ? Math.min(
          95,
          Math.round((profit / revenue) * 100 + (budget / revenue) * 20)
        )
      : 40;

  return {
    score,

    strengths: [
      profit > 0
        ? "Business is generating positive profit."
        : "Revenue generation exists.",

      revenue > expenses
        ? "Revenue is greater than expenses."
        : "Business still has growth potential.",
    ],

    weaknesses: [
      budget < expenses
        ? "Budget is lower than monthly expenses."
        : "Cash reserves could be improved.",
    ],

    risks: [
      expenses > revenue * 0.7
        ? "High operating expenses."
        : "Future market fluctuations may impact revenue.",
    ],

    recommendations: [
      "Increase emergency cash reserves.",
      "Reduce unnecessary expenses.",
      "Invest more in marketing.",
      "Track KPIs every month.",
    ],
  };
}