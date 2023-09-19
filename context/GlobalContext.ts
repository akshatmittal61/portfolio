import { IProject } from "@/types/project";
import { createContext } from "react";

const GlobalContext = createContext({
	theme: "light" as "light" | "dark",
	setTheme: (_: "light" | "dark") => {},
	projects: [] as IProject[],
});

export default GlobalContext;
