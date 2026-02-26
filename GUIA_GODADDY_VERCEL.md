# 🔗 Guia: Ligar Domínio GoDaddy ao Vercel

## Você comprou o domínio no GoDaddy - Perfeito! ✅

Agora vamos ligar o domínio **bfconstruction.co.uk** ao website no Vercel.

---

## 📋 PASSO 1: Obter os Registos DNS do Vercel

### 1.1 Aceda ao Vercel
1. Vá para: https://vercel.com/dashboard
2. Clique no projecto **"bf-construction-website"**
3. Clique em **"Settings"** (no menu superior)
4. Clique em **"Domains"** (no menu lateral esquerdo)

### 1.2 Adicionar o Domínio
1. Clique em **"Add"** ou **"Add Domain"**
2. Digite: `bfconstruction.co.uk`
3. Clique em **"Add"**

### 1.3 Copiar os Registos DNS
O Vercel vai mostrar os registos DNS. **Copie:**
- **Tipo A:** 76.76.19.89
- **CNAME para www:** bf-construction-website.vercel.app

---

## 📋 PASSO 2: Configurar DNS no GoDaddy

### 2.1 Aceder ao GoDaddy
1. Vá para: https://www.godaddy.com
2. Faça login com as suas credenciais
3. Clique em **"My Products"** ou **"Meus Produtos"**
4. Procure o domínio **bfconstruction.co.uk**
5. Clique em **"Manage"** ou **"Gerir"**

### 2.2 Aceder aos DNS
1. Clique em **"DNS"** ou **"Definições de DNS"**
2. Procure a secção **"DNS Records"** ou **"Registos DNS"**
3. Pode ver registos já existentes (pode deixá-los)

### 2.3 Adicionar Registos do Vercel

**Opção A: Usar Nameservers do Vercel (Recomendado)**

1. Procure **"Nameservers"** ou **"Servidores de Nomes"**
2. Clique em **"Change"** ou **"Alterar"**
3. Seleccione **"Custom Nameservers"** ou **"Servidores de Nomes Personalizados"**
4. Adicione os nameservers do Vercel:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
   - `ns3.vercel-dns.com`
   - `ns4.vercel-dns.com`
5. Clique em **"Save"** ou **"Guardar"**

**OU**

**Opção B: Adicionar Registos DNS Manualmente**

1. Procure **"DNS Records"** ou **"Registos DNS"**
2. Clique em **"Add"** ou **"Adicionar"**
3. Adicione o registo **A**:
   - **Type:** A
   - **Name:** @ (ou deixe em branco)
   - **Value:** 76.76.19.89
   - **TTL:** 3600
   - Clique em **"Save"**

4. Adicione o registo **CNAME** para www:
   - **Type:** CNAME
   - **Name:** www
   - **Value:** bf-construction-website.vercel.app
   - **TTL:** 3600
   - Clique em **"Save"**

---

## 📋 PASSO 3: Verificar no Vercel

### 3.1 Voltar ao Vercel
1. Vá para: https://vercel.com/dashboard
2. Clique no projecto **"bf-construction-website"**
3. Vá para **"Settings"** → **"Domains"**

### 3.2 Verificar o Domínio
1. Deve ver o domínio **bfconstruction.co.uk** listado
2. O estado pode ser:
   - **Pending Verification** (Pendente de Verificação) - Normal, aguarde
   - **Valid Configuration** (Configuração Válida) - Pronto!
   - **Invalid Configuration** (Configuração Inválida) - Verifique os registos

---

## ⏱️ PASSO 4: Aguardar Propagação DNS

### Quanto tempo demora?
- **Geralmente:** 15 minutos a 1 hora
- **Máximo:** 24-48 horas
- **Verificar:** https://www.whatsmydns.net

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

## 🔍 Troubleshooting

### Problema: "Invalid Configuration"
**Solução:**
1. Verifique os registos DNS no GoDaddy
2. Certifique-se de que copiou correctamente:
   - A: 76.76.19.89
   - CNAME: bf-construction-website.vercel.app
3. Aguarde 15-30 minutos
4. Clique em "Refresh" no Vercel

### Problema: "Pending Verification" após 1 hora
**Solução:**
1. Verifique em: https://www.whatsmydns.net
2. Se o DNS propagou, clique em "Refresh" no Vercel
3. Se não propagou, aguarde mais tempo

### Problema: Domínio não funciona
**Solução:**
1. Verifique se o domínio está activo no GoDaddy
2. Verifique se os registos DNS estão correctos
3. Limpe o cache do navegador (Ctrl+Shift+Delete)
4. Tente noutro navegador

---

## 📞 Contacto

Se tiver dúvidas:
- **GoDaddy Support:** https://www.godaddy.com/help
- **Vercel Support:** https://vercel.com/help
- **Email:** bfconstruction26@gmail.com

---

## 🎉 Parabéns!

Após a propagação DNS, o seu website estará **100% online e permanente**! 🚀

**Link:** https://bfconstruction.co.uk
