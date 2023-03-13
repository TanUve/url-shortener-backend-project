const router = require('express').Router();
const { allUrls, createUrl } = require('../controllers/url.controller.js');
const { registerUser, loginUser } = require('../controllers/user.controller.js');
const userLoginMiddleware = require('../middlewares/userLogin.middleware.js');
const userRegisterMiddleware = require('../middlewares/userRegiter.middleware.js');

router.post('/login',userLoginMiddleware, loginUser);
router.post('/register',userRegisterMiddleware, registerUser);


module.exports = router;