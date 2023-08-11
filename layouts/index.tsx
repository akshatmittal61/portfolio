import React from "react";
import Seo from "./Seo";
import { frontendBaseUrl } from "@/constants/variables";
import Navbar from "@/components/Navbar";
import SocialsBar from "@/components/Socials";
import Menu from "./Menu";
import Footer from "@/components/Footer";

const Layout: React.FC<any> = ({ children }) => {
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
				themeColor="#011627"
				canonical={frontendBaseUrl}
				siteName="Akshat Mittal - Full Stack Developer"
			/>
			<Navbar />
			<SocialsBar />
			<Menu />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
