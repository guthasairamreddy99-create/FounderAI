import {
  FaChartBar,
  FaFilePdf,
  FaRobot,
  FaBullhorn,
} from "react-icons/fa";

const actions = [
  {
    title: "Analyze Budget",
    icon: <FaChartBar />,
    color: "bg-blue-600",
  },
  {
    title: "Export PDF",
    icon: <FaFilePdf />,
    color: "bg-green-600",
  },
  {
    title: "AI Mentor",
    icon: <FaRobot />,
    color: "bg-purple-600",
  },
  {
    title: "Marketing AI",
    icon: <FaBullhorn />,
    color: "bg-orange-600",
  },
];

function QuickActions() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <h2 className="text-2xl font-bold text-white mb-6">
        ⚡ Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <button
            key={action.title}
            className={`${action.color} rounded-xl p-6 hover:scale-105 transition`}
          >
            <div className="text-3xl mb-3 text-white">
              {action.icon}
            </div>

            <p className="text-white font-semibold">
              {action.title}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;