export interface IProject {
	id: number;
	title: string;
	description: string;
	github?: string;
	deployment?: string;
	logo: string;
	image: string;
	tags: string[];
}
