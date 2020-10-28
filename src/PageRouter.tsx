import React from 'react';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { PageIndex } from './pages/PageIndex';
import { PageContact } from './pages/PageContact';
import { PageProjects } from './pages/PageProjects';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route, withRouter } from 'react-router-dom';
import { NotFound } from './components/NotFound';

export const PageRouter = withRouter(({ location }) => {
	return (
		<div className='wrapper'>
			<div className='flex-container'>
				<Nav />
				<div className='container'>
					<TransitionGroup className='transition-group'>
						<CSSTransition
							key={location.key}
							timeout={{ enter: 100, exit: 100 }}
							classNames={'fade'}
						>
							<section className='route-section'>
								<Switch location={location}>
									<Route
										path='/'
										exact
										component={PageIndex}
									/>
									<Route
										path='/projects'
										exact
										component={PageProjects}
									/>
									<Route
										path='/contact'
										exact
										component={PageContact}
									/>

									<Route component={NotFound} status='404' />
								</Switch>
							</section>
						</CSSTransition>
					</TransitionGroup>
				</div>
			</div>
			<Footer />
		</div>
	);
});
