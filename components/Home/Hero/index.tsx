import { stylesConfig } from "@/utils";
import React from "react";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles);

type HomeHeroProps = {};

export const HomeHero: React.FC<HomeHeroProps> = () => {
	return <section id="" className={classes("")}></section>;
};
