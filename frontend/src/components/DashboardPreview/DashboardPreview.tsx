function DashboardPreview() {
  return (
    <section className="py-24 px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <p className="text-indigo-400 font-semibold">
            Dashboard Preview
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Everything In One Dashboard
          </h2>

          <p className="text-gray-400 mt-6 text-xl">
            Manage your startup from planning to launch.
          </p>
        </div>

        <div className="mt-16 bg-slate-900 rounded-3xl border border-slate-800 p-8">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-gray-400">Startup Score</h3>
              <p className="text-4xl font-bold text-green-400 mt-3">
                92%
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-gray-400">Estimated Budget</h3>
              <p className="text-4xl font-bold text-white mt-3">
                ₹3.5 Lakh
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-gray-400">Expected Profit</h3>
              <p className="text-4xl font-bold text-indigo-400 mt-3">
                ₹80K / Month
              </p>
            </div>

          </div>

          <div className="mt-10 bg-slate-800 rounded-xl p-6">

            <h3 className="text-2xl text-white font-bold">
              AI Suggestions
            </h3>

            <ul className="mt-6 space-y-4 text-gray-300">
              <li>✅ Choose a location with high foot traffic.</li>
              <li>✅ Keep your initial investment below ₹4 lakh.</li>
              <li>✅ Use Instagram and WhatsApp marketing.</li>
              <li>✅ Expected break-even: 6 months.</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default DashboardPreview;