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

	render() {
		return (
			<MyContext.Consumer>
				{(context) => {
					return (
						<Layout style={{ backgroundColor: '#C3C310' }}>
							<BrowserRouter style={{ height: '100vh' }}>
								{!localStorage.user && <Redirect push to='/login' />}
								<Header style={{ height: '10%', backgroundColor: '#F89000' }}>
									<div className='logo' />
									<Menu
										theme='dark'
										mode='horizontal'
										defaultSelectedKeys={[ '1' ]}
										style={{ lineHeight: '64px', display: 'flex', backgroundColor: '#F89000' }}
									>
										<Menu.Item
											key='1'
											style={{
												fontFamily: 'METRO-DF',
												alignSelf: 'flex-start',
												fontSize: '20px'
											}}
										>
											<Link to={localStorage.user ? '/map' : '/'}>Metro-Stats</Link>
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
											<Menu.Item key='4' style={{ fontFamily: 'METRO-DF', fontSize: '10px' }}>
												<Link to='/map'>Mapa</Link>
											</Menu.Item>
										)}
										{localStorage.user && (
											<Menu.Item key='5' style={{ fontFamily: 'METRO-DF', fontSize: '10px' }}>
												<Link to='/ranking'>Ranking</Link>
											</Menu.Item>
										)}
										{localStorage.user && (
											<Menu.Item
												key='6'
												style={{ fontFamily: 'METRO-DF', fontSize: '10px' }}
												onClick={context.logout}
											>
												Salir
											</Menu.Item>
										)}
									</Menu>
								</Header>
								<Content style={{ padding: '30px 0 30px 0', height: '80%' }}>
									<div style={{ background: '#fff', padding: 5, height: '100%' }}>
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
								<Footer style={{ height: '10%', backgroundColor: '#F89000' }}>
									METRO-CDMX©2019 Created by @anreb
								</Footer>
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
