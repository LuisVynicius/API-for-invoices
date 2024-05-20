# Repositórios FiscalTrack

Este projeto consiste em um aplicativo Node.js que interage com um banco de dados MySQL. Ele inclui repositórios para operações básicas de CRUD em diferentes tabelas do banco de dados.

## Configuração da Conexão com o Banco de Dados

A conexão com o banco de dados MySQL é configurada em um arquivo separado chamado `mysql.js`. Este arquivo exporta um pool de conexão que pode ser usado em todo o projeto.

Certifique-se de definir corretamente as variáveis de ambiente para `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_DATABASE`, `MTSQL_HOST` e `MYSQL_PORT` de acordo com as configurações do seu banco de dados.

## Repositórios

Os repositórios são responsáveis por fornecer métodos para acessar e manipular os dados em diferentes tabelas do banco de dados. Cada repositório corresponde a uma tabela no banco de dados.

### Notas Fiscais

O repositório para notas fiscais fornece métodos para operações relacionadas a notas fiscais, como busca por ID, busca de todas as notas e exclusão por ID.

#### Métodos Disponíveis:

- `findById(id, callback)`: Busca uma nota fiscal pelo ID.
- `findAll(callback)`: Busca todas as notas fiscais.
- `deleteById(id, callback)`: Exclui uma nota fiscal pelo ID.

#### Exemplo de Uso:

```javascript
const notaFiscalRepository = require('./caminho-para-notafiscal-repository');

notaFiscalRepository.findById(1, (err, result) => {
  if (err) {
    console.error('Erro ao buscar nota fiscal por ID:', err);
    return;
  }
  console.log('Nota fiscal encontrada:', result);
});


Detalhes do Usuário
O repositório para detalhes do usuário fornece métodos para operações relacionadas aos detalhes do usuário, como busca por ID do usuário.

Métodos Disponíveis:
getUserDetailsByUserId(userId, callback): Busca os detalhes do usuário pelo ID do usuário.
Exemplo de Uso:
javascript
Copiar código
const usuarioDetalhesRepository = require('./caminho-para-usuariodetalhes-repository');

usuarioDetalhesRepository.getUserDetailsByUserId(1, (err, result) => {
  if (err) {
    console.error('Erro ao buscar detalhes do usuário por ID:', err);
    return;
  }
  console.log('Detalhes do usuário encontrados:', result);
});
Usuários
O repositório para usuários fornece métodos para operações relacionadas a usuários, como busca por email.

Métodos Disponíveis:
findByEmail(email, callback): Busca um usuário pelo email.
Exemplo de Uso:
javascript
Copiar código
const usuarioRepository = require('./caminho-para-usuario-repository');

usuarioRepository.findByEmail('exemplo@email.com', (err, result) => {
  if (err) {
    console.error('Erro ao buscar usuário por email:', err);
    return;
  }
  console.log('Usuário encontrado:', result);
});


