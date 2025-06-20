const mongoose = require('mongoose');

const VeiculoSchema = new mongoose.Schema({
  placa: { type: String, required: true, unique: true },
  chassi: { type: String, required: true, unique: true },
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  anoFabricacao: Number,
  cor: String,
  combustivel: String,
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Veiculo', VeiculoSchema);
