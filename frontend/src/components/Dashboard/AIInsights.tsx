import { useEffect, useState } from "react";
import { getAIAdvice } from "../../api/businessApi";

function AIInsights() {
  const [loading, setLoading] = useState(true);
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    async function loadAdvice() {
      try {
        const result = await getAIAdvice({
          name: "FounderAI Demo Business",
          revenue: 500000,
          budget: 250000,
          customers: 300,
          growth: 18,
        });

        setAdvice(result);
      } catch (error) {
        console.error(error);
        setAdvice("Unable to generate AI insights.");
      } finally {
        setLoading(false);
      }
    }

    loadAdvice();
  }, []);

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <h2 className="text-2xl font-bold text-white mb-5">
        🤖 AI Insights
      </h2>

      {loading ? (
        <div className="text-gray-400 animate-pulse">
          Gemini is analyzing your business...
        </div>
      ) : (
        <div className="bg-slate-800 rounded-xl p-5 whitespace-pre-wrap text-gray-300 leading-8">
          {advice}
        </div>
      )}
    </div>
  );
}

export default AIInsights;