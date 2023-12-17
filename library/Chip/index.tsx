import React from "react";
import { IChipProps } from "./types";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "chip");

const Chip: React.FC<IChipProps> = ({ children, className, ...props }) => {
	return (
		<span className={`${classes("")} ${className}`} {...props}>
			{children}
		</span>
	);
};

export default Chip;
