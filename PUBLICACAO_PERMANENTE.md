# 🚀 Guia de Publicação Permanente - BF Construction Website

## 📋 Resumo Executivo

Este guia irá ajudá-lo a publicar o website da BF Construction de forma **permanente e profissional** com o domínio **bfconstruction.co.uk**.

- **Tempo total:** 1-2 horas
- **Custo:** ~£10-15/ano
- **Resultado:** Website profissional permanente online

---

## ✅ O que está incluído no website

- ✅ Logo da BF Construction
- ✅ Design preto e dourado elegante
- ✅ 3 imagens de projectos (Kitchen, Bathroom, Before/After)
- ✅ Testemunhos de 3 clientes reais
- ✅ Formulário de contacto integrado com WhatsApp
- ✅ Links para Instagram, Email e WhatsApp
- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ Optimizado para performance

---

## 🎯 PASSO 1: Registar o Domínio (15 minutos)

### Opção A: Namecheap (Recomendado) ⭐

1. Aceda a **https://www.namecheap.com**
2. Clique em "Domain Search" no topo
3. Digite: **bfconstruction.co.uk**
4. Clique em "Search"
5. Se disponível, clique em "Add to Cart"
6. Proceda para checkout
7. **Crie uma conta** (se não tiver):
   - Email
   - Palavra-passe
   - Dados pessoais
8. **Escolha o método de pagamento:**
   - Cartão de crédito
   - PayPal
   - Outro método
9. **Finalize a compra** (~£10-15)

**Após a compra:**
- Receberá um email de confirmação
- Terá acesso ao painel de controlo do domínio
- Guarde as credenciais de acesso

### Opção B: GoDaddy

1. Aceda a **https://www.godaddy.com**
2. Na barra de pesquisa, digite: **bfconstruction.co.uk**
3. Clique em "Search"
4. Se disponível, clique em "Add to Cart"
5. Proceda para checkout
6. Crie uma conta ou faça login
7. Preencha os dados pessoais
8. Escolha o método de pagamento
9. Finalize a compra

---

## 🔧 PASSO 2: Preparar o Código (5 minutos)

O código do website já está pronto! Apenas precisa de fazer upload para GitHub.

### Ficheiros importantes:
```
bf-construction-website/
├── src/
│   ├── App.jsx (componente principal)
│   ├── App.css (estilos)
│   └── index.css (estilos globais)
├── public/
│   ├── logo.png (logo da empresa)
│   ├── hero-background.jpg (imagem hero)
│   ├── kitchen-project-1.jpg
│   ├── kitchen-project-2.jpg
│   ├── bathroom-project-1.jpg
│   ├── bathroom-project-2.jpg
│   └── bathroom-before-after.jpg
├── package.json (dependências)
└── vite.config.js (configuração)
```

---

## 📤 PASSO 3: Criar Conta GitHub (10 minutos)

### Se não tiver GitHub:

1. Aceda a **https://github.com/signup**
2. Preencha o formulário:
   - Email
   - Palavra-passe
   - Nome de utilizador (ex: seu-nome)
3. Verifique o email
4. Conclua a configuração

### Se já tiver GitHub:
- Faça login em **https://github.com**

---

## 📤 PASSO 4: Fazer Upload do Código para GitHub (20 minutos)

### Pré-requisitos:
- Git instalado: https://git-scm.com/download
- Conta GitHub criada

### Passos:

**1. Abra o terminal/Command Prompt**

**2. Navegue para a pasta do projecto:**
```bash
cd caminho/para/bf-construction-website
```

**3. Inicialize o repositório Git:**
```bash
git init
```

**4. Adicione todos os ficheiros:**
```bash
git add .
```

**5. Faça o primeiro commit:**
```bash
git commit -m "Initial commit - BF Construction website"
```

**6. Crie um novo repositório no GitHub:**
- Aceda a **https://github.com/new**
- Nome: **bf-construction-website**
- Descrição: "BF Construction - Kitchen & Bathroom Renovations Website"
- Deixe como "Public"
- Clique em "Create repository"

**7. Copie o URL do repositório** (ex: `https://github.com/seu-username/bf-construction-website.git`)

**8. No terminal, adicione o repositório remoto:**
```bash
git remote add origin https://github.com/seu-username/bf-construction-website.git
git branch -M main
git push -u origin main
```

**9. Pronto!** O código está no GitHub

---

## 🌐 PASSO 5: Publicar no Vercel (Hosting Grátis) (15 minutos)

### O que é Vercel?
Vercel é uma plataforma de hosting **grátis** que hospeda websites React perfeitamente. Não precisa de pagar nada!

### Passos:

**1. Aceda a Vercel:**
- https://vercel.com

**2. Clique em "Sign Up"** (canto superior direito)

**3. Escolha "Continue with GitHub"**

**4. Autorize o Vercel** a aceder ao GitHub

**5. No dashboard, clique em "Add New..." → "Project"**

**6. Clique em "Import Git Repository"**

**7. Procure por "bf-construction-website"**

**8. Clique em "Import"**

**9. Vercel detectará automaticamente:**
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

**10. Clique em "Deploy"**

**11. Aguarde 2-3 minutos** enquanto o website é publicado

**12. Receberá um URL temporário:**
- Ex: `https://bf-construction-website.vercel.app`

---

## 🔗 PASSO 6: Ligar o Domínio ao Website (15 minutos)

### No Vercel:

**1. No dashboard do Vercel, clique no seu projecto**

**2. Vá para "Settings" → "Domains"**

**3. Clique em "Add Domain"**

**4. Digite: `bfconstruction.co.uk`**

**5. Clique em "Add"**

**6. Vercel mostrará instruções de DNS**

### No Namecheap/GoDaddy:

**Opção A: Usar Nameservers (Recomendado)**

1. Aceda ao painel de controlo do seu domínio
2. Procure por "Nameservers" ou "DNS"
3. Copie os nameservers do Vercel
4. Substitua os nameservers existentes pelos do Vercel
5. Aguarde 24-48 horas para propagação DNS

**Opção B: Usar DNS Records (Mais rápido)**

1. No Vercel, copie os registos DNS
2. No seu registador, vá para "DNS Records"
3. Adicione os registos DNS do Vercel:
   - Tipo: A
   - Nome: @
   - Valor: IP do Vercel
4. Aguarde 15-30 minutos

---

## ✅ PASSO 7: Verificar se Tudo Funciona (5 minutos)

**Após 15-30 minutos (ou até 48 horas):**

1. Aceda a: **https://bfconstruction.co.uk**

2. Se vir o website, está tudo funcionando! 🎉

3. **Teste todas as secções:**
   - Home
   - Services
   - Portfolio
   - Testimonials
   - About
   - Contact

4. **Teste os links:**
   - Clique em "Get a Free Quote"
   - Clique em Instagram
   - Clique em WhatsApp
   - Preencha o formulário de contacto

---

## 📱 PASSO 8: Adicionar às Redes Sociais (5 minutos)

Agora pode partilhar o link do seu website:

### Instagram:
- Vá para o perfil da BF Construction
- Clique em "Edit Profile"
- Adicione o link na secção "Website"
- Link: `https://bfconstruction.co.uk`

### Facebook:
- Vá para a página da empresa
- Clique em "About"
- Adicione o website na secção "Website"

### WhatsApp:
- Adicione o link na descrição do perfil

### Email:
- Adicione o link na assinatura de email

### LinkedIn:
- Adicione o link no perfil da empresa

---

## 🔄 Como Fazer Alterações ao Website

Depois de publicado, pode fazer alterações facilmente:

### Para editar o website:

**1. Edite os ficheiros localmente:**
- Abra o ficheiro que quer editar
- Faça as alterações
- Guarde o ficheiro

**2. Faça commit e push para GitHub:**
```bash
git add .
git commit -m "Descrição das alterações"
git push
```

**3. Vercel fará deploy automaticamente:**
- Em ~1-2 minutos, as alterações estarão online
- Não precisa fazer nada mais!

---

## 📧 Email Corporativo (Opcional)

Se quiser email profissional (ex: info@bfconstruction.co.uk):

### Opções:

**1. Google Workspace** (Recomendado)
- https://workspace.google.com
- Custo: £5-10/mês
- Inclui Gmail, Drive, Calendar, etc.

**2. Zoho Mail** (Grátis)
- https://www.zoho.com/mail
- Grátis até 5 contas
- Pago depois

**3. Namecheap Email**
- Incluído com o domínio
- Custo: ~£1-2/mês

---

## 🆘 Troubleshooting

### O domínio não funciona após 48 horas?

1. Verifique se os nameservers foram actualizados corretamente
2. Aguarde mais tempo (DNS pode levar até 72 horas)
3. Limpe o cache do navegador:
   - Windows: `Ctrl+Shift+Delete`
   - Mac: `Cmd+Shift+Delete`
4. Tente outro navegador

### Quer adicionar mais imagens?

1. Copie a imagem para a pasta `public/`
2. Edite o `App.jsx` para adicionar a imagem
3. Faça commit e push
4. Vercel fará deploy automaticamente

### Quer mudar as cores?

1. Edite o ficheiro `src/App.css`
2. Procure por `:root { --primary-color: ...}`
3. Altere as cores
4. Faça commit e push

### Quer adicionar mais testemunhos?

1. Edite o `App.jsx`
2. Procure pela secção de Testimonials
3. Adicione um novo card com o testemunho
4. Faça commit e push

---

## 📞 Suporte

Se tiver dúvidas:

- **Vercel Support:** https://vercel.com/support
- **Namecheap Support:** https://www.namecheap.com/support/
- **GitHub Help:** https://docs.github.com

---

## ✅ Checklist Final

- [ ] Domínio registado em bfconstruction.co.uk
- [ ] Conta GitHub criada
- [ ] Código enviado para GitHub
- [ ] Conta Vercel criada
- [ ] Website publicado no Vercel
- [ ] Domínio ligado ao Vercel
- [ ] DNS propagado (aguarde 24-48h)
- [ ] Website funciona em bfconstruction.co.uk
- [ ] Todos os links funcionam
- [ ] Link adicionado às redes sociais
- [ ] Email corporativo configurado (opcional)

---

## 🎉 Parabéns!

O seu website está pronto para o mundo! 

**Link do website:** `https://bfconstruction.co.uk`

**Próximos passos:**
1. Partilhe o link nas redes sociais
2. Adicione o link à assinatura de email
3. Partilhe com clientes e potenciais clientes
4. Faça alterações conforme necessário

---

**Criado em:** 25 de Fevereiro de 2026
**Versão:** 1.0
**Suporte:** Para dúvidas, contacte o suporte técnico
