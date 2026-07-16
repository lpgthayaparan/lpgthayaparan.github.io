// Renders the publications list on publications.html from assets/data/publications.json.
// To add a new publication: open assets/data/publications.json and copy/paste a new
// object into the array at the top, then fill in the fields. No need to touch this file.

(function () {
  var listEl = document.getElementById("pub-list");
  if (!listEl) return;

  fetch("assets/data/publications.json")
    .then(function (res) {
      if (!res.ok) throw new Error("Could not load publications.json");
      return res.json();
    })
    .then(renderPublications)
    .catch(function (err) {
      listEl.textContent = "Publications could not be loaded (" + err.message + ").";
    });

  function renderPublications(pubs) {
    // Sort newest year first; preserve existing order within a year.
    var byYear = {};
    var years = [];
    pubs.forEach(function (p) {
      if (!byYear[p.year]) {
        byYear[p.year] = [];
        years.push(p.year);
      }
      byYear[p.year].push(p);
    });
    years.sort(function (a, b) { return b - a; });

    var html = "";
    years.forEach(function (year) {
      html += '<div class="pub-year">' + year + "</div>";
      byYear[year].forEach(function (p) {
        var badgeClass = (p.status || "").replace(/\s+/g, ".");
        var titleHtml = p.link
          ? '<a href="' + p.link + '" target="_blank" rel="noopener">' + escapeHtml(p.title) + "</a>"
          : escapeHtml(p.title);

        html +=
          '<div class="pub-item">' +
            '<p class="pub-title">' + titleHtml +
              (p.status ? '<span class="badge ' + badgeClass + '">' + escapeHtml(p.status) + "</span>" : "") +
            "</p>" +
            '<p class="pub-authors">' + highlightMe(p.authors) + "</p>" +
            '<p class="pub-venue">' + escapeHtml(p.venue || "") + "</p>" +
          "</div>";
      });
    });
    listEl.innerHTML = html;
  }

  function highlightMe(authors) {
    var safe = escapeHtml(authors || "");
    return safe.replace(/Leann Thayaparan/g, '<span class="me">Leann Thayaparan</span>');
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
})();
