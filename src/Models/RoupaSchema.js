import mongoose from "mongoose"

const roupaSchema = new mongoose.Schema({
  id: { type: String },
  modelo: {
    type: String, 
    required: [ true, 'o modelo da roupa eh obrigatório']
  },
  cor: {
    type: String,
    required : [true, 'a cor da roupa eh obrigatória']
  }, 
  tamanho: {
    type: String,
    required : [true, 'o tamanho da roupa eh obrigatório']
  },
  quantidade: {
    type: Number,
    required : [true, 'a quantidade de peças eh obrigatório']
  },
  fornecedor: {
    type: mongoose.Schema.Types.String,
    reference: 'fornecedor',
    required: [true, 'O campo fornecedor eh obrigatório']
  },
}, { versionKey: false }) 

const roupas = mongoose.model('roupas', roupaSchema)

export default roupas

