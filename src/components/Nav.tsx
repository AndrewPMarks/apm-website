import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
	return (
		<nav>
			<header>
				<Link to="/" className="no-style">
					AndrewMarks.io
				</Link>
			</header>
			<div className="links">
				<Link to="/projects" className="link">
					<div>projects</div>
				</Link>
				<Link to="/contact" className="link">
					<div>contact</div>
				</Link>
			</div>
		</nav>
	);
};
