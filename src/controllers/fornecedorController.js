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
        const nomeFornecedor = req.body.nome
        const dadosFornecedor = await fornecedores.findOne({
          nome: nomeFornecedor
        })

        if(dadosFornecedor === null){
          const novoFornecedor = await fornecedores.create(req.body)
            res.status(201).send({
              message: 'Fornecedor cadastrado com sucesso',
              fornecedor: novoFornecedor
          })
        } else {
            res.status(400).send({
            message: 'Fornecedor já existe'
          })
        }
      } catch(erro) {
          next(erro)
      }
    }

    static atualizarFornecedor = async (req, res, next) => {
      try {
        const { id } = req.params
        await fornecedores.findByIdAndUpdate(id, req.body)
        res.status(200).send({
          message: 'Dados Atualizados'
        })
      }catch(erro){
        next(erro)
      }
    }

    static deletarFornecedor = async (req, res, next) => {
      try{
        const id = req.params.id
        const deletaFornecedor = await fornecedores.findByIdAndDelete(id)
        res.status(200).send({
          message: 'Fornecedor deletado com sucesso',
          fornecedor: deletaFornecedor.nome
        })
      }catch(erro) {
        next(erro)
      }
    }
}

export default FornecedorController

