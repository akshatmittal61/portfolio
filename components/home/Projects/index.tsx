import React from "react";
import { stylesConfig } from "@/utils/functions";
import useStore from "@/hooks/store";
import styles from "./styles.module.scss";
import Project from "@/components/Project";
import Typography from "@/library/Typography";

const classes = stylesConfig(styles, "home-projects");

const HomeProjects: React.FC = () => {
	const { projects } = useStore();
	return projects.length === 0 ? null : (
		<section className={classes("")} id="projects">
			<Typography
				type="heading"
				variant="display"
				className={classes("-title")}
			>
				What I build
			</Typography>
			<div className={classes("-all")}>
				{projects.map((project, index) => (
					<Project key={index} {...project} />
				))}
			</div>
		</section>
	);
};

export default HomeProjects;
