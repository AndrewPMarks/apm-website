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
		<article className="project">
			<Link to={link} className="no-style link">
				{name}
			</Link>
		</article>
	);
};
