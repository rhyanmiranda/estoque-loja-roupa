import express from 'express'
import RoupaController from '../controllers/roupaController.js'

const router = express.Router() 

router
  .get('/roupas', RoupaController.listarRoupas)
  .post('/roupas', RoupaController.cadastrarRoupa)
  .put('/roupas/:id', RoupaController.atualizarRoupa)
  .delete('/roupas/:id', RoupaController.deletarRoupa)


export default router