import React from "react";
import styles from "@/styles/pages/Home.module.scss";
import { stylesConfig } from "@/utils/functions";
import { About, Hero, Projects, Work } from "@/components/home";

const classes = stylesConfig(styles, "home");

const HomePage: React.FC = () => {
	return (
		<main className={classes("")}>
			<Hero />
			<About />
			<Work />
			<Projects />
		</main>
	);
};

export default HomePage;
