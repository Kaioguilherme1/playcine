# PlayCine Backend

## Introdução

Este é o backend para a aplicação PlayCine, construído com Node.js e Express.

## Começando

### Pré-requisitos

- Node.js
- Yarn ou npm
- Docker

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Kaioguilherme1/playcine.git
   cd playcine/backend
   ```

2. Instale as dependências:
   ```bash
   yarn install
   # ou
   npm install
   ```

### Variáveis de Ambiente

Crie um arquivo `.env` no diretório raiz e adicione as seguintes variáveis:

```
MONGODB_URL=mongodb://root:password@localhost:27017/playcine?authSource=admin
PORT=8080
TOKEN_SECRET=seu_token_secret_gerado
TMDB_BASE_URL=https://api.themoviedb.org/3/
TMDB_KEY=sua_chave_tmdb
```

- `MONGODB_URL`: A string de conexão para o seu banco de dados MongoDB.
- `PORT`: A porta na qual o servidor irá rodar.
- `TOKEN_SECRET`: A chave secreta para assinar JSON Web Tokens. Você pode gerar uma usando o seguinte comando:
  ```bash
  openssl rand -hex 64
  ```
- `TMDB_BASE_URL`: A URL base para a API do The Movie Database (TMDB).
- `TMDB_KEY`: A chave de API para acessar o TMDB. Solicite um novo token no TMDB e adicione aqui.

### Executando a Aplicação

1. Inicie o banco de dados MongoDB com Docker:
   ```bash
   docker-compose up -d
   ```

2. Inicie o servidor:
   ```bash
   yarn start
   # ou
   npm start
   ```

O servidor estará disponível em `http://localhost:8080`.

## Bibliotecas Utilizadas

- **Express**: Framework web rápido, não opinativo e minimalista para Node.js.
- **Mongoose**: Modelagem elegante de objetos MongoDB para Node.js.
- **jsonwebtoken**: Implementação de JSON Web Token.
- **dotenv**: Carrega variáveis de ambiente de um arquivo `.env` para `process.env`.
- **bcryptjs**: Biblioteca para hash de senhas.

## Estrutura do Projeto

- `src/controllers`: Contém a lógica para lidar com as requisições.
- `src/models`: Contém os modelos do Mongoose.
- `src/routes`: Contém as definições de rotas.
- `src/middleware`: Contém funções de middleware.
- `src/axios`: Contém instâncias e configurações do Axios.
- `src/tmdb`: Contém módulos relacionados à API do TMDB.
- `src/handlers`: Contém manipuladores de requisições.

---

Este `README.md` fornece uma visão geral básica de como configurar e executar o backend, junto com uma lista das principais bibliotecas utilizadas no projeto.