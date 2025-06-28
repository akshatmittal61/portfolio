import { IconButton, Typography } from "@/library";
import { IProject } from "@/types";
import { stylesConfig } from "@/utils";
import Image from "next/image";
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import styles from "./styles.module.scss";

type ProjectCardProps = {
	project: IProject;
	tiled: boolean;
};

const classes = stylesConfig(styles, "project-card");

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	return (
		<div className={classes("")}>
			<Image
				src={project.image}
				alt={project.title}
				width={1920}
				height={1080}
				className={classes("-image")}
			/>
			<div className={classes("-content")}>
				<Typography as="h3" size="head-3" className={classes("-title")}>
					{project.title}
				</Typography>
				<Typography size="xl">
					<div
						dangerouslySetInnerHTML={{
							__html: project.description,
						}}
					/>
				</Typography>
				<div className={classes("-actions")}>
					{project.github ? (
						<IconButton icon={<FiGithub />} href={project.github} />
					) : null}
					{project.deployment ? (
						<IconButton
							icon={<FiExternalLink />}
							href={project.deployment}
						/>
					) : null}
				</div>
			</div>
			<div className={classes("-frame")}>
				{/* <span
					className={classes("-frame--border", "-frame--border_1")}
				/>
				<span
					className={classes("-frame--border", "-frame--border_2")}
				/>
				<span
					className={classes("-frame--border", "-frame--border_3")}
				/>
				<span
					className={classes("-frame--border", "-frame--border_4")}
				/> */}
			</div>
		</div>
	);
};
