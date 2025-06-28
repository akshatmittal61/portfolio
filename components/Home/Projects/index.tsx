import { SkillPill } from "@/components/Skill";
import { useStore } from "@/context";
import { projects, skills } from "@/data";
import { useDevice } from "@/hooks";
import { Responsive } from "@/layouts";
import { Typography } from "@/library";
import { stylesConfig } from "@/utils";
import React from "react";
import { ProjectCard } from "./card";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "home-projects");

export const HomeProjects: React.FC = () => {
	const { theme } = useStore();
	const { device } = useDevice();
	const currBg = "/images/developer.png";
	const getContainerStyles = () => {
		if (device === "mobile") {
			return undefined;
		}
		if (theme === "light") {
			return {
				backgroundImage: `linear-gradient(105deg, transparent 0%, transparent 45%, rgba(255, 255, 255, 0.95) 45%), url("${currBg}")`,
			};
		} else {
			return {
				backgroundImage: `linear-gradient(105deg, transparent 0%, transparent 45%, rgba(0, 0, 0, 0.95) 45%), url("${currBg}")`,
			};
		}
	};

	return (
		<section id="projects" className={classes("")}>
			<div className={classes("-container")} style={getContainerStyles()}>
				<Typography
					id="intro-title"
					as="h1"
					size="head-2"
					weight="semi-bold"
					className={classes("-title")}
				>
					What I build
				</Typography>
				<Typography
					as="p"
					size="xxl"
					id="intro-subtitle"
					className={classes("-subtitle")}
				>
					I turn ideas into functional and interactive web
					applications for users and businesses which are fast,
					secure, and scalable and make lives easier.
				</Typography>
				<div className={classes("-skills")}>
					{Object.values(skills)
						.flat()
						.map((skill) => (
							<SkillPill
								key={`my-skills-${skill.id}`}
								name={skill.name}
								logo={skill.logo}
								id={`my-skills-${skill.id}`}
							/>
						))}
				</div>
			</div>
			<Responsive.Row>
				{projects
					.filter((p) => p.showcase)
					.map((project, index) => (
						<Responsive.Col
							key={`project-${project.id}`}
							xlg={index % 4 === 0 || index % 4 === 3 ? 60 : 40}
							lg={index % 4 === 0 || index % 4 === 3 ? 60 : 40}
							md={index % 4 === 0 || index % 4 === 3 ? 60 : 40}
							sm={100}
							xsm={100}
							className={classes("-card-container")}
						>
							<ProjectCard
								tiled={index % 4 === 1 || index % 4 === 2}
								project={project}
							/>
						</Responsive.Col>
					))}
			</Responsive.Row>
		</section>
	);
};
