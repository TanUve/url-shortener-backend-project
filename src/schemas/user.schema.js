const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
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