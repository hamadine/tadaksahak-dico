<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Dictionnaire Tadaksahak</title>
  <link rel="icon" href="images/idaksahak_round.png" type="image/png" />
  <meta name="description" content="Dictionnaire Tadaksahak multilingue avec audio" />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 0;
      padding: 1rem;
      background-color: #fcebd5;
      color: #4b2e1f;
    }
    header, footer { text-align: center; padding: 1rem 0; }
    .lang-switch, .pagination, .search-bar { text-align: center; margin: 1rem 0; }
    .entry {
      background: #fff5e1;
      margin-bottom: 1.2rem;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 0 8px rgba(0,0,0,0.1);
    }
    audio { margin-top: 0.5rem; }
    button {
      margin: 0.2rem;
      padding: 0.5rem 1rem;
      background: #c75c24;
      border: none;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover { background: #a7491d; }
    .pagination button.active { background-color: #d9822b; }
  </style>
</head>
<body>
  <header>
    <h1>Dictionnaire Tadaksahak Multilingue</h1>
    <div class="lang-switch">
      <button onclick="setLang('fr')">FR</button>
      <button onclick="setLang('en')">EN</button>
      <button onclick="setLang('ar')">AR</button>
    </div>
    <div class="search-bar">
      <input type="text" id="searchInput" placeholder="Chercher un mot..." />
    </div>
  </header>

  <!-- BOUTON DE TRI API -->
  <div style="text-align:center; margin-bottom:1rem;">
    <button onclick="trierParPrononciation()">Trier par prononciation (API)</button>
  </div>

  <main id="dictionary"></main>
  <div class="pagination" id="pagination"></div>

  <footer>
    <p>&copy; 2025 • Projet Tadaksahak by Hamadine</p>
  </footer>

  <script src="data.js"></script>
  <script src="app.js"></script>
</body>
</html>
