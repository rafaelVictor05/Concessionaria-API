const express = require('express');
const concessionariaController = require('../controllers/concessionariaController');
const clienteController = require('../controllers/clienteController');
const veiculoController = require('../controllers/veiculoController');
const ordemServicoController = require('../controllers/ordemServicoController');

const router = express.Router();

router.post('/concessionarias', concessionariaController.registrarConcessionaria);
router.post('/clientes', clienteController.registrarCliente);
router.post('/veiculos', veiculoController.registrarVeiculo);
router.post('/ordens-servico', ordemServicoController.abrirOrdemServico);
router.get('/ordens-servico', ordemServicoController.listarOrdensServico);
router.put('/ordens-servico/:id/fechar', ordemServicoController.fecharOrdemServico);

module.exports = router;
