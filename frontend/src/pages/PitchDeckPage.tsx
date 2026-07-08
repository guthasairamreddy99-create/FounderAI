import { useState } from "react";
import { toast } from "react-toastify";

import PitchDeckForm from "../components/PitchDeck/PitchDeckForm";
import PitchDeckResult from "../components/PitchDeck/PitchDeckResult";

import { generatePitchDeck } from "../api/businessApi";

function PitchDeckPage() {
  const [deck, setDeck] = useState("");
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

      const data = await generatePitchDeck({
        businessName,
        businessType,
        location,
        budget,
        language,
      });

      setDeck(data.pitchDeck);

      toast.success("Pitch Deck Generated!");
    } catch (error) {
      console.error(error);

      toast.error("Generation Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">

      <PitchDeckForm onGenerate={handleGenerate} />

      {loading && (
        <div className="text-center text-white text-2xl mt-10">
          🤖 FounderAI is generating your pitch deck...
        </div>
      )}

      <PitchDeckResult deck={deck} />

    </div>
  );
}

export default PitchDeckPage;