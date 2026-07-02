import { useState } from "react";

import Overview from "./Overview";
import BudgetAnalysis from "./BudgetAnalysis";
import RevenuePrediction from "./RevenuePrediction";
import Customers from "./Customers";
import Marketing from "./Marketing";
import AIMentor from "./AIMentor";

function BusinessDetailsPage() {
  const [tab, setTab] = useState("overview");

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 p-6">
        <h1 className="text-2xl font-bold mb-8">FounderAI</h1>

        <button
          className="block w-full text-left py-2 hover:text-cyan-400"
          onClick={() => setTab("overview")}
        >
          📊 Overview
        </button>

        <button
          className="block w-full text-left py-2 hover:text-cyan-400"
          onClick={() => setTab("budget")}
        >
          💰 Budget Analysis
        </button>

        <button
          className="block w-full text-left py-2 hover:text-cyan-400"
          onClick={() => setTab("revenue")}
        >
          📈 Revenue Prediction
        </button>

        <button
          className="block w-full text-left py-2 hover:text-cyan-400"
          onClick={() => setTab("customers")}
        >
          👥 Customers
        </button>

        <button
          className="block w-full text-left py-2 hover:text-cyan-400"
          onClick={() => setTab("marketing")}
        >
          📢 Marketing
        </button>

        <button
          className="block w-full text-left py-2 hover:text-cyan-400"
          onClick={() => setTab("ai")}
        >
          🤖 AI Mentor
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-10">
        {tab === "overview" && <Overview />}
        {tab === "budget" && <BudgetAnalysis />}
        {tab === "revenue" && <RevenuePrediction />}
        {tab === "customers" && <Customers />}
        {tab === "marketing" && <Marketing />}
        {tab === "ai" && <AIMentor />}
      </div>
    </div>
  );
}

export default BusinessDetailsPage;