import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "@/styles/pages/Home.module.scss";
import { About, Basic, Work } from "@/components/Home";
import Responsive from "@/layouts/Responsive";

const classes = stylesConfig(styles, "home");

const HomePage: React.FC = () => {
	return (
		<main className={classes("")}>
			<Basic />
			<About />
			<Responsive.Row className={classes("-blogs-and-work")}>
				<Responsive.Col xlg={30} lg={30} md={30} sm={0} xsm={0}>
					<div className={classes("-empty")}>Coming Soon</div>
				</Responsive.Col>
				<Responsive.Col xlg={70} lg={70} md={70} sm={100} xsm={100}>
					<Work />
				</Responsive.Col>
			</Responsive.Row>
		</main>
	);
};

export default HomePage;
