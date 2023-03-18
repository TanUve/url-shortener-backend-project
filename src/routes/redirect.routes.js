const redirectUrl = require('../controllers/Urls/redirect.controller.js');

const router= require('express').Router();

router.get('/:nanoUrl',redirectUrl);

module.exports= router;