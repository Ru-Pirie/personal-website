const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const handlebars = require('handlebars');
const fs = require('fs');

const readHTMLFile = function(path, callback) {
	fs.readFile(path, { encoding: 'utf-8' }, function(err, html) {
		if (err) {
			throw err;
			callback(err);
		}
		else {
			callback(null, html);
		}
	});
};


async function email(name, address, topic, message) {
	// Generate test SMTP service account from ethereal.email

	// create reusable transporter object using the default SMTP transport
	const smtpTransport = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		// true for 465, false for other ports
		auth: {
			user: 'rubens.pirie@gmail.com',
			pass: 'nohhvromugrvlzaf',
		},
	});

	// send mail with defined transport object
	readHTMLFile(__dirname + './../views/html/email_templates/recieve.html', function(err, html) {
		const template = handlebars.compile(html);
		const replacements = {
			topic: topic,
			name: name,
			address: address,
			message: message,
		};
		const htmlToSend = template(replacements);
		const mailOptions = {
			from: address,
			to : 'rubens.pirie@gmail.com',
			subject : topic,
			html : htmlToSend,
		};

		smtpTransport.sendMail(mailOptions, function(error, response) {
			if (error) {
				console.log(error);
				callback(error);
			}
		});
	});
}

email().catch(console.error);


/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile('./views/html/home/index.html', { root: './src' });
});

// router.get('/about', function(req, res, next) {
// 	res.sendFile('./views/html/home/about.html', { root: './src' });
// });

// router.get('/contact', function(req, res, next) {
// 	res.sendFile('./views/html/home/contact.html', { root: './src' });
// });

router.get('/github', function(req, res, next) {
	res.redirect('https://github.com/ru-pirie');
});

router.get('/email', (req, res) => {
	email(
		req.query.Name,
		req.query.Email,
		req.query.Topic,
		req.query.Message,
	);
});

module.exports = router;
