import { Link } from "react-router-dom";
import {
  FaPlus,
  FaFileAlt,
  FaRocket,
  FaChartPie,
  FaTrophy,
  FaBullhorn,
  FaRobot,
} from "react-icons/fa";

const actions = [
  {
    title: "New Business",
    icon: <FaPlus size={28} />,
    color: "bg-blue-600",
    link: "/business",
  },
  {
    title: "Business Plan",
    icon: <FaFileAlt size={28} />,
    color: "bg-green-600",
    link: "/business-plan",
  },
  {
    title: "Pitch Deck",
    icon: <FaRocket size={28} />,
    color: "bg-purple-600",
    link: "/pitch-deck",
  },
  {
    title: "SWOT",
    icon: <FaChartPie size={28} />,
    color: "bg-orange-600",
    link: "/swot",
  },
  {
    title: "Competitor",
    icon: <FaTrophy size={28} />,
    color: "bg-yellow-600",
    link: "/competitor",
  },
  {
    title: "Marketing",
    icon: <FaBullhorn size={28} />,
    color: "bg-pink-600",
    link: "/marketing-ai",
  },
  {
    title: "AI Hub",
    icon: <FaRobot size={28} />,
    color: "bg-indigo-600",
    link: "/ai-hub",
  },
];

function QuickActions() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6">
        ⚡ Quick Actions
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
        {actions.map((action) => (
          <Link
            key={action.title}
            to={action.link}
            className={`${action.color} rounded-2xl p-6 text-white text-center hover:scale-105 transition-transform shadow-lg`}
          >
            <div className="flex justify-center mb-4">
              {action.icon}
            </div>

            <p className="font-semibold">
              {action.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;