const userController = {};
const User = require('../models/Users.schema.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Joi = require('@hapi/joi');


userController.registerUser = async (req, res) => {
    
    const schemaRegister = Joi.object({
        name: Joi.string().min(3).max(25),
        username: Joi.string().min(4).max(15).required(),
        email: Joi.string().min(6).max(55).required().email(),
        password: Joi.string().min(10).max(35).required()
    })
    console.log(req.body.name);
    const { error } = schemaRegister.validate(req.body)
    if (error) {
        return res.status(400).json(
            { error: error.details[0].message }
        )
    }
    /*
    Hacemos solicitud a nuestra base de datos del email y lo ponemos después de la validación de forma que una vez se comprueba que es un email válido pasamos a la siguiente comprobación que es si ese email existe en nuestra base de datos
    */
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
        return res.status(400).json({ error: true, message: 'The email already exists' })
    }
    const usernameExist = await User.findOne({ username: req.body.username });
    if (usernameExist) {
        return res.status(400).json({ error: true, message: 'The username already exists' })
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

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
    const schemaLogin = Joi.object({
        username: Joi.string().min(4).max(15).required(),
        password: Joi.string().min(6).max(1024).required()
    })
    // validaciones
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message })
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).json({ error: true, message: 'User not found' });

    //Hay que comparar 
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({ error: true, message: 'Invalid password' })
   
    const token = jwt.sign({
        name: user.name,
        id: user._id,
    }, process.env.SECRET_TOKEN)
    res.header('auth-token', token).json({
        error: null,
        data: `Welcome ${user.name} ` + token
    })
};




module.exports = userController;