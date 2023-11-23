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
			<Responsive.Row>
				<Responsive.Col xlg={40} lg={40} md={40} sm={0} xsm={0}>
					Empty for now
				</Responsive.Col>
				<Responsive.Col xlg={60} lg={60} md={60} sm={100} xsm={100}>
					<Work />
				</Responsive.Col>
			</Responsive.Row>
		</main>
	);
};

export default HomePage;
