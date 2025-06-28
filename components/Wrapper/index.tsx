import { frontendBaseUrl } from "@/constants";
import { useStore } from "@/context";
import { Seo } from "@/library";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Footer, Navigation, ThemeSwitcher } from "..";

interface WrapperProps {
	children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
	const { theme } = useStore();
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<Seo
				title="Akshat Mittal - Full Stack Developer"
				description="Akshat Mittal - Full Stack Developer, designing and building the web applications and everything in between."
				image={`${frontendBaseUrl}/banner.png`}
				icons={["icon", "shortcut icon", "apple-touch-icon"].map(
					(item) => {
						return {
							rel: item,
							href: `${frontendBaseUrl}/favicon.ico`,
							type: "icon/ico",
						};
					}
				)}
				twitter={{
					card: "summary_large_image",
					site: "@akshatmittal61",
					author: "@akshatmittal61",
					title: "Akshat Mittal - Full Stack Developer",
					description:
						"Akshat Mittal - Full Stack Developer, designing and building the web applications and everything in between.",
					image: `${frontendBaseUrl}/banner.png`,
					url: frontendBaseUrl,
				}}
				og={{
					title: "Akshat Mittal - Full Stack Developer",
					description:
						"Akshat Mittal - Full Stack Developer, designing and building the web applications and everything in between.",
					images: [
						{
							url: `${frontendBaseUrl}/favicon-192.png`,
							secureUrl: `${frontendBaseUrl}/favicon-192.png`,
							type: "image/png",
							width: 192,
							height: 192,
							alt: "Akshat Mittal - Full Stack Developer",
						},
						{
							url: `${frontendBaseUrl}/favicon-512.png`,
							secureUrl: `${frontendBaseUrl}/favicon-512.png`,
							type: "image/png",
							width: 512,
							height: 512,
							alt: "Akshat Mittal - Full Stack Developer",
						},
						{
							url: `${frontendBaseUrl}/card.png`,
							secureUrl: `${frontendBaseUrl}/card.png`,
							type: "image/png",
							width: 800,
							height: 600,
							alt: "Akshat Mittal - Full Stack Developer",
						},
						{
							url: `${frontendBaseUrl}/banner.png`,
							secureUrl: `${frontendBaseUrl}/banner.png`,
							type: "image/png",
							width: 1200,
							height: 630,
							alt: "Akshat Mittal - Full Stack Developer",
						},
					],
					url: frontendBaseUrl,
					type: "website",
					siteName: "Akshat Mittal - Full Stack Developer",
				}}
				themeColor={theme === "dark" ? "#8892b0" : "#a98d5a"}
				canonical={frontendBaseUrl}
				siteName="Akshat Mittal - Full Stack Developer"
			/>
			<Navigation />
			<ThemeSwitcher />
			{children}
			<Footer />
		</>
	);
};
