import { resumeUrl } from "@/data";
import { Button, Typography } from "@/library";
import { stylesConfig } from "@/utils";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "home-about");

export const HomeAbout: React.FC = () => {
	return (
		<section id="about" className={classes("")}>
			<div className={classes("-container")}>
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
					, I&apos;ve previously built MVPs and complete systems from
					scratch for 7+ startups, handling everything from
					architecture and backend services to pixel-perfect frontend
					UIs.{" "}
				</Typography>
				<Button
					href={resumeUrl}
					title="Resume"
					id="resume-link"
					icon={<FiArrowUpRight />}
					iconPosition="left"
				>
					Resume
				</Button>
			</div>
			{/* <div className={classes("-right")}>
				<div className={classes("-frame")}>
					<div
						className={classes("-frame__tile", "-frame__tile-1")}
					></div>
					<div
						className={classes("-frame__tile", "-frame__tile-2")}
					></div>
					<div
						className={classes("-frame__tile", "-frame__tile-3")}
					></div>
					<div
						className={classes("-frame__tile", "-frame__tile-4")}
					></div>
					<div className={classes("-frame__pin")}></div>
				</div>
			</div> */}
		</section>
	);
};
