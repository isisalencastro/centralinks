# Central de Links - Isis Alencastro

> Central de links personalizada para Isis Alencastro — Desenvolvedora de Software, Analista de Marketing e Gestora de Automações com IA.

![Version](https://img.shields.io/badge/versão-1.0.0-blue)
![License](https://img.shields.io/badge/licença-MIT-green)
![Status](https://img.shields.io/badge/status-produção-brightgreen)

## Sobre

Página de links centralizada com design limpo, moderno e profissional no estilo **card arredondado** com tema **branco e azul**. Reúne todos os links importantes em um único lugar.

### Funcionalidades

- **Design card + redondo** — Cartão branco com bordas arredondadas e botões em formato pill
- **Tema branco e azul** — Visual limpo e profissional
- **Totalmente responsivo** — Funciona em qualquer dispositivo
- **Animações suaves** com respeito a preferências de acessibilidade (`prefers-reduced-motion`)
- **Configuração centralizada** — Todos os links e textos são editáveis via `js/config.js`
- **SEO otimizado** com meta tags Open Graph e Twitter Card
- **Acessível** seguindo boas práticas de ARIA e navegação por teclado
- **Leve e rápido** — HTML, CSS e JavaScript puro, sem frameworks

### Links incluídos

| Link | Descrição |
|------|-----------|
| WhatsApp | Contato direto via WhatsApp Web |
| LinkedIn | Perfil profissional |
| GitHub | Repositórios e projetos |
| E-mail | Contato por e-mail |
| Portfólio | Site pessoal / portfólio |
| YouTube | Canal no YouTube |

## Estrutura do Projeto

```
centralinks/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos (tema branco e azul)
├── js/
│   ├── config.js       # Configuração de links e perfil
│   └── main.js         # Lógica JavaScript
├── assets/
│   ├── favicon.svg     # Ícone do site
│   ├── avatar.jpg      # Foto de perfil (adicionar manualmente)
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

- Coloque sua foto de perfil em `assets/avatar.jpg`
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
3. Copie a classe (ex: `fas fa-heart`, `fab fa-instagram`)

### Fontes

O projeto usa duas fontes do Google Fonts:
- **Inter** — Para textos gerais
- **Poppins** — Para o nome do perfil

## Tecnologias

- HTML5 semântico
- CSS3 (Flexbox, variáveis CSS, animações, design responsivo)
- JavaScript ES6+ (vanilla)
- [Font Awesome 6](https://fontawesome.com/) — Ícones
- [Google Fonts](https://fonts.google.com/) — Tipografia

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
  <strong>Central de Links v1.0.0</strong>
</p>
