const mongoose = require('mongoose');

const ConcessionariaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cnpj: { type: String, required: true, unique: true },
  endereco: {
    rua: String,
    cidade: String,
    estado: String
  },
  contato: {
    telefone: String,
    email: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Concessionaria', ConcessionariaSchema);
