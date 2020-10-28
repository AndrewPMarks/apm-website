import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Nav = () => {
	return (
		<nav>
			<header>
				<Link to='/' className='no-style'>
					AndrewMarks.io
				</Link>
			</header>
			<div className='links'>
				<NavLink
					to='/projects'
					activeClassName='active'
					className='link'
					exact
				>
					<div>projects</div>
				</NavLink>
				<NavLink
					to='/contact'
					activeClassName='active'
					className='link'
					exact
				>
					<div>contact</div>
				</NavLink>
			</div>
		</nav>
	);
};
