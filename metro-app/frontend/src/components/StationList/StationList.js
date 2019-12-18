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
				console.log(estaciones);
				estaciones.sort((a, b) => a.ranking_estacion - b.ranking_estacion);
				this.setState({ estaciones: estaciones });
			})
			.catch((err) => console.log(err));
	}

	render() {
		const { estaciones } = this.state;
		return (
			<List
				itemLayout='horizontal'
				style={{ overflow: 'scroll', height: '100%' }}
				dataSource={estaciones}
				renderItem={(item) => (
					<List.Item>
						<List.Item.Meta
							avatar={<img src={item.imgUrl} style={{ width: '50px' }} />}
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
