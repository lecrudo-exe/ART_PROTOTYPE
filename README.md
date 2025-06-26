# Galeria de Arte - João Silva (HTML/CSS/JS)

Um site de galeria de arte profissional criado com HTML, CSS e JavaScript puros, apresentando as obras do artista plástico João Silva organizadas por décadas.

## 🎨 Características do Projeto

### Design e Estilo
- **Tema "Livro Antigo"**: Fundo bege simulando folhas A4 envelhecidas
- **Paleta de cores**: Tons bege, dourado e marrom para criar atmosfera clássica
- **Tipografia**: Combinação de fontes serif (Playfair Display) e sans-serif (Open Sans)
- **Animações**: Transições suaves e efeitos hover elegantes

### Funcionalidades Principais
- **Organização por décadas**: 70s, 80s, 90s, 2000s, 2010s, 2020s
- **Modal avançado**: Ampliação de imagens com zoom (1x/2x)
- **Navegação intuitiva**: Setas, teclado (ESC, ←, →) e botões
- **Design responsivo**: Adaptação automática para desktop, tablet e mobile
- **Menu dropdown**: Navegação rápida entre décadas

### Estrutura de Páginas
- **Início**: Apresentação do artista e preview das décadas
- **Décadas**: Galerias específicas por período (70s-2020s)
- **Sobre**: Biografia detalhada e trajetória artística
- **Contato**: Formulário funcional e informações de contato

## 📁 Estrutura de Arquivos

```
galeria-arte-html/
├── index.html              # Página principal
├── css/
│   ├── styles.css          # Estilos principais
│   └── gallery.css         # Estilos específicos das galerias
├── js/
│   └── main.js            # JavaScript principal e modal
├── pages/
│   ├── 70s.html           # Galeria década de 70
│   ├── 80s.html           # Galeria década de 80
│   ├── 90s.html           # Galeria década de 90
│   ├── 2000s.html         # Galeria década de 2000
│   ├── 2010s.html         # Galeria década de 2010
│   ├── 2020s.html         # Galeria década de 2020
│   ├── sobre.html         # Página sobre o artista
│   └── contato.html       # Página de contato
└── images/                # Pasta para imagens das obras
    ├── 70s/
    ├── 80s/
    ├── 90s/
    ├── 2000s/
    ├── 2010s/
    └── 2020s/
```

## 🚀 Como Usar

### 1. Configuração Básica
1. Extraia os arquivos em uma pasta
2. Abra `index.html` em um navegador web
3. Ou use um servidor local para melhor experiência

### 2. Servidor Local (Recomendado)
```bash
# Python 3
python -m http.server 8080

# Node.js (se tiver instalado)
npx serve .

# PHP (se tiver instalado)
php -S localhost:8080
```

### 3. Personalização

#### Substituir Imagens das Obras
1. Adicione as imagens reais nas pastas `images/[década]/`
2. Mantenha os nomes dos arquivos ou atualize em `js/main.js`
3. Recomendado: crie thumbnails em `images/[década]/thumbs/`

#### Atualizar Informações do Artista
1. **Nome**: Edite em todos os arquivos HTML
2. **Biografia**: Modifique `pages/sobre.html`
3. **Contato**: Atualize `pages/contato.html`
4. **Obras**: Edite o objeto `artworksData` em `js/main.js`

#### Adicionar/Remover Obras
```javascript
// Em js/main.js, edite o objeto artworksData
const artworksData = {
    '70s': [
        {
            id: 1,
            title: "Nome da Obra",
            year: 1975,
            technique: "Técnica utilizada",
            dimensions: "Dimensões",
            image: "images/70s/nome-arquivo.jpg",
            thumbnail: "images/70s/thumbs/nome-arquivo.jpg"
        }
        // ... mais obras
    ]
    // ... outras décadas
};
```

## 🎯 Funcionalidades do Modal

### Navegação
- **Setas laterais**: Navegar entre obras da mesma década
- **Teclado**: ESC (fechar), ← (anterior), → (próxima)
- **Botões**: Anterior/Próxima no rodapé

### Zoom Interativo
- **Clique na imagem**: Alterna entre zoom 1x e 2x
- **Indicador visual**: Mostra nível de zoom atual
- **Cursor**: Muda para indicar ação (zoom-in/zoom-out)

### Informações Detalhadas
- **Cabeçalho**: Título, ano e técnica
- **Contador**: Posição atual (ex: "2 de 3")
- **Rodapé**: Detalhes técnicos completos

## 📱 Responsividade

### Desktop (1200px+)
- Grid de 4 colunas para obras
- Modal em tamanho completo
- Navegação horizontal completa

### Tablet (768px - 1199px)
- Grid de 2-3 colunas
- Modal adaptado
- Menu dropdown funcional

### Mobile (até 767px)
- Grid de 1-2 colunas
- Modal otimizado para toque
- Menu hambúrguer
- Navegação simplificada

## 🎨 Customização de Cores

As cores principais estão definidas em `css/styles.css`:

```css
:root {
    --color-primary: #f4f1e8;      /* Bege claro */
    --color-secondary: #8b4513;     /* Marrom */
    --color-accent: #d4af37;        /* Dourado */
    --color-neutral: #6b5b47;       /* Marrom claro */
    --color-white: #ffffff;
}
```

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Flexbox, Grid, animações e responsividade
- **JavaScript ES6+**: Classes, arrow functions, event delegation
- **Google Fonts**: Playfair Display e Open Sans

## 📋 Checklist de Personalização

- [ ] Substituir nome do artista em todos os arquivos
- [ ] Atualizar biografia em `pages/sobre.html`
- [ ] Modificar informações de contato
- [ ] Adicionar imagens reais das obras
- [ ] Atualizar dados das obras em `js/main.js`
- [ ] Personalizar cores se necessário
- [ ] Testar responsividade em diferentes dispositivos
- [ ] Verificar funcionamento do modal
- [ ] Testar formulário de contato

## 🌐 Deploy

### Hospedagem Estática
O site pode ser hospedado em qualquer serviço de hospedagem estática:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

### Upload via FTP
1. Faça upload de todos os arquivos para o servidor
2. Certifique-se de que `index.html` está na raiz
3. Verifique se as imagens estão no local correto

## 📞 Suporte

Para dúvidas sobre personalização ou problemas técnicos, consulte:
- Documentação do HTML/CSS/JS
- Comentários no código fonte
- Estrutura de arquivos bem organizada

---

**Desenvolvido com HTML, CSS e JavaScript puros para máxima compatibilidade e performance.**

