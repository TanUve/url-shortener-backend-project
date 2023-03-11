const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

const connectDB = (uri) =>
    mongoose.connect(uri).then(() =>
        console.log('Connected MongoDB'))


module.exports = connectDB;