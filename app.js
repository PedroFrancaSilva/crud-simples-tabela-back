const dbURI = "mongodb+srv://CrudSimples:1234@testes.8p4yl.mongodb.net/CrudSimples?retryWrites=true&w=majority";
const mongoose = require('mongoose');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

//Rotas
const usersRouter = require('./src/routes/usersRoute');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Cadastro Simples',
    version: '1.0.0',
    description:
      'Esse é um cadastro simples de usuário',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
  },
  servers: [
    {
      url: 'http://localhost:3001',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["app.js", "./src/routes/*.js", "./src/model/*.js"],
};

const app = express();
const specs = swaggerJsdoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
});

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true}).
then((result) => console.log('conected to DB')).
catch((err) => console.log(err));

module.exports = app;
