# Product Inventory application 

## Description
This is built using **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **MySQL**, demonstrating essential **CRUD** operations while following **RESTful API design principles**. The project is designed as a clean, scalable foundation for building full-stack applications with modern standard practices.

## 🚀 Features & Best Practices

### 🔐 Robust Authentication
- Uses **Argon2** for secure password hashing
- Implements **JWT (JSON Web Tokens)** for session management
- Stores tokens in **HttpOnly cookies** for added security

### ✅ Input Validation
- Uses **Zod** for request schema validation to ensure safe and predictable data handling

### 🧱 Clean Architecture
- Business logic is **decoupled** from route handlers for better testability and maintainability
- Implements a **fail-fast** error-handling strategy via a centralized `errorHandler.ts`
- Follows a **RESTful** structure, separating frontend and backend logic cleanly

### 🗄️ Database Access with Prisma
- Utilizes **Prisma ORM** for type-safe and secure database queries
- Supports both **ORM** and **raw SQL** implementations for advanced control

---

## 📁 Folder Structure
crud-app/  
│  
├── app/ **#App Router directory (pages, layouts, routes)**  
│ ├── api/ **#API route handlers (RESTful endpoints)**  
│ └── ... **#Page components (SSR, SSG supported)**  
│  
├── components/ **#Reusable UI components (forms, cards, modals, etc.)**  
│  
├── lib/ **#Core logic and utilities**  
│ ├── auth/ **#Authentication logic (JWT, sessions)**  
│ ├── helpers/ **#Utility functions (e.g., date formatting)**  
│ ├── middleware/ **#Middleware (e.g., auth guard)**  
│ ├── services/ **#Business logic (e.g., product handling)**  
│ ├── validators/ **#Zod schemas for validating inputs**  
│ ├── constants.ts **#Application constants (e.g., roles, enums)**  
│ └── prisma.ts **#Prisma client instance**  
│  
├── prisma/ **#Prisma setup**  
│ ├── schema.prisma **#Data models**  
│ └── migrations/ **#Migration history**  
│  
├── public/ **#Static assets (images, icons, etc.)**  
│  
├── .env **#Environment variables (DB URL, secrets)**  
├── next.config.js **#Next.js configuration**  
├── tsconfig.json **#TypeScript configuration**  
├── package.json **#Dependencies and scripts**  
└── README.md **#This file**

## API Documentation   
please visit the API Documentation, **https://documenter.getpostman.com/view/10488164/2sB2qi7HYt**.    

For a demonstration comparing Prisma ORM and raw SQL queries,  
Refer to the following endpoints for examples:  

api/product/list/raw — Raw SQL query implementation  
api/product/list/orm — Prisma ORM implementation

## How to Run the Application
### Development
```bash
$ git clone https://github.com/sgv-alfred/crud-application.git
$ cd crud-application
$ npm install
$ npx prisma db push
$ npx prisma generate
$ npm run dev
```

### Production
```bash
$ git clone https://github.com/sgv-alfred/crud-application.git
$ cd crud-application
$ npm install
$ npx prisma db push
$ npx prisma generate
$ npm run build
$ npm run start
```

Note: Make sure your MySQL database is running and the connection details are properly configured in your .env file before running the commands
