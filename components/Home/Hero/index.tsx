import { Button, IconButton } from "@/library";
import { stylesConfig } from "@/utils";
import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "home-hero");

export const HomeHero: React.FC = () => {
	return (
		<section id="" className={classes("")}>
			<h1 data-aos="fade-up" className={classes("-name")}>
				Akshat Mittal
			</h1>
			<p data-aos="fade-up" className={classes("-about")}>
				Built for startups. Backed by experience. Powered by code.
				<br />
				Turning your bold ideas into fast, scalable web products.
			</p>
			<div className={classes("-actions")} data-aos="fade-up">
				<Button
					className={classes("-btn")}
					size="large"
					icon={<RiArrowRightDoubleLine />}
					iconPosition="right"
					route="/contact"
				>
					Get In Touch
				</Button>
				<IconButton
					size="large"
					icon={<FiMail />}
					href="mailto:akshatmittal2506@gmail.com"
				/>
				<IconButton
					size="large"
					icon={<FiPhone />}
					href="tel:919456849466"
				/>
			</div>
		</section>
	);
};
