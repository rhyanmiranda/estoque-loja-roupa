import mongoose from "mongoose";

const fornecedorSchema = new mongoose.Schema({
  id: { type: String },
  nome: {
    type: String,
    required: [true, 'O nome do fornecedor é obrigatório']
  },
  dataCadastro: {
    type: Date,
    default: Date.now
  } 
},
{ versionKey: false })

const fornecedores = mongoose.model('fornecedores', fornecedorSchema)

export default fornecedores
