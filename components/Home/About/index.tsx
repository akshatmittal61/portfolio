import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import Responsive from "@/layouts/Responsive";
import Typography from "@/library/Typography";
import skills from "@/data/skills";
import Chip from "@/library/Chip";
import Image from "next/image";

const classes = stylesConfig(styles, "home-about");

const HomeAbout: React.FC = () => {
	return (
		<section className={classes("")}>
			<Responsive.Row>
				<Responsive.Col xlg={60} lg={60} md={60} sm={100} xsm={100}>
					<div className={classes("-box", "-desc")}>
						<Typography size="head-3" weight="medium">
							👋
						</Typography>
						<Typography as="h1" size="head-3" weight="medium">
							Software Developer
						</Typography>
						<Typography as="p" size="md">
							A Full Stack Developer diving in MERN stack,
							TypeScript, and Next.js. I love turning ideas into
							functional and beautiful web applications.
						</Typography>
					</div>
				</Responsive.Col>
				<Responsive.Col xlg={40} lg={40} md={40} sm={100} xsm={100}>
					<div className={classes("-box", "-skills")}>
						<Typography as="h1" size="head-3" weight="medium">
							My Skills
						</Typography>
						<div className={classes("-skills-list")}>
							{skills.map((skill) => (
								<Chip key={skill.id}>
									<Image
										src={skill.logo}
										alt={skill.name}
										width={24}
										height={24}
									/>
									{skill.name}
								</Chip>
							))}
						</div>
					</div>
				</Responsive.Col>
			</Responsive.Row>
		</section>
	);
};

export default HomeAbout;
