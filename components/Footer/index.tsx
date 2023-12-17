import React from "react";
import Image from "next/image";
import { footerSocials } from "@/constants/socials";
import Typography from "@/library/Typography";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "footer");

const Footer: React.FC = () => {
	return (
		<footer
			className={classes("")}
			style={{
				backgroundImage: "url('/vectors/waves.svg/')",
			}}
		>
			<Image
				src="/vectors/dinasour.svg"
				alt="dinasour"
				width={400}
				height={400}
				className={classes("-graphic")}
				title="Apart from coding and reading, I have a secret talent - an unbeatable Chrome Dino game score of 21000! If you dare challenge me, prepare for an epic gaming showdown."
			/>
			<div className={classes("-content")}>
				<Typography size="xl">Let&apos;s connect</Typography>
				<a
					href="mailto:akshatmittal2506@gmail.com"
					className={classes("-email")}
				>
					<Typography className={classes("-email")} size="head-3">
						akshatmittal2506@gmail.com
					</Typography>
				</a>
				<ul className={classes("-socials")}>
					{footerSocials.map((social, index) => (
						<li key={index}>
							<a
								href={social.link}
								target="_blank"
								rel="noreferrer"
							>
								{social.icon}
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
		</footer>
	);
};

export default Footer;
