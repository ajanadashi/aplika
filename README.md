# Aplika

**Every application, one place.** A simple web app where job seekers save every application, move it through stages and get an email reminder to follow up.

## Start the project (Node.js 20+)

After cloning this repository and opening its folder:

```bash
npm install
npm run db:migrate
npm run dev
```

- Landing page: http://localhost:5173
- Health check: http://localhost:3000/health
- Tables: `backend/prisma/aplika.db` (browse them with `npm run db:studio -w backend`)

## Docs

Everything about the product is in [`docs/`](docs/): [business](docs/business.md), [brand book](docs/brand-book.md), [rules and flows](docs/rules-and-flows.md), [stack](docs/stack.md) and [data model](docs/data-model.md).
