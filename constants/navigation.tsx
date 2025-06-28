import { Navigation } from "@/types";
import { FiBook, FiCodesandbox, FiHome, FiRss, FiSend } from "react-icons/fi";

export const navigation: Array<Navigation> = [
	{
		id: "home",
		title: "Home",
		route: "/",
		icon: <FiHome />,
	},
	{
		id: "about",
		title: "About",
		route: "/about",
		icon: <FiBook />,
	},
	{
		id: "projects",
		title: "Projects",
		route: "/projects",
		icon: <FiCodesandbox />,
	},
	{
		id: "blog",
		title: "Blog",
		route: "/blog",
		icon: <FiRss />,
	},
	{
		id: "contact",
		title: "Get in Touch",
		route: "/contact",
		icon: <FiSend />,
	},
];
