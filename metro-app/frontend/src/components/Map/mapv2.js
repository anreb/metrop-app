import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import MY_SERVICE from '../../services/index';

class Map extends Component {
	state = {
		viewport: {
			width: '100%',
			height: '610px',
			latitude: 19.4284706,
			longitude: -99.1276627,
			bearing: 0,
			pitch: 0,
			zoom: 12
		},
		popupInfo: null,
		showPopup: true,
		estaciones: [],
		position: [],
		nombre: ''
	};

	componentDidMount() {
		if (localStorage.user) {
			MY_SERVICE.estaciones()
				.then(({ data: { estaciones } }) => {
					this.setState({ estaciones });
				})
				.catch((err) => console.log(err));

			const map = this.reactMap.getMap();
			const geolocate = new mapboxgl.GeolocateControl();

			map.on('load', () => {
				map.addControl(geolocate);
			});

			geolocate.on('geolocate', (e) => {
				let lon = e.coords.longitude;
				let lat = e.coords.latitude;
				let position = [ lon, lat ];
				this.setState({ position });
			});
		}
	}

	redirect() {
		this.props.history.push('/login');
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
			default:
				return '#FF8300';
		}
	}

	_renderPopup() {
		const { popupInfo, nombre } = this.state;
		return (
			popupInfo && (
				<Popup
					tipSize={10}
					anchor='bottom'
					longitude={popupInfo.stop_lon}
					latitude={popupInfo.stop_lat}
					closeOnClick={false}
					onClose={() => this.setState({ popupInfo: null })}
				>
					<div style={{ padding: '5px' }}>
						<img src={popupInfo.imgUrl} alt={popupInfo.nombre_estacion} />
						<Link estacion={popupInfo} to={`/estaciones/${popupInfo._id}`}>
							<p style={{ fontFamily: 'METRO-DF', fontSize: '15px' }}>{nombre}</p>
						</Link>
					</div>
				</Popup>
			)
		);
	}

	render() {
		const { estaciones, position } = this.state;
		if (!localStorage.user) {
			return <Redirect push to='/login' />;
		}
		return (
			<ReactMapGL
				ref={(reactMap) => (this.reactMap = reactMap)}
				{...this.state.viewport}
				mapboxApiAccessToken={
					'pk.eyJ1IjoiYmVybmE5NyIsImEiOiJjazM2MjY3OW8wZGgzM2NxcmprdXVoYWZxIn0.SkzmTSB07rmtf1lhyVdBkA'
				}
				onViewportChange={(viewport) => this.setState({ viewport })}
			>
				{estaciones.map((estacion, idx) => {
					const nombre = estacion.nombre_estacion.split('_');
					return (
						<Marker
							key={idx}
							latitude={estacion.stop_lat}
							longitude={estacion.stop_lon}
							offsetLeft={-20}
							offsetTop={-10}
						>
							<i
								className='fa fa-map-marker'
								aria-hidden='true'
								onClick={() => this.setState({ popupInfo: estacion, nombre: nombre[0] })}
								style={{ color: this.setColor(estacion.primera_linea), fontSize: '32px' }}
							/>
						</Marker>
					);
				})}
				{this._renderPopup()}
				{position.length > 0 && (
					<Popup
						latitude={position[1]}
						longitude={position[0]}
						closeButton={true}
						closeOnClick={false}
						onClose={() => this.setState({ showPopup: false })}
						anchor='top'
					>
						<Link to={`/usuario/${position}`}>Ver estaciones cercanas</Link>
					</Popup>
				)}
			</ReactMapGL>
		);
	}
}

export default Map;
