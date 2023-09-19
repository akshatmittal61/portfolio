import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import React, { useState } from "react";
import { IProject } from "@/types/project";
import Image from "next/image";
import { GitHub, Link } from "react-feather";
import Typography from "@/library/Typography";

interface ProjectProps extends IProject {
	style?: React.CSSProperties;
	variant?: "showcase" | "card";
}

const Project: React.FC<ProjectProps> = ({
	style,
	title,
	description,
	image,
	logo,
	github,
	deployment,
	tags,
	variant = "card",
}) => {
	const [logoImg, setLogoImg] = useState(logo);
	const classes = stylesConfig(
		styles,
		variant === "showcase" ? "project-showcase" : "project-card"
	);
	return variant === "showcase" ? (
		<div className={classes("")}>
			<div className={classes("-poster")}>
				<Image src={image} alt={title} width={1360} height={768} />
			</div>
			<Typography
				type="heading"
				variant="display"
				className={classes("-title")}
			>
				{title}
			</Typography>
			<Typography
				type="body"
				variant="extra-large"
				className={classes("-description")}
			>
				{description}
			</Typography>
			<div className={classes("-tags")}>
				{tags.map((tag, index) => (
					<Typography
						type="body"
						variant="small"
						key={index}
						className={classes("-tags-tag")}
					>
						{tag}
					</Typography>
				))}
			</div>
			<div className={classes("-links")}>
				{github ? (
					<a href={github} target="_blank" rel="noopener noreferrer">
						<GitHub />
					</a>
				) : null}
				{deployment ? (
					<a
						href={deployment}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Link />
					</a>
				) : null}
			</div>
		</div>
	) : variant === "card" ? (
		<div className={classes("")} style={style}>
			<div className={classes("-header")}>
				<Image
					src={logoImg ?? "/images/logo.svg"}
					alt={title}
					width={32}
					height={32}
					className={classes("-header-logo")}
					onError={() => {
						setLogoImg("/images/logo.svg");
					}}
				/>
				<div className={classes("-header-links")}>
					{github ? (
						<a
							href={github}
							target="_blank"
							rel="noopener noreferrer"
						>
							<GitHub />
						</a>
					) : null}
					{deployment ? (
						<a
							href={deployment}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Link />
						</a>
					) : null}
				</div>
			</div>
			<div className={classes("-content")}>
				<Typography
					type="heading"
					variant="title-2"
					className={classes("-content-title")}
				>
					{title}
				</Typography>
				<Typography
					type="body"
					variant="small"
					className={classes("-content-description")}
				>
					{description.length > 80
						? description.slice(0, 80) + "..."
						: description}
				</Typography>
			</div>
			<div className={classes("-tags")}>
				{tags.map((tag, index) => (
					<Typography
						type="body"
						variant="small"
						key={index}
						className={classes("-tags-tag")}
					>
						{tag}
					</Typography>
				))}
			</div>
			<span
				style={{
					backgroundImage: `url(${image})`,
				}}
				className={classes("-image")}
			/>
		</div>
	) : null;
};

export default Project;
