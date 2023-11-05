import React from "react";
import Image from "next/image";
import moment from "moment";
import Typography from "@/library/Typography";
import { IWork } from "@/types/work";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

interface IWorkCardProps extends IWork {}

const classes = stylesConfig(styles, "home-work-card");

const WorkCard: React.FC<IWorkCardProps> = ({
	position,
	company,
	startDate,
	endDate,
	description,
}) => {
	return (
		<div className={classes("")}>
			<div className={classes("-head")}>
				<div className={classes("-head-left")}>
					<Image
						src={company.logo}
						alt={company.name}
						width={50}
						height={50}
					/>
					<Typography type="heading" variant="title-1">
						{position} &#8231; {company.name}
					</Typography>
				</div>
				<div className={classes("-head-right")}>
					{moment(startDate).format("MMM YYYY") +
						" - " +
						(endDate
							? moment(endDate).format("MMM YYYY")
							: "Present")}
				</div>
			</div>
			<div className={classes("-body")}>{description}</div>
		</div>
	);
};

export default WorkCard;
