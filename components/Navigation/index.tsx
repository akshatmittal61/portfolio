import React, { useState } from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import navigation from "@/constants/navigation";
import Link from "next/link";
import socials from "@/constants/socials";
import { ChevronDown } from "react-feather";

interface INavigationProps {}

const classes = stylesConfig(styles, "navigation");

const Navigation: React.FC<INavigationProps> = () => {
	const [openAllSocialsMenu, setOpenAllSocialsMenu] = useState(false);

	return (
		<nav className={classes("")}>
			<ul>
				{navigation.map((item, index) => (
					<li
						key={`navigation-${index}`}
						className={classes("-item")}
					>
						<Link title={item.title} href={item.path}>
							{item.icon}
						</Link>
					</li>
				))}
			</ul>
			<hr className={classes("-divider")} />
			<ul>
				{socials
					.filter((_, index) =>
						openAllSocialsMenu ? true : index < 3
					)
					.map((item, index) => (
						<li
							key={`socials-${index}`}
							className={classes("-item")}
						>
							<a
								href={item.link}
								title={item.platform}
								target="_blank"
								rel="noopener noreferrer"
								style={{ color: item.color }}
							>
								{item.icon}
							</a>
						</li>
					))}
				<li
					className={classes("-item", {
						"-item--active": openAllSocialsMenu,
					})}
				>
					<button
						onClick={() => setOpenAllSocialsMenu((prev) => !prev)}
					>
						<ChevronDown />
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
