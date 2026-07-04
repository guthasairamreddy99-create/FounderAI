import HealthGauge from "./HealthGauge";
import RevenueTrend from "./RevenueTrend";
import ExpensePie from "./ExpensePie";
import ExecutiveSummary from "./ExecutiveSummary";
import ActivityTimeline from "./ActivityTimeline";
import KPICards from "./KPICards";
import AIInsights from "./AIInsights";
import QuickActions from "./QuickActions";

type Props = {
  score: number;
};

function ExecutiveDashboard({ score }: Props) {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white">
        📊 Executive Dashboard
      </h1>

      <KPICards
        revenue={125000}
        profit={45000}
        customers={284}
        growth={18}
      />

      <div className="grid lg:grid-cols-3 gap-8">
        <HealthGauge score={score} />

        <div className="lg:col-span-2">
          <ExecutiveSummary score={score} />
        </div>
      </div>

      <RevenueTrend />

      <div className="grid lg:grid-cols-2 gap-8">
        <ExpensePie />
        <AIInsights />
      </div>

      <QuickActions />

      <ActivityTimeline />
    </div>
  );
}

export default ExecutiveDashboard;