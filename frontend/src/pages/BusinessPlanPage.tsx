import { useState } from "react";
import BusinessPlanForm from "../components/BusinessPlan/BusinessPlanForm";
import BusinessPlanResult from "../components/BusinessPlan/BusinessPlanResult";
import { toast } from "react-toastify";

function BusinessPlanPage() {
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);

  const generatePlan = async (
    businessName: string,
    businessType: string,
    location: string,
    budget: number
  ) => {
    setLoading(true);
    setPlan("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/business-plan",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            businessName,
            businessType,
            location,
            budget,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setPlan(data.plan);
      } else {
        toast.error(data.message || "Failed to generate business plan.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to generate business plan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <BusinessPlanForm onGenerate={generatePlan} />

      {loading && (
        <div className="mt-8 bg-slate-900 rounded-2xl p-10 border border-slate-700 text-center shadow-lg">
          <div className="text-7xl animate-pulse mb-6">
            🤖
          </div>

          <h2 className="text-3xl font-bold text-white mb-3">
            FounderAI is generating your Business Plan...
          </h2>

          <p className="text-gray-400 text-lg">
            Please wait while our AI creates a professional business plan for you.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      {!loading && plan && (
        <BusinessPlanResult plan={plan} />
      )}
    </div>
  );
}

export default BusinessPlanPage;