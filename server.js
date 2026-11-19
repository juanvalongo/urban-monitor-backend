// Ponto de entrada do backend.
// Aqui a gente só "liga as peças": configurações, rotas e banco de dados.

require('dotenv').config(); // carrega as variáveis do arquivo .env

const express = require('express');
const cors = require('cors');

const conectarBanco = require('./src/config/database');
const ocorrenciaRoutes = require('./src/routes/ocorrenciaRoutes');
const iaRoutes = require('./src/routes/iaRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // libera o acesso do aplicativo à API
app.use(express.json({ limit: '20mb' })); // permite enviar até três fotos em base64

// Rotas
app.get('/', (req, res) => {
  res.json({ mensagem: 'API de Plantações no ar!' });
});
app.use('/api/ocorrencias', ocorrenciaRoutes);
app.use('/api/ia', iaRoutes);

// Primeiro conecta no banco, depois sobe o servidor
conectarBanco().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});
