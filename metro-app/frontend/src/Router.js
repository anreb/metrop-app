import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { MyContext } from './context';

import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import NotFound from './components/404/NotFound.js';
import mapv2 from './components/Map/mapv2';
import Station from './components/Station/Station';
import Usuario from './components/usuario/Usuario';
import StationList from './components/StationList/StationList';

import 'antd/dist/antd.css';
import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

class Router extends Component {
	state = {
		logged: false
	};

	componentDidMount() {
		console.log(this.context);
	}

	render() {
		return (
			<MyContext.Consumer>
				{(context) => {
					return (
						<Layout>
							<BrowserRouter>
								{!localStorage.user && <Redirect push to='/login' />}
								<Header>
									<div className='logo' />
									<Menu
										theme='dark'
										mode='horizontal'
										defaultSelectedKeys={[ '2' ]}
										style={{ lineHeight: '64px', display: 'flex' }}
									>
										<Menu.Item key='1' style={{ fontFamily: 'METRO-DF', alignSelf: 'flex-start' }}>
											<Link to={localStorage.user ? '/map' : '/login'}>MetroCDMX</Link>
										</Menu.Item>
										{!localStorage.user && (
											<Menu.Item key='2' style={{ fontFamily: 'METRO-DF', fontSize: '10px' }}>
												<Link to='/login'>Entrar</Link>
											</Menu.Item>
										)}
										{!localStorage.user && (
											<Menu.Item key='3' style={{ fontFamily: 'METRO-DF', fontSize: '10px' }}>
												<Link to='/signup'>Registrarse</Link>
											</Menu.Item>
										)}
										{localStorage.user && (
											<Menu.Item key='3' style={{ fontFamily: 'METRO-DF', fontSize: '10px' }}>
												<Link to='/map'>Mapa</Link>
											</Menu.Item>
										)}
										{localStorage.user && (
											<Menu.Item key='3' style={{ fontFamily: 'METRO-DF', fontSize: '10px' }}>
												<Link to='/ranking'>Ranking</Link>
											</Menu.Item>
										)}
										{localStorage.user && (
											<Menu.Item
												key='4'
												style={{ fontFamily: 'METRO-DF', fontSize: '10px' }}
												onClick={context.logout}
											>
												Salir
											</Menu.Item>
										)}
									</Menu>
								</Header>
								<Content style={{ padding: '50px 0 50px 0', height: '600px' }}>
									<div style={{ background: '#fff', padding: 15, height: '100%' }}>
										<Switch>
											<Route exact path='/' component={Home} />
											<Route exact path='/login' component={Login} />
											<Route exact path='/signup' component={Signup} />
											<Route exact path='/404' component={NotFound} />
											<Route exact path='/map' component={mapv2} />
											<Route exact path='/estaciones/:id' component={Station} />
											<Route exact path='/usuario/:location' component={Usuario} />
											<Route exact path='/ranking' component={StationList} />
										</Switch>
									</div>
								</Content>
								<Footer style={{ textAlign: 'center' }}>METRO-CDMX©2019 Created by @anreb</Footer>
							</BrowserRouter>
						</Layout>
					);
				}}
			</MyContext.Consumer>
		);
	}
}

Router.contextType = MyContext;

export default Router;
