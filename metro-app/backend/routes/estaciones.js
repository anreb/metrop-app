const router = require('express').Router();
const estaciones_colonias_v8 = require('../models/Estaciones');

router.get('/', async (req, res) => {
	estaciones_colonias_v8
		.find()
		.then((estaciones) => res.status(200).json({ estaciones }))
		.catch((err) => res.status(500).json({ err }));
});

router.get('/:id', async (req, res) => {
	const { id } = req.params;
	console.log(id);
	estaciones_colonias_v8
		.findById(id)
		.populate('id_estacion')
		.then((estacion) => res.status(200).json({ estacion }))
		.catch((err) => res.status(500).json({ err }));
});

router.post('/usuario', async (req, res) => {
	const { location } = req.body;
	estaciones_colonias_v8
		.find({
			place: {
				$nearSphere: {
					$geometry: {
						type: 'Point',
						coordinates: [ location[0], location[1] ]
					},
					$maxDistance: 2000
				}
			}
		})
		.then((estaciones) => {
			res.status(200).json({ estaciones });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ err, location });
		});
});

module.exports = router;
