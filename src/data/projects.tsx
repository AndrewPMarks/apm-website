export type ProjectType = {
	name: string;
	link: string;
	description: string;
	image?: string;
};

export const projects: ProjectType[] = [];

export const projectsDev: ProjectType[] = [
	{
		name: 'AndrewMarks.io',
		link: '/',
		image: '/images/placeholder.png',
		description:
			'Lorem ipsum dolor sit amet, duis excepteur enim irure nisi nostrud velit occaecat tempor duis culpa exercitation sint elit minim consectetur culpa officia et pariatur',
	},
	{
		name: 'AndrewMarks.io',
		link: '/',
		image: '/images/projects/andrewmarks.io.png',
		description:
			'Lorem ipsum dolor sit amet, duis excepteur enim irure nisi nostrud velit occaecat tempor duis culpa exercitation sint elit minim consectetur culpa officia et pariatur',
	},
];
