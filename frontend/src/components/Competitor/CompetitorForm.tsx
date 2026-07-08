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

function CompetitorForm({ onGenerate }: Props) {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState(0);
  const [language, setLanguage] = useState("English");

  return (
    <div className="bg-white rounded-2xl border shadow-lg p-8">

      <h2 className="text-3xl font-bold mb-8">
        🏆 AI Competitor Analysis
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <input
          className="border rounded-xl p-4"
          placeholder="Business Name"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />

        <input
          className="border rounded-xl p-4"
          placeholder="Business Type"
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
        />

        <input
          className="border rounded-xl p-4"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          className="border rounded-xl p-4"
          type="number"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
        />

        <select
          className="border rounded-xl p-4"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
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
        🏆 Generate Analysis
      </button>

    </div>
  );
}

export default CompetitorForm;