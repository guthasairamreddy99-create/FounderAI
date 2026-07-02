function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 h-screen p-6 border-r border-slate-800">

      <h1 className="text-3xl font-bold text-white">
        FounderAI 🚀
      </h1>

      <div className="mt-12 space-y-5">

        <button className="text-gray-300 hover:text-white block">
          Dashboard
        </button>

        <button className="text-gray-300 hover:text-white block">
          My Businesses
        </button>

        <button className="text-gray-300 hover:text-white block">
          Reports
        </button>

        <button className="text-gray-300 hover:text-white block">
          Profile
        </button>

        <button className="text-red-400 hover:text-red-300 block">
          Logout
        </button>

      </div>

    </div>
  );
}

export default Sidebar;