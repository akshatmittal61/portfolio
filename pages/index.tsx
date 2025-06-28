import { HomeAbout, HomeHero, HomeProjects } from "@/components";
import { useStore } from "@/context";
import styles from "@/styles/pages/Home.module.scss";
import { stylesConfig } from "@/utils";
import React from "react";

const classes = stylesConfig(styles, "home");

const HomePage: React.FC = () => {
	useStore({ syncOnMount: true });
	return (
		<main className={classes("")}>
			<HomeHero />
			<HomeAbout />
			<HomeProjects />
		</main>
	);
};

export default HomePage;
