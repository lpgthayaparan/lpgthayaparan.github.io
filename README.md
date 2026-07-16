# Leann Thayaparan — Personal Website

A clean, professional academic website. Plain HTML/CSS/JS — no build step, so it deploys
to GitHub Pages by just pushing files.

## Structure

Site nav is Home / Research / Awards / CV:

```
index.html                     Home (bio, research interests)
publications.html              Research page (Published / Submitted & WIP, from JSON)
awards.html                    Honors & Awards
cv.html                        CV page — download button + embedded PDF viewer
assets/cv/CV.pdf               Your actual CV file, shown on the CV page
assets/css/style.css           All styling
assets/js/publications.js      Renders the Research page from the JSON below
assets/data/publications.json  Publications data — edit this to add a paper
assets/images/                 Put your profile photo here
```

Note: the Research page's file is still named `publications.html` and its script is
`publications.js` — only the nav label and on-page heading say "Research." Rename them
if you'd like the filenames to match; nothing else depends on it.

## Common updates

**Add a publication.** Open `assets/data/publications.json` and copy/paste one entry,
then edit the fields:

```json
{
  "category": "Published",
  "year": 2024,
  "authors": "Last, F., Thayaparan, L., and Co-author, X.",
  "title": "Paper Title",
  "venue": "Published at Journal Name",
  "link": "https://link-to-paper.com",
  "awards": []
}
```

`category` must be exactly `"Published"` or `"Submitted"` — the page automatically
splits entries into a "Published" section and a "Submitted and Work in Progress"
section (matching your CV), in the order they appear in the file within each category.
`awards` is optional — add short strings for any paper-specific honors and they'll show
as a small bulleted list under the entry, or leave it as `[]`. Leave `"link"` as `""` if
there isn't one yet. Save the file and refresh the page — no other changes needed.

**Add your photo.** Save a square photo to `assets/images/profile.jpg`, then in
`index.html` find the placeholder `<div class="hero-photo placeholder">LT</div>` and
replace it with:
```html
<img class="hero-photo" src="assets/images/profile.jpg" alt="Leann Thayaparan">
```

**Update your CV.** Replace `assets/cv/CV.pdf` with your latest CV, keeping the same
filename — the download button and embedded viewer on the CV page will pick it up
automatically, no HTML changes needed.

**Edit the About text or Awards.** These are plain text inside `index.html` and
`awards.html` — open the file, find the section, and edit the text directly. Each entry
is a `<li>...</li>` line; copy an existing one to add a new item.

**Change colors.** Open `assets/css/style.css` and edit the values at the top under
`:root` (`--navy`, `--accent`, etc.).

## A few items to double-check

Publications data now matches your July 2026 CV (4 published, 6 submitted/in progress).
A couple of things worth a glance:

- The PNAS entry ("Evaluation of Individual and Ensemble Probabilistic Forecasts of
  COVID-19 Mortality in the US") still has no link — add the DOI when you have it.
- The Bennouna et al. MSOM link points to the DOI for what was previously titled
  "COVID-19: Prediction, Prevalence, and the Operations of Vaccine Allocation" — your CV
  now lists it as "Machine Learning Ensemble Prevalence Predictions for COVID-19."
  Worth confirming it's the same DOI before publishing.
- The UMOTEM entry still links to the SSRN preprint — swap it for the journal link once
  it's out of major revision.

Awards page is synced to your July 2026 CV. The CV page now just shows/downloads the PDF
directly, so it's always exactly your CV — no separate content to keep in sync.

## Deploying to GitHub Pages

You already have `lpgthayaparan.github.io` — the easiest path is to replace its contents
with these files (or use a new repo if you'd rather keep the old one as a backup).

1. In the `lpgthayaparan.github.io` repo (or a new repo), delete the old files and copy
   in everything from this folder.
2. Commit and push to the `main` branch:
   ```
   git add .
   git commit -m "New site"
   git push
   ```
3. In the repo's Settings → Pages, make sure the source is set to the `main` branch,
   root folder. GitHub Pages serves plain HTML with no build step, so it will be live
   within a minute or two at the same URL.

## Testing locally before you push

From inside this folder, run:
```
python3 -m http.server 8000
```
then open `http://localhost:8000` in your browser. (Opening `publications.html` directly
as a file, without a server, will show "Loading publications…" forever — browsers block
JSON fetches from local files for security. A server or GitHub Pages both work fine.)
