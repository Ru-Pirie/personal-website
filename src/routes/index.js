const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile('./views/html/home/index.html', { root: './src' });
});

router.get('/about', function(req, res, next) {
	res.sendFile('./views/html/home/about.html', { root: './src' });
});

router.get('/contact', function(req, res, next) {
	res.sendFile('./views/html/home/contact.html', { root: './src' });
});

module.exports = router;
