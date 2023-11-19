import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import Responsive from "@/layouts/Responsive";

const classes = stylesConfig(styles, "home-about");

const HomeAbout: React.FC = () => {
	return (
		<section className={classes("")}>
			<Responsive.Row>
				<Responsive.Col xlg={60} lg={60} md={60} sm={100} xsm={100}>
					<div className={classes("-box")} />
				</Responsive.Col>
				<Responsive.Col xlg={40} lg={40} md={40} sm={100} xsm={100}>
					<div className={classes("-box")} />
				</Responsive.Col>
			</Responsive.Row>
		</section>
	);
};

export default HomeAbout;
