export type Blog = {
	id: string;
	title: string;
	description: string;
	date: string;
	image: string;
	link: string;
	author: {
		name: string;
		image: string;
		profile: string;
	};
};
