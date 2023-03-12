const router = require('express').Router();
const { pruebaIndex } = require('../controllers/index.controller.js')


//Prueba de funcionamiento con /api:
router.get('/', pruebaIndex);
//----------------
router.use('/users', require('./user.routes'));
router.use('/urls', require('./url.routes'));


module.exports = router;