import React from 'react';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { PageIndex } from './pages/PageIndex';
import { PageContact } from './pages/PageContact';
import { PageProjects } from './pages/PageProjects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const PageRouter = () => {
	return (
		<Router>
			<div className="wrapper">
				<Nav />
				<div className="container">
					<Switch>
						<Route path="/" exact component={PageIndex} />
						<Route
							path="/projects"
							exact
							component={PageProjects}
						/>
						<Route path="/contact" exact component={PageContact} />
					</Switch>
				</div>
			</div>
			<Footer />
		</Router>
	);
};
