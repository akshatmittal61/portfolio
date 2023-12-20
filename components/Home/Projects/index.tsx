import React from "react";
import Card from "./Card";
import projects from "@/data/projects";
import { Typography } from "@/library";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

interface IHomeProjectsProps {}

const classes = stylesConfig(styles, "home-projects");

const HomeProjects: React.FC<IHomeProjectsProps> = () => {
	return (
		<section className={classes("")} id="projects">
			<Typography
				as="h2"
				size="head-3"
				weight="medium"
				className={classes("-title")}
			>
				What I build
			</Typography>
			<div className={classes("-container")}>
				{projects.map((project, index) => (
					<Card key={`project-${index + 1}`} {...project} />
				))}
			</div>
		</section>
	);
};

export default HomeProjects;
