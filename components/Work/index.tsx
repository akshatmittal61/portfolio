import { SkillPill } from "@/components";
import { work } from "@/data";
import { Typography } from "@/library";
import { stylesConfig } from "@/utils";
import moment from "moment";
import Image from "next/image";
import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "work-experience");

export const WorkExperience: React.FC = () => {
	const [activeTab, setActiveTab] = useState(-1);
	return (
		<div className={classes("")} id="work">
			{work.map((work) => (
				<div
					className={classes("-item")}
					id={`work-exp-${work.id}`}
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
							<FiChevronRight />
						</button>
						<span className={classes("-item-header__dot")} />
						<div className={classes("-item-header__content")}>
							<a
								href={work.company.link}
								target="_blank"
								rel="noopener noreferrer"
								className={classes("-item__icon")}
							>
								<Image
									src={work.company.logo}
									alt={work.company.name}
									width={50}
									height={50}
								/>
							</a>
							<div className={classes("-item__info")}>
								<Typography
									as="h4"
									size="xxxl"
									weight="medium"
									title={work.company.name}
									className={classes("-item__title")}
								>
									<a
										href={work.company.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										{work.position} · {work.company.name}
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
									{moment(work.startDate).format("MMM YYYY")}{" "}
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
										size="sm"
									/>
								))}
							</div>
						</div>
					) : null}
				</div>
			))}
		</div>
	);
};
