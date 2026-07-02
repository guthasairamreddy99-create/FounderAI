import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

type Props = {
  revenue: number;
  expenses: number;
  budget: number;
  analysis: any;
};

function ExportReport({
  revenue,
  expenses,
  budget,
  analysis,
}: Props) {
  const exportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("FounderAI Business Report", 20, 20);

    doc.setFontSize(12);

    doc.text(`Revenue: ₹${revenue}`, 20, 40);
    doc.text(`Expenses: ₹${expenses}`, 20, 50);
    doc.text(`Budget: ₹${budget}`, 20, 60);
    doc.text(`Profit: ₹${revenue - expenses}`, 20, 70);

    doc.text(`Health Score: ${analysis.score}/100`, 20, 85);

    autoTable(doc, {
      startY: 100,
      head: [["Category", "Details"]],
      body: [
        ["Strengths", analysis.strengths.join("\n")],
        ["Weaknesses", analysis.weaknesses.join("\n")],
        ["Risks", analysis.risks.join("\n")],
        ["Recommendations", analysis.recommendations.join("\n")],
      ],
    });

    doc.save("FounderAI_Report.pdf");
  };

  return (
    <button
      onClick={exportPDF}
      className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-white font-bold"
    >
      📄 Download PDF Report
    </button>
  );
}

export default ExportReport;