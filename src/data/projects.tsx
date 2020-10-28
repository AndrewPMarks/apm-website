export type ProjectType = {
	name: string;
	link: string;
	description: string;
	image?: string;
};

export const projects: ProjectType[] = [
	{
		name: 'AndrewMarks.io',
		link: '/',
		image: '/images/placeholder.png',
		description:
			'Lorem ipsum dolor sit amet, duis excepteur enim irure nisi nostrud velit occaecat tempor duis culpa exercitation sint elit minim consectetur culpa officia et pariatur',
	},
	{
		name: 'Sudoku',
		link: '/sudoku',
		description:
			'Reprehenderit laboris tempor do ex eu in ad labore incididunt Lorem cillum incididunt incididunt exercitation consectetur ad nisi exercitation deserunt id magna excepteur proident ullamco',
	},
];
