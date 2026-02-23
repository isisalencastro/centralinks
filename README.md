# Central de Links - Isis Alencastro

> Central de links personalizada para Isis Alencastro — Desenvolvedora de Software, Analista de Marketing e Gestora de Automações com IA.

![Version](https://img.shields.io/badge/versão-2.0.0-blue)
![License](https://img.shields.io/badge/licença-MIT-green)
![Status](https://img.shields.io/badge/status-produção-brightgreen)

## Sobre

Página de links centralizada com design limpo, moderno e profissional no estilo **card arredondado** com tema **branco e azul**. Conta com uma experiência de abertura em duas etapas: primeiro o perfil e a mensagem de boas-vindas, depois os links surgem com animação em cascata.

### Funcionalidades

- **Animação de abertura em etapas** — Perfil + boas-vindas primeiro, links aparecem em cascata depois
- **Mensagem de boas-vindas** — Badge animado com pulso sutil antes dos links
- **Design card + redondo** — Cartão branco com bordas arredondadas e botões em formato pill
- **Tema branco e azul** — Visual limpo e profissional
- **Foto de perfil real** — Avatar com foto do GitHub, também usada como favicon
- **Totalmente responsivo** — Funciona em qualquer dispositivo
- **Tailwind CSS** — Utilitários CSS para layout rápido e consistente
- **Configuração centralizada** — Todos os links e textos são editáveis via `js/config.js`
- **SEO otimizado** com meta tags Open Graph e Twitter Card
- **Acessível** seguindo boas práticas de ARIA, navegação por teclado e `prefers-reduced-motion`

### Links incluídos

| Link | Descrição |
|------|-----------|
| WhatsApp | Contato direto via WhatsApp Web |
| LinkedIn | Perfil profissional |
| GitHub | Repositórios e projetos |
| E-mail | Contato por e-mail |
| Portfólio | Site pessoal / portfólio |
| Currículo | Currículo completo no Notion |
| YouTube | Canal no YouTube |

## Experiência de Abertura

A página possui uma experiência de carregamento em duas etapas:

1. **Etapa 1 (imediata):** O card aparece com animação suave, exibindo o avatar, nome, bio e um badge de boas-vindas ("Bem-vindo(a)! Escolha um dos links abaixo")
2. **Etapa 2 (após 1.8s):** Os links surgem um a um com efeito de cascata (slide-up + fade-in), espaçados por 100ms

## Estrutura do Projeto

```
centralinks/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos customizados e animações
├── js/
│   ├── config.js       # Configuração de links e perfil
│   └── main.js         # Lógica JavaScript e controle de animações
├── assets/
│   ├── avatar.png      # Foto de perfil (usada também como favicon)
│   ├── favicon.svg     # Favicon SVG alternativo
│   └── og-image.jpg    # Imagem para compartilhamento (adicionar manualmente)
├── .gitignore
├── README.md           # Este arquivo
├── CHANGELOG.md        # Histórico de versões
└── LICENSE             # Licença MIT
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
  icon: "fas fa-globe",
}
```

### 3. Adicionar imagens

- Substitua `assets/avatar.png` pela sua foto de perfil
- Coloque uma imagem de compartilhamento em `assets/og-image.jpg` (recomendado: 1200x630px)

### 4. Publicar

O projeto é composto por arquivos estáticos e pode ser publicado em qualquer serviço:

| Serviço | Como |
|---------|------|
| **GitHub Pages** | Ative nas configurações do repositório |
| **Netlify** | Arraste a pasta do projeto para o Netlify Drop |
| **Vercel** | Importe o repositório no painel da Vercel |
| **Qualquer servidor** | Faça upload dos arquivos via FTP/SFTP |

## Personalização

### Alterando os Links

No arquivo `js/config.js`, modifique o array `links`. Cada link possui:

| Propriedade | Descrição |
|-------------|-----------|
| `title` | Texto exibido no botão |
| `url` | URL de destino |
| `icon` | Classe do ícone Font Awesome |

### Ícones Disponíveis

O projeto utiliza [Font Awesome 6](https://fontawesome.com/icons). Para encontrar ícones:

1. Acesse [fontawesome.com/icons](https://fontawesome.com/icons)
2. Pesquise o ícone desejado
3. Copie a classe (ex: `fas fa-heart`, `fab fa-linkedin-in`)

### Fontes

O projeto usa duas fontes do Google Fonts:
- **Inter** — Para textos gerais
- **Poppins** — Para o nome do perfil

### Ajustando o Tempo da Animação

No arquivo `js/main.js`, o delay antes dos links aparecerem pode ser alterado na função `scheduleLinksReveal()`. O valor padrão é `1800` (1.8 segundos). O intervalo entre cada link é `100`ms.

## Tecnologias

- HTML5 semântico
- CSS3 (animações, transições, design responsivo)
- JavaScript ES6+ (vanilla)
- [Tailwind CSS](https://tailwindcss.com/) — Utilitários CSS via CDN
- [Font Awesome 6](https://fontawesome.com/) — Ícones
- [Google Fonts](https://fonts.google.com/) — Tipografia (Inter + Poppins)

## Compatibilidade

| Navegador | Suporte |
|-----------|---------|
| Chrome 80+ | Sim |
| Firefox 78+ | Sim |
| Safari 14+ | Sim |
| Edge 80+ | Sim |
| Opera 67+ | Sim |
| Mobile browsers | Sim |

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## Autora

**Isis Alencastro** — Desenvolvedora de Software | Analista de Marketing | Gestora de Automações com IA

---

<p align="center">
  <strong>Central de Links v2.0.0</strong>
</p>
