import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import MY_SERVICE from '../../services/index';
mapboxgl.accessToken = 'pk.eyJ1IjoiYmVybmE5NyIsImEiOiJjazM2MjY3OW8wZGgzM2NxcmprdXVoYWZxIn0.SkzmTSB07rmtf1lhyVdBkA';

class mapv2 extends Component {
	state = {
		lng: -99.1276627,
		lat: 19.4284706,
		zoom: 12,
		position: []
	};

	componentDidMount() {
		MY_SERVICE.test()
			.then(({ data: { estaciones } }) => {
				console.log(estaciones);
			})
			.catch((err) => console.log(err));

		const { lng, lat, zoom } = this.state;

		const geolocate = new mapboxgl.GeolocateControl({
			positionOptions: {
				enableHighAccuracy: true
			},
			trackUserLocation: true
		});

		const directions = new MapboxDirections({
			accessToken: 'pk.eyJ1IjoiYmVybmE5NyIsImEiOiJjazM2MjY3OW8wZGgzM2NxcmprdXVoYWZxIn0.SkzmTSB07rmtf1lhyVdBkA',
			unit: 'metric',
			profile: 'mapbox/cycling'
		});

		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/streets-v9',
			center: [ lng, lat ],
			zoom
		});

		map.on('load', () => {
			geolocate.on('geolocate', function(e) {
				let usr_lon = e.coords.longitude;
				let usr_lat = e.coords.latitude;
				let position = [ usr_lon, usr_lat ];
				// this.setState({ position });
				directions.setOrigin(position);
			});
		});

		map.on('move', () => {
			const { lng, lat } = map.getCenter();

			this.setState({
				lng: lng.toFixed(4),
				lat: lat.toFixed(4),
				zoom: map.getZoom().toFixed(2)
			});
		});

		map.addControl(directions, 'top-left');
		map.addControl(geolocate, 'bottom-right');
	}

	setColor(linea) {
		switch (linea) {
			case 'Metro 1':
				return '#ED2893';
			case 'Metro 2':
				return '#005BBF';
			case 'Metro 3':
				return '#A3AF07';
			case 'Metro 4':
				return '#84E2A8';
			case 'Metro 5':
				return '#EFEA07';
			case 'Metro 6':
				return '#F93F26';
			case 'Metro 7':
				return '#F9603A';
			case 'Metro 8':
				return '#3D8E33';
			case 'Metro 9':
				return '#54472D';
			case 'Metro A':
				return '#3F2893';
			case 'Metro B':
				return '#215B33';
		}
	}

	render() {
		return <div style={{ width: '100vw', height: '100vh' }} ref={(e) => (this.mapContainer = e)} />;
	}
}

export default mapv2;
