const { Schema, model } = require('mongoose');

const estacionesSchema = new Schema({
	nombre_estacion: {
		type: String
	},
	stop_lat: {
		type: Number
	},
	stop_lon: {
		type: Number
	},
	primera_estacion: {
		type: String
	},
	segunda_estacion: {
		type: String
	},
	tercera_estacion: {
		type: String
	},
	cuarta_estacion: {
		type: String
	}
});

module.exports = model('n_colec_estaciones', estacionesSchema);
