# CLAUDE.md

Aplika: a web app where job seekers track every application and get follow-up reminders.

## The rule

**Read `docs/` before you change anything.** The product, brand book, business rules and data model are there, and code must follow them.

## Stack

- Front end: React 19 + Vite (`frontend/`)
- Back end: Node.js + Express 5 (`backend/`)
- Database: SQLite file `backend/prisma/aplika.db` (git-ignored), models and migrations with Prisma 6
- npm workspaces at the root; Node 20+

Details and reasons: `docs/stack.md`.

## Folder layout

```
aplika/
├── CLAUDE.md
├── package.json            # workspaces + root scripts
├── docs/                   # business.md, brand-book.md, rules-and-flows.md, stack.md, data-model.md, brand/
├── frontend/               # Vite + React; only the landing page for now
│   ├── public/icon.svg
│   └── src/ (App.jsx, index.css, assets/logos)
└── backend/                # Express API
    ├── src/server.js       # GET /health
    ├── src/db.js           # shared Prisma client
    └── prisma/
        ├── schema.prisma   # data models
        └── migrations/     # SQL migrations (commit these)
```

## Commands

```bash
npm install          # install front end and back end
npm run db:migrate   # create backend/prisma/aplika.db with all tables
npm run dev          # front end on http://localhost:5173, back end on http://localhost:3000/health
```

Other: `npm run db:migrate:new -w backend -- --name <change>` after editing the schema, `npm run db:studio -w backend` to browse the tables.

## Conventions

- Brand: colours `#0F2A43` ink, `#14B8A6` teal, `#F59E0B` amber (attention only), `#F7F9FB` background; fonts Plus Jakarta Sans (headings) and Inter (body). Voice: clear, friendly, direct.
- When the data model changes, update `docs/data-model.md` and its diagram too.
- Never commit `.env` or `*.db` files.
