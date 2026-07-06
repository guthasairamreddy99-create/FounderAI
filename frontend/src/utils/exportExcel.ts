import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import type { Business } from "../types/business";

export function exportBusinessesToExcel(
  businesses: Business[]
) {
  const worksheet = XLSX.utils.json_to_sheet(
    businesses.map((b) => ({
      Name: b.name,
      Location: b.location,
      Budget: b.budget,
      Revenue: b.revenue,
      Customers: b.customers,
      Growth: b.growth,
      Status: b.status,
    }))
  );

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Businesses"
  );

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const blob = new Blob([excelBuffer], {
    type:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
  });

  saveAs(blob, "FounderAI_Businesses.xlsx");
}