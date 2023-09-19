import { useState } from "react";
import { IProject } from "@/types/project";
import projectsData from "@/data/projects";

const useContextData = () => {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	const projects: IProject[] = projectsData;

	return {
		theme,
		setTheme,
		projects,
	};
};

export default useContextData;
