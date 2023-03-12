const router = require('express').Router();
const { allUrls, createUrl } = require('../controllers/url.controller.js')

router.get('/all-urls', allUrls);
router.post('/new-url', createUrl);
// router.patch('/:_id', editUrl);
// router.delete('/delete-url/:_id', deleteUrl);

module.exports = router;