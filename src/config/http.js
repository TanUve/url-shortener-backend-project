const {app}= require('express');
const http = require('http');

//Creamos el servidor que hace la solicitud
const httpServer = http.createServer(app);

module.exports= httpServer;
