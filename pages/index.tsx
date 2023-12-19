import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "@/styles/pages/Home.module.scss";
import { Intro } from "@/components/Home";

const classes = stylesConfig(styles, "home");

const HomePage: React.FC = () => {
	return (
		<main className={classes("")}>
			<Intro />
		</main>
	);
};

export default HomePage;
