const express = require('express');
require('dotenv').config()
const bodyparser = require('body-parser');

//Inicializaciones
const app = express();

//Configuraciones
//Establecemos una configuración para un puerto concreto:
app.set('PORT', process.env.PORT || 3012);

//Cada vez que lleguen datos de un formulario se convierten en un json:
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//Dirección Rutas
app.use('/api',require('./routes/index.routes'))
app.use('/', require('./routes/index.routes'))

module.exports = app;
