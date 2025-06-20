const OrdemServico = require('../models/OrdemServico');

exports.abrirOrdemServico = async (req, res) => {
  try {
    const { clienteId, veiculoId, descricaoProblema } = req.body;
    const ordem = new OrdemServico({ clienteId, veiculoId, descricaoProblema });
    await ordem.save();
    return res.status(201).json(ordem);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao abrir ordem de serviço.', error: error.message });
  }
};

exports.fecharOrdemServico = async (req, res) => {
  try {
    const { id } = req.params;
    const { servicosRealizados, custoTotal } = req.body;
    const ordem = await OrdemServico.findById(id);
    if (!ordem) {
      return res.status(404).json({ message: 'Ordem de serviço não encontrada.' });
    }
    if (ordem.status === 'Fechada') {
      return res.status(400).json({ message: 'Ordem de serviço já está fechada.' });
    }
    ordem.servicosRealizados = servicosRealizados;
    ordem.custoTotal = custoTotal;
    ordem.status = 'Fechada';
    ordem.dataFechamento = new Date();
    await ordem.save();
    return res.status(200).json(ordem);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao fechar ordem de serviço.', error: error.message });
  }
};

exports.listarOrdensServico = async (req, res) => {
  try {
    const ordens = await OrdemServico.find().populate('clienteId').populate('veiculoId');
    return res.status(200).json(ordens);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao listar ordens de serviço.', error: error.message });
  }
};
