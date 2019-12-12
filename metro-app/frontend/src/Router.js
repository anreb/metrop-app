import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import NotFound from './components/404/NotFound.js';
import Map from './components/Map/Map';

import 'antd/dist/antd.css';
import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/login' component={Login} />
			<Route exact path='/signup' component={Signup} />
			<Route exact path='/404' component={NotFound} />
			<Route exact path='/map' component={Map} />
		</Switch>
	</BrowserRouter>
);

export default Router;
