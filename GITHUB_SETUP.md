# Configurar Repositório GitHub

## Passo 1: Criar Repositório no GitHub

1. Aceda a https://github.com/new
2. Nome do repositório: `bf-construction-website`
3. Descrição: "BF Construction - London Kitchen & Bathroom Specialists"
4. Escolha "Public" (para Vercel conseguir aceder)
5. Clique em "Create repository"

## Passo 2: Fazer Push do Código

```bash
# Na pasta do projecto
cd /home/ubuntu/bf-construction-website

# Inicializar git (se ainda não estiver)
git init

# Adicionar todos os ficheiros
git add .

# Fazer commit inicial
git commit -m "Initial commit: BF Construction website"

# Adicionar remote (substitua USERNAME pelo seu username do GitHub)
git remote add origin https://github.com/USERNAME/bf-construction-website.git

# Fazer push para main branch
git branch -M main
git push -u origin main
```

## Passo 3: Conectar com Vercel

1. Aceda a https://vercel.com
2. Clique em "New Project"
3. Clique em "Import Git Repository"
4. Seleccione o repositório `bf-construction-website`
5. Clique em "Import"
6. Vercel fará o build automaticamente
7. Após alguns minutos, o website estará ao vivo!

## Passo 4: Apontar Domínio

1. Na dashboard do Vercel, vá a "Settings" > "Domains"
2. Clique em "Add Domain"
3. Digite: `bfconstruction.co.uk`
4. Escolha "Using Nameservers"
5. Copie os nameservers
6. Vá ao registador de domínio e actualizar os nameservers
7. Aguarde 24-48 horas para propagação

## Pronto!

O website estará disponível em https://bfconstruction.co.uk

Qualquer alteração que fizer no GitHub será automaticamente publicada no website!
