type AnalyticsCardsProps = {
  budget: string;
};

function AnalyticsCards({ budget }: AnalyticsCardsProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
        <p className="text-gray-400">AI Score</p>
        <h1 className="text-4xl font-bold text-green-400 mt-2">
          92%
        </h1>
      </div>

      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
        <p className="text-gray-400">Success Rate</p>
        <h1 className="text-4xl font-bold text-blue-400 mt-2">
          87%
        </h1>
      </div>

      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
        <p className="text-gray-400">Investment</p>
        <h1 className="text-3xl font-bold text-yellow-400 mt-2">
          {budget}
        </h1>
      </div>

      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
        <p className="text-gray-400">Risk</p>
        <h1 className="text-4xl font-bold text-red-400 mt-2">
          Low
        </h1>
      </div>

    </div>
  );
}

export default AnalyticsCards;