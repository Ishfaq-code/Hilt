require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3000
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/hilt'

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
  })
})

async function start() {
  await mongoose.connect(mongoUri)
  console.log('Connected to MongoDB')

  app.listen(port, '0.0.0.0', () => {
    console.log(`Express server listening on port ${port}`)
  })
}

start().catch((error) => {
  console.error('Failed to start server:', error)
  process.exit(1)
})
