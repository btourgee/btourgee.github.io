(() => {
  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile nav toggle (simple: shows/hides links by toggling a class)
  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");

  if (!header || !nav || !toggle) return;

  const setExpanded = (expanded) => {
    toggle.setAttribute("aria-expanded", String(expanded));
    if (expanded) {
      nav.style.display = "flex";
      nav.style.flexDirection = "column";
      nav.style.alignItems = "flex-start";
      nav.style.gap = "12px";
      nav.style.padding = "12px 0 4px";
    } else {
      nav.removeAttribute("style");
    }
  };

  let open = false;
  toggle.addEventListener("click", () => {
    open = !open;
    setExpanded(open);
  });

  // Close menu after clicking a link
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      open = false;
      setExpanded(false);
    });
  });
})();
