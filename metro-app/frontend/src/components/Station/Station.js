import React from 'react';
import { Statistic, Typography, Row, Col } from 'antd';
import { Bar } from 'react-chartjs-2';
import MY_SERVICE from '../../services';

const { Title } = Typography;

class Station extends React.Component {
	state = {
		estacion: {},
		horario: {},
		nombre: ''
	};

	componentDidMount() {
		const id = this.props.match.params;
		MY_SERVICE.estacion(id)
			.then(({ data: { estacion } }) => {
				MY_SERVICE.horario(estacion.nombre_estacion)
					.then(({ data: { horario } }) => {
						const nombre = estacion.nombre_estacion.split('_');
						this.setState({ estacion, horario: horario[0], nombre: nombre[0] });
					})
					.catch((err) => console.log(err));
			})
			.catch((err) => console.log(err));
	}

	render() {
		const { horario, estacion, nombre } = this.state;
		return (
			<div key='llave-random'>
				<Row gutter={30}>
					<Col span={6}>
						<img alt={nombre} src={estacion.imgUrl} style={{ width: '75px' }} />
					</Col>
					<Col span={12}>
						<Title level={3} style={{ fontFamily: 'METRO-DF', fontSize: '20px' }}>
							{nombre}
						</Title>
					</Col>
					<Col span={6}>
						<Statistic
							title='Ranking'
							value={`${estacion.ranking_estacion}/195`}
							style={{ fontFamily: 'METRO-DF', height: '80px' }}
						/>
					</Col>
				</Row>
				<Row gutter={30}>
					<Col span={24} style={{ textAlign: 'center' }}>
						<Bar
							data={{
								labels: [
									'5:00',
									'6:00',
									'7:00',
									'8:00',
									'9:00',
									'10:00',
									'11:00',
									'12:00',
									'13:00',
									'14:00',
									'15:00',
									'16:00',
									'17:00',
									'18:00',
									'19:00',
									'20:00',
									'21:00',
									'22:00',
									'23:00'
								],
								datasets: [
									{
										label: 'Porcentaje de incidencias por hora',
										backgroundColor: '#E71A23',
										borderColor: '#F84F00',
										data: [
											horario.hora_5,
											horario.hora_6,
											horario.hora_7,
											horario.hora_8,
											horario.hora_9,
											horario.hora_10,
											horario.hora_11,
											horario.hora_12,
											horario.hora_13,
											horario.hora_14,
											horario.hora_15,
											horario.hora_16,
											horario.hora_17,
											horario.hora_18,
											horario.hora_19,
											horario.hora_20,
											horario.hora_21,
											horario.hora_22,
											horario.hora_23
										].map((el) => el * 100)
									}
								]
							}}
							options={{
								scales: {
									yAxes: [
										{
											gridLines: {
												drawOnChartArea: false
											}
										}
									],
									xAxes: [
										{
											gridLines: {
												drawOnChartArea: false
											}
										}
									]
								}
							}}
						/>
					</Col>
				</Row>
				<Row gutter={30}>
					<Col span={3} />
					<Col span={18} style={{ textAlign: 'center' }}>
						<Statistic
							title='Calificacion de estacion'
							value={`${estacion.calif_estacion}`}
							style={{ fontFamily: 'METRO-DF', height: '80px' }}
						/>
					</Col>
					<Col span={3} />
				</Row>
				<Row gutter={30}>
					<Col span={3} />
					<Col span={18} style={{ textAlign: 'center' }}>
						<Statistic
							title='Colonia'
							value={`${estacion.colonia}`}
							style={{ fontFamily: 'METRO-DF', height: '80px' }}
						/>
						<Statistic
							title='Calificacion de colonia'
							value={`${estacion.calif_colonia}`}
							style={{ fontFamily: 'METRO-DF', height: '80px' }}
						/>
						<Statistic
							title='Ranking colonia'
							value={`${estacion.ranking_colonia}`}
							style={{ fontFamily: 'METRO-DF', height: '80px' }}
						/>
					</Col>
					<Col span={3} />
				</Row>
				<Row gutter={30}>
					<Col span={3} />
					<Col span={18} style={{ textAlign: 'center' }}>
						<Statistic
							title='Dia mas peligroso'
							value={`${estacion.dia_mas_peligroso}`}
							style={{ fontFamily: 'METRO-DF', height: '80px' }}
						/>
						<Statistic
							title='Afluencia promedio'
							value={`${estacion.afluencia_promedio}`}
							style={{ fontFamily: 'METRO-DF', height: '80px' }}
						/>
					</Col>
					<Col span={3} />
				</Row>
			</div>
		);
	}
}

export default Station;
