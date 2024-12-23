import React from "react";
import moment from "moment";
import Image from "next/image";
import { SkillPill } from "@/components/Skill";
import { Typography } from "@/library";
import { IWork } from "@/types/work";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

interface IHomeWorkCardProps extends IWork {}

const classes = stylesConfig(styles, "home-work-card");

const HomeWorkCard: React.FC<IHomeWorkCardProps> = ({
	id,
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
			id={`work-exp-${id}`}
			className={classes("")}
			style={{
				backgroundColor: background,
				color: theme,
			}}
		>
			<div className={classes("-header")}>
				<a
					href={company.link}
					target="_blank"
					rel="noopener noreferrer"
					className={classes("-logo")}
				>
					<Image
						src={company.logo}
						alt={company.name}
						width={50}
						height={50}
					/>
				</a>
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
						<Typography size="s">
							{moment(startDate).format("MMM YYYY")}
							{endDate
								? ` - ${moment(endDate).format("MMM YYYY")}`
								: " - Present"}
						</Typography>
					</Typography>
				</div>
			</div>
			<div className={classes("-skills")}>
				{tags.map((tag, index) => (
					<SkillPill
						key={`${company.name}-skill-${index + 1}`}
						name={tag}
					/>
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
						fillOpacity="0.7"
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
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
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
