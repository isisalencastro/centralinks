document.addEventListener("DOMContentLoaded", () => {
  initProfile();
  initYear();
  buildLinks();
  scheduleLinksReveal();
});

function initProfile() {
  const { name, bio } = CONFIG.profile;
  document.getElementById("profileName").textContent = name;
  document.getElementById("profileBio").textContent = bio;

  if (CONFIG.meta?.title) {
    document.title = CONFIG.meta.title;
  }
}

function buildLinks() {
  const container = document.getElementById("linksSection");
  if (!CONFIG.links?.length) return;

  CONFIG.links.forEach((link) => {
    const el = document.createElement("a");
    el.href = link.url;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
    el.className = "link-item";

    el.innerHTML = `
      <span class="link-icon"><i class="${link.icon}"></i></span>
      <span class="link-text">${link.title}</span>
      <span class="link-arrow"><i class="fas fa-arrow-right"></i></span>
    `;

    container.appendChild(el);
  });
}

function scheduleLinksReveal() {
  const section = document.getElementById("linksSection");
  const links = section.querySelectorAll(".link-item");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion) {
    section.classList.add("links-revealed");
    links.forEach((link) => link.classList.add("link-visible"));
    return;
  }

  setTimeout(() => {
    section.classList.add("links-revealed");

    links.forEach((link, i) => {
      setTimeout(() => {
        link.classList.add("link-visible");
      }, i * 100);
    });
  }, 1800);
}

function initYear() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
