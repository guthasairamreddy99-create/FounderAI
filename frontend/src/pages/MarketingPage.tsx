import { useState } from "react";
import { toast } from "react-toastify";

import MarketingForm from "../components/Marketing/MarketingForm";
import MarketingResult from "../components/Marketing/MarketingResult";

import { generateMarketing } from "../api/businessApi";

function MarketingPage() {
  const [marketing, setMarketing] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (
    businessName: string,
    businessType: string,
    targetAudience: string,
    festival: string,
    language: string
  ) => {
    try {
      setLoading(true);

      const data = await generateMarketing({
        businessName,
        businessType,
        targetAudience,
        festival,
        language,
      });

      setMarketing(data.marketing);

      toast.success("Marketing Campaign Generated!");
    } catch (error) {
      console.error(error);

      toast.error("Generation Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">

      <MarketingForm onGenerate={handleGenerate} />

      {loading && (
        <div className="text-center text-2xl mt-8">
          🤖 FounderAI is creating your marketing campaign...
        </div>
      )}

      <MarketingResult marketing={marketing} />

    </div>
  );
}

export default MarketingPage;