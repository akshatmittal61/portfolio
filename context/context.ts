import { AppTheme, GlobalStore } from "@/types";
import { useEffect, useState } from "react";

export const useGlobalContext: () => GlobalStore = () => {
	const [theme, setTheme] = useState<AppTheme>("light");

	const setThemeOverride = (theme: AppTheme) => {
		setTheme(theme);
		if (typeof window !== "undefined") {
			document.body.dataset.theme = theme;
			document.cookie = `theme=${theme};max-age=${60 * 60 * 24 * 30};path=/`;
		}
	};

	const sync = () => {
		if (typeof window !== "undefined") {
			const storedTheme = document.cookie
				.split(";")
				.find((cookie) => cookie.startsWith("theme="))
				?.split("=")[1];
			if (storedTheme && ["light", "dark"].includes(storedTheme)) {
				setThemeOverride(storedTheme as AppTheme);
			} else {
				setThemeOverride("light");
			}
		}
	};

	useEffect(() => {
		sync();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { sync, theme, setTheme: setThemeOverride };
};
