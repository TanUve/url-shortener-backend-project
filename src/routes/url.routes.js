const router = require('express').Router();
require('dotenv').config();
const urlValidator = require('../middlewares/validateUrlFormat.middleware.js');
const requireToken = require('../middlewares/requireToken.middleware.js');
const { getUrls } = require('../controllers/Urls/getUrls.controller.js');
const { getOneUrl } = require('../controllers/Urls/getOneUrl.controller.js');
const { getOneUrlNon } = require('../controllers/Urls/getOneUrlNon.controller.js');
const { createUrl } = require('../controllers/Urls/createUrl.controller.js');
const { updateUrl } = require('../controllers/Urls/updateUrl.controller.js');
const { deleteUrl } = require('../controllers/Urls/deleteUrl.controller.js');




router.get('/all', requireToken, getUrls);
router.get('/one/:id', requireToken, getOneUrl );
router.get('/:nanoUrl', getOneUrlNon);
router.post('/create-url', urlValidator, requireToken, createUrl);
router.patch('/:id', urlValidator, requireToken, updateUrl);
router.delete('/:id', requireToken, deleteUrl);


module.exports = router;