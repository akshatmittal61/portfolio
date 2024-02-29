import React from "react";
import { ArrowUpRight } from "react-feather";
import Image from "next/image";
import { SkillPill } from "@/components/Skill";
import { mySkills as skills } from "@/data/skills";
import { Typography } from "@/library";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { resumeUrl } from "@/constants/variables";

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
					<a
						href={resumeUrl}
						target="_blank"
						rel="noreferrer"
						title="Resume"
						className="dispn"
					>
						{resumeUrl}
					</a>
				</button>
				<div className={classes("-skills")}>
					{skills.map((skill) => (
						<SkillPill
							key={`my-skills-${skill.id}`}
							name={skill.name}
							logo={skill.logo}
						/>
					))}
				</div>
			</div>
			<div className={classes("-right")}>
				<Image
					src="/images/grid-2.png"
					alt="Intro grid image 2"
					width={1920}
					height={1080}
					className={classes("-right-image-1")}
				/>
				<Image
					src="/images/grid-4.png"
					alt="Intro grid image 4"
					width={1920}
					height={1080}
					className={classes("-right-image-2")}
				/>
			</div>
		</section>
	);
};

export default HomeIntro;
