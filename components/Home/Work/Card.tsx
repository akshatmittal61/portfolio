import React from "react";
import { IWork } from "@/types/work";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { Typography } from "@/library";
import moment from "moment";
import Image from "next/image";

interface IHomeWorkCardProps extends IWork {}

const classes = stylesConfig(styles, "home-work-card");

const HomeWorkCard: React.FC<IHomeWorkCardProps> = ({
	company,
	position,
	background,
	theme,
	startDate,
	endDate,
	tags,
}) => {
	return (
		<div
			className={classes("")}
			style={{
				backgroundColor: background,
				color: theme,
			}}
		>
			<div className={classes("-header")}>
				<Image
					src={company.logo}
					alt={company.name}
					width={50}
					height={50}
					layout="fixed"
					className={classes("-logo")}
				/>
				<div className={classes("-header-content")}>
					<Typography
						as="h4"
						className={classes("-title")}
						title={`${company.name} - ${position}`}
					>
						<a
							href={company.link}
							target="_blank"
							rel="noopener noreferrer"
						>
							{company.name}
						</a>
					</Typography>
					<Typography
						as="span"
						size="lg"
						className={classes("-subtitle")}
					>
						{position} &middot;{" "}
						{moment(startDate).format("MMM YYYY")}
						{endDate
							? ` - ${moment(endDate).format("MMM YYYY")}`
							: " - Present"}
					</Typography>
				</div>
			</div>
			<div className={classes("-skills")}>
				{tags.map((tag, index) => (
					<Typography
						as="span"
						size="sm"
						weight="regular"
						className={classes("-skill")}
						key={`${company.name}-skill-${index + 1}`}
					>
						{tag}
					</Typography>
				))}
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="565"
				height="360"
				viewBox="0 0 565 360"
				fill="none"
				className={classes("-blob")}
			>
				<g filter={`url(#filter-${company.name})`}>
					<path
						d="M305 303.5C305 371.707 249.707 427 181.5 427C113.293 427 -33 352.707 -33 284.5C-33 216.293 217.793 175 286 175C354.207 175 305 235.293 305 303.5Z"
						fill={theme}
						fill-opacity="0.7"
					/>
				</g>
				<defs>
					<filter
						id={`filter-${company.name}`}
						x="-433"
						y="-225"
						width="1155.17"
						height="1052"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood
							flood-opacity="0"
							result="BackgroundImageFix"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feGaussianBlur
							stdDeviation="200"
							result={`effect1_foregroundBlur-${company.name}`}
						/>
					</filter>
				</defs>
			</svg>
		</div>
	);
};

export default HomeWorkCard;
