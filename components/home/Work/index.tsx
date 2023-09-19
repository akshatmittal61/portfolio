import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import Typography from "@/library/Typography";

const classes = stylesConfig(styles, "home-work");

const HomeWork: React.FC = () => {
	return (
		<section className={classes("")} id="work">
			<Typography
				type="heading"
				variant="display"
				className={classes("-title")}
			>
				Where I work
			</Typography>
			<div className={classes("-all")}></div>
		</section>
	);
};

export default HomeWork;
