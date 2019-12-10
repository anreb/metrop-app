const { Schema, model } = require('mongoose');

const delitoSchema = new Schema({
	ao_hechos: {
		type: Number,
		required: true
	},
	mes_hechos: {
		type: String,
		required: true
	},
	fecha_hechos: {
		type: Date,
		required: true
	},
	delito: {
		type: String,
		required: true
	},
	categoria_delito: {
		type: String,
		ref: 'User'
	},
	colonia_hechos: {
		type: String,
		required: true
	},
	alcaldia_hechos: {
		type: String,
		required: true
	},
	calle_hechos: {
		type: String,
		required: true
	},
	geo_punto: {
		type: Point,
		coordinates: []
	}
});

module.exports = model('Delito', delitoSchema);
