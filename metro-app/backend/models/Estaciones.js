const { Schema, model } = require('mongoose');

const estacionesSchema = new Schema({
	nombre_estacion: {
		type: String
	},
	place: {
		type: {
			default: 'Point'
		},
		coordinates: [ Number ]
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
	},
	afluencia_promedio: {
		type: String
	},
	id_estacion: {
		type: Schema.Types.ObjectId,
		ref: 'horas_peligro_v2'
	},
	dia_mas_peligroso: {
		type: String
	},
	imgUrl: {
		type: String
	}
});

estacionesSchema.index({
	place: '2dsphere'
});

module.exports = model('estaciones_colonias_v8', estacionesSchema);
