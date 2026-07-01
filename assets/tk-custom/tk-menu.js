/* TallyKhata custom menu — mobile drawer, accordions, scroll shadow */
(function () {
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    var nav = document.querySelector(".tk-nav");
    if (!nav) return;
    var menu = nav.querySelector(".tk-menu");
    var burger = nav.querySelector(".tk-burger");
    var backdrop = document.querySelector(".tk-backdrop");
    var MOBILE = function () { return window.matchMedia("(max-width:992px)").matches; };

    /* shadow on scroll */
    var onScroll = function () { nav.classList.toggle("tk-scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /* open / close drawer */
    function setOpen(open) {
      if (!menu) return;
      menu.classList.toggle("open", open);
      if (backdrop) backdrop.classList.toggle("show", open);
      document.body.style.overflow = open ? "hidden" : "";
      if (burger) burger.setAttribute("aria-expanded", open ? "true" : "false");
    }
    if (burger) burger.addEventListener("click", function () { setOpen(!menu.classList.contains("open")); });
    if (backdrop) backdrop.addEventListener("click", function () { setOpen(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });

    /* accordion toggles on mobile for items that have a panel */
    menu.querySelectorAll("li.has-drop > .tk-link, li.has-mega > .tk-link").forEach(function (link) {
      link.addEventListener("click", function (e) {
        if (!MOBILE()) return;            // desktop uses hover
        e.preventDefault();
        var li = link.parentElement;
        var wasOpen = li.classList.contains("open-acc");
        // close siblings
        menu.querySelectorAll("li.open-acc").forEach(function (s) { if (s !== li) s.classList.remove("open-acc"); });
        li.classList.toggle("open-acc", !wasOpen);
      });
    });

    /* close drawer when a real (leaf) link is tapped — but NOT the accordion toggles */
    menu.querySelectorAll("a.tk-sub, .tk-cta, li:not(.has-mega):not(.has-drop) > a.tk-link[href]:not([href='#'])").forEach(function (a) {
      a.addEventListener("click", function () { if (MOBILE()) setOpen(false); });
    });

    /* reset state when resizing back to desktop */
    window.addEventListener("resize", function () {
      if (!MOBILE()) {
        setOpen(false);
        menu.querySelectorAll("li.open-acc").forEach(function (s) { s.classList.remove("open-acc"); });
      }
    });
  });
})();
