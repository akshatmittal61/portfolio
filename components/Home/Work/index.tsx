import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { Typography } from "@/library";

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
				Right now, I am an SDE intern at a thriving growth stage B2B
				SaaS startup{" "}
				<a
					href="https://athenasquare.org/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Athenasquare
				</a>
				.
			</Typography>
		</section>
	);
};

export default HomeWork;
