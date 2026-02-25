# BF Construction Website - Deployment Guide

## Guia Completo de Publicação

Este guia explica como publicar o website da BF Construction de forma permanente com o domínio **bfconstruction.co.uk**.

---

## PASSO 1: Registar o Domínio

### Opção A: Namecheap (Recomendado)
1. Aceda a https://www.namecheap.com
2. Na barra de pesquisa, procure: **bfconstruction.co.uk**
3. Clique em "Add to Cart"
4. Proceda ao checkout e complete o pagamento
5. Guarde as credenciais de login

### Opção B: GoDaddy
1. Aceda a https://www.godaddy.com
2. Procure: **bfconstruction.co.uk**
3. Adicione ao carrinho e complete o pagamento

**Custo:** ~£10-15/ano

---

## PASSO 2: Configurar Hosting (Vercel - GRÁTIS)

### 2.1 Criar Conta Vercel
1. Aceda a https://vercel.com
2. Clique em "Sign Up"
3. Escolha "Continue with GitHub" (recomendado)
4. Autorize o Vercel a aceder ao GitHub

### 2.2 Importar Projeto
1. Na dashboard do Vercel, clique em "Add New..." > "Project"
2. Seleccione "Import Git Repository"
3. Cole o URL do repositório GitHub
4. Clique em "Import"

### 2.3 Configurar Variáveis de Ambiente
1. Na página do projecto, vá a "Settings" > "Environment Variables"
2. Não há variáveis obrigatórias para este projecto
3. Clique em "Deploy"

---

## PASSO 3: Apontar Domínio para Vercel

### 3.1 Obter Nameservers do Vercel
1. Na dashboard do Vercel, vá a "Settings" > "Domains"
2. Clique em "Add Domain"
3. Digite: **bfconstruction.co.uk**
4. Escolha "Using Nameservers" (mais fácil)
5. Copie os nameservers fornecidos

### 3.2 Actualizar DNS no Registador de Domínio

**Se usou Namecheap:**
1. Aceda a https://www.namecheap.com (faça login)
2. Vá a "Domain List"
3. Clique em "Manage" ao lado de bfconstruction.co.uk
4. Vá a "Nameservers"
5. Seleccione "Custom DNS"
6. Cole os nameservers do Vercel
7. Clique em "Save"

**Se usou GoDaddy:**
1. Aceda a https://www.godaddy.com (faça login)
2. Vá a "My Products" > "Domains"
3. Clique em "Manage" ao lado de bfconstruction.co.uk
4. Vá a "Nameservers"
5. Clique em "Change Nameservers"
6. Cole os nameservers do Vercel
7. Clique em "Save"

**Nota:** As alterações de DNS podem levar 24-48 horas a propagar.

---

## PASSO 4: Verificar Publicação

1. Após 24-48 horas, aceda a https://bfconstruction.co.uk
2. O website deve estar ao vivo!
3. Verifique que todas as imagens e funcionalidades estão correctas

---

## PASSO 5: Configurar Email Corporativo (Opcional)

### Opção A: Google Workspace
1. Aceda a https://workspace.google.com
2. Escolha "Business Starter" (£4.80/utilizador/mês)
3. Siga as instruções para adicionar o domínio
4. Crie contas de email (ex: info@bfconstruction.co.uk)

### Opção B: Zoho Mail
1. Aceda a https://www.zoho.com/mail
2. Escolha o plano gratuito ou pago
3. Configure o domínio
4. Crie contas de email

---

## PASSO 6: Configurar SSL (Automático)

Vercel configura SSL automaticamente! O seu website será acessível em:
- https://bfconstruction.co.uk (seguro)
- https://www.bfconstruction.co.uk (seguro)

---

## Troubleshooting

### O domínio não está a funcionar
- Aguarde 24-48 horas para propagação de DNS
- Verifique os nameservers no registador de domínio
- Limpe a cache do navegador (Ctrl+Shift+Delete)

### As imagens não aparecem
- Verifique que as imagens estão na pasta `public/`
- Faça um novo deploy no Vercel

### Quer fazer alterações ao website?

Se precisar de actualizar conteúdo:
1. Edite os ficheiros no repositório GitHub
2. Faça commit e push
3. Vercel faz deploy automático em segundos!

---

## Ficheiros Importantes

- `src/App.jsx` - Componente principal (conteúdo)
- `src/App.css` - Estilos do website
- `public/` - Imagens e activos
- `package.json` - Dependências

---

## Suporte

Se tiver dúvidas:
- Contacte o suporte do Vercel: https://vercel.com/support
- Contacte o suporte do Namecheap/GoDaddy
- Ou contacte o desenvolvedor do website

---

**Parabéns! O seu website está pronto para o mundo! 🚀**
