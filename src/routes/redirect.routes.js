const redirectUrl = require('../controllers/redirect.controller.js');

const router= require('express').Router();

router.get('/:nanoUrl',redirectUrl);

module.exports= router;