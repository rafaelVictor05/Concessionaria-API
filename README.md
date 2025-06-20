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

## Endpoints e Documentação

### 1. Cadastrar Concessionária
- **POST** `/api/concessionarias`
- **Body JSON:**
  ```json
  {
    "nome": "Concessionária X",
    "cnpj": "12345678000199",
    "endereco": "Rua Exemplo, 123"
  }
  ```
- **Respostas:**
  - 201: Dados da concessionária cadastrada
  - 400: CNPJ já cadastrado
  - 500: Erro interno

### 2. Cadastrar Cliente
- **POST** `/api/clientes`
- **Body JSON:**
  ```json
  {
    "nomeCompleto": "João Silva",
    "cpf": "12345678901",
    "telefone": "11999999999"
  }
  ```
- **Respostas:**
  - 201: Dados do cliente cadastrado
  - 400: CPF já cadastrado
  - 500: Erro interno

### 3. Cadastrar Veículo
- **POST** `/api/veiculos`
- **Body JSON:**
  ```json
  {
    "placa": "ABC1D23",
    "chassi": "9BWZZZ377VT004251",
    "modelo": "Gol",
    "marca": "Volkswagen",
    "ano": 2020,
    "clienteId": "<id do cliente>"
  }
  ```
- **Respostas:**
  - 201: Dados do veículo cadastrado
  - 400: Placa ou chassi já cadastrado
  - 500: Erro interno

### 4. Abrir Ordem de Serviço
- **POST** `/api/ordens-servico`
- **Body JSON:**
  ```json
  {
    "clienteId": "<id do cliente>",
    "veiculoId": "<id do veículo>",
    "descricaoProblema": "Motor não liga"
  }
  ```
- **Respostas:**
  - 201: Dados da ordem de serviço aberta
  - 500: Erro interno

### 5. Listar Ordens de Serviço
- **GET** `/api/ordens-servico`
- **Respostas:**
  - 200: Lista de ordens de serviço (com dados do cliente e veículo)
  - 500: Erro interno

### 6. Fechar Ordem de Serviço
- **PUT** `/api/ordens-servico/:id/fechar`
- **Parâmetro de rota:** `id` (ID da ordem de serviço)
- **Body JSON:**
  ```json
  {
    "servicosRealizados": "Troca de bateria",
    "custoTotal": 350.00
  }
  ```
- **Respostas:**
  - 200: Ordem de serviço fechada com sucesso
  - 400: Ordem já está fechada
  - 404: Ordem não encontrada
  - 500: Erro interno

## Estrutura de Pastas

```
/src
  /config
  /controllers
  /models
  /routes
```



