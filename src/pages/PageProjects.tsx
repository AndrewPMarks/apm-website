import React from 'react';
import { Project } from '../components/Project';

export const PageProjects = () => {
	const projects = [
		{
			name: 'Project Name',
			link: '/projects',
		},
	];
	return (
		<section className="projects">
			{projects.map((project, index) => (
				<Project key={index} />
			))}
		</section>
	);
};
