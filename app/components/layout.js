'use strict';
import React from 'react';
import Immutable from 'immutable';
import { RouteHandler } from 'react-router';
import Header from './shared/header';
import Footer from './shared/footer';
import ProfileForm from './ProfileForm';
import profileJson from '../../data/profile.json';
const profileData = Immutable.fromJS(profileJson);

class Layout extends React.Component {
	constructor(props) {
		super(props);
		this._onAuth = this._onAuth.bind(this);
		this._onUser = this._onUser.bind(this);
    this.state = {profileData};
	}

	_onAuth() {
		let { router } = this.context;

		router.transitionTo('login', {}, { nextPath: router.getCurrentPath() });
	}

	_onUser() {
	}

  onChange(newValue) {
    this.setState({profileData: newValue});
  }

	render() {
		let classes = 'o-layout';

		return (
			<div className={classes}>
				<Header />
				<RouteHandler />
        <ProfileForm profile={profileData} />
				<Footer />
			</div>
		);
	}
}

Layout.contextTypes = {
  router: React.PropTypes.func
};

export default Layout;
