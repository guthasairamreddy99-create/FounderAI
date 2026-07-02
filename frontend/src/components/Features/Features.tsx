function Features() {
  return (
    <section className="py-24 px-8 bg-slate-900">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white">
          Everything You Need To Launch A Business
        </h2>

        <p className="text-center text-gray-400 mt-6 text-xl">
          FounderAI helps entrepreneurs from idea to execution.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          <div className="bg-slate-800 rounded-2xl p-8 hover:scale-105 transition">

            <div className="text-5xl">💡</div>

            <h3 className="text-white text-2xl font-bold mt-6">
              Business Plan
            </h3>

            <p className="text-gray-400 mt-4">
              Generate a complete business plan within minutes.
            </p>

          </div>

          <div className="bg-slate-800 rounded-2xl p-8 hover:scale-105 transition">

            <div className="text-5xl">💰</div>

            <h3 className="text-white text-2xl font-bold mt-6">
              Budget Planning
            </h3>

            <p className="text-gray-400 mt-4">
              Get detailed investment estimation from nail to machinery.
            </p>

          </div>

          <div className="bg-slate-800 rounded-2xl p-8 hover:scale-105 transition">

            <div className="text-5xl">🏢</div>

            <h3 className="text-white text-2xl font-bold mt-6">
              Interior Design
            </h3>

            <p className="text-gray-400 mt-4">
              AI generates beautiful interior and exterior concepts.
            </p>

          </div>

          <div className="bg-slate-800 rounded-2xl p-8 hover:scale-105 transition">

            <div className="text-5xl">📈</div>

            <h3 className="text-white text-2xl font-bold mt-6">
              Marketing
            </h3>

            <p className="text-gray-400 mt-4">
              Social media, posters and local marketing strategies.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Features;