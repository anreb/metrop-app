const router = require('express').Router();
const estaciones_colonias_v1 = require('../models/Estaciones');
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
	estaciones_colonias_v1
		.find()
		.then((estaciones) => res.status(200).json({ estaciones }))
		.catch((err) => console.log(err));
});

module.exports = router;
