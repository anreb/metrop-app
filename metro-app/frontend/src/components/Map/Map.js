import React from 'react';
import { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { config } from 'dotenv';
import MY_SERVICE from '../../services/index';
config();

class Map extends Component {
	state = {
		viewport: {
			width: 800,
			height: 500,
			latitude: 19.4284706,
			longitude: -99.1276627,
			zoom: 12
		},
		estaciones: []
	};

	componentDidMount() {
		MY_SERVICE.test()
			.then(({ data: { r } }) => {
				this.setState({ estaciones: r });
			})
			.catch((err) => console.log(err));
	}

	render() {
		const { estaciones } = this.state;
		console.log(estaciones);
		return (
			<ReactMapGL
				{...this.state.viewport}
				mapboxApiAccessToken={
					'pk.eyJ1IjoiYmVybmE5NyIsImEiOiJjazM2MjY3OW8wZGgzM2NxcmprdXVoYWZxIn0.SkzmTSB07rmtf1lhyVdBkA'
				}
				onViewportChange={(viewport) => this.setState({ viewport })}
			>
				{estaciones.map((el, idx) => (
					<Marker key={idx} latitude={el.stop_lat} longitude={el.stop_lon} offsetLeft={-20} offsetTop={-10}>
						<i
							className='fa fa-map-marker'
							aria-hidden='true'
							style={{ color: 'aqua', fontSize: '32px' }}
						/>
					</Marker>
				))}
			</ReactMapGL>
		);
	}
}

export default Map;
