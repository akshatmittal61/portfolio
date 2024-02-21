import React, { useState } from "react";
import moment from "moment";
import Image from "next/image";
import { SkillPill } from "@/components/Skill";
import workExperience from "@/data/experience";
import { Typography } from "@/library";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

interface IHomeWorkProps {}

const classes = stylesConfig(styles, "home-work");

const HomeWork: React.FC<IHomeWorkProps> = () => {
	const [activeTab, setActiveTab] = useState(
		workExperience.find((work) => work.company.name === "AthenaSquare")
			?.id ?? 3
	);
	return (
		<section className={classes("")} id="work">
			<div className={classes("-tabs")}>
				{workExperience.map((work, index) => (
					<button
						key={`work-tab-${index + 1}`}
						className={classes("-tabs-tab", {
							"-tabs-tab--active": activeTab === work.id,
						})}
						onClick={() => setActiveTab(work.id)}
					>
						{work.company.name}
					</button>
				))}
			</div>
			<div className={classes("-body")}>
				{workExperience
					.filter((work) => work.id === activeTab)
					.map((work, index) => (
						<div
							key={`work-body-${index + 1}`}
							className={classes("-card")}
						>
							<div className={classes("-card-header")}>
								<Image
									src={work.company.logo}
									alt={work.company.name}
									width={100}
									height={100}
									className={classes("-card-header-logo")}
								/>
								<div
									className={classes("-card-header-details")}
								>
									<Typography
										as="h3"
										size="head-3"
										className={classes(
											"-card-header__title"
										)}
									>
										{work.position}
									</Typography>
									<Typography
										className={classes(
											"-card-header__subtitle"
										)}
									>
										{moment(work.startDate).format(
											"MMM YYYY"
										)}
										{work.endDate
											? ` - ${moment(work.endDate).format("MMM YYYY")}`
											: " - Present"}
									</Typography>
								</div>
							</div>
							<Typography
								as="p"
								weight="regular"
								className={classes("-card-description")}
							>
								{work.description}
							</Typography>
							<div className={classes("-card-tags")}>
								{work.tags.map((tag, index) => (
									<SkillPill
										key={`work-tag-${index + 1}`}
										name={tag}
									/>
								))}
							</div>
						</div>
					))}
			</div>
		</section>
	);
};

export default HomeWork;
