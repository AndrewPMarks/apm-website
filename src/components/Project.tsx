import React from 'react';
import { Link } from 'react-router-dom';

type ProjectProps = {
	key: number;
	project: {
		name: string;
		link: string;
	};
};

export const Project = (props: ProjectProps) => {
	let { name, link } = props.project;
	return (
		<article>
			<Link to={link}>{name}</Link>
		</article>
	);
};
