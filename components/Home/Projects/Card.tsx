import { Typography } from "@/library";
import { IProject } from "@/types/project";
import { stylesConfig } from "@/utils/functions";
import Image from "next/image";
import React from "react";
import { Code, ExternalLink } from "react-feather";
import styles from "./styles.module.scss";

interface IHomeProjectsCardProps extends IProject {}

const classes = stylesConfig(styles, "home-projects-card");

const HomeProjectsCard: React.FC<IHomeProjectsCardProps> = ({
	id,
	title,
	logo,
	image,
	github,
	deployment,
}) => {
	return (
		<div id={`project-${id}`} className={classes("")}>
			<div className={classes("-graphic")}>
				<a href={deployment || github} target="_blank" rel="noreferrer">
					<Image src={image} alt={title} width={1200} height={630} />
				</a>
			</div>
			<div className={classes("-content")}>
				<div className={classes("-content__header")}>
					<div className={classes("-left")}>
						<Image
							src={logo}
							alt={title}
							width={100}
							height={100}
						/>
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
						{github ? (
							<a href={github} target="_blank" rel="noreferrer">
								<Code />
								<span className="dispn">{github}</span>
							</a>
						) : null}
						{deployment ? (
							<a
								href={deployment}
								target="_blank"
								rel="noreferrer"
							>
								<ExternalLink />
								<span className="dispn">{deployment}</span>
							</a>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeProjectsCard;
