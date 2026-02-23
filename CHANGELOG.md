# Changelog

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

O formato segue o [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [2.0.0] - 2026-02-23

### Adicionado

- Experiência de abertura em duas etapas: perfil + boas-vindas, depois links em cascata
- Mensagem de boas-vindas com badge "Bem-vindo(a)! Escolha um dos links abaixo"
- Animação em cascata dos links (slide-up + fade-in, 100ms entre cada)
- Tailwind CSS via CDN para utilitários de layout
- Foto de perfil real (baixada do GitHub) como avatar e favicon
- Link do Currículo (Notion)

### Alterado

- Links atualizados: WhatsApp (link real), Portfólio (GitHub Pages), E-mail (Gmail)
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
- Perfil profissional: Desenvolvedora de Software, Analista de Marketing, Gestora de Automações com IA
- Sistema de configuração centralizado via `js/config.js`
- Links: WhatsApp, LinkedIn, GitHub, E-mail, Portfólio, YouTube
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
