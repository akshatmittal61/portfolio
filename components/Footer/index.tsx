import { Dinasour, Waves } from "@/assets";
import { socials } from "@/constants";
import { useStore } from "@/context";
import { Typography } from "@/library";
import { stylesConfig } from "@/utils/functions";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "footer");

export const Footer: React.FC = () => {
	const { theme } = useStore();
	const dinasourAltText =
		"Apart from coding and reading, I have a secret talent - an unbeatable Chrome Dino game score of 21000! If you dare challenge me, prepare for an epic gaming showdown.";
	return (
		<footer className={classes("")}>
			<Dinasour theme={theme} className={classes("-graphic")} />
			<a
				href="chrome://dino"
				target="_blank"
				rel="noreferrer"
				className="dispn"
			>
				{dinasourAltText}
			</a>
			<div className={classes("-content")}>
				<Typography size="xl">Let&apos;s connect</Typography>
				<a
					href="mailto:akshatmittal2506@gmail.com"
					className={classes("-email")}
				>
					<Typography className={classes("-email")}>
						akshatmittal2506@gmail.com
					</Typography>
				</a>
				<ul className={classes("-socials")}>
					{socials.map((social, index) => (
						<li key={index}>
							<a
								href={social.link}
								target="_blank"
								rel="noreferrer"
							>
								{social.icon}
								<span className="dispn">
									{social.platform}
									{social.link}
								</span>
							</a>
						</li>
					))}
				</ul>
				<Image
					src="/vectors/complete-logo.svg"
					alt="logo"
					width={420}
					height={74}
					className={classes("-logo")}
				/>
			</div>
			<Waves theme={theme} className={classes("-waves")} />
		</footer>
	);
};
