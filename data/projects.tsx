import { IProject } from "@/types/project";

const projects: IProject[] = [
	{
		id: 5,
		title: "Settle It",
		description: `
• Built an application for maintaining track of expenses
• OTP based authentication model
• Just add the expenses and let us handle the calculations
• Optimized API response by 150% by MongoDB lookup queries and database normalization
		`,
		github: "https://github.com/akshatmittal61/settle-it",
		deployment: "https://settleit.vercel.app/",
		image: "https://settleit.vercel.app/og-image.png",
		logo: "https://settleit.vercel.app/favicon.png",
		tags: ["nextjs", "typescript", "sass", "flutter"],
	},
	{
		id: 4,
		title: "Screen Recorder",
		description: `
• Built by native media recorder element
		`,
		github: "https://github.com/akshatmittal61/screen-recorder",
		deployment: "https://akshatmittal61.github.io/screen-recorder/",
		image: "https://akshatmittal61.github.io/screen-recorder/images/og-image.png",
		logo: "https://akshatmittal61.github.io/screen-recorder/favicon.png",
		tags: ["javascript", "media"],
	},
	{
		id: 3,
		title: "City Tales",
		description: `
• Incorporated features such as past walks, blogs, reviews, quizzes, and merchandise to enhance user engagement.
• Reduced API latency by 40% and improved load time by 25%, for seamless user interactions.
• Attained a remarkable Google ranking of 95% through effective SEO strategies
		`,
		github: "https://github.com/akshatmittal61/city-tales",
		deployment: "https://city-tales.vercel.app/",
		image: "https://city-tales.vercel.app/images/og-image.png",
		logo: "https://city-tales.vercel.app/images/primary-logo-1.png",
		tags: ["nestjs", "typescript", "javascript", "sass"],
	},
	{
		id: 2,
		title: "Meraki IIIT Una",
		description: `
• Built OTP based authentication model using Google APIs
• Delivered user-engaging interface with a decreased load time of 35% and SEO optimization
• Optimized API response by 150% by MongoDB lookup queries and database normalization
		`,
		github: "https://github.com/meraki-iiitu/meraki-23",
		deployment: "https://meraki-23.vercel.app/",
		image: "https://meraki-23.vercel.app/og-image.png",
		logo: "https://meraki-23.vercel.app/favicon.png",
		tags: ["nextjs", "typescript", "javascript", "google-apis", "sass"],
	},
	{
		id: 1,
		title: "Flavorsome",
		description: `
• Built a MERN Stack recipe blogging platform in 4 days as a frontend challenge
• Facilitated reading, writing, and saving recipes by decreasing API latency by 15%
		`,
		github: "https://github.com/akshatmittal61/flavorsome",
		deployment: "https://flavorsome.netlify.app/",
		image: "https://flavorsome.netlify.app/images/og-image.png",
		logo: "https://flavorsome.netlify.app/images/favicon.png",
		tags: ["reactjs", "javascript", "mongodb", "express", "sass"],
	},
];

export default projects;
