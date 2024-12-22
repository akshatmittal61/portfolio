import { Typography } from "@/library";
import { TypographyProps } from "@/library/Typography/types";
import { ISkill } from "@/types/skills";
import { stylesConfig } from "@/utils/functions";
import React from "react";
import styles from "./styles.module.scss";

interface ISkillPillProps
	extends Omit<Partial<ISkill>, "id">,
		Omit<TypographyProps, "children"> {}

const classes = stylesConfig(styles, "skill-pill");

const SkillPill: React.FC<ISkillPillProps> = ({ name, logo, ...rest }) => {
	return (
		<Typography
			{...rest}
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
