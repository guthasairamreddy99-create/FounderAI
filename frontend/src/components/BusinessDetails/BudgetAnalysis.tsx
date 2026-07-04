import { useState } from "react";

import ExecutiveDashboard from "../Dashboard/ExecutiveDashboard";
import BudgetAnalysis from "./BudgetAnalysis";
import Customers from "./Customers";
import Marketing from "./Marketing";
import AIMentor from "./AIMentor";
import Reports from "./Reports";
import Settings from "./Settings";

function BusinessDetailsPage() {
  const [tab, setTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 p-6 border-r border-slate-800">

        <h1 className="text-3xl font-bold mb-10">
          🚀 FounderAI
        </h1>

        <div className="space-y-3">

          <button
            className="block w-full text-left py-3 px-3 rounded-lg hover:bg-indigo-600 transition"
            onClick={() => setTab("dashboard")}
          >
            📊 Dashboard
          </button>

          <button
            className="block w-full text-left py-3 px-3 rounded-lg hover:bg-indigo-600 transition"
            onClick={() => setTab("finance")}
          >
            💰 Financial Center
          </button>

          <button
            className="block w-full text-left py-3 px-3 rounded-lg hover:bg-indigo-600 transition"
            onClick={() => setTab("customers")}
          >
            👥 Customers
          </button>

          <button
            className="block w-full text-left py-3 px-3 rounded-lg hover:bg-indigo-600 transition"
            onClick={() => setTab("marketing")}
          >
            📢 Marketing AI
          </button>

          <button
            className="block w-full text-left py-3 px-3 rounded-lg hover:bg-indigo-600 transition"
            onClick={() => setTab("ai")}
          >
            🤖 AI Mentor
          </button>

          <button
            className="block w-full text-left py-3 px-3 rounded-lg hover:bg-indigo-600 transition"
            onClick={() => setTab("reports")}
          >
            📄 Reports
          </button>

          <button
            className="block w-full text-left py-3 px-3 rounded-lg hover:bg-indigo-600 transition"
            onClick={() => setTab("settings")}
          >
            ⚙ Settings
          </button>

        </div>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-y-auto">

        {tab === "dashboard" && (
          <ExecutiveDashboard score={92} />
        )}

        {tab === "finance" && (
          <BudgetAnalysis />
        )}

        {tab === "customers" && (
          <Customers />
        )}

        {tab === "marketing" && (
          <Marketing />
        )}

        {tab === "ai" && (
          <AIMentor />
        )}

        {tab === "reports" && (
          <Reports />
        )}

        {tab === "settings" && (
          <Settings />
        )}

      </div>
    </div>
  );
}

export default BusinessDetailsPage;