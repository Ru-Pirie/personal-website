const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile('./views/html/projects/projects.html', { root: './src' });
});

router.get('/diy-cctv-camera-system', function(req, res, next) {
	res.sendFile('./views/html/projects/cctv-thingy.html', { root: './src' });
});

router.get('/personal-website', function(req, res, next) {
	res.sendFile('./views/html/projects/website.html', { root: './src' });
});

module.exports = router;
