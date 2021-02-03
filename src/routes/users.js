const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.sendFile(`${__dirname}/../views/html/errors/404.html`);
});

module.exports = router;
