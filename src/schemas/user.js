const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    _id: {
        type: String,
        _id: false //Esto hace que mongo no cree el id automáticamente y se lo cree yo poniéndole el formato que quiero
    },
    name: {
        type: String,
        require: true,
        minLength: 3,
        maxLength: 35
    },
    username: {
        type: String,
        require: true,
        minLength: 4,
        maxLength: 15
    },
    email: {
        type: String,
        require: true,
        unique: true,
        minLength: 3,
        maxLength: 55
    },
    password: {
        type: String,
        require: true
    }
})

const userModel = model("User", userSchema)

module.exports = userModel;