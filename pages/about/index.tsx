import { resumeUrl } from "@/data";
import { Button, Typography } from "@/library";
import styles from "@/styles/pages/About.module.scss";
import { stylesConfig } from "@/utils";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const classes = stylesConfig(styles, "about");

const AboutPage: React.FC = () => {
	return (
		<main className={classes("")}>
			<main className={classes("-container")}>
				<div className={classes("-content")}>
					<Typography
						id="intro-title"
						as="h1"
						size="head-2"
						weight="semi-bold"
						className={classes("-title")}
					>
						Who Am I
					</Typography>
					<Typography
						as="p"
						size="xxl"
						id="intro-subtitle"
						className={classes("-subtitle")}
					>
						A full-stack web developer with 4+ years of experience
						building and scaling applications for startups and
						e-commerce companies.
					</Typography>
					<Typography as="p" size="xxl" weight="regular">
						Currently working as an SDE-1 in India&apos;s biggest
						leading e-commerce{" "}
						<a href="https://flipkart.com" target="_blank">
							Flipkart
						</a>
						, I&apos;ve previously built MVPs and complete systems
						from scratch for 7+ startups, handling everything from
						architecture and backend services to pixel-perfect
						frontend UIs.{" "}
					</Typography>
					<Button
						href={resumeUrl}
						title="Resume"
						id="resume-link"
						icon={<FiArrowUpRight />}
						iconPosition="left"
						size="large"
					>
						Resume
					</Button>
				</div>
			</main>
			<section className={classes("-sheet")}>
				<div className={classes("-display")}>
					<div className={classes("-floor")}>
						<div
							className={classes(
								"-floor__tile",
								"-floor__tile-1"
							)}
						></div>
						<div
							className={classes(
								"-floor__tile",
								"-floor__tile-2"
							)}
						></div>
						<div
							className={classes(
								"-floor__tile",
								"-floor__tile-3"
							)}
						></div>
						<div
							className={classes(
								"-floor__tile",
								"-floor__tile-4"
							)}
						></div>
						<div className={classes("-floor__pin")}></div>
					</div>
					<div className={classes("-frame")}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</section>
		</main>
	);
};

export default AboutPage;
