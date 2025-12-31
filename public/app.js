// public/app.js
document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  const burger = document.querySelector(".burger");
  const menu = document.getElementById("mobileMenu");
  if (burger && menu) {
    const closeMenu = () => {
      menu.hidden = true;
      burger.setAttribute("aria-expanded", "false");
    };

    burger.addEventListener("click", () => {
      const isOpen = !menu.hidden;
      menu.hidden = isOpen;
      burger.setAttribute("aria-expanded", isOpen ? "false" : "true");
    });

    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".faq-q");
    if (!btn) return;

    let panel = btn.nextElementSibling;
    if (!panel || !panel.classList.contains("faq-a")) {
      panel = btn.parentElement && btn.parentElement.querySelector(".faq-a");
    }
    if (!panel || !panel.classList.contains("faq-a")) return;

    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", isOpen ? "false" : "true");
    panel.hidden = isOpen;
  });
});
