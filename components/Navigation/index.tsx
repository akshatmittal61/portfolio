import { navigation } from "@/constants/navigation";
import { stylesConfig } from "@/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

const classes = stylesConfig(styles, "navigation");

export const Navigation: React.FC = () => {
	const router = useRouter();
	const [drawerState, setDrawerState] = useState<"closed" | "opened">(
		"closed"
	);
	const closeDrawer = () => setDrawerState("closed");
	const toggleDrawer = () => {
		if (drawerState === "closed") {
			setDrawerState("opened");
		} else {
			setDrawerState("closed");
		}
	};
	useEffect(() => {
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape") closeDrawer();
		});
		return () =>
			document.removeEventListener("keydown", (e) => {
				if (e.key === "Escape") closeDrawer();
			});
	}, []);
	useEffect(() => {
		closeDrawer();
	}, [router.pathname]);

	return (
		<>
			<button
				onClick={toggleDrawer}
				className={classes("-trigger", {
					"-trigger--opened": drawerState === "opened",
				})}
				id="toggle-navigation"
			>
				<span />
			</button>
			<main
				id="navigation"
				className={classes("", {
					"--opened": drawerState === "opened",
					"--closed": drawerState === "closed",
				})}
			>
				<nav className={classes("-nav")}>
					<ul className={classes("-nav-list")}>
						{navigation.map((item, idx) => (
							<li
								key={`navigation-item-${item.id}`}
								className={classes("-nav-item")}
								data-index={`0${idx + 1}`}
								data-aos="fade-right"
							>
								<Link
									href={item.route}
									className={classes("-nav-item__link")}
								>
									{item.title}
								</Link>
								<span
									className={classes("-nav-item__arrow")}
								></span>
							</li>
						))}
					</ul>
				</nav>
			</main>
		</>
	);
};
