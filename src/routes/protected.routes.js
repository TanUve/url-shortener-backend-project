const router = require('express').Router();
require('dotenv').config()
const infoUser = require('../controllers/Users/infoUser.controller.js');
const requireToken = require('../middlewares/requireToken.middleware.js');


//ruta de ejemplo para ver que ejecuta algo
router.get('/protected',requireToken, infoUser)

module.exports=router;