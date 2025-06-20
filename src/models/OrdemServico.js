const mongoose = require('mongoose');

const OrdemServicoSchema = new mongoose.Schema({
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
  veiculoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Veiculo', required: true },
  descricaoProblema: { type: String, required: true },
  dataAbertura: { type: Date, default: Date.now },
  status: { type: String, enum: ['Aberta', 'Fechada'], default: 'Aberta' },
  dataFechamento: Date,
  servicosRealizados: String,
  custoTotal: Number
}, { timestamps: true });

module.exports = mongoose.model('OrdemServico', OrdemServicoSchema);
