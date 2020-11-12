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
					<span className='highlight'>AndrewMarks</span>
					<span className='hover-highlight'>.io</span>
				</NavLink>
			</header>
			<div className='links'>
				<NavLink
					to='/projects'
					activeClassName='active'
					className='link'
					exact
				>
					projects
				</NavLink>
				<NavLink
					to='/contact'
					activeClassName='active'
					className='link'
					exact
				>
					contact
				</NavLink>
			</div>
		</nav>
	);
};
