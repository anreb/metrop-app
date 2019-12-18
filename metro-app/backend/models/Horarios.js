const { Schema, model } = require('mongoose');

const horariosSchema = new Schema({
	nombre_estacion: {
		type: String
	},
	hora_5: {
		type: Number
	},
	hora_6: {
		type: Number
	},
	hora_7: {
		type: Number
	},
	hora_8: {
		type: Number
	},
	hora_9: {
		type: Number
	},
	hora_10: {
		type: Number
	},
	hora_11: {
		type: Number
	},
	hora_12: {
		type: Number
	},
	hora_13: {
		type: Number
	},
	hora_14: {
		type: Number
	},
	hora_15: {
		type: Number
	},
	hora_16: {
		type: Number
	},
	hora_17: {
		type: Number
	},
	hora_18: {
		type: Number
	},
	hora_19: {
		type: Number
	},
	hora_20: {
		type: Number
	},
	hora_21: {
		type: Number
	},
	hora_22: {
		type: Number
	},
	hora_23: {
		type: Number
	}
});

module.exports = model('horas_peligro_v2', horariosSchema);
