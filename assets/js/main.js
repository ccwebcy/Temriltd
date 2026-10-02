document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".site-menu");
  const toggle = document.querySelector(".menu-toggle");
  const header = document.querySelector(".site-header");
  const language = document.querySelector(".language-switch");

  toggle?.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
    menu.setAttribute("aria-hidden", !open);
    document.body.style.overflow = open ? "hidden" : "";
  });

  menu?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    menu.classList.remove("open");
    toggle?.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }));

  language?.addEventListener("click", () => {
    language.classList.toggle("gr");
    document.documentElement.lang = language.classList.contains("gr") ? "el" : "en";
    // Replace this UI toggle with your real Greek/English routing or translation system.
  });

  const onScroll = () => {
    header?.classList.toggle("scrolled", window.scrollY > 40);
    document.querySelectorAll(".parallax").forEach(el => {
      const rect = el.getBoundingClientRect();
      const offset = (window.innerHeight / 2 - rect.top) * 0.035;
      el.querySelector("img")?.style.setProperty("transform", `scale(1.06) translateY(${offset}px)`);
    });
  };
  window.addEventListener("scroll", onScroll, {passive:true});
  onScroll();

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: .12});
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  document.querySelectorAll(".footer-bottom span:last-child").forEach(el => {
    el.style.cursor = "pointer";
    el.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
  });
});
