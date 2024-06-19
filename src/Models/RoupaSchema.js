import mongoose from "mongoose"

const roupaSchema = new mongoose.Schema({
  id: { type: String },
  modelo: {
    type: String, 
    required: [ true, 'o modelo da roupa eh obrigatório']
  },
  cor: { type: String }, 
  tamanho: { type: String },
  quantidade: { type: Number },
  fornecedor: {
    type: mongoose.Schema.Types.String,
    reference: 'fornecedor',
    required: [true, 'O campo fornecedor é obrigatório']
  },
}, { versionKey: false }) 

const roupas = mongoose.model('roupas', roupaSchema)

export default roupas

