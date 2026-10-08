/* Aurelia — interactions + automatic Greek/English localization */
(() => {
  const MANUAL_KEY = 'aurelia-language-manual-v4';
  const GEO_LANGUAGE_KEY = 'aurelia-language-geo-v2';
  const GEO_ENDPOINTS = ['https://ipapi.co/json/', 'https://ipwho.is/'];

  function readManualLanguage() {
    try {
      const value = localStorage.getItem(MANUAL_KEY);
      return value === 'el' || value === 'en' ? value : null;
    } catch (_) {
      return null;
    }
  }

  function writeManualLanguage(lang) {
    try { localStorage.setItem(MANUAL_KEY, lang); } catch (_) {}
  }

  function readGeoLanguage() {
    try {
      const value = localStorage.getItem(GEO_LANGUAGE_KEY);
      return value === 'el' || value === 'en' ? value : null;
    } catch (_) {
      return null;
    }
  }

  function writeGeoLanguage(lang) {
    try { localStorage.setItem(GEO_LANGUAGE_KEY, lang); } catch (_) {}
  }

  const translations = {
    en: {
      menuEyebrow:'Explore Aurelia', home:'Home', history:'History', about:'About', gallery:'Gallery', menu:'MENU',
      quietlyExtraordinary:'Quietly extraordinary.', languageFooter:'GREEK / ENGLISH', footerTagline:'Designed for timeless digital experiences',
      backTop:'↑ BACK TO TOP', copyright:'© 2026 Aurelia', email:'hello@example.com',
      homeEyebrow:'EST. 1987 · A STORY OF TIME', homeTitle:'Quietly<br><i>extraordinary.</i>',
      homeCopy:'A modern expression of heritage, craftsmanship and timeless detail.', discoverStory:'Discover the story <span>↗</span>',
      philosophyLabel:'01 — PHILOSOPHY', philosophyTitle:'Elegance is not<br><i>loud.</i>',
      philosophyCopy:'It lives in proportion, intention and the details that remain long after the first impression.',
      approachEyebrow:'THE AURELIA APPROACH', approachTitle:'Made with<br><i>intention.</i>',
      approachCopy:'Replace this image and copy with your own company story, product or service.', readHistory:'Read our history <span>↗</span>',
      quote:'“The most enduring things are created without the need to announce themselves.”', quoteCredit:'— AURELIA PRINCIPLE', scrollExplore:' SCROLL TO EXPLORE',
      historyEyebrow:'CHAPTER TWO', historyTitle:'Our<br><i>history.</i>', historyCopy:'A legacy shaped one deliberate decision at a time.', historyPeriod:'1987 — TODAY',
      historySectionTitle:'A story measured<br>in <i>moments.</i>', historySectionCopy:"Use this page to present the company's history, milestones and evolution.",
      beginning:'The beginning', beginningCopy:'Aurelia opens its first studio, establishing a philosophy centered on quality and restraint.',
      newChapter:'A new chapter', newChapterCopy:'A new generation expands the vision while preserving the original character.',
      beyondBorders:'Beyond borders', beyondBordersCopy:'The brand enters new markets and brings its distinctive approach to a wider audience.',
      stillEvolving:'Still evolving', stillEvolvingCopy:'Today, heritage and contemporary design meet in every experience we create.',
      aboutEyebrow:'WHO WE ARE', aboutTitle:'Less,<br><i>but better.</i>', aboutCopy:'A small team with a large respect for craft, people and meaningful details.',
      valuesLabel:'02 — VALUES', valuesTitle:'Built around<br><i>three ideas.</i>', craft:'Craft', craftCopy:'Thoughtful work, carefully considered and built to last.',
      clarity:'Clarity', clarityCopy:'Simple choices, precise execution and a clear point of view.', character:'Character', characterCopy:'Distinctive details that make every experience feel personal.',
      galleryEyebrow:'SELECTED WORK', galleryTitle:'The<br><i>gallery.</i>', galleryCopy:'A visual collection of moments, spaces and details.',
      atmosphere:'01 / Atmosphere', detail:'02 / Detail', form:'03 / Form', material:'04 / Material',
      pageTitle:'Aurelia — Home', switchLanguage:'Switch language', brandHome:'Aurelia home'
    },
    el: {
      menuEyebrow:'Εξερευνήστε την Aurelia', home:'Αρχική', history:'Ιστορία', about:'Σχετικά', gallery:'Συλλογή', menu:'ΜΕΝΟΥ',
      quietlyExtraordinary:'Αθόρυβα εξαιρετική.', languageFooter:'ΕΛΛΗΝΙΚΑ / ΑΓΓΛΙΚΑ', footerTagline:'Σχεδιασμένο για διαχρονικές ψηφιακές εμπειρίες',
      backTop:'↑ ΕΠΙΣΤΡΟΦΗ ΣΤΗΝ ΚΟΡΥΦΗ', copyright:'© 2026 Aurelia', email:'hello@example.com',
      homeEyebrow:'ΙΔΡΥΘΗΚΕ ΤΟ 1987 · ΜΙΑ ΙΣΤΟΡΙΑ ΤΟΥ ΧΡΟΝΟΥ', homeTitle:'Ήσυχα<br><i>εξαιρετική.</i>',
      homeCopy:'Μια σύγχρονη έκφραση κληρονομιάς, δεξιοτεχνίας και διαχρονικής λεπτομέρειας.', discoverStory:'Ανακαλύψτε την ιστορία <span>↗</span>',
      philosophyLabel:'01 — ΦΙΛΟΣΟΦΙΑ', philosophyTitle:'Η κομψότητα δεν είναι<br><i>θορυβώδης.</i>',
      philosophyCopy:'Ζει στην αναλογία, την πρόθεση και στις λεπτομέρειες που παραμένουν πολύ μετά την πρώτη εντύπωση.',
      approachEyebrow:'Η ΠΡΟΣΕΓΓΙΣΗ ΤΗΣ AURELIA', approachTitle:'Δημιουργημένο με<br><i>πρόθεση.</i>',
      approachCopy:'Αντικαταστήστε αυτή την εικόνα και το κείμενο με τη δική σας εταιρική ιστορία, προϊόν ή υπηρεσία.', readHistory:'Διαβάστε την ιστορία μας <span>↗</span>',
      quote:'«Τα πιο διαχρονικά πράγματα δημιουργούνται χωρίς την ανάγκη να διακηρύξουν την παρουσία τους.»', quoteCredit:'— ΑΡΧΗ ΤΗΣ AURELIA', scrollExplore:' ΚΑΝΤΕ ΚΥΛΙΣΗ ΓΙΑ ΕΞΕΡΕΥΝΗΣΗ',
      historyEyebrow:'ΚΕΦΑΛΑΙΟ ΔΕΥΤΕΡΟ', historyTitle:'Η<br><i>ιστορία μας.</i>', historyCopy:'Μια κληρονομιά διαμορφωμένη από μία συνειδητή απόφαση κάθε φορά.', historyPeriod:'1987 — ΣΗΜΕΡΑ',
      historySectionTitle:'Μια ιστορία μετρημένη<br>σε <i>στιγμές.</i>', historySectionCopy:'Χρησιμοποιήστε αυτή τη σελίδα για να παρουσιάσετε την ιστορία, τα ορόσημα και την εξέλιξη της εταιρείας.',
      beginning:'Η αρχή', beginningCopy:'Η Aurelia ανοίγει το πρώτο της στούντιο, καθιερώνοντας μια φιλοσοφία που βασίζεται στην ποιότητα και τη λιτότητα.',
      newChapter:'Ένα νέο κεφάλαιο', newChapterCopy:'Μια νέα γενιά διευρύνει το όραμα, διατηρώντας παράλληλα τον αρχικό χαρακτήρα.',
      beyondBorders:'Πέρα από τα σύνορα', beyondBordersCopy:'Το brand εισέρχεται σε νέες αγορές και φέρνει τη χαρακτηριστική του προσέγγιση σε ένα ευρύτερο κοινό.',
      stillEvolving:'Συνεχίζουμε να εξελισσόμαστε', stillEvolvingCopy:'Σήμερα, η κληρονομιά και ο σύγχρονος σχεδιασμός συναντώνται σε κάθε εμπειρία που δημιουργούμε.',
      aboutEyebrow:'ΠΟΙΟΙ ΕΙΜΑΣΤΕ', aboutTitle:'Λιγότερα,<br><i>αλλά καλύτερα.</i>', aboutCopy:'Μια μικρή ομάδα με μεγάλο σεβασμό στη δεξιοτεχνία, τους ανθρώπους και τις ουσιαστικές λεπτομέρειες.',
      valuesLabel:'02 — ΑΞΙΕΣ', valuesTitle:'Χτισμένο γύρω από<br><i>τρεις ιδέες.</i>', craft:'Δεξιοτεχνία', craftCopy:'Μελετημένη εργασία, προσεκτικά σχεδιασμένη και φτιαγμένη για να διαρκεί.',
      clarity:'Σαφήνεια', clarityCopy:'Απλές επιλογές, ακριβής εκτέλεση και ξεκάθαρη άποψη.', character:'Χαρακτήρας', characterCopy:'Ξεχωριστές λεπτομέρειες που κάνουν κάθε εμπειρία να μοιάζει προσωπική.',
      galleryEyebrow:'ΕΠΙΛΕΓΜΕΝΟ ΕΡΓΟ', galleryTitle:'Η<br><i>συλλογή.</i>', galleryCopy:'Μια οπτική συλλογή από στιγμές, χώρους και λεπτομέρειες.',
      atmosphere:'01 / Ατμόσφαιρα', detail:'02 / Λεπτομέρεια', form:'03 / Μορφή', material:'04 / Υλικό',
      pageTitle:'Aurelia — Αρχική', switchLanguage:'Αλλαγή γλώσσας', brandHome:'Αρχική Aurelia'
    }
  };

  const pageTitles = {
    'index.html': {en:'Aurelia — Home', el:'Aurelia — Αρχική'},
    'history.html': {en:'Aurelia — History', el:'Aurelia — Ιστορία'},
    'about.html': {en:'Aurelia — About', el:'Aurelia — Σχετικά'},
    'gallery.html': {en:'Aurelia — Gallery', el:'Aurelia — Συλλογή'}
  };

  function currentPage() {
    const name = location.pathname.split('/').pop() || 'index.html';
    return pageTitles[name] ? name : 'index.html';
  }

  function applyLanguage(lang) {
    const t = translations[lang] || translations.en;
    document.documentElement.lang = lang === 'el' ? 'el' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = t[el.dataset.i18n];
      if (value !== undefined) el.innerHTML = value;
    });
    // Menu labels use data-i18n elements and keep their HTML structure intact.
    document.querySelectorAll('[data-i18n-alt]').forEach(img => {
      const alt = img.dataset.i18nAlt;
      const altMap = {
        'Luxury architectural interior placeholder': {el:'Προσωρινή εικόνα πολυτελούς αρχιτεκτονικού εσωτερικού'},
        'Modern studio placeholder': {el:'Προσωρινή εικόνα σύγχρονου στούντιο'},
        'Gallery placeholder 1': {el:'Προσωρινή εικόνα συλλογής 1'},
        'Gallery placeholder 2': {el:'Προσωρινή εικόνα συλλογής 2'},
        'Gallery placeholder 3': {el:'Προσωρινή εικόνα συλλογής 3'},
        'Gallery placeholder 4': {el:'Προσωρινή εικόνα συλλογής 4'}
      };
      if (lang === 'el' && altMap[alt]) img.alt = altMap[alt].el;
      else img.alt = alt;
    });
    const title = pageTitles[currentPage()][lang];
    document.title = title;
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.dataset.i18nAria;
      if (t[key]) el.setAttribute('aria-label', t[key]);
    });
    const switcher = document.querySelector('.language-switch');
    if (switcher) switcher.classList.toggle('gr', lang === 'el');
  }

  function saveAndApply(lang) {
    writeManualLanguage(lang);
    applyLanguage(lang);
  }

  async function detectCountryLanguage() {
    // Try more than one Geo-IP provider so a temporary provider/rate-limit failure
    // does not incorrectly send a Cyprus visitor to English.
    for (const endpoint of GEO_ENDPOINTS) {
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 3500);
        const response = await fetch(endpoint, {
          headers: { Accept: 'application/json' },
          cache: 'no-store',
          signal: controller.signal
        });
        clearTimeout(timer);
        if (!response.ok) throw new Error('Geo-IP request failed');
        const data = await response.json();
        const country = String(
          data.country_code || data.countryCode || data.country || ''
        ).trim().toUpperCase();
        if (!country) throw new Error('No country returned');
        const lang = (country === 'CY' || country === 'GR') ? 'el' : 'en';
        writeGeoLanguage(lang);
        return lang;
      } catch (_) {
        // Try the next provider.
      }
    }

    // Only use browser language if all Geo-IP providers fail.
    return navigator.language && navigator.language.toLowerCase().startsWith('el') ? 'el' : 'en';
  }

  // Menu interaction.
  const menuToggle = document.querySelector('.menu-toggle');
  const siteMenu = document.querySelector('.site-menu');

  function setMenu(open) {
    if (!menuToggle || !siteMenu) return;
    menuToggle.classList.toggle('open', open);
    siteMenu.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    siteMenu.setAttribute('aria-hidden', String(!open));
  }

  if (menuToggle && siteMenu) {
    menuToggle.addEventListener('click', () => {
      setMenu(!siteMenu.classList.contains('open'));
    });

    siteMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => setMenu(false));
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') setMenu(false);
    });
  }

  // Language button: manual choice always wins and is remembered.
  const languageSwitch = document.querySelector('.language-switch');
  if (languageSwitch) {
    languageSwitch.addEventListener('click', () => {
      const next = document.documentElement.lang === 'el' ? 'en' : 'el';
      saveAndApply(next);
    });
  }

  // Reveal-on-scroll.
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold:0.12});
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // Subtle parallax.
  const parallax = document.querySelector('.parallax');
  if (parallax && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const onScroll = () => {
      const rect = parallax.getBoundingClientRect();
      const shift = (window.innerHeight / 2 - (rect.top + rect.height / 2)) * 0.05;
      parallax.style.transform = `translateY(${shift}px)`;
    };
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }

  // Back-to-top footer control.
  document.querySelectorAll('.footer-bottom span:last-child').forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  });

  // Language initialization:
  // 1) A deliberate manual choice wins.
  // 2) Otherwise use the previously detected country language immediately.
  // 3) On a first visit, resolve Geo-IP before revealing the page so English never flashes before Greek.
  // 4) The detected result is cached for all subsequent pages in this visit.
  const manual = readManualLanguage();
  const cachedGeo = readGeoLanguage();

  if (manual) {
    applyLanguage(manual);
    document.documentElement.classList.remove('language-pending');
  } else if (cachedGeo) {
    applyLanguage(cachedGeo);
    document.documentElement.classList.remove('language-pending');
  } else {
    document.documentElement.classList.add('language-pending');
    detectCountryLanguage().then(lang => {
      applyLanguage(lang);
      document.documentElement.classList.remove('language-pending');
    });
  }
})();
