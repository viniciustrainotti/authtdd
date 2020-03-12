# authtdd

Para desenvolvimento do projeto foi necessário utilizar as seguintes biblitoecas: 

### Bibliotecas

- npm install express --save

Para conexão do banco de dados foi utilizado ORM para Mysql 
- npm install --save sequelize
- npm install --save mysql2
- npm install sequelize-cli --save-dev
- npm install --save-dev nodemon

Para realização dos testes utilizado o Jest

- npm install --save-dev jest

Para utilização de uma base para testes, utilizado o SQLite
- npm install --save-dev sqlite3

Para testes de abstração HTTP
- npm install --save-dev supertest

Exemplo de cryptografia de senhas
- npm install --save bcryptjs

Exemplo de jwt
- npm install --save jsonwebtoken

Poder associar o uso de funções como atributos
- npm install --save factory-girl

Gerar dados aleatorios para testes
- npm install --save faker

### Considerações

No arquivo package.json foi criado a seguinte estrutura em scripts para funcionamento

```
"scripts": {
    "start": "nodemon src/server.js --ignore __tests__",
    "pretest": "NODE_ENV=test sequelize db:migrate",
    "test": "NODE_ENV=test jest",
    "posttest": "NODE_ENV=test sequelize db:migrate:undo:all"
  },

  ```

  