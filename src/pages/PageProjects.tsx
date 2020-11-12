import React from 'react';
import { Project } from '../components/Project';
import { projects } from '../data/projects';

export const PageProjects = () => {
	return (
		<>
			{projects.length > 0 && (
				<section className='projects'>
					{projects.map((project, index) => (
						<Project key={index} project={project} />
					))}
				</section>
			)}
			{projects.length === 0 && (
				<div className='center-text'>No projects to display</div>
			)}
		</>
	);
};
