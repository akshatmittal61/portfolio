import React from "react";
import Image from "next/image";
import { Typography } from "@/library";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { ArrowUpRight } from "react-feather";

interface IHomeIntroProps {}

const classes = stylesConfig(styles, "home-intro");

const HomeIntro: React.FC<IHomeIntroProps> = () => {
	return (
		<section className={classes("")}>
			<div className={classes("-left")}>
				<Typography as="h1" className={classes("-left-title")}>
					Akshat Mittal
				</Typography>
				<Typography
					as="p"
					size="lg"
					weight="regular"
					className={classes("-left-subtitle")}
				>
					A full stack developer turning ideas into functional and
					interactive web applications
					<br />
					<br />
					When I&apos;m not immersed in lines of code, you&apos;ll
					find me in the pages of books and scribbling my thoughts
					into poems.
				</Typography>
				<button
					onClick={() => window.open("/resume", "_blank")}
					className={classes("-left-button")}
				>
					<ArrowUpRight />
					Resume
				</button>
			</div>
			<div className={classes("-right")}>
				<div className={classes("-grid")}>
					{Array(5)
						.fill(0)
						.map((_, i) => (
							<div
								key={`intro-grid-tile-${i}`}
								className={classes(
									"-grid-item",
									`-grid-item-${i + 1}`
								)}
							>
								<Image
									src={`/images/grid-${i + 1}.png`}
									alt={`Intro grid image ${i + 1}`}
									width={300}
									height={300}
								/>
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default HomeIntro;
