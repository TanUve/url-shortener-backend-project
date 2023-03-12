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

//Ciframos la contraseña para que en la DB no esté en texto plano
// userSchema.methods.encryptPassword = async password => {
//     const salt = await bcrypt.genSalt(10);
//     return await bcrypt.hash(password, salt);
// }
// //comparamos las contraseñas cifradas para validar el acceso

// userSchema.methods.matchPassword = async (password) => {
//     await bcrypt.compare(password, this.password)
// }
// userSchema.methods.matchPassword = async (req, res) => {
//     const validPassword = await bcrypt.compare(req.body.password, user.password);
//     if (!validPassword) return res.status(400).json({ error: true, message: 'Invalid password' })}

