import React, { useState } from "react";
import Image from "next/image";
import workExperience from "@/data/experience";
import Typography from "@/library/Typography";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { Calendar, ChevronDown } from "react-feather";
import moment from "moment";

const classes = stylesConfig(styles, "home-work");

const HomeWork: React.FC = () => {
	const [active, setActive] = useState(workExperience[0].id);

	return (
		<div className={classes("")}>
			<Typography size="head-3" weight="medium" as="h1">
				Work History
			</Typography>
			{workExperience.map((work, index) => (
				<>
					<div
						key={`work-${work.id}`}
						className={classes("-work", {
							"-work--active": active === work.id,
						})}
					>
						<div className={classes("-work-head")}>
							<a
								href={work.company.link}
								target="_blank"
								rel="noreferrer"
							>
								<Image
									src={work.company.logo}
									alt={work.company.name}
									width={48}
									height={48}
									className={classes("-work-logo")}
								/>
							</a>
							<div className={classes("-work-details")}>
								<Typography
									size="head-3"
									weight="regular"
									as="h3"
									className={classes("-work-position")}
								>
									{work.position}
								</Typography>
								<div className={classes("-work-meta")}>
									<a
										href={work.company.link}
										target="_blank"
										rel="noreferrer"
										className={classes("-work-company")}
									>
										{work.company.name}
									</a>
									<Calendar size={20} />
									{moment(work.startDate).format("MMM YYYY")}
									{" - "}
									{(() => {
										if (work.endDate) {
											return moment(work.endDate).format(
												"MMM YYYY"
											);
										} else {
											return "Present";
										}
									})()}
								</div>
							</div>
							<button
								className={classes("-work-toggle")}
								onClick={() =>
									setActive(active === work.id ? -1 : work.id)
								}
							>
								<ChevronDown />
							</button>
						</div>
						<div className={classes("-work-body")}>
							<Typography
								size="md"
								as="p"
								className={classes("-work-description")}
							>
								{work.description}
							</Typography>
						</div>
					</div>
					{index !== workExperience.length - 1 ? (
						<hr className={classes("-divider")} />
					) : null}
				</>
			))}
		</div>
	);
};

export default HomeWork;
