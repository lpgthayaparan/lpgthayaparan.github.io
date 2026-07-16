# Leann Thayaparan — Personal Website

A clean, professional academic website. Plain HTML/CSS/JS — no build step, so it deploys
to GitHub Pages by just pushing files.

## Structure

```
index.html                     About / homepage
publications.html              Publications list (auto-rendered from JSON)
cv.html                        CV
assets/css/style.css           All styling
assets/js/publications.js      Renders publications.html from the JSON below
assets/data/publications.json  Publications data — edit this to add a paper
assets/images/                 Put your profile photo here
```

## Common updates

**Add a publication.** Open `assets/data/publications.json` and copy/paste one entry,
then edit the fields:

```json
{
  "year": 2024,
  "status": "Published",
  "authors": "Leann Thayaparan and Co-author Name",
  "title": "Paper Title",
  "venue": "Journal Name, volume(issue): pages",
  "link": "https://link-to-paper.com"
}
```

`status` can be `"Published"`, `"Working Paper"`, `"Under Review"`, or `"R&R"` — each gets
a colored badge automatically. Leave `"link"` as `""` if there isn't one yet. Save the
file and refresh the page — no other changes needed.

**Add your photo.** Save a square photo to `assets/images/profile.jpg`, then in
`index.html` find the placeholder `<div class="hero-photo placeholder">LT</div>` and
replace it with:
```html
<img class="hero-photo" src="assets/images/profile.jpg" alt="Leann Thayaparan">
```

**Edit the About text, Honors, or CV.** These are plain text inside `index.html` and
`cv.html` — open the file, find the section, and edit the text directly. Each entry is
a `<li>...</li>` line; copy an existing one to add a new item.

**Change colors.** Open `assets/css/style.css` and edit the values at the top under
`:root` (`--navy`, `--accent`, etc.).

## One item to double-check

The PNAS entry ("Evaluation of Individual and Ensemble Probabilistic Forecasts of
COVID-19 Mortality in the US") had a broken link on the old site — I left `link` blank
in `publications.json`. Add the correct DOI/URL when you have it.

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
