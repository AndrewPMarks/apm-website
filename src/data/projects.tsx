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
		description: `This is my personal website that you are currently on. It is
		a single page application built using <a href="https://reactjs.org/">React</a>,
		<a href="https://sass-lang.com/">Sass</a>, and <a href="https://www.typescriptlang.org/">
		TypeScript</a>. View this project on <a href="https://github.com/AndrewPMarks/apm-website">
		GitHub</a>`,
	},
	{
		name: 'Snippets',
		link: 'https://snippets.andrewmarks.io/',
		image: '/images/placeholder.png',
		description: `This is where I keep code snippets that I find myself frequently 
		searching for. It is built using <a href="https://webpack.js.org/">Webpack</a>,
		<a href="https://www.typescriptlang.org/">TypeScript</a>, and
		<a href="https://highlightjs.org/">highlight.js</a>`,
	},
];
