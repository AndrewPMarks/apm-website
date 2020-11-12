export type ProjectType = {
	name: string;
	link: string;
	description: string;
	image?: string;
};

export const projects: ProjectType[] = [
	{
		name: 'AndrewMarks.io',
		link: 'https://andrewmarks.io/',
		image: '/images/projects/andrewmarks.io.png',
		description: `This is my personal website that you are currently on. 
			It is a single page application build using <a href="https://reactjs.org/">React</a>,
			<a href="https://sass-lang.com/">Sass</a>, and <a href="https://www.typescriptlang.org/">Typescript</a>.
			View this project on <a href="https://github.com/AndrewPMarks/apm-website">GitHub</a>`,
	},
];
