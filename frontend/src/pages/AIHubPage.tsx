import { Link } from "react-router-dom";

const tools = [
  {
    title: "Business Plan",
    icon: "📄",
    description: "Generate a complete AI business plan.",
    link: "/business-plan",
  },
  {
    title: "Pitch Deck",
    icon: "🚀",
    description: "Create an investor-ready pitch deck.",
    link: "/pitch-deck",
  },
  {
    title: "SWOT Analysis",
    icon: "📊",
    description: "Analyze strengths and weaknesses.",
    link: "/swot",
  },
  {
    title: "Competitor Analysis",
    icon: "🏆",
    description: "Understand your competitors.",
    link: "/competitor",
  },
  {
    title: "Marketing AI",
    icon: "📣",
    description: "Generate marketing campaigns.",
    link: "/marketing-ai",
  },
];

function AIHubPage() {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-2">
        🤖 FounderAI Hub
      </h1>

      <p className="text-gray-500 mb-10">
        All your AI-powered business tools in one place.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <div
            key={tool.title}
            className="bg-white rounded-2xl border shadow-lg p-8 hover:shadow-xl transition"
          >
            <div className="text-5xl mb-4">{tool.icon}</div>

            <h2 className="text-2xl font-bold mb-3">
              {tool.title}
            </h2>

            <p className="text-gray-600 mb-6">
              {tool.description}
            </p>

            <Link
              to={tool.link}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl inline-block"
            >
              Open Tool
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIHubPage;