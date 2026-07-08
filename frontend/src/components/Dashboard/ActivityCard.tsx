import {
  FaFileAlt,
  FaRocket,
  FaChartPie,
  FaBullhorn,
  FaTrophy,
} from "react-icons/fa";

const activities = [
  {
    icon: <FaFileAlt />,
    title: "Business Plan Generated",
    time: "2 minutes ago",
  },
  {
    icon: <FaRocket />,
    title: "Pitch Deck Created",
    time: "10 minutes ago",
  },
  {
    icon: <FaChartPie />,
    title: "SWOT Analysis Generated",
    time: "25 minutes ago",
  },
  {
    icon: <FaTrophy />,
    title: "Competitor Analysis Completed",
    time: "40 minutes ago",
  },
  {
    icon: <FaBullhorn />,
    title: "Marketing Campaign Created",
    time: "1 hour ago",
  },
];

function ActivityCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <h2 className="text-2xl font-bold mb-6">
        🕒 Recent AI Activity
      </h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b pb-3"
          >
            <div className="flex items-center gap-4">
              <div className="text-indigo-600 text-xl">
                {activity.icon}
              </div>

              <div>
                <p className="font-semibold">
                  {activity.title}
                </p>

                <p className="text-sm text-gray-500">
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

export default ActivityCard;