const scriptURL = "YOUR_DEPLOYED_WEBAPP_URL"; // ← Ganti kemudian

async function fetchKelas() {
  const res = await fetch(`${scriptURL}?action=getKelas`);
  const data = await res.json();
  const select = document.getElementById("kelasSelect");
  data.kelas.forEach(k => {
    const opt = document.createElement("option");
    opt.value = k;
    opt.textContent = k;
    select.appendChild(opt);
  });
}
fetchKelas();
