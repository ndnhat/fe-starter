'use strict';
import React from 'react';
import { Link } from 'react-router';

export default React.createClass({

	render() {
		return (
			<footer>
				<nav className="navbar navbar-inverse navbar-fixed-bottom">
					<div className="container">
						<ul className="nav navbar-nav">
							<li>
								<a href="//www.awardselect.com/privacy/p_en_US.html" target="_blank">Privacy Policy</a>
							</li>
							<li>
								<a href="//www.octanner.com/contact-us.html" target="_blank">Contact Us</a>
							</li>
							<li>
								<a href="//www.octanner.com" target="_blank">&copy; 2015 O.C. Tanner Company</a>
							</li>
						</ul>
					</div>
				</nav>
			</footer>
		);
	}

});
