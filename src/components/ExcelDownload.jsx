import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

export default function downloadExcel(data) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Sheet1");

  // Add headers
  const headers = [
    "Child Name",
    "Address",
    "Phone 1",
    "Phone 2",
    "Phone 3",
    "GPS",
    "Marks",
    "Birthdate",
  ];
  worksheet.addRow(headers);

  // Add data rows
  data.forEach(
    ({ childName, address, phone1, phone2, phone3, gps, marks, birthdate }) => {
      worksheet.addRow([
        childName,
        address,
        phone1,
        phone2,
        phone3,
        gps,
        marks,
        birthdate,
      ]);
    }
  );

  // Generate Excel file
  workbook.xlsx.writeBuffer().then((buffer) => {
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "table_data.xlsx");
  });
}
