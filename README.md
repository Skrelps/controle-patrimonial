# Controle Patrimonial

[🇺🇸 English Version](#-english-version) | [🇧🇷 Versão em Português](#-versão-em-português)

---

## 🇧🇷 Versão em Português

Aplicação web voltada para a gestão patrimonial que centraliza o cadastro e o acompanhamento de materiais, garantindo segurança no acesso via autenticação por token e agilidade na tomada de decisões através de um dashboard integrado.

## 🚀 Tecnologias

### Backend
- **Node.js** & **Express**
- **Prisma ORM**
- **PostgreSQL**
- **JWT (JSON Web Token)** para autenticação

### Frontend
- **React** com **Vite**
- **Axios**
- **Bootstrap**

---

## ⚙️ Funcionalidades
- **Autenticação:** Sistema de login seguro utilizando JWT.
- **Gestão de Ativos:** Cadastro, listagem e exclusão de patrimônios.
- **Dashboard:** Visualização rápida de métricas e gráficos atualizados.

---

## 🏃 Como Executar o Projeto

Certifique-se de ter o Node.js e o PostgreSQL instalados em sua máquina.

### 1. Clonar o repositório
```bash
git clone [https://github.com/Skrelps/controle-patrimonial.git](https://github.com/Skrelps/controle-patrimonial.git)
cd controle-patrimonial
2. Configurar o Backend
Bash
cd backend
npm install
Crie um arquivo .env na pasta backend com este modelo:

Snippet de código
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"
JWT_SECRET="sua_chave_secreta_aqui"
Execute as migrações e inicie:

Bash
npx prisma migrate dev
npm run dev
3. Configurar o Frontend
Abra outra aba no terminal e execute:

Bash
cd frontend
npm install
npm run dev

3. Logo abaixo desse texto que você acabou de colar, dê um enter e cole a **Parte 2**:

```markdown
---
---

## 🇺🇸 English Version

A full-stack web application designed for asset managers to track, register, and administrate organizational materials.

## 🚀 Tech Stack

### Backend
- **Node.js** & **Express**
- **Prisma ORM**
- **PostgreSQL**
- **JWT** for authentication

### Frontend
- **React** with **Vite**
- **Axios**
- **Bootstrap**

---

## ⚙️ Features
- **Authentication:** Secure login system using JWT.
- **Asset Management:** Register, list, and delete assets seamlessly.
- **Dashboard:** Visual overview with interactive charts for inventory monitoring.

---

##  How to Run the Project

Make sure you have Node.js and PostgreSQL installed.

### 1. Clone the repository
```bash
git clone [https://github.com/Skrelps/controle-patrimonial.git](https://github.com/Skrelps/controle-patrimonial.git)
cd controle-patrimonial
2. Set up the Backend
Bash
cd backend
npm install
Create a .env file inside the backend folder:

Snippet:
DATABASE_URL="postgresql://user:password@localhost:5432/db_name?schema=public"
JWT_SECRET="your_secret_key_here"
Run migrations and start:

Bash
npx prisma migrate dev
npm run dev
3. Set up the Frontend
Open another terminal tab and run:

Bash
cd frontend
npm install
npm run dev

Depois disso, é só rolar a página para cima ou para baixo, clicar no botão verde **"Commit changes..."** e o seu README vai estar completo e certinho! Me avisa se deu certo agora.

---
*Correção gramatical:* Nenhuma alteração necessária, sua mensagem foi correta ao apontar o problema de envio.
