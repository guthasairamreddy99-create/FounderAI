import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function generateReport(
  revenue: number,
  expenses: number,
  budget: number,
  score: number,
  analysis: any
) {
  const doc = new jsPDF();

  // Title
  doc.setFontSize(22);
  doc.setTextColor(41, 98, 255);
  doc.text("FounderAI Business Report", 20, 20);

  // Basic Info
  doc.setFontSize(13);
  doc.setTextColor(0, 0, 0);

  doc.text(`Revenue: ₹${revenue.toLocaleString()}`, 20, 40);
  doc.text(`Expenses: ₹${expenses.toLocaleString()}`, 20, 50);
  doc.text(`Budget: ₹${budget.toLocaleString()}`, 20, 60);
  doc.text(`Profit: ₹${(revenue - expenses).toLocaleString()}`, 20, 70);
  doc.text(`Health Score: ${score}/100`, 20, 80);

  autoTable(doc, {
    startY: 95,
    head: [["Category", "Details"]],
    body: [
      ["Strengths", analysis.strengths.join("\n")],
      ["Weaknesses", analysis.weaknesses.join("\n")],
      ["Risks", analysis.risks.join("\n")],
      ["Recommendations", analysis.recommendations.join("\n")],
    ],
  });

  doc.save("FounderAI_Report.pdf");
}