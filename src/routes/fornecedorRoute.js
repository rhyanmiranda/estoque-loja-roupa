import express from 'express'
import FornecedorController from '../controllers/fornecedorController.js'

const router = express.Router()

router
  .get('/fornecedores', FornecedorController.listarFornecedores)
  .post('/fornecedores', FornecedorController.cadastrarFornecedores)
  .put('/fornecedores/:id', FornecedorController.atualizarFornecedor)
  .delete('/fornecedores/:id', FornecedorController.deletarFornecedor)

  export default router