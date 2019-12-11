import React from 'react';
import { Layout, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

const { Content } = Layout;

const Home = () => {
	return (
		<div style={{ padding: '3.5rem 2.5rem 1.5rem 2.5rem' }}>
			<Layout>
				<Content style={{ paddingTop: '30px', paddingBottom: '30px' }}>
					<Row justify='center' type='flex' gutter={[ 20, 150 ]}>
						<Col xs={24}>
							<img src='/images/train.png' alt='metro-cdmx' />
						</Col>
					</Row>
					<Row justify='center' type='flex' gutter={[ 20, 150 ]}>
						<Col xs={12}>
							<Link to='/signup'>
								<Button type='primary' size='large'>
									Registrarse
								</Button>
							</Link>
						</Col>
					</Row>
					<Row justify='center' type='flex' gutter={[ 20, 20 ]}>
						<Col xs={12}>
							<Link to='/login'>
								<Button type='primary' size='large'>
									Entrar
								</Button>
							</Link>
						</Col>
					</Row>
				</Content>
			</Layout>
		</div>
	);
};

export default Home;
