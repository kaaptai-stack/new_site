# TallyKhata Home Page — Local Copy

A faithful offline mirror of the TallyKhata home page, copied exactly as it is.

## Pages
- `index.html` — Bangla home page (copy of https://www.tallykhata.com/)
- `index-en.html` — English home page (copy of https://www.tallykhata.com/en/home-eng/)

## How to view
**Easiest:** double-click `start.bat` — it launches the server and opens the
page in your browser automatically.

**Manual:** from this folder, run a local web server and open the page:

```
"C:\Users\Asus\AppData\Local\Programs\Python\Python312\python.exe" -m http.server 8801
```
Then open http://localhost:8801/index.html

(Use the full path to `python.exe` above — typing just `python` may launch the
broken Microsoft Store stub on this machine.)

Opening `index.html` directly with `file://` also mostly works, but a local
server is recommended so all fonts/CSS load correctly.

## Structure
- `assets/` — all CSS, JS, images, and fonts, mirrored by original host:
  - `assets/www.tallykhata.com/...` — theme/plugin CSS, JS, uploaded images
  - `assets/fonts.googleapis.com/...` — Google Fonts stylesheets (rewritten to local)
  - `assets/fonts.gstatic.com/...` — Google Font files (woff2)
  - FontAwesome and Elementor icon fonts included
- Every absolute URL in the HTML/CSS was rewritten to a local relative path.
- Page navigation links (e.g. to other pages of the site) are left pointing at
  the live site, since only the home page was copied.

## Known caveats (these are issues on the original live site too)
- One image — `TallyKhata-Make-business-operation-easy-Mobile-23062024.png` —
  returns 404 on the live site, so it could not be downloaded.
- A few decorative fallback Bangla fonts (SutonnyMJ, KongshoMJ, Kohinoor) are
  hosted on `new.tallykhata.com` / `beta.tallykhata.com`, which no longer
  resolve. They are unused fallbacks; the primary fonts (SolaimanLipi, Poppins)
  are present and render correctly.
- Third-party analytics/tracking scripts (Google Tag Manager, etc.) are left as
  remote references and are inert offline.
