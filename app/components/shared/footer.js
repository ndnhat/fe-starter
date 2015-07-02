'use strict';
import React from 'react';
import { Link } from 'react-router';

export default React.createClass({

	render() {
		return (
			<footer className="o-layout__footer c-footer js-footer">
				<nav className="c-secondary-nav">
					<ul className="c-secondary-nav__list">
						<li className="c-secondary-nav__item">
							<a className="c-secondary-nav__link" href="//www.awardselect.com/privacy/p_en_US.html" target="_blank">
								Privacy Policy
							</a>
						</li>
					</ul>
				</nav>
				<p className="c-footer__copyright">&copy; 2015 O.C. Tanner Company</p>
			</footer>
		);
	}

});
