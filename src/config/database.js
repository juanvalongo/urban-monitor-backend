// Conexão com o MongoDB usando o Mongoose.

const mongoose = require('mongoose');

async function conectarBanco() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB conectado!');
  } catch (erro) {
    console.error('Erro ao conectar no MongoDB:', erro.message);
    process.exit(1); // sem banco não faz sentido continuar
  }
}

module.exports = conectarBanco;
