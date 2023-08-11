import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import React, { useEffect, useState } from "react";
import { ChevronRight, X } from "react-feather";
import Link from "next/link";
import socials from "@/constants/socials";
import useDevice from "@/hooks/device";
import navLinks, { mobileNavLinks } from "@/constants/menu";

const classes = stylesConfig(styles, "menu");

const Menu: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const { type: device } = useDevice();

	const handleClose = () => {
		setIsClosing(() => true);
		setTimeout(() => {
			setIsClosing(() => false);
			setIsMenuOpen(() => false);
		}, 500);
	};

	useEffect(() => {
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape") handleClose();
		});
		return () =>
			document.removeEventListener("keydown", (e) => {
				if (e.key === "Escape") handleClose();
			});
	}, []);

	return (
		<>
			{isMenuOpen ? (
				<nav
					id="menu"
					className={classes("", {
						"--closing": isClosing,
					})}
					data-aos="fade-right"
				>
					<ul className={classes("-links")}>
						{(device === "mobile" ? mobileNavLinks : navLinks).map(
							(obj, id) => (
								<li
									key={id}
									data-index={`0${id + 1}`}
									data-aos="fade-right"
								>
									<Link href={obj.link}>{obj.name}</Link>
									<span className={classes("-arrow")} />
								</li>
							)
						)}
					</ul>
					<ul className={classes("-socials")}>
						{socials.map((social, id) => (
							<li key={id} data-index={`0${id + 1}`}>
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
					<button
						id="menu-button-close"
						className={classes("-button", "-button--close")}
						onClick={() => handleClose()}
					>
						<X />
					</button>
				</nav>
			) : null}
			<button
				id="menu-button-open"
				className={classes("-button", "-button--open", {
					"-button--open__desktop": device === "desktop",
					"-button--open__tablet": device === "tablet",
					"-button--open__mobile": device === "mobile",
				})}
				onClick={() => setIsMenuOpen((p) => !p)}
			>
				{device === "mobile" ? (
					<span
						className={classes("-button--open__arrow", {
							"-button--open__arrow--active": isMenuOpen,
						})}
					/>
				) : (
					<ChevronRight />
				)}
			</button>
		</>
	);
};

export default Menu;
