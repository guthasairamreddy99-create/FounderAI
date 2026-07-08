import {
  FaBell,
  FaSearch,
  FaUserCircle,
  FaCog,
} from "react-icons/fa";

function Topbar() {
  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-50">

      {/* Search */}
      <div className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-3 w-[400px]">

        <FaSearch className="text-gray-400" />

        <input
          type="text"
          placeholder="Search businesses..."
          className="bg-transparent outline-none text-gray-900 flex-1"
        />

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        <button className="hover:text-cyan-400 transition">
          <FaBell size={22} />
        </button>

        <button className="hover:text-cyan-400 transition">
          <FaCog size={22} />
        </button>

        <div className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-2">

          <FaUserCircle size={40} />

          <div>
            <p className="font-bold text-white">
              Sai
            </p>

            <p className="text-gray-400 text-sm">
              Founder
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;