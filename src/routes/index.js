import express from 'express';
import roupas from './roupaRoute.js'
import fornecedores from './fornecedorRoute.js'

const router = (app) => {
  app.route('/')
    .get((req, res) => res.status(200).send('Página principal'))

    app.use(
      express.json(),
      roupas,
      fornecedores
    )
}

export default router