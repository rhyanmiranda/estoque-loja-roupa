import mongoose from "mongoose"

async function conectaDB(){
  mongoose.connect(process.env.STRING_CONNECT_DB)

  return mongoose.connection
}

export default conectaDB