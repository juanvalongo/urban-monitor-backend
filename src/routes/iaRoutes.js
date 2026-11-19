// ROUTES da IA.

const express = require('express');
const controller = require('../controllers/iaController');

const router = express.Router();

router.post('/analise/:id', controller.analisarOcorrencia);

module.exports = router;
