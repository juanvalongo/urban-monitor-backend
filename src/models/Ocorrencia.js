// MODEL: descreve uma ocorrência urbana registrada no MongoDB.

const mongoose = require('mongoose');
const { CATEGORIAS } = require('../config/ocorrenciaOptions');

const ocorrenciaSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true, trim: true, maxlength: 100 },
    categoria: { type: String, required: true, enum: CATEGORIAS },
    descricao: { type: String, trim: true, maxlength: 2000, default: '' },
    fotos: {
      type: [{ type: String, required: true }],
      validate: {
        validator: (fotos) => fotos.length >= 1 && fotos.length <= 3,
        message: 'Adicione de 1 a 3 fotos.',
      },
    },
    latitude: { type: Number, required: true, min: -90, max: 90 },
    longitude: { type: Number, required: true, min: -180, max: 180 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Ocorrencia', ocorrenciaSchema);
