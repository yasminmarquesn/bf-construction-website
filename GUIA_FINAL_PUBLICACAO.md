# 🚀 GUIA FINAL - Publicar Website Permanente da BF Construction

## 📋 Resumo Executivo

Este guia vai transformar o website da BF Construction numa solução **permanente, profissional e online** com o domínio **bfconstruction.co.uk**.

**Tempo total:** 1-2 horas
**Custo:** ~£10-15/ano (apenas domínio)
**Resultado:** Website profissional permanente online 24/7

---

## ✅ Website Completo e Pronto

O website está 100% pronto com:

✅ **Logo da BF Construction** - Profissional e elegante
✅ **Design Preto e Dourado** - Cores sofisticadas
✅ **5 Imagens de Projectos** - Kitchen, Bathroom, Before/After
✅ **Testemunhos de Clientes** - 3 clientes reais com 5 estrelas
✅ **Contacto Completo** - WhatsApp, Email, Instagram
✅ **Totalmente Responsivo** - Mobile, Tablet, Desktop
✅ **17+ Anos de Experiência** - Mencionado no website
✅ **Serviços Completos** - Bathroom, Kitchen, Full Home Renovations

---

## 🎯 5 PASSOS SIMPLES PARA PUBLICAR

### PASSO 1️⃣: Registar o Domínio (15 minutos)

**Opção A: Namecheap (Recomendado)**

1. Aceda a: **https://www.namecheap.com**
2. Na barra de pesquisa, digite: `bfconstruction.co.uk`
3. Clique em "Search"
4. Se disponível, clique em "Add to Cart"
5. Proceda para "Checkout"
6. **Se não tiver conta:**
   - Clique em "Create Account"
   - Preencha: Email, Palavra-passe, Nome
   - Verifique o email
7. **Dados de Facturação:**
   - Nome completo
   - Morada
   - Telefone
8. **Método de Pagamento:**
   - Cartão de crédito
   - PayPal
   - Outro
9. **Finalize a compra** (~£10-15)

**Após a compra:**
- Receberá email de confirmação
- Terá acesso ao painel de controlo
- **Guarde as credenciais!**

---

### PASSO 2️⃣: Criar Conta GitHub (10 minutos)

**Se não tiver GitHub:**

1. Aceda a: **https://github.com/signup**
2. Preencha o formulário:
   - Email
   - Palavra-passe (forte!)
   - Nome de utilizador (ex: seu-nome-ou-empresa)
3. Clique em "Create account"
4. Verifique o email
5. Conclua a configuração

**Se já tiver GitHub:**
- Faça login em: **https://github.com**

---

### PASSO 3️⃣: Fazer Upload do Código para GitHub (20 minutos)

**Pré-requisitos:**
- Git instalado: https://git-scm.com/download
- Conta GitHub criada

**Instruções:**

**1. Abra o Terminal/Command Prompt**

**2. Navegue para a pasta do projecto:**
```bash
cd caminho/para/bf-construction-website
```

**3. Inicialize o Git:**
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
- Aceda a: **https://github.com/new**
- **Repository name:** `bf-construction-website`
- **Description:** "BF Construction - Kitchen & Bathroom Renovations Website"
- Deixe como **Public**
- Clique em **"Create repository"**

**7. Copie o URL do repositório**
- Exemplo: `https://github.com/seu-username/bf-construction-website.git`

**8. No terminal, execute:**
```bash
git remote add origin https://github.com/seu-username/bf-construction-website.git
git branch -M main
git push -u origin main
```

**9. Pronto!** O código está no GitHub ✅

---

### PASSO 4️⃣: Publicar no Vercel (Hosting Grátis) (15 minutos)

**O que é Vercel?**
- Plataforma de hosting **GRÁTIS**
- Ideal para websites React
- Deploy automático
- HTTPS seguro incluído
- Sem custos mensais!

**Instruções:**

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
- Exemplo: `https://bf-construction-website.vercel.app`

**Pronto!** O website está online! ✅

---

### PASSO 5️⃣: Ligar o Domínio ao Website (15 minutos)

**No Vercel:**

**1. No dashboard do Vercel, clique no seu projecto**

**2. Vá para "Settings" → "Domains"**

**3. Clique em "Add Domain"**

**4. Digite: `bfconstruction.co.uk`**

**5. Clique em "Add"**

**6. Vercel mostrará instruções de DNS**

**No Namecheap:**

**Opção A: Usar Nameservers (Recomendado)**

1. Aceda ao painel de controlo do Namecheap
2. Procure por "Domain List"
3. Clique em "Manage" ao lado do seu domínio
4. Vá para "Nameservers"
5. Copie os nameservers do Vercel
6. Substitua os nameservers existentes
7. Clique em "Save Changes"
8. **Aguarde 24-48 horas** para propagação DNS

**Opção B: Usar DNS Records (Mais rápido)**

1. No Vercel, copie os registos DNS
2. No Namecheap, vá para "DNS Records"
3. Adicione os registos do Vercel:
   - Tipo: A
   - Nome: @
   - Valor: IP do Vercel
4. Clique em "Save"
5. **Aguarde 15-30 minutos**

---

## ✅ VERIFICAÇÃO FINAL

**Após 15-30 minutos (ou até 48 horas):**

1. Aceda a: **https://bfconstruction.co.uk**

2. Se vir o website, está tudo funcionando! 🎉

3. **Teste todas as funcionalidades:**
   - ✅ Home - Vê o hero section?
   - ✅ Services - Vê os 3 serviços?
   - ✅ Portfolio - Vê as 5 imagens?
   - ✅ Testimonials - Vê os testemunhos?
   - ✅ About - Vê a informação da empresa?
   - ✅ Contact - Consegue enviar mensagem?
   - ✅ Instagram - Link funciona?
   - ✅ WhatsApp - Link funciona?

---

## 📱 ADICIONAR ÀS REDES SOCIAIS

**Instagram:**
- Vá para o perfil da BF Construction
- Clique em "Edit Profile"
- Adicione na secção "Website": `https://bfconstruction.co.uk`

**Facebook:**
- Vá para a página da empresa
- Clique em "About"
- Adicione o website

**WhatsApp:**
- Adicione o link na descrição do perfil

**Email:**
- Adicione à assinatura de email

**LinkedIn:**
- Adicione ao perfil da empresa

---

## 🔄 COMO FAZER ALTERAÇÕES AO WEBSITE

Depois de publicado, pode fazer alterações facilmente:

**1. Edite os ficheiros localmente:**
```bash
# Abra o ficheiro que quer editar
# Faça as alterações
# Guarde o ficheiro
```

**2. Faça commit e push:**
```bash
git add .
git commit -m "Descrição das alterações"
git push
```

**3. Vercel fará deploy automaticamente:**
- Em ~1-2 minutos, as alterações estarão online
- Não precisa fazer mais nada!

---

## 📧 EMAIL CORPORATIVO (Opcional)

Se quiser email profissional (ex: info@bfconstruction.co.uk):

**Opção 1: Google Workspace** (Recomendado)
- https://workspace.google.com
- Custo: £5-10/mês
- Inclui Gmail, Drive, Calendar, etc.

**Opção 2: Zoho Mail** (Grátis)
- https://www.zoho.com/mail
- Grátis até 5 contas
- Pago depois

**Opção 3: Namecheap Email**
- Incluído com o domínio
- Custo: ~£1-2/mês

---

## 💰 CUSTOS FINAIS

| Item | Custo | Duração |
|------|-------|---------|
| Domínio (bfconstruction.co.uk) | £10-15 | 1 ano |
| Hosting (Vercel) | **GRÁTIS** | Ilimitado |
| Email corporativo (opcional) | £0-10/mês | Mensal |
| **TOTAL** | **£10-15/ano** | - |

---

## 🆘 TROUBLESHOOTING

**O domínio não funciona após 48 horas?**
1. Verifique se os nameservers foram actualizados
2. Aguarde mais tempo (DNS pode levar até 72 horas)
3. Limpe o cache do navegador: `Ctrl+Shift+Delete`
4. Tente outro navegador

**Quer adicionar mais imagens?**
1. Copie a imagem para a pasta `public/`
2. Edite o `App.jsx` para adicionar a imagem
3. Faça commit e push
4. Vercel fará deploy automaticamente

**Quer mudar as cores?**
1. Edite o ficheiro `src/App.css`
2. Procure por `:root { --primary-color: ...}`
3. Altere as cores
4. Faça commit e push

**Quer adicionar mais testemunhos?**
1. Edite o `App.jsx`
2. Procure pela secção de Testimonials
3. Adicione um novo card
4. Faça commit e push

---

## ✅ CHECKLIST FINAL

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

## 🎉 PARABÉNS!

O seu website está pronto para o mundo!

**Link do website:** `https://bfconstruction.co.uk`

**Próximos passos:**
1. ✅ Partilhe o link nas redes sociais
2. ✅ Adicione o link à assinatura de email
3. ✅ Partilhe com clientes e potenciais clientes
4. ✅ Faça alterações conforme necessário

---

## 📞 SUPORTE

Se tiver dúvidas:

- **Vercel Support:** https://vercel.com/support
- **Namecheap Support:** https://www.namecheap.com/support/
- **GitHub Help:** https://docs.github.com
- **Git Documentation:** https://git-scm.com/doc

---

**Criado em:** 25 de Fevereiro de 2026
**Versão:** 2.0 - Final
**Status:** ✅ Pronto para Publicação

---

## 🎯 RESUMO RÁPIDO

1. **Registar domínio** → Namecheap.com
2. **Criar GitHub** → GitHub.com
3. **Upload código** → Git push
4. **Publicar** → Vercel.com
5. **Ligar domínio** → DNS configuration
6. **Pronto!** → Website online em bfconstruction.co.uk

**Tempo total:** ~1-2 horas
**Custo:** ~£10-15/ano
**Resultado:** Website profissional permanente! 🚀
