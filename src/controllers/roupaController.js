import fornecedores from "../Models/FornecedorSchema.js"
import roupas from "../Models/RoupaSchema.js"

class RoupaController {

  static listarRoupas = async (req, res, next) => {
    try {
      const listaRoupas = await roupas.find()
        .populate("fornecedor")
        .exec()

      res.status(200).send({ roupas: listaRoupas })
    }catch(erro){
      next(erro)
    }
  }

  static cadastrarRoupa = async (req, res, next) => {
    try {
      const { modelo, cor, tamanho, quantidade, fornecedor } = req.body

      const nomeFornecedor = await fornecedores.findOne({
        nome: fornecedor
      })

      const roupaExiste = await roupas.findOne({
        modelo,
        cor,
        tamanho,
        quantidade,
        fornecedor
      })

      if(roupaExiste){
        res.status(404).send({ message: 'Essa roupa ja foi cadastrada'})
      }

      if(nomeFornecedor !== null){
        const novoRoupa = await roupas.create(req.body)
        res.status(201).send({ NovaRoupa: novoRoupa })
      }else{
        res.status(404).send({ message: 'Fornecedor informado não está cadastrado' })
      }
    } catch(erro){
      next(erro)
    }
  }

  static atualizarRoupa = async (req, res, next) => {
    try {
      const { id } = req.params
      await roupas.findByIdAndUpdate(id, req.body)
      res.status(200).send({ message: 'roupa atualizada com sucesso' })
    }catch(erro){
      next(erro)
    }
  }

  static deletarRoupa = async (req, res, next) => {
    try {
      const { id } = req.params
      const roupaDeletada = await roupas.findByIdAndDelete(id)
      res.status(200).send({ message: 'roupa deletada com sucesso', roupa: roupaDeletada })
    }catch(erro){
      next(erro)
    }
  }
}
export default RoupaController