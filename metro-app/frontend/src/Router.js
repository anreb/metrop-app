import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import NotFound from './components/404/NotFound.js';
import 'antd/dist/antd.css';
import './index.css';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/login' component={Login} />
			<Route exact path='/signup' component={Signup} />
			<Route exact path='/404' component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;
