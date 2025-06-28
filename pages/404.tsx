import { Typography } from "@/library";
import styles from "@/styles/pages/Empty.module.scss";
import { stylesConfig } from "@/utils/functions";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const classes = stylesConfig(styles, "empty");

const PageNotFound: React.FC = () => {
	const router = useRouter();
	const [countDown, setCountDown] = useState(7);

	useEffect(() => {
		const interval = setInterval(() => {
			if (countDown === 0) {
				router.push("/");
			} else {
				setCountDown((prev) => prev - 1);
			}
		}, 1000);

		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [countDown]);

	return (
		<main className={classes("")}>
			<Typography size="head-1" weight="medium">
				Ooops... Radar not found
			</Typography>
			<Typography size="xl">
				Landed on the wrong planet?
				<br />
				Let&apos;s get you back to the right realm...
				<br />
				...in {countDown} seconds
			</Typography>
			<div className={classes("-loader")}></div>
		</main>
	);
};

export default PageNotFound;
