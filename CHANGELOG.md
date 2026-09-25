# Changelog

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

O formato segue o [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [2.1.0] - 2026-09-25

### Adicionado

- Descrição do perfil atualizada para "Desenvolvedora de Software | AI Engineer | Criadora de Conteúdo"
- Dados estruturados JSON-LD (`Person` + `WebSite`) com `sameAs` para LinkedIn, GitHub, YouTube e portfólio
- Meta tags `canonical`, `og:url`, `og:locale`, `og:site_name`, dimensões e texto alternativo da imagem de compartilhamento
- `robots.txt` e `sitemap.xml`
- Fallback em `<noscript>` com os seis links em HTML, para leitor sem JavaScript e robô de busca
- `assets/avatar.webp` (192x192, 3 KB) para a página, com o PNG mantido no favicon
- `assets/og-image.jpg` (1200x630), que era referenciada nas meta tags e não existia no repositório
- Scripts `npm run build:css` e `npm run watch:css` em `package.json`, com `tailwind.config.js` e `css/tailwind-input.css`

### Alterado

- Tailwind saiu do CDN (`cdn.tailwindcss.com`) para CSS compilado e minificado em `css/tailwind.css` (≈10 KB)
- Ícones saíram da webfont do Font Awesome (CSS + fontes, ≈300 KB) para SVG inline no objeto `ICONES` de `js/config.js` (≈7 KB, sem requisição externa)
- Links externos agora carregam `rel="noopener noreferrer me"`, ligando os perfis à página
- Favicon passa a usar o `assets/favicon.svg`, que já existia mas não era referenciado
- Título da página: "Isis Alencastro | Desenvolvedora de Software e AI Engineer"
- Avatar com `width`, `height`, `decoding` e `fetchpriority` declarados, reduzindo deslocamento de layout
- `outline-3` (classe inexistente no Tailwind 3) trocada por `outline-2` no anel do avatar
- README atualizado: estrutura de arquivos, build do CSS, atribuição dos ícones e o Currículo como PDF (antes dizia Notion)

### Removido

- Dependência do CDN do Tailwind e do CDN do Font Awesome
- Fonte de ícones de terceiros no caminho crítico de renderização

## [2.0.0] - 2026-02-23

### Adicionado

- Experiência de abertura em duas etapas: perfil + boas-vindas, depois links em cascata
- Mensagem de boas-vindas com badge "Bem-vindo(a)! Escolha um dos links abaixo"
- Animação em cascata dos links (slide-up + fade-in, 100ms entre cada)
- Tailwind CSS via CDN para utilitários de layout
- Foto de perfil real (baixada do GitHub) como avatar e favicon
- Link do Currículo (Notion)

### Alterado

- Links atualizados: Portfólio (GitHub Pages), E-mail (Gmail)
- Avatar agora usa imagem direta no HTML em vez de fallback JS
- Largura do card aumentada para melhor leitura
- CSS refatorado para trabalhar em conjunto com Tailwind
- JavaScript reestruturado com controle de animação sequencial

### Removido

- Fallback de texto "IA" no avatar
- Sistema de injeção de avatar via JavaScript
- Seção de ícones sociais separada (consolidado nos links)

## [1.0.0] - 2026-02-23

### Adicionado

- Página principal com design card arredondado no tema branco e azul
- Perfil profissional: Desenvolvedora de Software
- Sistema de configuração centralizado via `js/config.js`
- Links: LinkedIn, GitHub, E-mail, Portfólio, YouTube
- Avatar com fallback de iniciais e borda azul
- Botões de link em formato pill (totalmente arredondados)
- Efeito hover com preenchimento azul gradiente
- Elementos decorativos de fundo com círculos azuis desfocados
- Design totalmente responsivo (mobile-first)
- Suporte a acessibilidade (ARIA labels, `prefers-reduced-motion`, navegação por teclado)
- Meta tags para SEO (Open Graph, Twitter Card)
- Favicon SVG nas cores do tema
- Animações suaves de entrada
- Documentação completa (README.md, CHANGELOG.md)
- Licença MIT
