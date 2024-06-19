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
      const novoRoupa = await roupas.create(req.body)
      res.status(201).send({ NovaRoupa: novoRoupa })
    }catch(erro){
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