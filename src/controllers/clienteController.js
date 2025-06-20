const Cliente = require('../models/Cliente');

exports.registrarCliente = async (req, res) => {
  try {
    const cliente = new Cliente(req.body);
    await cliente.save();
    return res.status(201).json(cliente);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'CPF já cadastrado.' });
    }
    return res.status(500).json({ message: 'Erro ao registrar cliente.', error: error.message });
  }
};
