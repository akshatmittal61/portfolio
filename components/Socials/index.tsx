import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import socials from "@/constants/socials";

const classes = stylesConfig(styles, "socials-bar");

const SocialsBar: React.FC = () => {
	return (
		<aside className={classes("")}>
			<div className={classes("-list")}>
				{socials.map((social, index) => (
					<a
						href={social.link}
						target="_blank"
						rel="noreferrer"
						key={index}
						className={classes("-item")}
						title={social.platform}
					>
						<span className={classes("-item-icon")}>
							{social.icon}
						</span>
					</a>
				))}
			</div>
			<span className={classes("-line")} />
		</aside>
	);
};

export default SocialsBar;
