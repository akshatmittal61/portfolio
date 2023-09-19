import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import React from "react";
import Typography from "@/library/Typography";

const classes = stylesConfig(styles, "home-about");

const About: React.FC = () => {
	return (
		<section className={classes("")} id="about">
			<div className={classes("-content")}>
				<Typography
					type="heading"
					variant="display"
					className={classes("-title")}
				>
					About me
				</Typography>
				<Typography
					type="body"
					variant="large"
					className={classes("-text")}
				>
					I am Akshat Mittal, a Full Stack Developer diving in MERN
					stack, TypeScript, and Next.js. I love turning ideas into
					functional and beautiful web applications.
					<br /> <br />
					When I&apos;m not immersed in lines of code, you&apos;ll
					find me in the pages of books and scribbling my thoughts
					into poems.
					<br /> <br />
					Currently, I am an SDE intern at a thriving growth stage
					startup called{" "}
					<a
						href="https://athenasquare.org"
						target="_blank"
						rel="noreferrer"
					>
						Athenasquare
					</a>
					, while also pursuing my graduation in Computer Science from
					IIIT Una.
				</Typography>
			</div>
			<div className={classes("-graphic")}></div>
		</section>
	);
};

export default About;
