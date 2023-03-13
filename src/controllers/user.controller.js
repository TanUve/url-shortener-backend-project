const userController = {};
const User = require('../models/Users.schema.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Joi = require('@hapi/joi');


userController.registerUser = async (req, res) => {
    //hash password
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    //Procedemos a crear el usuario una vez se han metido todos los datos correctamente
    const user = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: password
    })
    try {
        const userDB = await user.save();
        res.json({
            error: null,
            data: userDB
        })
    } catch (err) {
        res.status(400).json(err)
    }
};

userController.loginUser = async (req, res) => {

    const token = jwt.sign({
        name: req.user.name,
        id: req.user._id,
    }, process.env.SECRET_TOKEN)
    res.header('auth-token', token).json({
        error: null,
        data: token
    })
};


module.exports = userController;