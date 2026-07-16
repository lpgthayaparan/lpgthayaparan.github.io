// Renders the publications list on publications.html from assets/data/publications.json,
// split into "Published" and "Submitted and Work in Progress" sections (matching the CV),
// with entries inside each section sorted by year (most recent first).
//
// To add a new publication: open assets/data/publications.json and copy/paste a new
// object into the array, set "category" to "Published" or "Submitted", and fill in the
// rest. It will automatically slot into the right section and year order. No need to
// touch this file.

(function () {
  var listEl = document.getElementById("pub-list");
  if (!listEl) return;

  var CATEGORY_ORDER = ["Published", "Submitted"];
  var CATEGORY_LABELS = {
    Published: "Published",
    Submitted: "Submitted and Work in Progress"
  };

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
    var byCategory = {};
    pubs.forEach(function (p) {
      var cat = p.category || "Published";
      if (!byCategory[cat]) byCategory[cat] = [];
      byCategory[cat].push(p);
    });

    var html = "";
    CATEGORY_ORDER.forEach(function (cat) {
      var entries = byCategory[cat];
      if (!entries || !entries.length) return;

      // Most recent year first; ties keep their original relative order.
      entries.sort(function (a, b) { return (b.year || 0) - (a.year || 0); });

      html += '<div class="pub-year">' + (CATEGORY_LABELS[cat] || cat) + "</div>";
      entries.forEach(function (p, i) {
        var titleHtml = p.link
          ? '<a href="' + p.link + '" target="_blank" rel="noopener">' + escapeHtml(p.title) + "</a>"
          : escapeHtml(p.title);

        var awardsHtml = "";
        if (p.awards && p.awards.length) {
          awardsHtml =
            '<ul class="pub-awards">' +
            p.awards.map(function (a) { return "<li>" + escapeHtml(a) + "</li>"; }).join("") +
            "</ul>";
        }

        html +=
          '<div class="pub-item">' +
            '<p class="pub-title">' + (i + 1) + ". " + titleHtml + "</p>" +
            '<p class="pub-authors">' + highlightMe(p.authors) + ", " + p.year + "</p>" +
            '<p class="pub-venue">' + escapeHtml(p.venue || "") + "</p>" +
            awardsHtml +
          "</div>";
      });
    });
    listEl.innerHTML = html;
  }

  function highlightMe(authors) {
    var safe = escapeHtml(authors || "");
    return safe.replace(/Thayaparan, L\.|Leann Thayaparan/g, function (m) {
      return '<span class="me">' + m + "</span>";
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
})();
