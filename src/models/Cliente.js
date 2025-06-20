const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
  nomeCompleto: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  contato: {
    telefone: String,
    email: String
  },
  endereco: Object
}, { timestamps: true });

module.exports = mongoose.model('Cliente', ClienteSchema);
