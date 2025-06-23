import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

interface WrapperProps {
	children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
	useEffect(() => {
		AOS.init();
	}, []);
	return <main>{children}</main>;
};
