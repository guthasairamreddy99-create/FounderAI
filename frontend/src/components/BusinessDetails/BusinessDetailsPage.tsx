import { useState } from "react";

import Overview from "./Overview";
import BudgetAnalysis from "./BudgetAnalysis";
import RevenuePrediction from "./RevenuePrediction";
import Customers from "./Customers";
import Marketing from "./Marketing";
import AIMentor from "./AIMentor";
import Reports from "./Reports";
import Settings from "./Settings";
import BusinessInsights from "./BusinessInsights";
import AppLayout from "../Layout/AppLayout";

function BusinessDetailsPage() {
  const [tab, setTab] = useState("overview");

  // Temporary values
  const revenue = 100000;
  const expenses = 60000;
  const customers = 284;

  return (
    <AppLayout>

      {/* Navigation */}
      <div className="flex flex-wrap gap-3 mb-8">

        <button
          onClick={() => setTab("overview")}
          className={`px-5 py-3 rounded-xl ${
            tab === "overview"
              ? "bg-indigo-600"
              : "bg-slate-800 hover:bg-slate-700"
          }`}
        >
          📊 Overview
        </button>

        <button
          onClick={() => setTab("insights")}
          className={`px-5 py-3 rounded-xl ${
            tab === "insights"
              ? "bg-indigo-600"
              : "bg-slate-800 hover:bg-slate-700"
          }`}
        >
          📈 Insights
        </button>

        <button
          onClick={() => setTab("budget")}
          className={`px-5 py-3 rounded-xl ${
            tab === "budget"
              ? "bg-indigo-600"
              : "bg-slate-800 hover:bg-slate-700"
          }`}
        >
          💰 Budget
        </button>

        <button
          onClick={() => setTab("revenue")}
          className={`px-5 py-3 rounded-xl ${
            tab === "revenue"
              ? "bg-indigo-600"
              : "bg-slate-800 hover:bg-slate-700"
          }`}
        >
          📉 Forecast
        </button>

        <button
          onClick={() => setTab("customers")}
          className={`px-5 py-3 rounded-xl ${
            tab === "customers"
              ? "bg-indigo-600"
              : "bg-slate-800 hover:bg-slate-700"
          }`}
        >
          👥 Customers
        </button>

        <button
          onClick={() => setTab("marketing")}
          className={`px-5 py-3 rounded-xl ${
            tab === "marketing"
              ? "bg-indigo-600"
              : "bg-slate-800 hover:bg-slate-700"
          }`}
        >
          📢 Marketing
        </button>

        <button
          onClick={() => setTab("ai")}
          className={`px-5 py-3 rounded-xl ${
            tab === "ai"
              ? "bg-indigo-600"
              : "bg-slate-800 hover:bg-slate-700"
          }`}
        >
          🤖 AI Mentor
        </button>

        <button
          onClick={() => setTab("reports")}
          className={`px-5 py-3 rounded-xl ${
            tab === "reports"
              ? "bg-indigo-600"
              : "bg-slate-800 hover:bg-slate-700"
          }`}
        >
          📄 Reports
        </button>

        <button
          onClick={() => setTab("settings")}
          className={`px-5 py-3 rounded-xl ${
            tab === "settings"
              ? "bg-indigo-600"
              : "bg-slate-800 hover:bg-slate-700"
          }`}
        >
          ⚙️ Settings
        </button>

      </div>

      {/* Page Content */}

      {tab === "overview" && <Overview revenue={revenue} expenses={expenses} customers={customers} />}

      {tab === "insights" && (
        <BusinessInsights
          revenue={revenue}
          expenses={expenses}
        />
      )}

      {tab === "budget" && <BudgetAnalysis />}

      {tab === "revenue" && <RevenuePrediction />}

      {tab === "customers" && <Customers />}

      {tab === "marketing" && <Marketing />}

      {tab === "ai" && <AIMentor />}

      {tab === "reports" && <Reports />}

      {tab === "settings" && <Settings />}

    </AppLayout>
  );
}

export default BusinessDetailsPage;