(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll('.nav a[href^="#"]');

  function setActive() {
    var scrollY = window.scrollY + 100;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute("id");
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function (link) {
          link.removeAttribute("aria-current");
          if (link.getAttribute("href") === "#" + id) {
            link.setAttribute("aria-current", "page");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", setActive, { passive: true });
  setActive();
})();
