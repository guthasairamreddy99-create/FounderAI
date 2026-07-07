import ReactMarkdown from "react-markdown";
import { jsPDF } from "jspdf";

type Props = {
  plan: string;
};

function BusinessPlanResult({ plan }: Props) {
  if (!plan) return null;

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("FounderAI Business Plan", 20, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    const lines = doc.splitTextToSize(plan, 170);

    doc.text(lines, 20, 35);

    doc.save("BusinessPlan.pdf");
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-8 mt-8 border border-slate-800">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-3xl font-bold text-white">
          📄 AI Generated Business Plan
        </h2>

        <button
          onClick={downloadPDF}
          className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl text-white font-semibold transition"
        >
          ⬇ Download PDF
        </button>

      </div>

      <div className="prose prose-invert max-w-none text-gray-300">
        <ReactMarkdown>{plan}</ReactMarkdown>
      </div>

    </div>
  );
}

export default BusinessPlanResult;