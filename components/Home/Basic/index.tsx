import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import Avatar from "@/components/Avatar";
import useDevice from "@/hooks/device";
import Typography from "@/library/Typography";
import socials from "@/constants/socials";

const classes = stylesConfig(styles, "home-basic");

const HomeBasic: React.FC = () => {
	const { platform } = useDevice();
	return (
		<section className={classes("")}>
			<Avatar
				src="/images/akshat-dec.jpg"
				alt="Akshat Mittal"
				size={platform === "client" ? 200 : 360}
				className={classes("-avatar")}
			/>
			<div className={classes("-content")}>
				<Typography size="head-1" weight="medium" as="h1">
					Akshat Mittal
				</Typography>
				<div className={classes("-content-socials")}>
					{socials.map((social, index) => (
						<a
							href={social.link}
							target="_blank"
							rel="noreferrer"
							key={`home-hero-content-social-${index}`}
							title={social.platform}
						>
							{social.icon}
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default HomeBasic;
