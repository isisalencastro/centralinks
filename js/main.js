document.addEventListener("DOMContentLoaded", () => {
  initProfile();
  initSocialIcons();
  initLinks();
  initParticles();
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

function initSocialIcons() {
  const container = document.getElementById("socialIcons");
  if (!CONFIG.socialIcons?.length) {
    container.style.display = "none";
    return;
  }

  CONFIG.socialIcons.forEach((social) => {
    const link = document.createElement("a");
    link.href = social.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "social-icon-btn";
    link.setAttribute("aria-label", social.label);
    link.innerHTML = `<i class="${social.icon}"></i>`;
    container.appendChild(link);
  });
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
    el.style.setProperty("--link-accent", link.color || "var(--primary)");
    el.style.animationDelay = `${0.65 + index * 0.08}s`;

    el.innerHTML = `
      <span class="link-icon"><i class="${link.icon}"></i></span>
      <span class="link-text">${link.title}</span>
      <span class="link-arrow"><i class="fas fa-chevron-right"></i></span>
    `;

    el.addEventListener("mouseenter", () => handleLinkHover(el));
    container.appendChild(el);
  });
}

function handleLinkHover(el) {
  el.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
}

function initParticles() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const container = document.getElementById("particles");
  const count = window.innerWidth < 520 ? 12 : 20;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const duration = Math.random() * 12 + 10;
    const delay = Math.random() * 10;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${left}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    container.appendChild(particle);
  }
}

function initYear() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
