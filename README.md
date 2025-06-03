# Product Inventory application 

## Description
This is built using Next.js 15, TypeScript, Tailwind CSS, and MySQL. It demonstrates core CRUD functionalities while following RESTful API design principles. The project is designed as a clean, scalable foundation for building full-stack applications with modern standard practices.

## 🔧 Key Features & Practices
* Robust Authentication
    Utilizes Argon2 for secure password hashing
    Implements JWT (JSON Web Tokens) for session management
    Stores tokens in HttpOnly cookies to enhance security
* Input Validation
    Uses Zod for schema-based input validation, ensuring safe and reliable request handling
* Clean Architecture
    Business logic is decoupled from API controllers to enable modular code and easier unit testing
    Follows a “fail-fast” error-handling approach, with centralized logic in errorHandler.ts
    Adopts RESTful API structure, returning well-defined JSON responses and separating backend from frontend responsibilities
* Database Access
    Powered by Prisma ORM, enabling type-safe and secure interactions with a MySQL database

## Folder structure and Purpose
crup-app/
│
├── app/                        # App Router directory (pages, layouts, routes)
│   ├── api/                    # API route handlers (RESTful endpoints)
│   └── ...                     # Page components using SSR/SSG
│
├── components/                # Reusable UI components (forms, cards, modals, etc.)
│
├── lib/                       # Core logic and utilities
│   ├── auth/                  # Functions for authentication (login, signup, token handling)
│   ├── helpers/               # Small, task-specific helper functions (e.g., formatDate)
│   ├── middleware/            # Custom middleware (e.g., auth guard, logging)
│   ├── services/              # Business/domain logic (e.g., ProductService, AuthService)
│   ├── validators/            # Zod schemas or validation logic for request bodies
│   ├── constants.ts           # Central place for static values (e.g., roles, status enums)
│   └── prisma.ts            # Prisma client instance (e.g., `export const prisma = new PrismaClient()`)
│
├── prisma/                    # Prisma schema and migrations
│   ├── schema.prisma          # Prisma data model definition
│   └── migrations/            # Database migration files
│
├── public/                    # Static assets (images, icons, etc.)
│
├── .env                       # Environment variables (DB credentials, JWT secret, etc.)
├── next.config.js             # Next.js configuration
├── tsconfig.json              # TypeScript compiler settings
├── package.json               # Project dependencies and scripts
└── README.md                  # Project overview and setup instructions

## API Documentation 
### (please visit the API Documentation, https://documenter.getpostman.com/view/10488164/2sB2qi7HYt.)
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