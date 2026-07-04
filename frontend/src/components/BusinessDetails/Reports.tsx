import jsPDF from "jspdf";

function Reports() {
  const downloadReport = () => {
    const doc = new jsPDF();

    doc.text("FounderAI Business Report", 20, 20);

    doc.save("FounderAI_Report.pdf");
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white">
        📄 Reports
      </h1>

      <button
        onClick={downloadReport}
        className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl"
      >
        Download PDF Report
      </button>
    </div>
  );
}

export default Reports;