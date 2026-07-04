import { useState } from "react";
import { askAI } from "../../api/businessApi";

function Marketing() {
  const [idea, setIdea] = useState("");

  const generateIdea = async (type: string) => {
    const prompt = `Give professional ${type} marketing ideas for a small business.`;

    const reply = await askAI(prompt);

    setIdea(reply);
  };

  return (
    <div className="space-y-8">

      <h1 className="text-4xl font-bold text-white">
        📢 Marketing AI
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <button
          onClick={() => generateIdea("Instagram")}
          className="bg-pink-600 hover:bg-pink-700 rounded-xl p-6 text-xl font-bold"
        >
          📸 Instagram Campaign
        </button>

        <button
          onClick={() => generateIdea("Facebook")}
          className="bg-blue-600 hover:bg-blue-700 rounded-xl p-6 text-xl font-bold"
        >
          📘 Facebook Campaign
        </button>

        <button
          onClick={() => generateIdea("Google Ads")}
          className="bg-green-600 hover:bg-green-700 rounded-xl p-6 text-xl font-bold"
        >
          🔍 Google Ads
        </button>

        <button
          onClick={() => generateIdea("Email")}
          className="bg-orange-600 hover:bg-orange-700 rounded-xl p-6 text-xl font-bold"
        >
          ✉ Email Marketing
        </button>

      </div>

      <div className="bg-slate-900 rounded-2xl p-8 min-h-[300px]">

        <h2 className="text-2xl font-bold mb-6">
          AI Marketing Suggestions
        </h2>

        <div className="whitespace-pre-wrap text-gray-200">
          {idea || "Click any campaign button to generate marketing ideas."}
        </div>

      </div>

    </div>
  );
}

export default Marketing;