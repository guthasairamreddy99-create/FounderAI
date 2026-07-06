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

import { NavLink } from "react-router-dom";

const menu = [
  {
    icon: <FaHome />,
    label: "Dashboard",
    path: "/",
  },
  {
    icon: <FaBriefcase />,
    label: "Business",
    path: "/business",
  },
  {
    icon: <FaChartLine />,
    label: "Financial Center",
    path: "/financial",
  },
  {
    icon: <FaUsers />,
    label: "Customers",
    path: "/customers",
  },
  {
    icon: <FaBullhorn />,
    label: "Marketing AI",
    path: "/marketing",
  },
  {
    icon: <FaRobot />,
    label: "AI Mentor",
    path: "/mentor",
  },
  {
    icon: <FaFilePdf />,
    label: "Reports",
    path: "/reports",
  },
  {
    icon: <FaCog />,
    label: "Settings",
    path: "/settings",
  },
];

function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-950 border-r border-slate-800 flex flex-col">

      <div className="p-6">
        <h1 className="text-3xl font-bold text-white">
          🚀 FounderAI
        </h1>
      </div>

      <div className="flex-1 px-4 space-y-2">

        {menu.map((item) => (

          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 w-full p-4 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "text-gray-300 hover:bg-indigo-600 hover:text-white"
              }`
            }
          >
            <span className="text-lg">
              {item.icon}
            </span>

            <span className="font-medium">
              {item.label}
            </span>

          </NavLink>

        ))}

      </div>

      <div className="border-t border-slate-800 p-6">

        <p className="text-gray-400 text-sm">
          Welcome back 👋
        </p>

        <h2 className="text-white font-bold text-lg mt-2">
          Sai
        </h2>

        <button className="mt-5 w-full bg-red-600 hover:bg-red-700 rounded-xl py-3 text-white font-semibold">
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;