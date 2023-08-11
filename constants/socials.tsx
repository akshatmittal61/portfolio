import { GitHub, Linkedin, Mail, Codepen, Code, Twitter } from "react-feather";

const socials: {
	icon: any;
	username: string;
	link: string;
	color: string;
	platform: string;
}[] = [
	{
		icon: <GitHub />,
		username: "@akshatmittal61",
		link: "https://github.com/akshatmittal61",
		color: "var(--indigo)",
		platform: "GitHub",
	},
	{
		icon: <Linkedin />,
		username: "@akshatmittal61",
		link: "https://www.linkedin.com/in/akshatmittal61",
		color: "var(--light-blue-700)",
		platform: "LinkedIn",
	},
	{
		icon: <Code />,
		username: "akshatmittal61",
		link: "https://leetcode.com/akshatmittal61",
		color: "var(--yellow-700)",
		platform: "LeetCode",
	},
	{
		icon: <Mail />,
		username: "akshatmittal2506@gmail.com",
		link: "mailto:akshatmittal2506@gmail.com",
		color: "var(--red-700)",
		platform: "Email",
	},
	{
		icon: <Codepen />,
		username: "akshatmittal61",
		link: "https://codepen.io/akshatmittal61",
		color: "var(--indigo-700)",
		platform: "CodePen",
	},
	{
		icon: <Twitter />,
		username: "@akshatmittal61",
		link: "https://twitter.com/akshatmittal61",
		color: "var(--blue-500)",
		platform: "Twitter (X)",
	},
];

export default socials;
