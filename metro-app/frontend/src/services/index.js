import axios from 'axios';
let baseURL = 'https://guarded-waters-28037.herokuapp.com/';

// process.env.NODE_ENV === 'production'
// 	? (baseURL = 'https://guarded-waters-28037.herokuapp.com/')
// 	: (baseURL = 'http://localhost:3000');

const service = axios.create({ withCredentials: false, baseURL });

const MY_SERVICE = {
	test: async () => {
		return await service.get('/');
	},
	signup: async (user) => {
		return await service.post('/auth/signup', user);
	},
	login: async (user) => {
		console.log(user);
		return await service.post('/auth/login', user);
	},
	logout: async () => {
		return await service.get('/auth/logout');
	},
	estaciones: async () => {
		return await service.get('/estaciones');
	},
	feed: async (location) => {
		return await service.post('/estaciones/usuario', { location: location });
	},
	estacion: async ({ id }) => {
		return await service.get(`estaciones/${id}`);
	},
	horario: async (name) => {
		return await service.get(`horarios/${name}`);
	}
};

export default MY_SERVICE;
