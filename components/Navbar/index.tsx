import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/constants/navbar";
import Link from "next/link";

const classes = stylesConfig(styles, "navbar");

const Navbar: React.FC = () => {
	const lastScrollTop = useRef<any>(0);
	const [isNavbarVisible, setIsNavbarVisible] = useState(true);
	const handleScroll = () => {
		const { pageYOffset } = window;
		if (pageYOffset > lastScrollTop.current) setIsNavbarVisible(false);
		else if (pageYOffset < lastScrollTop.current) setIsNavbarVisible(true);
		lastScrollTop.current = pageYOffset;
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, {
			passive: true,
		});
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={classes("")}
			style={{
				translate: isNavbarVisible
					? "0"
					: "0 calc(-1 * var(--nav-height))",
			}}
		>
			<div className={classes("-logo")}>
				<Image
					src="/vectors/full-logo.svg"
					alt="akshat-mittal-full-logo"
					width={200}
					height={100}
				/>
			</div>
			<nav className={classes("-nav")}>
				<ul className={classes("-nav-list")}>
					{navLinks.map((item, index) => (
						<li key={index} className={classes("-nav-list-item")}>
							{item.href ? (
								<a
									href={item.href}
									className={classes("-nav-list-item-link")}
									target="_blank"
									rel="noreferrer noopener"
								>
									{item.label}
								</a>
							) : item.path ? (
								<Link
									href={item.path}
									className={classes("-nav-list-item-link")}
								>
									{item.label}
								</Link>
							) : (
								<span
									className={classes("-nav-list-item-link")}
								>
									{item.label}
								</span>
							)}
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
