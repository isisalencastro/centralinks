/* ============================================
   Isis Alencastro - Central de Links
   Configuração central: perfil, links e meta tags
   ============================================ */

/* Ícones em SVG inline (Font Awesome Free 6.5.1, licença CC BY 4.0).
   Antes vinham do CSS do Font Awesome via CDN (~300 KB entre CSS e fontes);
   inline são ~7 KB e não custam requisição externa. */
const ICONES = {
  linkedin: `<svg class="icone" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>`,
  github: `<svg class="icone" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>`,
  youtube: `<svg class="icone" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>`,
  email: `<svg class="icone" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>`,
  portfolio: `<svg class="icone" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>`,
  curriculo: `<svg class="icone" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>`,
  arrow: `<svg class="icone" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>`,
  sparkles: `<svg class="icone" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 0c17.7 0 32 14.3 32 32V240c0 8.8 7.2 16 16 16s16-7.2 16-16V64c0-17.7 14.3-32 32-32s32 14.3 32 32V240c0 8.8 7.2 16 16 16s16-7.2 16-16V128c0-17.7 14.3-32 32-32s32 14.3 32 32V323.1c-11.9 4.8-21.3 14.9-25 27.8l-8.9 31.2L478.9 391C460.6 396.3 448 413 448 432c0 18.9 12.5 35.6 30.6 40.9C448.4 497.4 409.9 512 368 512H348.8c-59.6 0-116.9-22.9-160-64L76.4 341c-16-15.2-16.6-40.6-1.4-56.6s40.6-16.6 56.6-1.4l60.5 57.6c0-1.5-.1-3.1-.1-4.6V64c0-17.7 14.3-32 32-32s32 14.3 32 32V240c0 8.8 7.2 16 16 16s16-7.2 16-16V32c0-17.7 14.3-32 32-32zm-7.3 326.6c-1.1-3.9-4.7-6.6-8.7-6.6s-7.6 2.7-8.7 6.6L288 352l-25.4 7.3c-3.9 1.1-6.6 4.7-6.6 8.7s2.7 7.6 6.6 8.7L288 384l7.3 25.4c1.1 3.9 4.7 6.6 8.7 6.6s7.6-2.7 8.7-6.6L320 384l25.4-7.3c3.9-1.1 6.6-4.7 6.6-8.7s-2.7-7.6-6.6-8.7L320 352l-7.3-25.4zM104 120l48.3 13.8c4.6 1.3 7.7 5.5 7.7 10.2s-3.1 8.9-7.7 10.2L104 168 90.2 216.3c-1.3 4.6-5.5 7.7-10.2 7.7s-8.9-3.1-10.2-7.7L56 168 7.7 154.2C3.1 152.9 0 148.7 0 144s3.1-8.9 7.7-10.2L56 120 69.8 71.7C71.1 67.1 75.3 64 80 64s8.9 3.1 10.2 7.7L104 120zM584 408l48.3 13.8c4.6 1.3 7.7 5.5 7.7 10.2s-3.1 8.9-7.7 10.2L584 456l-13.8 48.3c-1.3 4.6-5.5 7.7-10.2 7.7s-8.9-3.1-10.2-7.7L536 456l-48.3-13.8c-4.6-1.3-7.7-5.5-7.7-10.2s3.1-8.9 7.7-10.2L536 408l13.8-48.3c1.3-4.6 5.5-7.7 10.2-7.7s8.9 3.1 10.2 7.7L584 408z"/></svg>`,
};

const DESCRICAO =
  "Desenvolvedora de Software | AI Engineer | Criadora de Conteúdo";

const CONFIG = {
  profile: {
    name: "Isis Alencastro",
    bio: DESCRICAO,
    avatar: "assets/avatar.png",
    avatarFallback: "DEV",
  },

  links: [
    {
      title: "LinkedIn",
      url: "https://linkedin.com/in/isisalencastro",
      icon: "linkedin",
    },
    {
      title: "GitHub",
      url: "https://github.com/isisalencastro",
      icon: "github",
    },
    {
      title: "E-mail",
      url: "mailto:alencastroisis@gmail.com",
      icon: "email",
    },
    {
      title: "Portfólio",
      url: "https://isisalencastro.github.io/portfolio/",
      icon: "portfolio",
    },
    {
      title: "Currículo",
      url: "assets/pdfs/Isis%20Alencastro%20-%20Curr%C3%ADculo.pdf",
      icon: "curriculo",
    },
    {
      title: "YouTube",
      url: "https://www.youtube.com/@IsisAlencastro",
      icon: "youtube",
    },
  ],

  meta: {
    title: "Isis Alencastro | Desenvolvedora de Software e AI Engineer",
    description:
      "Isis Alencastro é desenvolvedora de software e AI engineer em Porto Alegre. Automação com IA, JavaScript, TypeScript e Python. LinkedIn, GitHub, portfólio e currículo em um só lugar.",
    keywords:
      "Isis Alencastro, desenvolvedora de software, AI engineer, criadora de conteúdo, Porto Alegre, JavaScript, TypeScript, Python, automação com IA",
    ogImage: "https://isisalencastro.github.io/centralinks/assets/og-image.jpg",
    language: "pt-BR",
  },
};
