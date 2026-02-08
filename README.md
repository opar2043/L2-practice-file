const fs = require("fs");

const content = `# Prisma Postgres Blog App 🚀

Backend API built with:

- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL
- Better Auth
- Dotenv

---

## 🛠 Setup

### Install Dependencies

\`\`\`bash
npm install
\`\`\`

---

### Initialize Prisma

\`\`\`bash
npx prisma init
\`\`\`

---

### Run Migration

\`\`\`bash
npx prisma migrate dev --name init
\`\`\`

---

### Generate Prisma Client

\`\`\`bash
npx prisma generate
\`\`\`

---

### Start Dev Server

\`\`\`bash
npm run dev
\`\`\`

---

### Seed Admin

\`\`\`bash
npm run seed:admin
\`\`\`

---

### Prisma Studio

\`\`\`bash
npx prisma studio
\`\`\`

---

## 📁 Folder Structure

\`\`\`
src/
 prisma/
 .env
\`\`\`

---

## 👨‍💻 Author

Rijoan Rashid  
Frontend React Developer & CSE Student

---

`;

fs.writeFileSync("README.md", content);

console.log("✅ README.md generated successfully!");
