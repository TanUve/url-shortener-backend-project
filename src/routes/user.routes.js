const router = require('express').Router();
const { allUrls, createUrl } = require('../controllers/url.controller.js');
const { registerUser, loginUser } = require('../controllers/user.controller.js');

router.post('/login', loginUser);
router.post('/register', registerUser);


module.exports = router;