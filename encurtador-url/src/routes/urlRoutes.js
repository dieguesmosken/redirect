const express = require('express');
const router = express.Router();
const UrlController = require('../controllers/urlController');
const UrlModel = require('../models/urlModel');

const urlController = new UrlController(UrlModel);

router.post('/shorten', urlController.createShortUrl.bind(urlController));
router.get('/:shortUrl', urlController.getOriginalUrl.bind(urlController));

module.exports = router;