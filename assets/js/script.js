// Menú móvil + scroll suave

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector("#menuToggle");
  const mainNav = document.querySelector("#mainNav");
  const scrollButtons = document.querySelectorAll("[data-scroll]");

  // Abrir / cerrar menú en mobile
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("is-open");
    });

    // Cerrar menú al hacer click en un link
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (mainNav.classList.contains("is-open")) {
          mainNav.classList.remove("is-open");
        }
      });
    });
  }

  // Scroll suave a secciones
  scrollButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const targetSelector = btn.getAttribute("data-scroll");
      const target = targetSelector && document.querySelector(targetSelector);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Opcional: scroll suave para links del navbar con hashes
  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
});
