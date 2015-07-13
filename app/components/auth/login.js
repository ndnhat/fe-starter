'use strict';
import React from 'react';

class Login extends React.Component {
	constructor (props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = { valid: true };
	}

	handleSubmit(e) {
		e.preventDefault();
	 	this.setState({valid: false});
	}

	render() {
		return (
			<div className="col-md-2">
				{!this.state.valid && (
					<div className="alert alert-danger" role="alert">
					  Your email or password is invalid.
					</div>				
				)}
				<form role="login" onSubmit={this.handleSubmit}>
				  <div className="form-group">
				    <label for="email">Email</label>
				    <input type="email" className="form-control" id="email" placeholder="Email" />
				  </div>
				  <div className="form-group">
				    <label for="password">Password</label>
				    <input type="password" className="form-control" id="password" placeholder="Password" />
				  </div>
				  <button type="submit" className="btn btn-default">Submit</button>
				</form>
			</div>
		);
	}
}

Login.contextTypes = {
	router: React.PropTypes.func
};

export default Login;
