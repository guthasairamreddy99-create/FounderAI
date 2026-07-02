import { useState } from "react";
import { analyzeBudget, getForecast } from "../../api/businessApi";
import RevenueChart from "./RevenueChart";
import ForecastChart from "./ForecastChart";
import AnalyticsCards from "./AnalyticsCards";
import { motion } from "framer-motion";
import AIAlerts from "./AIAlerts";
import BusinessInsights from "./BusinessInsights";
import { generateReport } from "../../reports/generateReport";
import ExportReport from "./ExportReport";

function BudgetAnalysis() {
  const [revenue, setRevenue] = useState("");
  const [expenses, setExpenses] = useState("");
  const [budget, setBudget] = useState("");

  const [analysis, setAnalysis] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!revenue || !expenses || !budget) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const result = await analyzeBudget(
        Number(revenue),
        Number(expenses),
        Number(budget)
      );

      setAnalysis(result);
      const forecastResult = await getForecast(Number(revenue), Number(expenses));
      setForecast(forecastResult.forecast.forecast);
    } catch (error) {
      console.error(error);
      alert("Analysis failed.");
    } finally {
      setLoading(false);
    }
  };

   return (
  <motion.div
    className="space-y-8"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h1 className="text-4xl font-bold text-white">
      💰 AI Financial Analyzer
    </h1>

    <div className="grid md:grid-cols-3 gap-6">
      <input
        type="number"
        placeholder="Monthly Revenue"
        value={revenue}
        onChange={(e) => setRevenue(e.target.value)}
        className="bg-slate-800 border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none rounded-xl p-4 text-white transition"
      />

      <input
        type="number"
        placeholder="Monthly Expenses"
        value={expenses}
        onChange={(e) => setExpenses(e.target.value)}
        className="bg-slate-800 border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none rounded-xl p-4 text-white transition"
      />

      <input
        type="number"
        placeholder="Available Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        className="bg-slate-800 border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none rounded-xl p-4 text-white transition"
      />
    </div>

    <button
      onClick={handleAnalyze}
      className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition duration-300 px-8 py-4 rounded-xl text-white font-semibold shadow-lg"
    >
      {loading ? "Analyzing..." : "Analyze Business"}
    </button>

    {loading && (
      <div className="text-cyan-400 text-lg">
        🤖 FounderAI is analyzing your business...
      </div>
    )}

    {analysis && (
      <div className="space-y-6">
        <AnalyticsCards
          revenue={Number(revenue)}
          expenses={Number(expenses)}
          budget={Number(budget)}
          score={analysis.score}
        />

        <div className="bg-slate-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            💚 Business Health Score
          </h2>

          <div className="w-full bg-slate-700 rounded-full h-5">
            <div
              className={`h-5 rounded-full transition-all duration-700 ${
                analysis.score >= 80
                  ? "bg-green-500"
                  : analysis.score >= 60
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
              style={{ width: `${analysis.score}%` }}
            />
          </div>

          <p className="text-5xl font-bold mt-5 text-white">
            {analysis.score}/100
          </p>
        </div>

        <div className="bg-indigo-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6 text-white">
            📊 Business Summary
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-gray-300">Revenue</p>
              <p className="text-3xl font-bold text-green-400">
                ₹{Number(revenue).toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-gray-300">Expenses</p>
              <p className="text-3xl font-bold text-red-400">
                ₹{Number(expenses).toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-gray-300">Budget</p>
              <p className="text-3xl font-bold text-cyan-400">
                ₹{Number(budget).toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-emerald-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            💵 Estimated Monthly Profit
          </h2>

          <p className="text-5xl font-bold text-green-300">
            ₹{(Number(revenue) - Number(expenses)).toLocaleString()}
          </p>

          <p className="text-gray-300 mt-3">
            Profit = Revenue − Expenses
          </p>
        </div>

        <ExportReport
  revenue={Number(revenue)}
  expenses={Number(expenses)}
  budget={Number(budget)}
  analysis={analysis}
/>

        <AIAlerts
  revenue={Number(revenue)}
  expenses={Number(expenses)}
  budget={Number(budget)}
/>

<BusinessInsights
  revenue={Number(revenue)}
  expenses={Number(expenses)}
/>

        <RevenueChart
          revenue={Number(revenue)}
          expenses={Number(expenses)}
        />

        {forecast.length > 0 && (
          <ForecastChart forecast={forecast} />
        )}

        <div className="bg-slate-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            ✅ Strengths
          </h2>

          <ul className="list-disc ml-6 space-y-3">
            {analysis.strengths.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            ⚠ Weaknesses
          </h2>

          <ul className="list-disc ml-6 space-y-3">
            {analysis.weaknesses.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-400 mb-4">
            🚨 Risks
          </h2>

          <ul className="list-disc ml-6 space-y-3">
            {analysis.risks.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            💡 AI Recommendations
          </h2>

          <div className="flex justify-end">
  <button
    onClick={() =>
      generateReport(
        Number(revenue),
        Number(expenses),
        Number(budget),
        analysis.score,
        analysis
      )
    }
    className="bg-green-600 hover:bg-green-700 transition px-8 py-4 rounded-xl text-white font-semibold shadow-lg"
  >
    📄 Download AI Report
  </button>
</div>

          <ul className="list-disc ml-6 space-y-3">
            {analysis.recommendations.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    )}
  </motion.div>
);
}

export default BudgetAnalysis;