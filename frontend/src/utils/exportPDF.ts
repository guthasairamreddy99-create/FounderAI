import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export async function exportDashboard() {
  const input = document.getElementById("dashboard");

  if (!input) return;

  const canvas = await html2canvas(input);

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");

  const width = 190;

  const height =
    (canvas.height * width) / canvas.width;

  pdf.addImage(
    imgData,
    "PNG",
    10,
    10,
    width,
    height
  );

  pdf.save("FounderAI_Report.pdf");
}