import React from 'react';
import { Component } from 'react';
import ReactMapGL, { Marker, GeolocateControl } from 'react-map-gl';
import { config } from 'dotenv';
import MY_SERVICE from '../../services/index';
config();

class Map extends Component {
	state = {
		viewport: {
			width: '100vw',
			height: '100vh',
			latitude: 19.4284706,
			longitude: -99.1276627,
			bearing: 0,
			pitch: 0,
			zoom: 12
		},
		estaciones: []
	};

	componentDidMount() {
		MY_SERVICE.test()
			.then(({ data: { estaciones } }) => {
				this.setState({ estaciones });
			})
			.catch((err) => console.log(err));
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
		const { estaciones } = this.state;
		return (
			<ReactMapGL
				{...this.state.viewport}
				mapboxApiAccessToken={
					'pk.eyJ1IjoiYmVybmE5NyIsImEiOiJjazM2MjY3OW8wZGgzM2NxcmprdXVoYWZxIn0.SkzmTSB07rmtf1lhyVdBkA'
				}
				onViewportChange={(viewport) => this.setState({ viewport })}
			>
				<GeolocateControl
					positionOptions={{ enableHighAccuracy: true }}
					trackUserLocation={true}
					fitBoundsOptions={{ maxZoom: 5 }}
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						margin: 10,
						background: 'url(/images/compass.svg)'
					}}
				/>
				{estaciones.map((el, idx) => {
					return (
						<Marker
							key={idx}
							latitude={el.stop_lat}
							longitude={el.stop_lon}
							offsetLeft={-20}
							offsetTop={-10}
						>
							<i
								className='fa fa-map-marker'
								aria-hidden='true'
								style={{ color: this.setColor(el.primera_linea), fontSize: '32px' }}
							/>
						</Marker>
					);
				})}
			</ReactMapGL>
		);
	}
}

export default Map;
