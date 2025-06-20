const Veiculo = require('../models/Veiculo');

exports.registrarVeiculo = async (req, res) => {
  try {
    const veiculo = new Veiculo(req.body);
    await veiculo.save();
    return res.status(201).json(veiculo);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Placa ou chassi já cadastrado.' });
    }
    return res.status(500).json({ message: 'Erro ao registrar veículo.', error: error.message });
  }
};
