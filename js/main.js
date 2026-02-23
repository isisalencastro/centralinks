document.addEventListener("DOMContentLoaded", () => {
  initProfile();
  initLinks();
  initYear();
});

function initProfile() {
  const { name, bio, avatar, avatarFallback } = CONFIG.profile;

  document.getElementById("profileName").textContent = name;
  document.getElementById("profileBio").textContent = bio;

  const avatarEl = document.getElementById("avatar");
  const fallbackEl = document.getElementById("avatarFallback");

  if (avatar) {
    const img = new Image();
    img.src = avatar;
    img.alt = `Foto de ${name}`;
    img.loading = "eager";

    img.onload = () => {
      fallbackEl.style.display = "none";
      avatarEl.appendChild(img);
    };
  }

  if (avatarFallback) {
    fallbackEl.textContent = avatarFallback;
  }

  if (CONFIG.meta?.title) {
    document.title = CONFIG.meta.title;
  }
}

function initLinks() {
  const container = document.getElementById("linksSection");
  if (!CONFIG.links?.length) return;

  CONFIG.links.forEach((link, index) => {
    const el = document.createElement("a");
    el.href = link.url;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
    el.className = "link-item";
    el.style.animationDelay = `${0.5 + index * 0.08}s`;

    el.innerHTML = `
      <span class="link-icon"><i class="${link.icon}"></i></span>
      <span class="link-text">${link.title}</span>
      <span class="link-arrow"><i class="fas fa-arrow-right"></i></span>
    `;

    container.appendChild(el);
  });
}

function initYear() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
