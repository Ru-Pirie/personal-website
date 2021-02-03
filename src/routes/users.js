const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.sendFile('./views/html/errors/404.html', { root: './src' });
});

module.exports = router;
