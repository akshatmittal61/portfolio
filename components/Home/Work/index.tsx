import { SkillPill } from "@/components/Skill";
import { Typography } from "@/library";
import { IWork } from "@/types/work";
import { stylesConfig } from "@/utils/functions";
import moment from "moment";
import Image from "next/image";
import React, { useState } from "react";
import { Briefcase, ChevronRight } from "react-feather";
import styles from "./styles.module.scss";

interface IHomeWorkProps {
	workExperience: Array<IWork>;
}

const classes = stylesConfig(styles, "home-work");

const HomeWork: React.FC<IHomeWorkProps> = ({ workExperience }) => {
	const [activeTab, setActiveTab] = useState(-1);
	return (
		<>
			<Typography
				as="h2"
				size="head-3"
				weight="medium"
				className={classes("-title")}
				id="work"
			>
				<Briefcase /> Where I Work
			</Typography>
			<section className={classes("")} id="work">
				{workExperience.map((work) => (
					<div
						className={classes("-item")}
						key={`work-exp-${work.id}`}
					>
						<div className={classes("-item-header")}>
							<button
								onClick={() =>
									setActiveTab((prev) =>
										prev === work.id ? -1 : work.id
									)
								}
								className={classes("-item-header__button", {
									"-item-header__button--active":
										activeTab === work.id,
								})}
							>
								<ChevronRight />
							</button>
							<span className={classes("-item-header__dot")} />
							<div className={classes("-item-header__content")}>
								<div className={classes("-item__icon")}>
									<Image
										src={work.company.logo}
										alt={work.company.name}
										width={50}
										height={50}
									/>
								</div>
								<div className={classes("-item__info")}>
									<Typography
										as="h4"
										size="head-4"
										weight="medium"
										title={work.company.name}
										className={classes("-item__title")}
									>
										<a
											href={work.company.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											{work.position} ·{" "}
											{work.company.name}
										</a>
									</Typography>
									<Typography
										as="span"
										size="s"
										weight="medium"
										title={moment(work.startDate).format(
											"MMM YYYY"
										)}
										className={classes("-item__subtitle")}
									>
										{moment(work.startDate).format(
											"MMM YYYY"
										)}{" "}
										-{" "}
										{work.endDate
											? moment(work.endDate).format(
													"MMM YYYY"
												)
											: "Present"}
									</Typography>
								</div>
							</div>
						</div>
						{activeTab === work.id ? (
							<div className={classes("-item-content")}>
								<p
									className={classes("-item-description")}
									dangerouslySetInnerHTML={{
										__html: work.description,
									}}
								/>
								<div className={classes("-item-skills")}>
									{work.tags.map((tag, index) => (
										<SkillPill
											key={`${work.company.name}-skill-${index + 1}`}
											name={tag}
										/>
									))}
								</div>
							</div>
						) : null}
					</div>
				))}
			</section>
		</>
	);
};

export default HomeWork;
