import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Footer, Navigation, ThemeSwitcher } from "..";

interface WrapperProps {
	children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<Navigation />
			<ThemeSwitcher />
			{children}
			<Footer />
		</>
	);
};
