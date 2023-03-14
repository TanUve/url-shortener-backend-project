const Joi = require('@hapi/joi');
const Url = require('../models/Urls.schema');


const urlValidator = async (req, res, next) => {

    const schemaLogin = Joi.object({
        originalUrl: Joi.string().min(6).required().uri({ scheme: ['http', 'https'] })

    })
    // validaciones, comprobamos que el username que nos han metido se encuentra en nuesta DB
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message })

    const originalUrlExist = await Url.findOne({ originalUrl: req.body.originalUrl });
    if (originalUrlExist) {
        return res.status(400).json({ error: true, message: 'Url already exists' })

    }
    next()
}

module.exports = urlValidator;