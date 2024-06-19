import fornecedores from '../Models/FornecedorSchema.js'

class FornecedorController {

    static listarFornecedores = async (req, res, next) => {
     try {
      const listaFornecedores = await fornecedores.find()
      res.status(200).send({
        message: 'Lista de Fornecedores',
        fornecedores: listaFornecedores
      })
     }catch(erro) {
        next(erro) 
     }
    }

    static cadastrarFornecedores = async (req, res, next) => {
      try {
        const novoFornecedor = await fornecedores.create(req.body)
        res.status(201).send({
          message: 'Fornecedor cadastrado com sucesso',
          fornecedor: novoFornecedor
        })
      }catch(erro) {
        next(erro)
      }
    }

    static atualizarFornecedor = async (req, res, next) => {
      try {
        const { id } = req.params
        const atualizarFornecedor = await fornecedores.findByIdAndUpdate(id, req.body)
        res.status(200).send({message: 'Dados Atualizados'})
      }catch(erro){
        next(erro)
      }
    }

    static deletarFornecedor = async (req, res, next) => {
      try{
        const { id } = req.params
        const deletaFornecedor = await fornecedores.findByIdAndDelete(id)
        const fornecedor = await fornecedores.findById(id)
        res.status(200).send({
          message: 'Fornecedor deletado com sucesso',
          fornecedor: fornecedor.nome
        })
      }catch(erro) {
        next(erro)
      }
    }
}

export default FornecedorController

