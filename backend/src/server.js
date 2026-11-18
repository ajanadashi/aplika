import express from 'express'
import { prisma } from './db.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

// Health check: the server is up and the SQLite database answers.
app.get('/health', async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`
    res.json({ status: 'ok', database: 'ok', time: new Date().toISOString() })
  } catch (err) {
    res.status(503).json({ status: 'error', database: 'unreachable', error: err.message })
  }
})

app.listen(PORT, () => {
  console.log(`Aplika backend listening on http://localhost:${PORT} (try /health)`)
})
