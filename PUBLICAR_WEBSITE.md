# 🚀 Como Publicar o Website - Guia Simplificado

## ✅ O Que Você Tem

- ✅ Website completo e testado
- ✅ Código no GitHub: https://github.com/yasminmarquesn/bf-construction-website
- ✅ Domínio comprado: bfconstruction.co.uk

---

## 📋 Opção 1: Publicar Manualmente no Vercel (Recomendado)

### PASSO 1: Aceder ao Vercel
1. Vá para: https://vercel.com/new
2. Clique em **"Import Git Repository"**
3. Seleccione **"GitHub"**

### PASSO 2: Seleccionar o Repositório
1. Procure: **yasminmarquesn/bf-construction-website**
2. Clique em **"Import"**

### PASSO 3: Configurar o Projecto
1. **Project Name:** bf-construction-website
2. **Framework:** Vite
3. Clique em **"Deploy"**

### PASSO 4: Aguardar o Deploy
- O website será publicado em ~2-5 minutos
- Verá um link tipo: `https://bf-construction-website.vercel.app`

---

## 📋 Opção 2: Usar Vercel CLI (Mais Rápido)

### PASSO 1: Instalar Vercel CLI
```bash
npm install -g vercel
```

### PASSO 2: Fazer Login
```bash
vercel login
```
- Abra o link que aparecer
- Autorize o Vercel

### PASSO 3: Deploy
```bash
cd /home/ubuntu/bf-construction-website
vercel --prod
```

### PASSO 4: Seguir as Instruções
- Seleccione o team
- Confirme o nome do projecto
- Aguarde o deploy completar

---

## 🔗 Ligar o Domínio GoDaddy

### PASSO 1: Obter o Link do Vercel
Após o deploy, você terá um link tipo:
```
https://bf-construction-website.vercel.app
```

### PASSO 2: Configurar DNS no GoDaddy

1. Aceda a: https://www.godaddy.com
2. Clique em **"My Products"**
3. Procure o domínio **bfconstruction.co.uk**
4. Clique em **"Manage"**
5. Vá para **"DNS"**

### PASSO 3: Adicionar Nameservers

Clique em **"Nameservers"** e altere para:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
ns3.vercel-dns.com
ns4.vercel-dns.com
```

### PASSO 4: Configurar no Vercel

1. Aceda ao dashboard do Vercel
2. Clique no projecto
3. Vá para **"Settings" → "Domains"**
4. Clique em **"Add Domain"**
5. Digite: `bfconstruction.co.uk`
6. Clique em **"Add"**

### PASSO 5: Aguardar Propagação

- DNS propaga em 15 min - 48 horas
- Verifique em: https://www.whatsmydns.net

---

## ✅ Resultado Final

Após seguir os passos, o website estará acessível em:

**🌐 https://bfconstruction.co.uk**

---

## 📞 Informações

| Item | Detalhes |
|------|----------|
| **GitHub** | https://github.com/yasminmarquesn/bf-construction-website |
| **Vercel** | https://vercel.com/dashboard |
| **GoDaddy** | https://www.godaddy.com |
| **Email** | bfconstruction26@gmail.com |
| **WhatsApp** | +44 (0)7865 516023 |

---

**Escolha a Opção 1 ou 2 acima e em 5-10 minutos o website estará publicado!** 🎉
