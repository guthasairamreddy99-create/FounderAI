import { useState } from "react";
import { toast } from "react-toastify";

import CompetitorForm from "../components/Competitor/CompetitorForm";
import CompetitorResult from "../components/Competitor/CompetitorResult";

import { generateCompetitorAnalysis } from "../api/businessApi";

function CompetitorPage() {
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (
    businessName: string,
    businessType: string,
    location: string,
    budget: number,
    language: string
  ) => {
    try {
      setLoading(true);

      const data = await generateCompetitorAnalysis({
        businessName,
        businessType,
        location,
        budget,
        language,
      });

      setAnalysis(data.analysis);

      toast.success("Competitor Analysis Generated!");
    } catch (error) {
      console.error(error);

      toast.error("Failed to generate competitor analysis.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">

      <CompetitorForm onGenerate={handleGenerate} />

      {loading && (
        <div className="text-center text-2xl mt-8">
          🤖 FounderAI is analyzing your competitors...
        </div>
      )}

      <CompetitorResult analysis={analysis} />

    </div>
  );
}

export default CompetitorPage;