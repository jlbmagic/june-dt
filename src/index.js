// https://datatables.net/reference/option/
// https://datatables.net/examples/index

let table;
window.loadTable = (json) => {
  const obj = JSON.parse(json);
  const data = obj.data;
  const columnType = obj.columnType;

  const customerColumns = [
    { title: "Company", data: "fieldData.CompanyName" },
    { title: "City", data: "fieldData.City" },
    { title: "State", data: "fieldData.State" },
    { title: "Zip", data: "fieldData.Zip" },
  ];
  const admissionsColumns = [
    { title: "School", data: "fieldData.School" },
    { title: "Program", data: "fieldData.Program" },
    { title: "Grade", data: "fieldData.Grade" },
  ];

  const columns =
    columnType === "Customers" ? customerColumns : admissionsColumns;
  table = $("#dtable").DataTable({
    columns,
    data,
    scrollX: "100px",
    pageLength: 20,
  });
};

// add a row click to the table rows
