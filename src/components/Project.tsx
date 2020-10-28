import React from 'react';
import { Link } from 'react-router-dom';
import type { ProjectType } from '../data/projects';

type ProjectProps = {
	key: number;
	project: ProjectType;
};

export const Project = (props: ProjectProps) => {
	let { name, link } = props.project;
	return (
		<Link to={link} className='no-style link project'>
			<aside className='hero'></aside>
			<article className='info'>{name}</article>
		</Link>
	);
};
