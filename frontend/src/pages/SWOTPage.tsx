import { useState } from "react";
import { toast } from "react-toastify";

import SWOTForm from "../components/SWOT/SWOTForm";
import SWOTResult from "../components/SWOT/SWOTResult";

import { generateSWOT } from "../api/businessApi";

function SWOTPage() {
  const [swot, setSwot] = useState("");
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

      const data = await generateSWOT({
        businessName,
        businessType,
        location,
        budget,
        language,
      });

      setSwot(data.swot);

      toast.success("SWOT Analysis Generated!");
    } catch (error) {
      console.error(error);
      toast.error("Generation Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">

      <SWOTForm onGenerate={handleGenerate} />

      {loading && (
        <div className="text-center text-2xl mt-8">
          🤖 FounderAI is analyzing your business...
        </div>
      )}

      <SWOTResult swot={swot} />

    </div>
  );
}

export default SWOTPage;