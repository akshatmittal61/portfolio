import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { Typography } from "@/library";
import { ISkill } from "@/types/skills";

interface ISkillPillProps extends Partial<ISkill> {}

const classes = stylesConfig(styles, "skill-pill");

const SkillPill: React.FC<ISkillPillProps> = ({ name, logo }) => {
	return (
		<Typography
			as="span"
			size="sm"
			weight="regular"
			className={classes("")}
		>
			{logo ? logo : null}

			{name}
		</Typography>
	);
};

export default SkillPill;
