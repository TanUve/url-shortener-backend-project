const router = require('express').Router();
require('dotenv').config();
const urlValidator = require('../middlewares/validateUrlFormat.middleware.js');
const requireToken = require('../middlewares/requireToken.middleware.js');
const { getUrls, createUrl } = require('../controllers/url.controller.js');



router.get('/all', requireToken, getUrls);
// router.get('/:id');
router.post('/create-url', urlValidator, requireToken, createUrl);
// router.patch('/updateurl/:id')
// router.delete('/deleteurl/:id')

// router.patch('/:_id', editUrl);
// router.delete('/delete-url/:_id', deleteUrl);

module.exports = router;