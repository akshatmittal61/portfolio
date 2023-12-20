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
			<Typography
				as="p"
				size="xl"
				weight="regular"
				className={classes("-description")}
			>
				I like to code things from scratch, and enjoy bringing ideas to
				life. I have worked with ReactJS, NextJS, TypeScript, MongoDB,
				NodeJS, Python. FastAPI, and more.
				<br />
				<br />
				Here are a few projects I&apos;ve worked on recently. Visit my{" "}
				<a
					href="https://github.com/akshatmittal61"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</a>{" "}
				to see more.
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
