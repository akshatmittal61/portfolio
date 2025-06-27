import {
	FiCode,
	FiCodepen,
	FiGithub,
	FiLinkedin,
	FiMail,
	FiPhone,
	FiRss,
	FiTwitter,
} from "react-icons/fi";

interface ISocial {
	icon: any;
	username: string;
	link: string;
	color: string;
	platform: string;
}

export const socials: ISocial[] = [
	{
		icon: <FiMail />,
		username: "akshatmittal2506@gmail.com",
		link: "mailto:akshatmittal2506@gmail.com",
		color: "var(--red-700)",
		platform: "Email",
	},
	{
		icon: <FiGithub />,
		username: "@akshatmittal61",
		link: "https://github.com/akshatmittal61",
		color: "var(--indigo)",
		platform: "GitHub",
	},
	{
		icon: <FiLinkedin />,
		username: "@akshatmittal61",
		link: "https://www.linkedin.com/in/akshatmittal61",
		color: "var(--light-blue-700)",
		platform: "LinkedIn",
	},
	{
		icon: <FiCode />,
		username: "akshatmittal61",
		link: "https://leetcode.com/akshatmittal61",
		color: "var(--yellow-700)",
		platform: "LeetCode",
	},
	{
		icon: <FiCodepen />,
		username: "akshatmittal61",
		link: "https://codepen.io/akshatmittal61",
		color: "var(--indigo-700)",
		platform: "CodePen",
	},
	{
		icon: <FiTwitter />,
		username: "@akshatmittal61",
		link: "https://twitter.com/akshatmittal61",
		color: "var(--blue-500)",
		platform: "Twitter (X)",
	},
	{
		icon: <FiRss />,
		username: "@akshatmittal61",
		link: "https://akshatmittal61.hashnode.dev",
		color: "var(--blue-500)",
		platform: "Hashnode Blog",
	},
	{
		icon: <FiPhone />,
		username: "+91-94568-49466",
		link: "tel:919456849466",
		color: "var(--indigo-500)",
		platform: "Phone",
	},
];
