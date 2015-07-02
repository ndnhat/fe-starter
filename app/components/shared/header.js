import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render() {
		return (
			<header className="o-layout__header js-header">
				<div className="o-layout__header-inner">
					<div className="c-brand">
						<span className="c-brand__name">Hello, world</span>
					</div>
				</div>
			</header>
		);
	}

});
