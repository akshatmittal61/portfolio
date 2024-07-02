import Responsive from "@/layouts/Responsive";
import { Typography } from "@/library";
import { IProject } from "@/types/project";
import { stylesConfig } from "@/utils/functions";
import React from "react";
import { Command } from "react-feather";
import Card from "./Card";
import styles from "./styles.module.scss";

interface IHomeProjectsProps {
	projects: Array<IProject>;
}

const classes = stylesConfig(styles, "home-projects");

const HomeProjects: React.FC<IHomeProjectsProps> = ({ projects }) => {
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
