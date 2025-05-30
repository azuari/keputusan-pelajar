const API_URL = "https://api.sheetbest.com/sheets/d4ef54af-bc86-46c4-878c-7888d075e9bf";

function loadData() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const table = document.getElementById("dataTable");
      table.innerHTML = "";

      // Header
      const header = table.insertRow();
      Object.keys(data[0]).forEach(key => {
        const cell = header.insertCell();
        cell.textContent = key;
      });

      // Data rows
      data.forEach(row => {
        const tr = table.insertRow();
        Object.values(row).forEach(val => {
          const td = tr.insertCell();
          td.textContent = val;
        });
      });
    })
    .catch(err => {
      console.error("Ralat:", err);
    });
}
