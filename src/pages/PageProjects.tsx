import React from 'react';
import { Project } from '../components/Project';
import { projects } from '../data/projects';

export const PageProjects = () => {
	return (
		<section className="projects">
			{projects.map((project, index) => (
				<Project key={index} project={project} />
			))}
		</section>
	);
};
