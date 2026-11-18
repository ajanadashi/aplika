# Aplika: stack

| Part | Technology | Why (one sentence) |
|---|---|---|
| **Front end** | React 19 + Vite | Vite starts a React project in seconds with instant reload, and React lets the landing page grow into the application board later without a rewrite. |
| **Back end** | Node.js + Express 5 | Express is the smallest well-known Node web server, and using JavaScript on both sides means one language and one `npm install` for the whole repository. |
| **Database** | SQLite (one file: `backend/prisma/aplika.db`) | SQLite needs no server to install, so a classmate can clone the repo and have a working database in one command. |
| **Data models and migrations** | Prisma 6 | The models live in one readable file (`backend/prisma/schema.prisma`) and Prisma turns them into SQL migrations, so the tables are the same on every laptop. |

## Supporting choices

- **npm workspaces** at the root, so `npm install` installs the front end and the back end together, and **concurrently** runs both with `npm run dev`.
- **Fonts** come from Google Fonts (Plus Jakarta Sans, Inter), as the brand book says.
- Node.js 20 or newer is required (developed on Node 24).

## Later (not in this weekend)

The business doc mentions PostgreSQL and an email queue for production. Prisma can switch the same models from SQLite to PostgreSQL by changing the `provider` line, so starting on SQLite does not block that.
