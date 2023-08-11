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
				description="Akshat Mittal - Full Stack Developer from India designing and building the web, applications and everything in between."
				image="/images/og-image.png"
				icons={["icon", "shortcut icon", "apple-touch-icon"].map(
					(item) => {
						return {
							rel: item,
							href: "/favicon.ico",
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
						"Akshat Mittal - Full Stack Developer from India designing and building the web, applications and everything in between.",
					image: "/images/og-image.png",
					url: frontendBaseUrl,
				}}
				og={{
					title: "Akshat Mittal - Full Stack Developer",
					description:
						"Akshat Mittal - Full Stack Developer from India designing and building the web, applications and everything in between.",
					images: [
						{
							url: "/images/og-image.png",
							secureUrl: "/images/og-image.png",
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
