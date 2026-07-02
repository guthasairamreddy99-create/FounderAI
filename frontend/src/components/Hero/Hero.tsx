function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}

        <div>

          <p className="text-indigo-400 font-semibold mb-4">
            🚀 AI Powered Startup Platform
          </p>

          <h1 className="text-6xl font-bold text-white leading-tight">
            Turn Your Business Idea Into a Successful Company
          </h1>

          <p className="text-gray-400 text-xl mt-8 leading-9">
            FounderAI helps entrepreneurs generate business plans,
            budgets, interior designs, marketing strategies,
            branding and complete startup roadmaps using AI.
          </p>

          <div className="mt-10 flex gap-6">

            <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-xl text-white font-semibold">
              Start Free
            </button>

            <button className="border border-gray-700 px-8 py-4 rounded-xl text-white">
              Watch Demo
            </button>

          </div>

        </div>

        {/* Right Side */}

        <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800">

          <h2 className="text-white text-2xl font-bold">
            FounderAI Report
          </h2>

          <div className="mt-8 space-y-5">

            <div className="bg-slate-800 p-4 rounded-xl text-white">
              📍 Business Location
            </div>

            <div className="bg-slate-800 p-4 rounded-xl text-white">
              💰 Budget Estimation
            </div>

            <div className="bg-slate-800 p-4 rounded-xl text-white">
              🏢 Interior Design
            </div>

            <div className="bg-slate-800 p-4 rounded-xl text-white">
              📈 Marketing Strategy
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;