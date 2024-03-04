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
		<>
			<Typography
				as="h2"
				size="head-3"
				weight="medium"
				className={classes("-title")}
			>
				Where I Work
			</Typography>
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
					{workExperience.map((work, index) => (
						<div
							key={`work-body-${index + 1}`}
							className={classes("-card", {
								"-card--hide": work.id !== activeTab,
							})}
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
											? ` - ${moment(work.endDate).format(
													"MMM YYYY"
												)}`
											: " - Present"}
									</Typography>
								</div>
							</div>
							<p
								className={classes("-card-description")}
								dangerouslySetInnerHTML={{
									__html: work.description,
								}}
							/>
							<div className={classes("-card-tags")}>
								{work.tags.map((tag, index) => (
									<SkillPill
										key={`work-tag-${index + 1}`}
										name={tag}
									/>
								))}
							</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="565"
								height="360"
								viewBox="0 0 565 360"
								fill="none"
								className={classes("-card-blob")}
							>
								<g filter={`url(#filter-${work.company.name})`}>
									<path
										d="M305 303.5C305 371.707 249.707 427 181.5 427C113.293 427 -33 352.707 -33 284.5C-33 216.293 217.793 175 286 175C354.207 175 305 235.293 305 303.5Z"
										fill={work.theme}
										fill-opacity="0.7"
									/>
								</g>
								<defs>
									<filter
										id={`filter-${work.company.name}`}
										x="-433"
										y="-225"
										width="1155.17"
										height="1052"
										filterUnits="userSpaceOnUse"
										color-interpolation-filters="sRGB"
									>
										<feFlood
											flood-opacity="0"
											result="BackgroundImageFix"
										/>
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="BackgroundImageFix"
											result="shape"
										/>
										<feGaussianBlur
											stdDeviation="200"
											result={`effect1_foregroundBlur-${work.company.name}`}
										/>
									</filter>
								</defs>
							</svg>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default HomeWork;
