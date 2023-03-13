const User = require('../models/Users.schema.js');
const Joi = require('@hapi/joi');

const userRegisterMiddleware = async (req, res, next) => {

    //Le indicamos qué requisitos tienen que tener los datos que pedimos para el registro
    const schemaRegister = Joi.object({
        name: Joi.string().min(3).max(25),
        username: Joi.string().min(4).max(15).required(),
        email: Joi.string().min(6).max(55).required().email(),
        password: Joi.string().min(10).max(35).required()
    })
    // validaciones, comprobamos que todos los datos que nos han metido se encuentra en nuesta DB
    const { error } = schemaRegister.validate(req.body)
    if (error) { return res.status(400).json({ error: error.details[0].message }) }
    /*
    Hacemos solicitud a nuestra base de datos del email y lo ponemos después de la validación 
    de forma que una vez se comprueba que es un email válido pasamos a la siguiente comprobación 
    que es si ese email existe en nuestra base de datos
    */
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
        return res.status(400).json({ error: true, message: 'The email already exists' })
    }
    const usernameExist = await User.findOne({ username: req.body.username });
    if (usernameExist) {
        return res.status(400).json({ error: true, message: 'The username already exists' })
    }
    next();
}

module.exports = userRegisterMiddleware;