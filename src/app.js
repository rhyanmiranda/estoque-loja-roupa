import express from 'express'
import conectaDB from './utils/conectaDB.js'
import router from './routes/index.js'

const db = await conectaDB()

db.on('error', (erro) => {
  console.error('Erro ao conectar com o Banco', erro.message)
})
db.once('open', () => {
  console.log('Conexão com DB feita com sucesso')
})

const app = express()
app.use(express.json())
router(app)

export default app