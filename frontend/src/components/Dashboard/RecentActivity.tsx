type Activity = {
  id: number;
  title: string;
  time: string;
  color: string;
};

const activities: Activity[] = [
  {
    id: 1,
    title: "Business created",
    time: "2 min ago",
    color: "bg-green-500",
  },
  {
    id: 2,
    title: "Revenue updated",
    time: "15 min ago",
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "Budget changed",
    time: "1 hour ago",
    color: "bg-yellow-500",
  },
  {
    id: 4,
    title: "AI Mentor consulted",
    time: "Today",
    color: "bg-purple-500",
  },
];

function RecentActivity() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center gap-4"
          >
            <div
              className={`w-4 h-4 rounded-full ${activity.color}`}
            />

            <div>
              <p className="text-white font-medium">
                {activity.title}
              </p>

              <p className="text-gray-400 text-sm">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;