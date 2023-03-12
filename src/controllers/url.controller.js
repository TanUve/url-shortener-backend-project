const urlController = {};
const Url = require('../models/Urls.schema');
const Joi = require('@hapi/joi');


urlController.allUrls = (req, res) => {

    res.send('Aquí se ven todas las urls')
}

urlController.createUrl = (req, res) => {

    res.send('Creamos una nueva url')
}

urlController.editUrl = (req, res) => {


}

urlController.deleteUrl = (req, res) => {


}


module.exports = urlController;