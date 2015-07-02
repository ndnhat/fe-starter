'use strict';
import React from 'react';
import { RouteHandler } from 'react-router';
import Header from './shared/header';
import Footer from './shared/footer';

class Layout extends React.Component {
	constructor(props) {
		super(props);
		this._onAuth = this._onAuth.bind(this);
		this._onUser = this._onUser.bind(this);
	}

	_onAuth() {
		let { router } = this.context;

		router.transitionTo('login', {}, { nextPath: router.getCurrentPath() });
	}

	_onUser() {
	}

	render() {
		let classes = 'o-layout';

		return (
			<div className={classes}>
				<Header />
				<RouteHandler />
				<Footer />
			</div>
		);
	}
}

Layout.contextTypes = {
  router: React.PropTypes.func
};

export default Layout;
