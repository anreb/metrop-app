const router = require('express').Router();
const Delito = require('../models/User');
const mongoose = require('mongoose');

router.get('/', (req, res) => {
	mongoose
		.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
		.then((x) => {
			console.log(x);
		})
		.catch((err) => console.error('Error connecting to mongo', err));
});

module.exports = router;
