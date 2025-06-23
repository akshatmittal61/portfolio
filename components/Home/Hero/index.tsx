import { stylesConfig } from "@/utils";
import React from "react";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "home-hero");

type HomeHeroProps = {};

export const HomeHero: React.FC<HomeHeroProps> = () => {
	return (
		<section id="" className={classes("")}>
			<h1 className={classes("-name")}>Akshat Mittal</h1>
			<p className={classes("-about")}>
				Built for startups. Backed by experience. Powered by code.
				<br />
				Turning your bold ideas into fast, scalable web products.
			</p>
		</section>
	);
};
