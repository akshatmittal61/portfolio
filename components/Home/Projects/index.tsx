import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import React from "react";
import Typography from "@/library/Typography";

const classes = stylesConfig(styles, "home-projects");

const HomeProjects: React.FC = () => {
	return (
		<section className={classes("")} id="projects">
			<Typography size="head-3" weight="medium" as="h1">
				Projects
			</Typography>
		</section>
	);
};

export default HomeProjects;
