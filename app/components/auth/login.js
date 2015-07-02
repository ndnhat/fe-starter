'use strict';
import React from 'react';
import { Link } from 'react-router';

class Login extends React.Component {
	constructor (props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this._onChange = this._onChange.bind(this);
		this.state = { error: false };
	}

	_onChange() {
		// TODO: Figure out why this doesn't fire on the LOAD_ERROR event
		let { router } = this.context;
		let nextPath = router.getCurrentQuery().nextPath;
	}

	handleSubmit(e) {
		e.preventDefault();
	 	let email = this.refs.email.getDOMNode().value;
	 	let password = this.refs.password.getDOMNode().value;
		authActions.login(email, password);
	}

	render() {
		return (
			<div className="o-layout__content">
				<div className="c-login">
					<img src="images/common/navbar-brand.png" alt="Welbe logo" className="c-login__logo" />
					<section className="c-login__box">
						<header className="c-login__box-header"> Login </header>

						<div className="c-login__social">
							{/* TODO Wireup the twitter and facebook logins */}
							<a
								onClick={function(e) {e.preventDefault(); window.alert('not implemented yet'); }}
								href="#"
								className="c-login__twitter o-btn o-btn--block">
								<i className="u-icon u-icon--twitter c-login__icon"></i> &nbsp;
								Log in with Twitter
							</a>

							<p className="c-login__or"> or </p>

							<a
								onClick={function(e) {e.preventDefault(); window.alert('not implemented yet'); }}
								href="#"
								className="c-login__facebook o-btn o-btn--block">
								<i className="u-icon u-icon--facebook c-login__icon"></i> &nbsp;
								Log in with Facebook
							</a>
						</div>

						<form className="o-form c-login__form" onSubmit={this.handleSubmit}>

							{this.state.error && (
								<p className="o-form__error-message">
									Invalid email/password combination
								</p>
							)}

							<label className="o-form__label">
								<span className="o-form__title">Email</span>
								<input type="text" className="o-form__input" ref="email" />
							</label>

							<label className="o-form__label">
								<span className="o-form__title">Password</span>
								<input type="password" className="o-form__input" ref="password" />
							</label>

							<button className="o-btn o-btn--block c-login__btn">Sign In</button>
						</form>
						<footer className="c-login__box-footer">
							<Link to='forgot-password' className="c-login__forgot-link">Forgot password?</Link>
						</footer>
					</section>
				</div>
			</div>
		);
	}
}

Login.contextTypes = {
	router: React.PropTypes.func
};

export default Login;
