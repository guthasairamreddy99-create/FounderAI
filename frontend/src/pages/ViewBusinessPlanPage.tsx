import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { jsPDF } from "jspdf";

function ViewBusinessPlanPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const plan = location.state;

  if (!plan) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-slate-950 text-white">
        <h1 className="text-3xl font-bold mb-4">
          Business Plan Not Found
        </h1>

        <button
          onClick={() => navigate("/my-plans")}
          className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl"
        >
          Back to My Plans
        </button>
      </div>
    );
  }

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text(plan.businessName, 20, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    const lines = doc.splitTextToSize(plan.plan, 170);

    doc.text(lines, 20, 35);

    doc.save(`${plan.businessName}.pdf`);
  };

  return (
    <div className="max-w-6xl mx-auto p-8">

      <div className="flex justify-between items-center mb-8">

        <button
          onClick={() => navigate("/my-plans")}
          className="bg-slate-700 hover:bg-slate-600 px-5 py-3 rounded-xl text-white"
        >
          ← Back
        </button>

        <button
          onClick={downloadPDF}
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-white font-semibold"
        >
          ⬇ Download PDF
        </button>

      </div>

      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">

        <h1 className="text-4xl font-bold text-white mb-2">
          {plan.businessName}
        </h1>

        <p className="text-gray-400 mb-8">
          📍 {plan.location} • 🏭 {plan.businessType}
        </p>

        <div className="prose prose-invert max-w-none">
          <ReactMarkdown>
            {plan.plan}
          </ReactMarkdown>
        </div>

      </div>

    </div>
  );
}

export default ViewBusinessPlanPage;