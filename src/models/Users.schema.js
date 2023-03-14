const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        min: 3,
        max: 35
    },
    username: {
        type: String,
        required: true,
        min: 4,
        max: 15
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 55
    },
    password: {
        type: String,
        required: true,
        min: 10,
        max: 35
    }
})
module.exports = mongoose.model("User", userSchema);
