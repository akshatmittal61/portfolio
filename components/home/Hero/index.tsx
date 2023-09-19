import React from "react";
import { stylesConfig } from "@/utils/functions";
import Typography from "@/library/Typography";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "home-hero");

const HomeHero: React.FC = () => {
	return (
		<section className={classes("")} id="hero">
			<Typography
				type="heading"
				variant="display"
				className={classes("-title")}
			>
				Akshat Mittal
			</Typography>
			<Typography
				type="heading"
				variant="subtitle"
				className={classes("-subtitle")}
			>
				Building the web, one line at a time.
			</Typography>
		</section>
	);
};

export default HomeHero;
