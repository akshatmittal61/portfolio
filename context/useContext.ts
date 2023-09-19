import { useState } from "react";
import { IProject } from "@/types/project";
import projectsData from "@/data/projects";

const useContextData = () => {
	const [theme, setTheme] = useState<"light" | "dark">("light");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const projects: IProject[] = projectsData;

	return {
		theme,
		setTheme,
		isMenuOpen,
		setIsMenuOpen,
		projects,
	};
};

export default useContextData;
