import { useState } from "react";

type Props = {
  onGenerate: (
    businessName: string,
    businessType: string,
    location: string,
    budget: number,
    language: string
  ) => void;
};

function PitchDeckForm({ onGenerate }: Props) {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState(0);
  const [language, setLanguage] = useState("English");

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">

      <h2 className="text-3xl font-bold text-white mb-8">
        🚀 AI Pitch Deck Generator
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="text"
          placeholder="Business Name"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          className="bg-slate-800 rounded-xl p-4 text-white"
        />

        <input
          type="text"
          placeholder="Business Type"
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          className="bg-slate-800 rounded-xl p-4 text-white"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="bg-slate-800 rounded-xl p-4 text-white"
        />

        <input
          type="number"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="bg-slate-800 rounded-xl p-4 text-white"
        />

        <select
  value={language}
  onChange={(e) => setLanguage(e.target.value)}
  className="bg-white border border-gray-300 rounded-xl p-4 w-full"
>
  <option>English</option>
  <option>తెలుగు</option>
  <option>हिन्दी</option>
</select>
  
      </div>

      <button
        onClick={() =>
          onGenerate(
            businessName,
            businessType,
            location,
            budget,
            language
          )
        }
        className="mt-8 bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-xl text-white font-bold"
      >
        🚀 Generate Pitch Deck
      </button>

    </div>
  );
}

export default PitchDeckForm;