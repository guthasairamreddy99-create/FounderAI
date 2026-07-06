import AppLayout from "../Layout/AppLayout";

import BudgetAnalysis from "../BusinessDetails/BudgetAnalysis";
import RevenuePrediction from "../BusinessDetails/RevenuePrediction";
import BusinessInsights from "../BusinessDetails/BusinessInsights";

function FinancialPage() {
  const revenue = 100000;
  const expenses = 60000;

  return (
    <AppLayout>
      <h1 className="text-4xl font-bold text-white mb-8">
        📈 Financial Center
      </h1>

      <div className="space-y-8">

        <BusinessInsights
          revenue={revenue}
          expenses={expenses}
        />

        <BudgetAnalysis />

        <RevenuePrediction />

      </div>
    </AppLayout>
  );
}

export default FinancialPage;