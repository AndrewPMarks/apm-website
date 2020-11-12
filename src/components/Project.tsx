import React from 'react';
import type { ProjectType } from '../data/projects';

type ProjectProps = {
	key: number;
	project: ProjectType;
};

export const Project = (props: ProjectProps) => {
	let { name, link, description, image } = props.project;
	return (
		<a href={link} className='no-style link project'>
			{image && (
				<aside className='hero'>
					<img src={image} alt='' />
				</aside>
			)}
			<article className='info'>
				<div className='name'>{name}</div>
				<div
					className='description'
					dangerouslySetInnerHTML={{ __html: description }}
				></div>
			</article>
		</a>
	);
};
