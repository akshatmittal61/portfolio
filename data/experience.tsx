import { IWork } from "@/types/work";

const workExperience: IWork[] = [
	{
		id: 6,
		company: {
			name: "MPL Gaming",
			logo: "https://www.mpl.live/static/hamburger/mpl-logo.png",
			link: "https://mpl.live",
		},
		position: "NodeJS Developer",
		description: "",
		startDate: "2024-04-12T00:00:00.000Z",
		tags: ["nodejs", "kafka", "gcp", "grafana", "kibana"],
		background: "rgba(179, 99, 199, 0.15)",
		theme: "#1f40cb",
	},
	{
		id: 5,
		company: {
			name: "GrowthJockey",
			logo: "/images/work/growthjockey.png",
			link: "https://growthjockey.com",
		},
		position: "Associate SDE",
		description:
			"<ul><li>Working on their internal product for all the data management by a custom in-house build dashboards.</li><li>Working on building services for admin panel</li></ul>",
		startDate: "2024-01-03T00:00:00.000Z",
		endDate: "2024-04-11T00:00:00.000Z",
		tags: [
			"reactjs",
			"remix",
			"typescript",
			"tailwindcss",
			"figma",
			"fuzzy-search",
		],
		background: "rgba(179, 99, 199, 0.15)",
		theme: "#1f40cb",
	},
	{
		id: 4,
		company: {
			name: "Opengig",
			logo: "https://opengig.work/favicon.png",
			link: "https://opengig.work",
		},
		position: "Software Developer",
		description:
			"<ul><li>Collaborated with 5 different startups to effectively build and deliver MVPs as project lead.</li><li>Single-handedly developed a freelancer platform, enabling profile showcasing and client collaboration, driving over 2000 users onboarding in first week of release.</li><li>Engineered an extensive Component Library of more than 20 reusable components, layouts, and design templates with in-depth documentation on usage and functionality.</li></ul>",
		startDate: "2023-06-30T00:00:00.000Z",
		tags: [
			"reactjs",
			"nextjs",
			"typescript",
			"jest",
			"sass",
			"figma",
			"java",
			"springboot",
			"mongodb",
			"docker",
			"aws",
		],
		background: "rgba(179, 99, 199, 0.15)",
		theme: "#1f40cb",
	},
	{
		id: 3,
		company: {
			name: "AthenaSquare",
			logo: "/images/work/athenasquare.png",
			link: "https://athenasquare.org",
		},
		position: "SDE Intern",
		description:
			'<ul><li>Set up Screening Dashboard and real-time Application Tracking System for hiring automation.</li><li>Migrated entire product from ReactJS project to NextJS for SEO optimization by 65%.</li><li>Built a Personalized Candidate Assessment coupled with proctoring and Unit testing with Jest.</li><li>Built an Auth workflow using Google OAuth and candidate assessment workflow with proctoring.</li><li>Developed a <a href="https://chromewebstore.google.com/detail/recruiter-co-pilot/gklgkofkeoanojjoggdecjomfjhcpinc" target="_blank">chrome extension</a> to streamline migration for 10 clients from platforms like LinkedIn.</li></ul>',
		startDate: "2022-10-24T00:00:00.000Z",
		endDate: "2023-06-30T00:00:00.000Z",
		tags: [
			"reactjs",
			"nextjs",
			"typescript",
			"jest",
			"sass",
			"figma",
			"java",
			"springboot",
			"mongodb",
			"docker",
			"aws",
		],
		background: "rgba(179, 99, 199, 0.15)",
		theme: "#7360dd",
	},
	{
		id: 2,
		company: {
			name: "StakeEasy",
			logo: "/images/work/stakeeasy.png",
			link: "https://www.stakeeasy.finance",
		},
		position: "Frontend Developer Intern",
		description:
			"<ul><li>Built 2 services for a liquid staking protocol in a Blockchain platform.</li><li>Used ReactJS for responsive user interface development.</li></ul>",
		startDate: "2022-05-23T00:00:00.000Z",
		endDate: "2022-07-18T00:00:00.000Z",
		tags: ["reactjs", "sass", "typescript"],
		background: "rgba(41, 41, 64, 0.35)",
		theme: "#8888da",
	},
	{
		id: 1,
		company: {
			name: "Techsnap",
			logo: "/images/work/tehsnap.png",
			link: "https://www.techsnap.in/",
		},
		position: "Frontend Developer Intern",
		description:
			"<ul><li>Designed Figma prototype and mock-ups with user design fine-tuned with UX principles.</li><li>Created and delivered 8 responsive pages with improved SEO optimization.</li></ul>",
		startDate: "2021-01-01T00:00:00.000Z",
		endDate: "2021-02-01T00:00:00.000Z",
		tags: ["figma", "html", "css", "javascript"],
		background: "rgba(252, 0, 189, 0.20)",
		theme: "#fc00bd",
	},
];

export default workExperience;
