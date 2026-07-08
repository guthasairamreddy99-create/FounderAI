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

function BusinessPlanForm({ onGenerate }: Props) {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState(0);
  const [language, setLanguage] = useState("English");

  return (
    <div className="bg-slate-900 rounded-2xl p-6 space-y-4">

      <h2 className="text-2xl font-bold text-white">
        AI Business Plan Generator
      </h2>

      <input
        className="w-full p-3 rounded bg-slate-800 text-white"
        placeholder="Business Name"
        value={businessName}
        onChange={(e) => setBusinessName(e.target.value)}
      />

      <input
        className="w-full p-3 rounded bg-slate-800 text-white"
        placeholder="Business Type"
        value={businessType}
        onChange={(e) => setBusinessType(e.target.value)}
      />

      <input
        className="w-full p-3 rounded bg-slate-800 text-white"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <input
        type="number"
        className="w-full p-3 rounded bg-slate-800 text-white"
        placeholder="Budget"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
      />

      <div>
  <label className="block mb-2 font-semibold">
    Language
  </label>

  <select
    value={language}
    onChange={(e) => setLanguage(e.target.value)}
    className="w-full border rounded-xl p-3"
  >
    <option value="English">🇬🇧 English</option>
    <option value="తెలుగు">🇮🇳 తెలుగు</option>
    <option value="हिन्दी">🇮🇳 हिन्दी</option>
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
        className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl"
      >
        Generate Business Plan
      </button>

    </div>
  );
}

export default BusinessPlanForm;