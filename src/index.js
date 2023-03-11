
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config()
const connectDB = require('./config/db.js')

const app = express();

// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Conexión a Base de datos
const uri = process.env.MONGO_URI;

// import routes

const userRoutes = require('./routes/user.js')

// route middlewares
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'funciona!'
    })
});

// iniciar server

const db = async () => {
    await connectDB(uri)
    const PORT = process.env.PORT || 3008;
    app.listen(PORT, () => {
        console.log(`servidor andando en: ${PORT}`)
    })
}
db();