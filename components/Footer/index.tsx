import React from "react";
import Image from "next/image";
import socials from "@/constants/socials";
import Typography from "@/library/Typography";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { Dinasour, Waves } from "@/assets";

const classes = stylesConfig(styles, "footer");

const Footer: React.FC = () => {
	const dinasourAltText =
		"Apart from coding and reading, I have a secret talent - an unbeatable Chrome Dino game score of 21000! If you dare challenge me, prepare for an epic gaming showdown.";
	return (
		<footer className={classes("")}>
			<Dinasour className={classes("-graphic")} />
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
			<Waves className={classes("-waves")} />
		</footer>
	);
};

export default Footer;
