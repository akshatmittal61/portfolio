import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import React from "react";

const classes = stylesConfig(styles, "overlay");

const Overlay: React.FC = () => {
	return (
		<main id="overlay" className={classes("")}>
			<div className={classes("-cover")} />
			<div className={classes("-logo")}>
				<span className={classes("-logo-left")}></span>
				<span className={classes("-logo-right")}></span>
				<span className={classes("-logo-center")}></span>
			</div>
		</main>
	);
};

export default Overlay;
