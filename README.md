# Backend — Fiscalização e Monitoramento Urbano

API REST do aplicativo de Fiscalização e Monitoramento Urbano. O backend usa Node.js, Express e MongoDB; também integra o Gemini para analisar as fotos das ocorrências.

## Repositórios

- **Backend:** https://github.com/juanvalongo/urban-monitor-backend.git
- **Frontend do aplicativo:** https://github.com/juanvalongo/urban-monitor-frontend.git

Para executar o aplicativo completo, clone e configure também o [repositório do frontend](https://github.com/juanvalongo/urban-monitor-frontend.git). As instruções de configuração do app estão no README desse repositório.

## Requisitos

- Node.js 22 ou superior
- MongoDB local ou uma instância no MongoDB Atlas
- Chave da API do Gemini para usar a análise por IA

## Executar o projeto completo

### 1. Clonar os repositórios

Os exemplos abaixo criam as pastas `urban-monitor-backend` e `urban-monitor-frontend` lado a lado:

```bash
git clone https://github.com/juanvalongo/urban-monitor-backend.git
git clone https://github.com/juanvalongo/urban-monitor-frontend.git
```

### 2. Configurar e iniciar o backend

No terminal, entre na pasta do backend e instale as dependências:

```bash
cd urban-monitor-backend
npm install
```

Crie o arquivo `.env` a partir do exemplo:

```powershell
Copy-Item .env.example .env
```

No macOS/Linux, use `cp .env.example .env`. Edite `.env` e configure:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/fiscalizacao_urbana
GEMINI_API_KEY=sua_chave_do_gemini
GEMINI_MODEL=gemini-3.1-flash-lite
```

`MONGO_URI` pode apontar para o MongoDB local ou para o Atlas. Crie uma chave Gemini em https://aistudio.google.com/apikey e confirme os modelos disponíveis para sua chave em https://ai.google.dev/gemini-api/docs/pricing.

Inicie a API:

```bash
npm run dev
```

O servidor inicia em `http://localhost:3000` depois de conectar ao MongoDB. Para verificar, abra `http://localhost:3000`; a API deve responder com uma mensagem JSON. Mantenha esse terminal aberto enquanto usa o aplicativo.

### 3. Configurar e iniciar o frontend

Em outro terminal, siga as instruções do [README do frontend](https://github.com/juanvalongo/urban-monitor-frontend#readme). Configure a URL da API para apontar para o computador que está executando este backend.

## Rotas principais

| Método | Rota | Ação |
| --- | --- | --- |
| GET | `/api/ocorrencias` | Lista ocorrências |
| GET | `/api/ocorrencias/:id` | Busca uma ocorrência |
| POST | `/api/ocorrencias` | Registra uma ocorrência |
| PUT | `/api/ocorrencias/:id` | Atualiza uma ocorrência |
| DELETE | `/api/ocorrencias/:id` | Remove uma ocorrência |
| POST | `/api/ia/analise/:id` | Analisa as fotos e sugere providências |

O arquivo `requisicoes.http` contém exemplos para testar as rotas com a extensão REST Client do VS Code.

## Observações

- Não publique nem compartilhe o `.env`; ele contém credenciais. O arquivo está no `.gitignore`.
- As fotos são recebidas como base64 e salvas no MongoDB. Para uso em produção, considere um serviço de armazenamento de imagens.
- A análise por IA é uma triagem automatizada e não substitui vistoria técnica.
- A API é didática: não possui autenticação e libera CORS para qualquer origem. Restrinja esses acessos antes de disponibilizá-la publicamente.
