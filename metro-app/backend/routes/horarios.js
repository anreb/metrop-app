const router = require('express').Router();
const horas_peligro_v2 = require('../models/Horarios');
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
	horas_peligro_v2.find().then((horarios) => res.status(200).json({ horarios })).catch((err) => console.log(err));
});

router.get('/:name', async (req, res) => {
	const { name } = req.params;
	horas_peligro_v2
		.find({ nombre_estacion: name })
		.then((horario) => res.status(200).json({ horario }))
		.catch((err) => res.status(500).json({ err }));
});

module.exports = router;
