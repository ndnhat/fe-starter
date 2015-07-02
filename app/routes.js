'use strict';
import React from 'react';
import Router from 'react-router';
let { Route, DefaultRoute, NotFoundRoute } = Router;

// -- Import base components
import Layout from './components/layout';
import Login from './components/auth/login';


export default (
	<Route handler={Layout} path='/'>
		<Route name='login' handler={Login} />
	</Route>
);
