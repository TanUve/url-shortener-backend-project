const router = require('express').Router();
require('dotenv').config();
const urlValidator = require('../middlewares/validateUrlFormat.middleware.js');
const requireToken = require('../middlewares/requireToken.middleware.js');
const { getUrls, createUrl, getOneUrl, deleteUrl, getOneUrlNon, updateUrl } = require('../controllers/url.controller.js');



router.get('/all', requireToken, getUrls);
router.get('/one/:id', requireToken, getOneUrl);
router.get('/:nanoUrl', getOneUrlNon);
router.post('/create-url', urlValidator, requireToken, createUrl);
router.patch('/:id', urlValidator, requireToken, updateUrl);
router.delete('/:id', requireToken, deleteUrl);


module.exports = router;