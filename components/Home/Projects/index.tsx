import React from "react";
import Card from "./Card";
import projects from "@/data/projects";
import Responsive from "@/layouts/Responsive";
import { Typography } from "@/library";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { Command } from "react-feather";

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
				<Command /> What I build
			</Typography>
			<Responsive.Row className={classes("-container")}>
				{projects.map((project, index) => (
					<Responsive.Col
						xlg={50}
						lg={50}
						md={50}
						sm={100}
						xsm={100}
						key={`project-${index + 1}`}
					>
						<Card {...project} />
					</Responsive.Col>
				))}
			</Responsive.Row>
		</section>
	);
};

export default HomeProjects;
