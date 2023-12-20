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
		description:
			"At AthenaSquare I have built a Screening Dashboard & real-time Application Tracking System for hiring automation. I have also built an Auth workflow using Google OAuth and candidate assessment workflow with proctoring. One of my major contributions was migrating the entire product from ReactJS project to NextJS resulting into SEO increase by 55%. I worked closely with the design team, and the backend team in a feedback-driven environment, continuously refining my way of working with code and in a team. Having worked close to the founding teams, I have great experience in managing things solely.",
		startDate: "2022-10-24T00:00:00.000Z",
		tags: ["reactjs", "nextjs", "typescript", "jest", "sass"],
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
			"I worked with the frontend team on an interface for liquid staking protocol, blockchain platform using ReactJS for user-engaging interface development.",
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
			"At Techsnap, I worked on the main website of the company bhulding their initial product. I worked on the frontend of the website using HTML, CSS, and JavaScript. With the help of the design team, I was able to implement the design of the website in a responsive manner and also improved the SEO of the website.",
		startDate: "2021-01-01T00:00:00.000Z",
		endDate: "2021-02-01T00:00:00.000Z",
		tags: ["figma", "html", "css", "javascript"],
		background: "rgba(252, 0, 189, 0.20)",
		theme: "#fc00bd",
	},
];

export default workExperience;
