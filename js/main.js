document.addEventListener("DOMContentLoaded", () => {
  initProfile();
  initYear();
  buildLinks();
  scheduleLinksReveal();
});

function initProfile() {
  const { name, bio } = CONFIG.profile;
  document.getElementById("profileName").textContent = name;

  const bioEl = document.getElementById("profileBio");
  bioEl.textContent = bio;

  if (CONFIG.meta?.title) {
    document.title = CONFIG.meta.title;
  }
}

function linkExterno(url) {
  return /^https?:\/\//i.test(url);
}

function buildLinks() {
  const container = document.getElementById("linksSection");
  if (!CONFIG.links?.length) return;

  CONFIG.links.forEach((link) => {
    const el = document.createElement("a");
    el.href = link.url;
    el.className = "link-item";

    if (linkExterno(link.url)) {
      el.target = "_blank";
      // "me" liga os perfis sociais a esta página (verificação de identidade)
      el.rel = "noopener noreferrer me";
    }

    const icone = ICONES[link.icon] || "";
    const seta = ICONES.arrow;

    el.innerHTML = `
      <span class="link-icon">${icone}</span>
      <span class="link-text">${link.title}</span>
      <span class="link-arrow">${seta}</span>
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
