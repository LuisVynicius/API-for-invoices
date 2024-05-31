# Api For Invoices

## Api desenvolvida para uma aplicação de gerenciamento de notas fiscais

## Sobre

Essa api foi desenvolvida para gerenciar notas fiscais de uma pequena empresa. Esse projeto buscou por garantir a segurança de informações pessoais, constando com login através de tokens jwt para o acesso das rotas.

## Tecnologias

Para a criação do backend foram utilizadas as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Typescript](https://www.typescriptlang.org/pt/)
- [Express](https://expressjs.com)
- [Nodemon](https://nodemon.io/)
- [Prisma](https://www.prisma.io/)
- [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)
- [CORS](https://www.npmjs.com/package/cors)

## Executando

```bash
# Como feito em muitas outras aplicações, não disponibilizei o .env no github, então para a inicialização do backend será necessário a criação do arquivo .env com as seguintes variáveis de ambiente:
  DATABASE_URL=
  ALLOWEDORIGIN=
  SECRET=

# Após isso execute o comando para a instalação de todas as dependências:
$ npm install

# Execute o comando para o mapeamento do banco de dados:
$ npx prisma migrate dev --schema src/mysql/prisma/schema.prisma

# Adicione um usuário padrão utilizando o seguinte comando
$ npm run seed

# Após isso é só utilizar o comando abaixo para a inicialização:
$ npm start
```

## Personas

Essa aplicação permite que qualquer usuário autenticado é autorizado. O usuário padrão dessa aplicação é:

- Email: Email01@gmail.com
- Senha: Senha1234