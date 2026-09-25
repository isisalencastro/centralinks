# Central de Links - Isis Alencastro

> Central de links personalizada para Isis Alencastro: Desenvolvedora de Software | AI Engineer | Criadora de Conteúdo

![Version](https://img.shields.io/badge/versão-2.1.0-blue)
![License](https://img.shields.io/badge/licença-MIT-green)
![Status](https://img.shields.io/badge/status-produção-brightgreen)

## Sobre

Página de links centralizada com design limpo, moderno e profissional no estilo **card arredondado** com tema **branco e azul**. Conta com uma experiência de abertura em duas etapas: primeiro o perfil e a mensagem de boas-vindas, depois os links surgem com animação em cascata.

### Funcionalidades

- **Animação de abertura em etapas**: Perfil + boas-vindas primeiro, links aparecem em cascata depois
- **Mensagem de boas-vindas**: Badge animado com pulso sutil antes dos links
- **Design card + redondo**: Cartão branco com bordas arredondadas e botões em formato pill
- **Tema branco e azul**: Visual limpo e profissional
- **Foto de perfil em WebP**: Avatar otimizado (3 KB) com fallback em PNG para favicon
- **Totalmente responsivo**: Funciona em qualquer dispositivo
- **Configuração centralizada**: Todos os links e textos são editáveis via `js/config.js`
- **SEO completo**: `title` e `description` únicos, `canonical`, Open Graph, Twitter Card, dados estruturados JSON-LD (`Person` + `WebSite`), `robots.txt` e `sitemap.xml`
- **Conteúdo indexável sem JavaScript**: Os seis links também existem em HTML dentro de `<noscript>`, então robô de busca e navegador antigo enxergam o conteúdo
- **Acessível** seguindo boas práticas de ARIA, navegação por teclado e `prefers-reduced-motion`
- **Zero CDN de CSS/ícones**: Tailwind compilado (≈10 KB) e ícones em SVG inline (≈7 KB), sem requisição externa de estilo

### Links incluídos

| Link | Descrição |
|------|-----------|
| LinkedIn | Perfil profissional |
| GitHub | Repositórios e projetos |
| E-mail | Contato por e-mail |
| Portfólio | Site pessoal / portfólio |
| Currículo | Currículo completo em PDF (1 página, ATS) |
| YouTube | Canal no YouTube |

## Experiência de Abertura

A página possui uma experiência de carregamento em duas etapas:

1. **Etapa 1 (imediata):** O card aparece com animação suave, exibindo o avatar, nome, bio e um badge de boas-vindas ("Bem-vindo(a)! Escolha um dos links abaixo")
2. **Etapa 2 (após 1.8s):** Os links surgem um a um com efeito de cascata (slide-up + fade-in), espaçados por 100ms

## Estrutura do Projeto

```
centralinks/
├── index.html                # Página principal (meta tags, JSON-LD, fallback sem JS)
├── css/
│   ├── tailwind-input.css    # Entrada do Tailwind (código-fonte)
│   ├── tailwind.css          # Tailwind compilado e minificado (gerado, versionado)
│   └── style.css             # Estilos customizados e animações
├── js/
│   ├── config.js             # Configuração de perfil, links, ícones e meta tags
│   └── main.js               # Lógica JavaScript e controle de animações
├── assets/
│   ├── avatar.png            # Foto de perfil (favicon e apple-touch-icon, 460x460)
│   ├── avatar.webp           # Foto de perfil otimizada para a página, 192x192
│   ├── favicon.svg           # Favicon SVG
│   ├── og-image.jpg          # Imagem de compartilhamento, 1200x630
│   └── pdfs/                 # Currículo em PDF
├── tailwind.config.js        # Configuração do Tailwind (fontes e content)
├── package.json              # Scripts de build do CSS
├── robots.txt                # Diretrizes para robô de busca
├── sitemap.xml               # Mapa do site
├── .gitignore
├── README.md                 # Este arquivo
├── CHANGELOG.md              # Histórico de versões
└── LICENSE                   # Licença MIT
```

## Como Usar

### 1. Clonar o repositório

```bash
git clone https://github.com/isisalencastro/centralinks.git
cd centralinks
```

### 2. Personalizar os links

Edite o arquivo `js/config.js` para configurar:

- **Perfil**: nome, bio e foto
- **Links**: título, URL e ícone de cada link
- **Meta tags**: informações para SEO e compartilhamento

Exemplo de como adicionar um novo link:

```javascript
{
  title: "Meu Site",
  url: "https://meusite.com",
  icon: "portfolio", // chave do objeto ICONES
}
```

### 3. Buildar o CSS (só quando mudar classe ou estilo)

O `css/tailwind.css` é gerado a partir de `css/tailwind-input.css`. Depois de mudar qualquer classe no `index.html`, rode:

```bash
npm install
npm run build:css     # gera css/tailwind.css
npm run watch:css     # ou, para acompanhar as mudanças
```

### 4. Adicionar imagens

- Substitua `assets/avatar.png` pela sua foto de perfil
- Gere `assets/avatar.webp` a partir dela (mesma arte, 192x192)
- Coloque a imagem de compartilhamento em `assets/og-image.jpg` (1200x630px)

### 5. Publicar

O projeto é composto por arquivos estáticos e pode ser publicado em qualquer serviço:

| Serviço | Como |
|---------|------|
| **GitHub Pages** | Ative nas configurações do repositório |
| **Netlify** | Arraste a pasta do projeto para o Netlify Drop |
| **Vercel** | Importe o repositório no painel da Vercel |
| **Qualquer servidor** | Faça upload dos arquivos via FTP/SFTP |

Depois de publicar, cadastre o `sitemap.xml` no [Google Search Console](https://search.google.com/search-console) para pedir a indexação.

## Personalização

### Alterando os Links

No arquivo `js/config.js`, modifique o array `links`. Cada link possui:

| Propriedade | Descrição |
|-------------|-----------|
| `title` | Texto exibido no botão |
| `url` | URL de destino |
| `icon` | Chave do ícone no objeto `ICONES` |

### Ícones Disponíveis

Os ícones são SVG inline no objeto `ICONES` de `js/config.js`, vindos do [Font Awesome Free 6.5.1](https://fontawesome.com/) (ícones sob CC BY 4.0, código MIT). Já existem: `linkedin`, `github`, `youtube`, `email`, `portfolio`, `curriculo`, `arrow` e `sparkles`.

Para adicionar outro: baixe o SVG em [fontawesome.com/icons](https://fontawesome.com/icons), copie o conteúdo de dentro do `<svg>` (o atributo `viewBox` e o `<path>`) e cole como mais uma chave do `ICONES`, com `class="icone"`, `fill="currentColor"` e `aria-hidden="true"`.

### Fontes

O projeto usa duas fontes do Google Fonts:
- **Inter**: Para textos gerais
- **Poppins**: Para o nome do perfil

### Ajustando o Tempo da Animação

No arquivo `js/main.js`, o delay antes dos links aparecerem pode ser alterado na função `scheduleLinksReveal()`. O valor padrão é `1800` (1.8 segundos). O intervalo entre cada link é `100`ms.

## Tecnologias

- HTML5 semântico
- CSS3 (animações, transições, design responsivo)
- JavaScript ES6+ (vanilla)
- [Tailwind CSS](https://tailwindcss.com/): compilado no build, sem CDN
- [Font Awesome Free 6.5.1](https://fontawesome.com/): ícones em SVG inline (CC BY 4.0)
- [Google Fonts](https://fonts.google.com/): Tipografia (Inter + Poppins)

## Compatibilidade

| Navegador | Suporte |
|-----------|---------|
| Chrome 80+ | Sim |
| Firefox 78+ | Sim |
| Safari 14+ | Sim |
| Edge 80+ | Sim |
| Opera 67+ | Sim |
| Mobile browsers | Sim |

Sem JavaScript, a página continua legível e os links continuam funcionando pelo bloco `<noscript>`.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

Ícones: Font Awesome Free 6.5.1, ícones sob [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), código sob MIT.

## Autora

**Isis Alencastro**: Desenvolvedora de Software | AI Engineer | Criadora de Conteúdo

---

<p align="center">
  <strong>Central de Links v2.1.0</strong>
</p>
