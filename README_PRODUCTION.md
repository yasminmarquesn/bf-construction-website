# BF Construction Website - Production Setup

## Informações do Projecto

- **Nome da Empresa:** BF Construction
- **Domínio:** bfconstruction.co.uk
- **Localização:** London, United Kingdom
- **Especialidade:** Kitchen & Bathroom Renovations
- **Contacto:** +44 (0)7865 516023 (WhatsApp) | bfconstruction26@gmail.com

---

## Estrutura do Projecto

```
bf-construction-website/
├── src/
│   ├── App.jsx          # Componente principal (conteúdo do website)
│   ├── App.css          # Estilos do website
│   ├── main.jsx         # Ponto de entrada
│   └── index.css        # Estilos globais
├── public/
│   ├── kitchen-project-1.jpg      # Imagem da cozinha
│   ├── bathroom-project-1.jpg     # Imagem da casa de banho
│   └── bathroom-before-after.jpg  # Imagem before/after
├── dist/                # Ficheiros de produção (gerados)
├── package.json         # Dependências do projecto
├── vite.config.js       # Configuração do Vite
└── DEPLOYMENT_GUIDE.md  # Guia de publicação
```

---

## Tecnologia Utilizada

- **React 19** - Framework moderno
- **Vite 7** - Build tool rápido
- **CSS3** - Estilos modernos
- **Vercel** - Hosting (grátis)

---

## Desenvolvimento Local

### Instalar Dependências
```bash
npm install
```

### Iniciar Servidor de Desenvolvimento
```bash
npm run dev
```
O website estará disponível em http://localhost:5173

### Fazer Build para Produção
```bash
npm run build
```
Os ficheiros de produção estarão em `dist/`

---

## Secções do Website

1. **Home** - Hero section com chamada à acção
2. **Services** - Serviços de renovação
3. **Portfolio** - Galeria de projectos
4. **Testimonials** - Feedbacks de clientes
5. **About** - Informações sobre a empresa
6. **Contact** - Formulário de contacto e informações

---

## Editar Conteúdo

### Editar Texto
Abra `src/App.jsx` e procure o texto que quer alterar. Todas as secções estão claramente marcadas com comentários.

### Adicionar Imagens
1. Coloque as imagens em `public/`
2. Referencie em `src/App.jsx` como: `<img src="/nome-imagem.jpg" />`

### Alterar Cores
Abra `src/App.css` e procure por `:root` para alterar as cores principais:
```css
:root {
  --primary-color: #2c5f7f;      /* Azul primário */
  --secondary-color: #4a8fb9;    /* Azul secundário */
  --accent-color: #d4a574;       /* Dourado/Bege */
}
```

---

## Publicação

Siga o guia completo em `DEPLOYMENT_GUIDE.md`

### Resumo Rápido:
1. Registar domínio: bfconstruction.co.uk
2. Criar conta em Vercel
3. Conectar repositório GitHub
4. Apontar domínio para Vercel
5. Pronto! Website ao vivo em 24-48 horas

---

## Manutenção

### Adicionar Novo Testemunho
Edite `src/App.jsx` e adicione um novo card na secção de testimonials:
```jsx
<div className="testimonial-card">
  <div className="stars">
    <span>★★★★★</span>
  </div>
  <p className="testimonial-text">"Seu testemunho aqui"</p>
  <p className="testimonial-author">Nome do Cliente</p>
</div>
```

### Adicionar Novo Projecto à Galeria
Edite `src/App.jsx` e adicione um novo item na secção de portfolio:
```jsx
<div className="portfolio-item">
  <img src="/nome-imagem.jpg" alt="Descrição" />
  <div className="portfolio-info">
    <h3>Título do Projecto</h3>
    <p>Descrição do projecto</p>
  </div>
</div>
```

---

## Performance

O website foi optimizado para:
- ✅ Carregamento rápido
- ✅ SEO (Search Engine Optimization)
- ✅ Mobile responsivo
- ✅ Acessibilidade

---

## Suporte

Para dúvidas sobre:
- **Vercel:** https://vercel.com/support
- **Domínio:** Contacte o registador (Namecheap/GoDaddy)
- **Website:** Contacte o desenvolvedor

---

**Última Actualização:** 25 de Fevereiro de 2026
**Versão:** 1.0.0
