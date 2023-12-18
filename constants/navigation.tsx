import { INavigation } from "@/types/navigation";
import { Briefcase, Command, Home } from "react-feather";

const navigation: INavigation[] = [
	{
		icon: <Home />,
		title: "Home",
		path: "#",
	},
	{
		icon: <Briefcase />,
		title: "Work",
		path: "#work",
	},
	{
		icon: <Command />,
		title: "Projects",
		path: "#projects",
	},
];

export default navigation;
