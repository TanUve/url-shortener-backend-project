const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const User = require('../models/Users.schema.js');


const userLoginMiddleware = async (req, res, next) => {

    const schemaLogin = Joi.object({
        username: Joi.string().min(4).max(15).required(),
        password: Joi.string().min(6).max(1024).required()
    })
    // validaciones, comprobamos que el username que nos han metido se encuentra en nuesta DB
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message })
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).json({ error: true, message: 'User not found' });

    //Hay que comparar la contraseña teniendo en cuenta que está encriptada
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({ error: true, message: 'Invalid password' })
    req.user = user;

    next()
}

module.exports = userLoginMiddleware;