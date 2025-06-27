import { useStore } from "@/context";
import { stylesConfig } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "theme-switcher");

export const ThemeSwitcher: React.FC = () => {
	const { theme, switchTheme } = useStore();
	const [isBouncing, setIsBouncing] = useState(false);

	const handleClick = () => {
		setIsBouncing(true);
		switchTheme();
	};

	const handleAnimationEnd = () => {
		setIsBouncing(false);
	};

	return (
		<div
			className={classes("", {
				"--bouncing": isBouncing,
			})}
			onAnimationEnd={handleAnimationEnd}
		>
			<span className={classes("-wire")} />
			<Image
				role="button"
				aria-label="Toggle theme"
				src={`/vectors/light-bulb-${theme === "light" ? "on" : "off"}.svg`}
				alt={`bulb-${theme === "light" ? "on" : "off"}`}
				width={256}
				height={256}
				className={classes("-bulb")}
				onClick={handleClick}
			/>
		</div>
	);
};
