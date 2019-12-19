import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'antd';
import MY_SERVICE from '../../services/index';

class StationList extends Component {
	state = {
		estaciones: []
	};

	componentDidMount() {
		MY_SERVICE.estaciones()
			.then(({ data: { estaciones } }) => {
				estaciones.sort((a, b) => a.ranking_estacion - b.ranking_estacion);
				this.setState({
					estaciones: estaciones.map((el) => {
						let nombre = el.nombre_estacion.split('_');
						el.nombre_estacion = nombre[0];
						return el;
					})
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
				renderItem={(item) => (
					<List.Item>
						<List.Item.Meta
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
				)}
			/>
		);
	}
}

export default StationList;
