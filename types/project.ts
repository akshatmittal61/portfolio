export interface IProject {
	id: number;
	title: string;
	description: any;
	github?: string;
	deployment?: string;
	image?: string;
	logo?: string;
	tags: string[];
}
