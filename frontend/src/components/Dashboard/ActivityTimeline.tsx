import {
  FaCheckCircle,
  FaChartLine,
  FaFilePdf,
  FaRobot,
} from "react-icons/fa";

const activities = [
  {
    icon: <FaCheckCircle />,
    title: "Business Created",
    time: "Today",
    color: "text-green-400",
  },
  {
    icon: <FaChartLine />,
    title: "Budget Analysis Completed",
    time: "2 mins ago",
    color: "text-blue-400",
  },
  {
    icon: <FaRobot />,
    title: "AI Generated Business Insights",
    time: "Just now",
    color: "text-purple-400",
  },
  {
    icon: <FaFilePdf />,
    title: "PDF Report Ready",
    time: "Available",
    color: "text-red-400",
  },
];

function ActivityTimeline() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <h2 className="text-2xl font-bold text-white mb-6">
        🕒 Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-slate-800 pb-4"
          >
            <div className="flex items-center gap-4">
              <div className={`text-2xl ${activity.color}`}>
                {activity.icon}
              </div>

              <div>
                <h3 className="text-white font-semibold">
                  {activity.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {activity.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityTimeline;