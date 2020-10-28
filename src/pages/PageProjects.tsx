import React from 'react';
import { Project } from '../components/Project';

export const PageProjects = () => {
	const projects = [
		{
			name: 'Project 1',
			link: '/projects',
		},
		{
			name: 'Project 2',
			link: '/projects',
		},
		{
			name: 'Project 3',
			link: '/projects',
		},
		{
			name: 'Project 4',
			link: '/projects',
		},
		{
			name: 'Project 5',
			link: '/projects',
		},
		{
			name: 'Project 6',
			link: '/projects',
		},
	];
	return (
		<section className="projects">
			{projects.map((project, index) => (
				<Project key={index} project={project} />
			))}
		</section>
	);
};
