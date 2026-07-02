type DashboardHeaderProps = {
  onNewBusiness: () => void;
};

function DashboardHeader({ onNewBusiness }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">

      <div>
        <h1 className="text-4xl font-bold text-white">
          👋 Welcome back, Sai
        </h1>

        <p className="text-gray-400 mt-3 text-lg">
          Build, manage and grow your businesses with AI.
        </p>
      </div>

      <button
        onClick={onNewBusiness}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition px-8 py-4 rounded-xl text-white font-semibold shadow-lg"
      >
        🚀 New Business
      </button>

    </div>
  );
}

export default DashboardHeader;