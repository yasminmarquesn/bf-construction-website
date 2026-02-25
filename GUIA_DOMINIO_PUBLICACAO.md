# Guia Completo: Registar Domínio e Publicar Website

## 📋 Resumo Rápido
- **Tempo total:** ~1-2 horas
- **Custo:** ~£10-15/ano (domínio) + hosting grátis
- **Resultado:** Website permanente em bfconstruction.co.uk

---

## PASSO 1: Registar o Domínio (15 minutos)

### Opção A: Namecheap (Recomendado)
1. Aceda a **https://www.namecheap.com**
2. Clique em "Domain Search" no topo
3. Digite: **bfconstruction.co.uk**
4. Clique em "Search"
5. Se disponível, clique em "Add to Cart"
6. Proceda para checkout
7. Crie uma conta ou faça login
8. Preencha os dados pessoais
9. Escolha o método de pagamento (cartão de crédito, PayPal, etc.)
10. Finalize a compra

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

**Nota:** Após a compra, receberá um email de confirmação com os dados de acesso.

---

## PASSO 2: Criar Conta no Vercel (Hosting Grátis) (10 minutos)

### O que é Vercel?
Vercel é uma plataforma de hosting **grátis** que hospeda websites React perfeitamente.

### Como criar conta:
1. Aceda a **https://vercel.com**
2. Clique em "Sign Up" (canto superior direito)
3. Escolha "Continue with GitHub" (mais fácil)
4. Se não tiver GitHub, crie uma conta em **https://github.com/signup**
5. Autorize o Vercel a aceder ao GitHub
6. Pronto! Conta criada

---

## PASSO 3: Fazer Upload do Código para GitHub (15 minutos)

### Pré-requisitos:
- Conta GitHub criada
- Git instalado no computador (https://git-scm.com/download)

### Passos:
1. Abra o terminal/Command Prompt
2. Navegue para a pasta do projeto:
   ```
   cd caminho/para/bf-construction-website
   ```

3. Inicialize o repositório Git:
   ```
   git init
   ```

4. Adicione todos os ficheiros:
   ```
   git add .
   ```

5. Faça o primeiro commit:
   ```
   git commit -m "Initial commit - BF Construction website"
   ```

6. Aceda a **https://github.com/new**
7. Crie um novo repositório com o nome: **bf-construction-website**
8. Copie o URL do repositório (ex: https://github.com/seu-username/bf-construction-website.git)

9. No terminal, adicione o repositório remoto:
   ```
   git remote add origin https://github.com/seu-username/bf-construction-website.git
   git branch -M main
   git push -u origin main
   ```

10. Pronto! O código está no GitHub

---

## PASSO 4: Publicar no Vercel (10 minutos)

1. Aceda a **https://vercel.com/dashboard**
2. Clique em "Add New..." → "Project"
3. Clique em "Import Git Repository"
4. Procure por "bf-construction-website"
5. Clique em "Import"
6. Vercel detectará automaticamente que é um projeto Vite
7. Clique em "Deploy"
8. Aguarde ~2-3 minutos
9. Receberá um URL temporário (ex: bf-construction-website.vercel.app)

---

## PASSO 5: Ligar o Domínio ao Website (15 minutos)

### No Vercel:
1. No dashboard do Vercel, clique no seu projeto
2. Vá para "Settings" → "Domains"
3. Clique em "Add Domain"
4. Digite: **bfconstruction.co.uk**
5. Clique em "Add"
6. Vercel mostrará instruções de DNS

### No Namecheap/GoDaddy:
1. Aceda ao painel de controlo do seu domínio
2. Procure por "DNS Settings" ou "Nameservers"
3. Verá instruções do Vercel com os nameservers a adicionar
4. Copie os nameservers do Vercel
5. Adicione-os ao seu registador de domínio
6. Aguarde 24-48 horas para propagação DNS

**Alternativamente (mais rápido):**
1. No Vercel, copie os registos DNS (A, CNAME, etc.)
2. No seu registador, vá para "DNS Records"
3. Adicione os registos DNS do Vercel
4. Aguarde 15-30 minutos

---

## PASSO 6: Verificar se Tudo Funciona (5 minutos)

1. Após 15-30 minutos (ou até 48 horas), aceda a:
   ```
   https://bfconstruction.co.uk
   ```

2. Se vir o website, está tudo funcionando! 🎉

3. Teste todas as secções:
   - Home
   - Services
   - Portfolio
   - Testimonials
   - About
   - Contact

---

## 📱 Adicionar às Redes Sociais

Agora pode adicionar o link às suas redes sociais:

- **Instagram:** Adicione o link na bio
- **Facebook:** Adicione o link na página da empresa
- **WhatsApp:** Adicione o link na descrição
- **LinkedIn:** Adicione o link no perfil
- **Email:** Adicione o link na assinatura de email

**Link para partilhar:**
```
https://bfconstruction.co.uk
```

---

## 🔧 Troubleshooting

### O domínio não funciona após 48 horas?
1. Verifique se os nameservers foram actualizados corretamente
2. Aguarde mais tempo (DNS pode levar até 72 horas)
3. Limpe o cache do navegador (Ctrl+Shift+Delete)

### Quer fazer alterações ao website?
1. Edite os ficheiros localmente
2. Faça commit e push para GitHub:
   ```
   git add .
   git commit -m "Descrição das alterações"
   git push
   ```
3. Vercel fará deploy automaticamente em ~1-2 minutos

### Precisa de email corporativo?
Recomendamos:
- **Google Workspace** (https://workspace.google.com) - £5-10/mês
- **Zoho Mail** (https://www.zoho.com/mail) - Grátis até 5 contas
- **Namecheap Email** - Incluído com o domínio

---

## 📞 Suporte

Se tiver dúvidas:
- **Vercel Support:** https://vercel.com/support
- **Namecheap Support:** https://www.namecheap.com/support/
- **GitHub Help:** https://docs.github.com

---

## ✅ Checklist Final

- [ ] Domínio registado em bfconstruction.co.uk
- [ ] Conta Vercel criada
- [ ] Código enviado para GitHub
- [ ] Website publicado no Vercel
- [ ] Domínio ligado ao Vercel
- [ ] DNS propagado (aguarde 24-48h)
- [ ] Website funciona em bfconstruction.co.uk
- [ ] Link adicionado às redes sociais

---

**Parabéns! O seu website está pronto para o mundo! 🎉**
