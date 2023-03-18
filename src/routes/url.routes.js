const router = require('express').Router();
require('dotenv').config();
const urlValidator = require('../middlewares/validateUrlFormat.middleware.js');
const requireToken = require('../middlewares/requireToken.middleware.js');
const {  updateUrl } = require('../controllers/updateUrl.controller.js');
const { getUrls } = require('../controllers/getUrls.controller.js');
const { getOneUrl } = require('../controllers/getOneUrl.controller.js');
const { createUrl } = require('../controllers/createUrl.controller.js');
const { getOneUrlNon } = require('../controllers/getOneUrlNon.controller.js');
const { deleteUrl } = require('../controllers/deleteUrl.controller.js');



router.get('/all', requireToken, getUrls);
router.get('/one/:id', requireToken, getOneUrl );
router.get('/:nanoUrl', getOneUrlNon);
router.post('/create-url', urlValidator, requireToken, createUrl);
router.patch('/:id', urlValidator, requireToken, updateUrl);
router.delete('/:id', requireToken, deleteUrl);


module.exports = router;