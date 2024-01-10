import React from "react";
import Card from "./Card";
import workExperience from "@/data/experience";
import { Typography } from "@/library";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

interface IHomeWorkProps {}

const classes = stylesConfig(styles, "home-work");

const HomeWork: React.FC<IHomeWorkProps> = () => {
	return (
		<section className={classes("")} id="work">
			<Typography
				as="h2"
				size="head-3"
				weight="medium"
				className={classes("-title")}
			>
				Where I work
			</Typography>
			<Typography
				as="p"
				size="xl"
				weight="regular"
				className={classes("-description")}
			>
				Right now, I am working as an Associate SDE at{" "}
				<a
					href="https://growthjockey.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					GrowthJockey
				</a>
				.
			</Typography>
			<div className={classes("-container")}>
				{workExperience.map((work, index) => (
					<Card key={`work-${index + 1}`} {...work} />
				))}
			</div>
		</section>
	);
};

export default HomeWork;
