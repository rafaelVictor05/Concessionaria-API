# ApiConcessionaria

API REST para gerenciamento de ordens de serviço de uma concessionária de veículos.

## Tecnologias Utilizadas
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- cors

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/rafaelVictor05/Concessionaria-API.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd ApiConcessionaria
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure o arquivo `.env` com sua string de conexão MongoDB e porta:
   ```env
   MONGO_URI=...
   PORT=3001
   ```

## Executando o Projeto

- Para rodar em modo desenvolvimento (com nodemon):
  ```bash
  npm run dev
  ```
- Para rodar em modo produção:
  ```bash
  npm start
  ```

A API estará disponível em `http://localhost:3001/api`.

## Endpoints Principais

- `POST   /api/concessionarias` — Cadastrar concessionária
- `POST   /api/clientes` — Cadastrar cliente
- `POST   /api/veiculos` — Cadastrar veículo
- `POST   /api/ordens-servico` — Abrir ordem de serviço
- `GET    /api/ordens-servico` — Listar ordens de serviço
- `PUT    /api/ordens-servico/:id/fechar` — Fechar ordem de serviço

## Estrutura de Pastas

```
/src
  /config
  /controllers
  /models
  /routes
```


