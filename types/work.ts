export interface IWork {
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
}
