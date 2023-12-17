import { IWork } from "@/types/work";

const workExperience: IWork[] = [
	{
		id: 3,
		company: {
			name: "AthenaSquare",
			logo: "/images/work/athenasquare.png",
			link: "https://athenasquare.org",
		},
		position: "SDE Intern",
		description: `• Developed Screening Dashboard & real-time Application Tracking System for hiring automation
• Built Auth workflow using Google OAuth and candidate assessment workflow with proctoring
• Migrated entire product from ReactJS project to NextJS for SEO optimization by 55%
• Tech Stack: ReactJS, NextJS, TypeScript, Redux, SASS, Jest`,
		startDate: "2022-10-24T00:00:00.000Z",
		tags: ["reactjs", "nextjs", "typescript", "jest", "sass"],
	},
	{
		id: 2,
		company: {
			name: "StakeEasy",
			logo: "/images/work/stakeeasy.png",
			link: "https://www.stakeeasy.finance",
		},
		position: "Frontend Developer Intern",
		description: `• Worked with frontend team on an interface for liquid staking protocol, blockchain platform
• Used ReactJS for responsive user interface development`,
		startDate: "2022-05-23T00:00:00.000Z",
		endDate: "2022-07-18T00:00:00.000Z",
		tags: ["reactjs", "sass", "typescript"],
	},
	{
		id: 1,
		company: {
			name: "Techsnap",
			logo: "/images/work/tehsnap.png",
			link: "https://www.techsnap.in/",
		},
		position: "Frontend Developer Intern",
		description: `• Built Figma prototype with interactive and engaging user design
• Implemented and delivered multiple responsive pages with improved SEO optimization`,
		startDate: "2021-01-01T00:00:00.000Z",
		endDate: "2021-02-01T00:00:00.000Z",
		tags: ["figma", "html", "css", "javascript"],
	},
];

export default workExperience;
