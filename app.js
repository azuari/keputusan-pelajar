const scriptURL = "https://script.google.com/macros/s/AKfycbzC2A7OkEq6b1q9Fx10ObFZejhyGD3HF8FWdFRDZc8hgKdRWGFFul3YhbO3olWDjcDQ/exec"; // ganti dengan URL anda

document.addEventListener("DOMContentLoaded", () => {
  const kelasSelect = document.getElementById("kelasSelect");
  const pelajarData = document.getElementById("pelajarData");

  fetch(scriptURL)
    .then(res => res.json())
    .then(data => {
      const kodSet = [...new Set(data.map(item => item["KOD KELAS"]))];
      kodSet.sort().forEach(kod => {
        const option = document.createElement("option");
        option.value = kod;
        option.textContent = kod;
        kelasSelect.appendChild(option);
      });

      kelasSelect.addEventListener("change", () => {
        const kod = kelasSelect.value;
        const filtered = data.filter(item => item["KOD KELAS"] === kod);

        let html = `<h3>Senarai Pelajar untuk ${kod}</h3><ul>`;
        filtered.forEach(item => {
          html += `<li>${item.NAMA}</li>`;
        });
        html += `</ul>`;
        pelajarData.innerHTML = html;
      });
    })
    .catch(err => {
      pelajarData.innerHTML = "Gagal mendapatkan data.";
      console.error(err);
    });
});

