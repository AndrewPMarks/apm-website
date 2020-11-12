import React from 'react';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { PageIndex } from './pages/PageIndex';
import { PageContact } from './pages/PageContact';
import { PageProjects } from './pages/PageProjects';
import { Switch, Route, withRouter } from 'react-router-dom';
import { NotFound } from './components/NotFound';

export const PageRouter = withRouter(({ location }) => {
	if (process.env.NODE_ENV === 'development') {
		document.title = 'AndrewMarks.io - dev';
	}

	return (
		<div className='wrapper'>
			<div className='flex-container'>
				<Nav />
				<div className='container'>
					<Switch location={location}>
						<Route path='/' exact component={PageIndex} />
						<Route
							path='/projects'
							exact
							component={PageProjects}
						/>
						<Route path='/contact' exact component={PageContact} />

						<Route component={NotFound} status='404' />
					</Switch>
				</div>
			</div>
			<Footer />
		</div>
	);
});
