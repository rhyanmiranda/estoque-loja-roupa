import mongoose from "mongoose";

const fornecedorSchema = new mongoose.Schema({
  id: { type: String },
  nome: {
    type: String,
    required: [true, 'O nome do fornecedor é obrigatório']
  },
  dataCadastro: { type: Date } 
},
{ versionKey: false })

const fornecedores = mongoose.model('fornecedores', fornecedorSchema)

export default fornecedores
