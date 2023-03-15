const router = require('express').Router();
require('dotenv').config();
const urlValidator = require('../middlewares/validateUrlFormat.middleware.js');
const requireToken = require('../middlewares/requireToken.middleware.js');
const { getUrls, createUrl, getOneUrl, deleteUrl, updateUrl } = require('../controllers/url.controller.js');



router.get('/all', requireToken, getUrls);
router.get('/:id', requireToken, getOneUrl);
router.post('/create-url', urlValidator, requireToken, createUrl);
router.patch('/:id', urlValidator, requireToken, updateUrl);
router.delete('/:id', urlValidator, requireToken, deleteUrl);


module.exports = router;