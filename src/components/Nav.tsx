import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
	return (
		<nav>
			<header>
				<NavLink
					to='/'
					className='no-style'
					activeClassName='active'
					exact
				>
					AndrewMarks<span className='highlight'>.io</span>
				</NavLink>
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
