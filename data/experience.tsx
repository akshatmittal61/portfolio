import { IWork } from "@/types/work";

const workExperience: IWork[] = [
	{
		id: 1,
		company: {
			name: "AthenaSquare",
			logo: "https://athenasquare.org/mstile-144x144.png",
			link: "https://athenasquare.org",
		},
		position: "SDE Intern",
		description: `
• Developed Screening Dashboard & real-time Application Tracking System for hiring automation
• Built Auth workflow using Google OAuth and candidate assessment workflow with proctoring
• Migrated entire product from ReactJS project to NextJS for SEO optimization by 55%
• Tech Stack: ReactJS, NextJS, TypeScript, Redux, SASS, Jest
        `,
		startDate: "2022-10-24T00:00:00.000Z",
		tags: ["reactjs", "nodejs", "nextjs", "typescript", "jest", "sass"],
	},
];

export default workExperience;
