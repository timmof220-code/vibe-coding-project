/* Общая навигация, тосты, утилиты. Прототип ЛК Ventra GO! */

const NAV = [
  { href: "index.html",       ic: "▦", label: "Дашборд" },
  { group: "Вакансии" },
  { href: "vacancies.html",   ic: "📋", label: "Все вакансии" },
  { href: "vacancy-new.html", ic: "➕", label: "Создать / импорт" },
  { href: "templates.html",   ic: "🗂", label: "Шаблоны" },
  { group: "Отклики" },
  { href: "responses.html",   ic: "✉", label: "Отклики" },
  { href: "map.html",         ic: "📍", label: "Поиск рядом с точкой" },
];

function renderShell(active) {
  const items = NAV.map(n => {
    if (n.group) return `<div class="group">${n.group}</div>`;
    const cls = n.href === active ? "active" : "";
    return `<a class="${cls}" href="${n.href}"><span class="ic">${n.ic}</span>${n.label}</a>`;
  }).join("");
  return `
  <aside class="sidebar">
    <div class="brand"><div class="logo">V</div><div><b>Ventra</b> <span>GO!</span></div></div>
    <nav class="nav">${items}</nav>
    <div class="foot">
      <div class="avatar">ПК</div>
      <div class="meta"><b>Перекрёсток</b><span>Клиент · Маркет вакансий</span></div>
    </div>
  </aside>`;
}

function mountShell(active) {
  document.getElementById("shell").innerHTML = renderShell(active);
}

let _toastT;
function toast(msg) {
  let t = document.querySelector(".toast");
  if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add("show");
  clearTimeout(_toastT); _toastT = setTimeout(() => t.classList.remove("show"), 2600);
}

// Экспорт в CSV (Excel открывает) — для откликов и кандидатов
function exportCSV(filename, rows, headers) {
  const esc = v => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const head = headers.map(h => esc(h.label)).join(";");
  const body = rows.map(r => headers.map(h => esc(h.get(r))).join(";")).join("\n");
  const csv = "﻿" + head + "\n" + body; // BOM для кириллицы в Excel
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = filename; a.click();
  toast(`Выгружено: ${filename} (${rows.length} строк)`);
}

function fillSelect(sel, items, { all = null } = {}) {
  if (all) sel.insertAdjacentHTML("beforeend", `<option value="">${all}</option>`);
  items.forEach(i => sel.insertAdjacentHTML("beforeend", `<option>${i}</option>`));
}

// Расстояние Haversine (км) — для геопоиска кандидатов
function distanceKm(a, b) {
  const R = 6371, toR = d => d * Math.PI / 180;
  const dLat = toR(b.lat - a.lat), dLng = toR(b.lng - a.lng);
  const s = Math.sin(dLat/2)**2 + Math.cos(toR(a.lat)) * Math.cos(toR(b.lat)) * Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1-s));
}
