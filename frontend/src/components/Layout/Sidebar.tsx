import {
  FaHome,
  FaBriefcase,
  FaChartLine,
  FaUsers,
  FaBullhorn,
  FaRobot,
  FaFilePdf,
  FaCog,
} from "react-icons/fa";

const menu = [
  { icon: <FaHome />, label: "Dashboard" },
  { icon: <FaBriefcase />, label: "Business" },
  { icon: <FaChartLine />, label: "Financial Center" },
  { icon: <FaUsers />, label: "Customers" },
  { icon: <FaBullhorn />, label: "Marketing AI" },
  { icon: <FaRobot />, label: "AI Mentor" },
  { icon: <FaFilePdf />, label: "Reports" },
  { icon: <FaCog />, label: "Settings" },
];

function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-950 border-r border-slate-800 flex flex-col">

      {/* Logo */}
      <div className="p-6">
        <h1 className="text-3xl font-bold text-white">
          🚀 FounderAI
        </h1>
      </div>

      {/* Menu */}
      <div className="flex-1 px-4 space-y-2">

        {menu.map((item, index) => (
          <button
            key={index}
            className="
              flex
              items-center
              gap-4
              w-full
              p-4
              rounded-xl
              text-gray-300
              hover:bg-indigo-600
              hover:text-white
              transition-all
              duration-300
            "
          >
            <span className="text-lg">
              {item.icon}
            </span>

            <span className="font-medium">
              {item.label}
            </span>
          </button>
        ))}

      </div>

      {/* User */}
      <div className="border-t border-slate-800 p-6">

        <p className="text-gray-400 text-sm">
          Welcome back 👋
        </p>

        <h2 className="text-white font-bold text-lg mt-2">
          Sai
        </h2>

        <button className="mt-5 w-full bg-red-600 hover:bg-red-700 transition rounded-xl py-3 text-white font-semibold">
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;