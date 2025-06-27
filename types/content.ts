export type ISkill = {
	id: number;
	name: string;
	logo: any;
};

export type IProject = {
	id: number;
	title: string;
	description: string;
	github: string;
	deployment: string;
	image: string;
	logo: string;
	tags: string[];
};

export type IWork = {
	id: number;
	company: {
		name: string;
		logo: string;
		link: string;
	};
	position: string;
	description: string;
	startDate: string;
	endDate?: string;
	tags: string[];
	background: string;
	theme: string;
};
