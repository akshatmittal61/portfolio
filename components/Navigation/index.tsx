import React, { useState } from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import navigation from "@/constants/navigation";
import Link from "next/link";
import socials from "@/constants/socials";
import { ChevronDown } from "react-feather";
import useDevice from "@/hooks/device";

interface INavigationProps {}

const classes = stylesConfig(styles, "navigation");

const Navigation: React.FC<INavigationProps> = () => {
	const [openAllSocialsMenu, setOpenAllSocialsMenu] = useState(false);
	const { type: device } = useDevice();

	return (
		<nav className={classes("")}>
			<ul className={classes("-list")}>
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
			<ul
				className={classes("-list", {
					"-list--expanded": openAllSocialsMenu,
				})}
			>
				{socials.map((item, index) => (
					<li
						key={`socials-${index}`}
						className={classes("-list-item")}
					>
						<a
							href={item.link}
							title={item.platform}
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: item.color }}
						>
							{item.icon}
							<span className="dispn">
								{item.platform}
								{item.link}
							</span>
						</a>
					</li>
				))}
				{device !== "mobile" ? (
					<li
						className={classes("-list-item", {
							"-list-item--active": openAllSocialsMenu,
						})}
					>
						<button
							onClick={() =>
								setOpenAllSocialsMenu((prev) => !prev)
							}
						>
							<ChevronDown />
						</button>
					</li>
				) : null}
			</ul>
		</nav>
	);
};

export default Navigation;
