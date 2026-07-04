import RevenueTrend from "./RevenueTrend";
import ExpensePie from "./ExpensePie";
import AIInsights from "./AIInsights";
import Goals from "./Goals";

function Dashboard() {
  return (
    <div className="space-y-8">

      <h1 className="text-4xl font-bold text-white">
        📊 Executive Dashboard
      </h1>

      <RevenueTrend />

      <div className="grid lg:grid-cols-2 gap-8">

        <ExpensePie />

        <AIInsights />

      </div>

      <Goals />

    </div>
  );
}

export default Dashboard;