import React from "react";
import { IWork } from "@/types/work";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { Typography } from "@/library";
import moment from "moment";

interface IHomeWorkCardProps extends IWork {}

const classes = stylesConfig(styles, "home-work-card");

const HomeWorkCard: React.FC<IHomeWorkCardProps> = ({
	company,
	position,
	background,
	theme,
	startDate,
	endDate,
	description,
}) => {
	return (
		<div
			className={classes("")}
			style={{
				backgroundColor: background,
				color: theme,
			}}
		>
			<Typography
				as="h3"
				size="head-4"
				weight="medium"
				className={classes("-title")}
				title={`${company.name} - ${position}`}
				style={{
					WebkitTextStroke: `1px ${theme}`,
				}}
			>
				<a
					href={company.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					{company.name}
				</a>{" "}
				&middot; {position}
			</Typography>
			<Typography as="span">
				{moment(startDate).format("MMM YYYY")}
				{endDate
					? ` - ${moment(endDate).format("MMM YYYY")}`
					: " - Present"}
			</Typography>
			<Typography
				as="p"
				size="lg"
				weight="regular"
				className={classes("-description")}
			>
				{description}
			</Typography>
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
