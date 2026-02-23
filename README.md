# Central de Links - Isis Alencastro

> Sistema de central de links estilo Linktree, personalizado para Isis Alencastro.

![Version](https://img.shields.io/badge/versão-1.0.0-blueviolet)
![License](https://img.shields.io/badge/licença-MIT-green)
![Status](https://img.shields.io/badge/status-produção-brightgreen)

## Sobre

Uma página de links centralizada e elegante, com design moderno e responsivo. Permite que todos os links importantes (redes sociais, contatos, conteúdos) fiquem reunidos em um único lugar acessível.

### Funcionalidades

- **Design moderno** com efeitos de glassmorphism e gradientes
- **Totalmente responsivo** — funciona em qualquer dispositivo
- **Animações suaves** com respeito a preferências de acessibilidade (`prefers-reduced-motion`)
- **Configuração centralizada** — todos os links e textos são editáveis via um único arquivo (`js/config.js`)
- **SEO otimizado** com meta tags Open Graph e Twitter Card
- **Acessível** seguindo boas práticas de ARIA e navegação por teclado
- **Leve e rápido** — sem frameworks pesados, apenas HTML, CSS e JavaScript puro
- **Partículas animadas** no fundo para um visual premium

## Estrutura do Projeto

```
centralinks/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos do projeto
├── js/
│   ├── config.js       # Configuração de links, perfil e tema
│   └── main.js         # Lógica JavaScript
├── assets/
│   ├── favicon.svg     # Ícone do site
│   ├── avatar.jpg      # Foto de perfil (adicionar manualmente)
│   └── og-image.jpg    # Imagem para compartilhamento (adicionar manualmente)
├── README.md           # Este arquivo
├── CHANGELOG.md        # Histórico de versões
└── LICENSE             # Licença MIT
```

## Como Usar

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/centralinks.git
cd centralinks
```

### 2. Personalizar os links

Edite o arquivo `js/config.js` para configurar:

- **Perfil**: nome, bio e foto
- **Links**: título, URL, ícone e cor de cada link
- **Ícones sociais**: links rápidos exibidos abaixo do perfil
- **Tema**: cores e gradientes
- **Meta tags**: informações para SEO e compartilhamento

Exemplo de como adicionar um novo link:

```javascript
{
  title: "Meu Site",
  url: "https://meusite.com",
  icon: "fas fa-globe",
  color: "#4A90D9",
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

### Alterando o Tema

No arquivo `js/config.js`, modifique o objeto `theme`:

```javascript
theme: {
  primaryGradient: ["#667eea", "#764ba2"],
  backgroundGradient: ["#0f0c29", "#302b63", "#24243e"],
  cardBackground: "rgba(255, 255, 255, 0.08)",
  textColor: "#ffffff",
  accentColor: "#667eea",
}
```

### Ícones Disponíveis

O projeto utiliza [Font Awesome 6](https://fontawesome.com/icons). Para encontrar ícones:

1. Acesse [fontawesome.com/icons](https://fontawesome.com/icons)
2. Pesquise o ícone desejado
3. Copie a classe (ex: `fas fa-heart`, `fab fa-instagram`)

### Fontes

O projeto usa duas fontes do Google Fonts:
- **Inter** — Para textos gerais
- **Playfair Display** — Para o nome do perfil

Para alterar, edite os links no `<head>` do `index.html`.

## Tecnologias

- HTML5 semântico
- CSS3 (Flexbox, animações, glassmorphism, variáveis CSS)
- JavaScript ES6+ (vanilla)
- [Font Awesome 6](https://fontawesome.com/) — Ícones
- [Google Fonts](https://fonts.google.com/) — Tipografia

## Compatibilidade

| Navegador | Suporte |
|-----------|---------|
| Chrome 80+ | ✅ |
| Firefox 78+ | ✅ |
| Safari 14+ | ✅ |
| Edge 80+ | ✅ |
| Opera 67+ | ✅ |
| Mobile browsers | ✅ |

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## Autor

Desenvolvido para **Isis Alencastro**.

---

<p align="center">
  <strong>Central de Links v1.0.0</strong>
</p>
