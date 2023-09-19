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
			<div className={classes("-content")}>
				<Typography
					type="heading"
					variant="display"
					className={classes("-title")}
				>
					My Projects
				</Typography>
				<div className={classes("-all")}>
					{projects.map((project, index) => (
						<Project key={index} {...project} />
					))}
				</div>
			</div>
			<div className={classes("-graphic")} />
		</section>
	);
};

export default HomeProjects;
