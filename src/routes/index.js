const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile('./views/html/index.html', { root: './src' });
});

module.exports = router;
