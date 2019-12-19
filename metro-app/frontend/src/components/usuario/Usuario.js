import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'antd';

import MY_SERVICE from '../../services/index';

class Usuario extends Component {
	state = {
		estaciones: [],
		location: ''
	};

	componentDidMount() {
		const user_location = this.props.match.params;
		const location = user_location.location.split(',').map((el) => Number(el));
		MY_SERVICE.feed(location)
			.then(({ data: { estaciones } }) => {
				estaciones.sort((a, b) => a.ranking_estacion - b.ranking_estacion);
				this.setState({
					estaciones: estaciones.map((el) => {
						let nombre = el.nombre_estacion.split('_');
						el.nombre_estacion = nombre[0];
						return el;
					}),
					location: location
				});
			})
			.catch((err) => console.log(err));
	}

	render() {
		const { estaciones } = this.state;
		return (
			<List
				itemLayout='horizontal'
				style={{ height: '100%' }}
				dataSource={estaciones}
				renderItem={(item) => {
					return (
						<List.Item key={item.imgUrl}>
							<List.Item.Meta
								key={item.imgUrl}
								avatar={<img alt={item.nombre_estacion} src={item.imgUrl} style={{ width: '50px' }} />}
								title={
									<Link
										to={`/estaciones/${item._id}`}
										style={{ fontFamily: 'METRO-DF', fontSize: '30px' }}
									>
										{item.nombre_estacion}
									</Link>
								}
							/>
						</List.Item>
					);
				}}
			/>
		);
	}
}

export default Usuario;
