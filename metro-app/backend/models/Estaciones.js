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
	primera_linea: {
		type: String
	},
	segunda_linea: {
		type: String
	},
	tercera_linea: {
		type: String
	},
	cuarta_linea: {
		type: String
	},
	calif_estacion: {
		type: Number
	},
	ranking_estacion: {
		type: Number
	},
	colonia: {
		type: String
	},
	calif_colonia: {
		type: String
	},
	ranking_colonia: {
		type: String
	}
});

module.exports = model('estaciones_colonias_v1', estacionesSchema);
