# 🔗 Configurar Domínio GoDaddy - Método Alternativo (Registos DNS)

Se o GoDaddy não deixou salvar todos os 4 nameservers, use este método alternativo com registos DNS!

---

## 📋 PASSO 1: Aceder ao GoDaddy

1. Vá para: https://www.godaddy.com
2. Faça login
3. Clique em **"My Products"**
4. Procure **bfconstruction.co.uk**
5. Clique em **"Manage"**

---

## 📋 PASSO 2: Ir para DNS Records

1. Clique em **"DNS"** ou **"Definições de DNS"**
2. Procure **"DNS Records"** ou **"Registos DNS"**
3. Clique em **"Edit"** ou **"Editar"** se necessário

---

## 📋 PASSO 3: Adicionar Registos DNS

### Registos a Adicionar:

**Registo 1: A Record (para o domínio principal)**
- **Type:** A
- **Name:** @ (ou deixe em branco)
- **Value:** 76.76.19.89
- **TTL:** 3600
- Clique em **"Save"**

**Registo 2: CNAME Record (para www)**
- **Type:** CNAME
- **Name:** www
- **Value:** bf-construction-website.vercel.app
- **TTL:** 3600
- Clique em **"Save"**

---

## 📋 PASSO 4: Configurar no Vercel

1. Aceda a: https://vercel.com/dashboard
2. Clique no projecto **"bf-construction-website"**
3. Clique em **"Settings"** (menu superior)
4. Clique em **"Domains"** (menu lateral)
5. Clique em **"Add Domain"** ou **"Add"**
6. Digite: `bfconstruction.co.uk`
7. Clique em **"Add"**

---

## ⏱️ PASSO 5: Aguardar Propagação

### Quanto tempo demora?

- **Geralmente:** 15 minutos a 1 hora
- **Máximo:** 24-48 horas

### Como Verificar

1. Aceda a: https://www.whatsmydns.net
2. Digite: `bfconstruction.co.uk`
3. Clique em **"Search"**
4. Aguarde até ver o IP **76.76.19.89** em todos os servidores

---

## ✅ Pronto!

Após a propagação DNS, o website estará acessível em:

**🌐 https://bfconstruction.co.uk**

---

## 🆘 Troubleshooting

### Problema: "Invalid Configuration" no Vercel
**Solução:**
1. Verifique se os registos DNS estão correctos no GoDaddy
2. Aguarde 15-30 minutos
3. Clique em "Refresh" no Vercel

### Problema: Domínio não funciona após 1 hora
**Solução:**
1. Verifique em: https://www.whatsmydns.net
2. Se o DNS propagou, clique em "Refresh" no Vercel
3. Se não propagou, aguarde mais tempo

### Problema: "Domain not found"
**Solução:**
1. Verifique se o domínio está activo no GoDaddy
2. Verifique se os registos DNS estão correctos
3. Limpe o cache do navegador (Ctrl+Shift+Delete)

---

## 📞 Informações Importantes

| Item | Detalhes |
|------|----------|
| **Domínio** | bfconstruction.co.uk |
| **IP Vercel** | 76.76.19.89 |
| **CNAME** | bf-construction-website.vercel.app |
| **GoDaddy** | https://www.godaddy.com |
| **Vercel** | https://vercel.com/dashboard |

---

**Siga este guia e em 15 minutos o domínio estará configurado!** 🚀
