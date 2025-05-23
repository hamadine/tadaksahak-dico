// docs/app.js

let currentLang = 'fr';
let currentPage = 1;
const itemsPerPage = 5;

// Fonction de changement de langue
function setLang(lang) {
  currentLang = lang;
  currentPage = 1;
  render();
}

// Fonction de tri alphabétique selon la prononciation
function trierParPrononciation() {
  data.sort((a, b) => a.prononciation.localeCompare(b.prononciation));
  currentPage = 1;
  render();
}

// Fonction de filtrage selon le mot recherché
function searchEntries(entries, term) {
  const lower = term.toLowerCase();
  return entries.filter(e =>
    e.mot.toLowerCase().includes(lower) ||
    e.prononciation.toLowerCase().includes(lower) ||
    e.traductions[currentLang]?.toLowerCase().includes(lower)
  );
}

// Fonction de génération HTML d’une entrée
function createEntryHTML(entry) {
  return `
    <div class="entry">
      <h2>${entry.mot} (${entry.prononciation})</h2>
      <p><strong>${entry.categorie}</strong> – ${entry.traductions[currentLang] || ''}</p>
      <p><em>${entry.definition}</em></p>
      <p>${entry.exemple[currentLang]}</p>
      <p><small>${entry.etymologie}</small></p>
      <audio controls src="${entry.audio}"></audio>
    </div>
  `;
}

// Rendu principal
function render() {
  const searchValue = document.getElementById('searchInput').value.trim();
  const filteredData = searchEntries(data, searchValue);
  const start = (currentPage - 1) * itemsPerPage;
  const paginated = filteredData.slice(start, start + itemsPerPage);

  const dictionary = document.getElementById('dictionary');
  dictionary.innerHTML = paginated.map(createEntryHTML).join('');

  renderPagination(filteredData.length);
}

// Pagination dynamique
function renderPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    if (i === currentPage) btn.classList.add('active');
    btn.onclick = () => {
      currentPage = i;
      render();
    };
    pagination.appendChild(btn);
  }
}

// Initialisation
document.getElementById('searchInput').addEventListener('input', () => {
  currentPage = 1;
  render();
});

// Lancer au chargement
document.addEventListener('DOMContentLoaded', render);
