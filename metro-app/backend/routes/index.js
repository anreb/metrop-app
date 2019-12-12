const router = require('express').Router();
const n_colec_estaciones = require('../models/Estaciones');
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
	n_colec_estaciones.find().then((r) => res.status(200).json({ r })).catch((err) => console.log(err));
});

module.exports = router;
