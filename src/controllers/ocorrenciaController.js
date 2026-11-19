// CONTROLLER: recebe a requisição, usa o Model e devolve a resposta.

const Ocorrencia = require('../models/Ocorrencia');

// GET /api/ocorrencias
async function listar(req, res) {
  try {
    const ocorrencias = await Ocorrencia.find().sort({ createdAt: -1 });
    res.json(ocorrencias);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao listar as ocorrências.' });
  }
}

// GET /api/ocorrencias/:id
async function buscarPorId(req, res) {
  try {
    const ocorrencia = await Ocorrencia.findById(req.params.id);
    if (!ocorrencia) {
      return res.status(404).json({ erro: 'Ocorrência não encontrada.' });
    }
    res.json(ocorrencia);
  } catch (erro) {
    res.status(400).json({ erro: 'Id inválido.' });
  }
}

// POST /api/ocorrencias
async function criar(req, res) {
  try {
    const ocorrencia = await Ocorrencia.create(req.body);
    res.status(201).json(ocorrencia);
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
}

// PUT /api/ocorrencias/:id
async function atualizar(req, res) {
  try {
    const ocorrencia = await Ocorrencia.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // devolve o documento já atualizado
      runValidators: true, // valida os campos também na edição
    });
    if (!ocorrencia) {
      return res.status(404).json({ erro: 'Ocorrência não encontrada.' });
    }
    res.json(ocorrencia);
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
}

// DELETE /api/ocorrencias/:id
async function remover(req, res) {
  try {
    const ocorrencia = await Ocorrencia.findByIdAndDelete(req.params.id);
    if (!ocorrencia) {
      return res.status(404).json({ erro: 'Ocorrência não encontrada.' });
    }
    res.json({ mensagem: 'Ocorrência removida.' });
  } catch (erro) {
    res.status(400).json({ erro: 'Id inválido.' });
  }
}

module.exports = { listar, buscarPorId, criar, atualizar, remover };
