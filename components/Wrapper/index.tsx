import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Footer, ThemeSwitcher } from "..";

interface WrapperProps {
	children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<ThemeSwitcher />
			{children}
			<Footer />
		</>
	);
};
