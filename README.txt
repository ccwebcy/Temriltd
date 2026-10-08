AURELIA LUXURY WEBSITE TEMPLATE

Files:
- index.html    Home
- history.html  History
- about.html    About
- gallery.html  Gallery
- assets/css/style.css
- assets/js/main.js

Open index.html in a browser to preview.

CUSTOMIZATION:
1. Replace "AURELIA" and the A logo in each HTML file.
2. Change colors/fonts at the top of style.css under :root.
3. Replace the Unsplash placeholder image URLs with your own images.
4. Replace the sample text with the company's real content.
5. The language button is currently a front-end visual toggle. For a real bilingual site,
   create /el/ pages or connect it to your translation/CMS system.
6. Responsive breakpoints are at 900px (tablet) and 600px (mobile).

The template uses no framework. It is plain HTML, CSS and JavaScript.


LANGUAGE / GEOLOCATION
-----------------------
The site now automatically selects Greek for visitors detected in Cyprus (CY) or Greece (GR), and English elsewhere. It uses the Geo-IP endpoint https://ipapi.co/json/. If the service is unavailable, the browser language is used as a fallback.

Manual language selection is remembered in localStorage, so a visitor's Greek/English choice overrides automatic detection on future visits.


Language detection: Cyprus (CY) and Greece (GR) automatically use Greek. Other countries use English. The language button creates a manual preference stored in the browser. To test automatic detection after a previous manual choice, clear site data/localStorage for the site.

V3 FIX: Fixed scroll-reveal class mismatch so main page text is visible. The JS adds .is-visible and CSS now uses .reveal.is-visible.


V4 FIXES
--------
- Fixed the menu overlay by toggling the CSS .site-menu.open state.
- Fixed the hamburger animation by toggling .menu-toggle.open.
- Menu links close the overlay after navigation, and Escape closes the menu.
- Uses a fresh manual-language storage key so old V2/V3 test preferences do not block automatic detection.
- Manual Greek/English choice is remembered.
- Cyprus (CY) and Greece (GR) automatically use Greek; other countries use English.
- Browser language is only the fallback if Geo-IP is unavailable.
- Added the missing Greek translation for the home-page scroll indicator.
- Menu labels use stable data-i18n elements.


LANGUAGE DETECTION UPDATE
- Geo-IP is checked on the first visit using multiple providers.
- Cyprus (CY) and Greece (GR) automatically use Greek.
- The result is cached so navigation between pages does not re-run translation.
- Manual language selection is remembered and overrides Geo-IP.
- If Geo-IP providers are unavailable, the browser language is used as fallback.
