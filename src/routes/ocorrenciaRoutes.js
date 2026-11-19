// ROUTES: liga cada endereço (método + caminho) a uma função do Controller.

const express = require('express');
const controller = require('../controllers/ocorrenciaController');

const router = express.Router();

router.get('/', controller.listar);
router.get('/:id', controller.buscarPorId);
router.post('/', controller.criar);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.remover);

module.exports = router;
