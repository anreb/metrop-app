import React from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div style={{ height: 600 }}>
			<Row justify='center' type='flex' gutter={[ 20, 250 ]}>
				<Col xs={24} style={{ paddingRight: 0, paddingLeft: 0 }}>
					<img src='/images/train.png' alt='metro-cdmx' />
				</Col>
			</Row>
			<Row justify='center' type='flex' gutter={[ 20, 250 ]}>
				<Col xs={12} style={{ paddingRight: 0, paddingLeft: 0 }}>
					<Link to='/signup'>
						<Button
							type='primary'
							size='large'
							style={{ fontFamily: 'METRO-DF', backgroundColor: '#FF8300' }}
						>
							Registrarse
						</Button>
					</Link>
				</Col>
			</Row>
			<Row justify='center' type='flex' gutter={[ 20, 30 ]}>
				<Col xs={12} style={{ paddingRight: 0, paddingLeft: 0 }}>
					<Link to='/login' style={{ backgroundColor: '#FF8300' }}>
						<Button
							type='primary'
							size='large'
							style={{ fontFamily: 'METRO-DF', backgroundColor: '#FF8300' }}
						>
							Entrar
						</Button>
					</Link>
				</Col>
			</Row>
		</div>
	);
};

export default Home;
