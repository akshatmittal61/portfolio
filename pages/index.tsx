import React from "react";
// import styles from "@/styles/pages/Home.module.scss";
// import { stylesConfig } from "@/utils";
import { HomeHero } from "@/components";

// const classes = stylesConfig(styles);

const HomePage: React.FC = () => {
	return (
		<main className="w-full h-screen flex justify-center items-center">
			<HomeHero />
		</main>
	);
};

export default HomePage;
