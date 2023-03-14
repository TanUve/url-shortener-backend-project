const router = require('express').Router();
require('dotenv').config()
const { getUrls } = require('../controllers/url.controller.js');
const requireToken = require('../middlewares/requireToken.middleware.js');

router.get('/all', requireToken, getUrls);
// router.get('/:id');
// router.post('/createurl', createUrl);
// router.patch('/updateurl/:id')
// router.delete('/deleteurl/:id')

// router.patch('/:_id', editUrl);
// router.delete('/delete-url/:_id', deleteUrl);

module.exports = router;