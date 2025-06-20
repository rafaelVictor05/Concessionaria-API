const Concessionaria = require('../models/Concessionaria');

exports.registrarConcessionaria = async (req, res) => {
  try {
    const concessionaria = new Concessionaria(req.body);
    await concessionaria.save();
    return res.status(201).json(concessionaria);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'CNPJ já cadastrado.' });
    }
    return res.status(500).json({ message: 'Erro ao registrar concessionária.', error: error.message });
  }
};
