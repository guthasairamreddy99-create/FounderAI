import { useState } from "react";

type Props = {
  onGenerate: (
    businessName: string,
    businessType: string,
    targetAudience: string,
    festival: string,
    language: string
  ) => void;
};

function MarketingForm({ onGenerate }: Props) {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [festival, setFestival] = useState("");
  const [language, setLanguage] = useState("English");

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">

      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        📣 AI Marketing Campaign Generator
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="text"
          placeholder="Business Name"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          className="border rounded-xl p-4"
        />

        <input
          type="text"
          placeholder="Business Type"
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          className="border rounded-xl p-4"
        />

        <input
          type="text"
          placeholder="Target Audience"
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}
          className="border rounded-xl p-4"
        />

        <input
          type="text"
          placeholder="Festival / Occasion"
          value={festival}
          onChange={(e) => setFestival(e.target.value)}
          className="border rounded-xl p-4"
        />

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border rounded-xl p-4"
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
            targetAudience,
            festival,
            language
          )
        }
        className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition"
      >
        📣 Generate Marketing Campaign
      </button>

    </div>
  );
}

export default MarketingForm;