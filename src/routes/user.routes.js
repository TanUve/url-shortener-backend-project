const router = require('express').Router();
require('dotenv').config()

const { loginUser } = require('../controllers/Users/userLogin.controller.js');
const { registerUser } = require('../controllers/Users/userRegister.controller.js');

const userLoginMiddleware = require('../middlewares/userLogin.middleware.js');
const userRegisterMiddleware = require('../middlewares/userRegiter.middleware.js');

router.post('/login',userLoginMiddleware, loginUser);
router.post('/register',userRegisterMiddleware, registerUser);


module.exports = router;