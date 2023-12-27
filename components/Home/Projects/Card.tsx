import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { IProject } from "@/types/project";
import Image from "next/image";
import { Typography } from "@/library";
import { Code, ExternalLink } from "react-feather";

interface IHomeProjectsCardProps extends IProject {}

const classes = stylesConfig(styles, "home-projects-card");

const HomeProjectsCard: React.FC<IHomeProjectsCardProps> = ({
	title,
	logo,
	image,
	github,
	deployment,
}) => {
	return (
		<div className={classes("")}>
			<div className={classes("-graphic")}>
				<a href={deployment} target="_blank" rel="noreferrer">
					<Image src={image} alt={title} width={1200} height={630} />
				</a>
			</div>
			<div className={classes("-content")}>
				<div className={classes("-left")}>
					<Image src={logo} alt={title} width={100} height={100} />
					<Typography
						as="h3"
						size="xl"
						weight="medium"
						className={classes("-title")}
					>
						{title}
					</Typography>
				</div>
				<div className={classes("-right")}>
					<a href={github} target="_blank" rel="noreferrer">
						<Code />
					</a>
					<a href={deployment} target="_blank" rel="noreferrer">
						<ExternalLink />
					</a>
				</div>
			</div>
		</div>
	);
};

export default HomeProjectsCard;
