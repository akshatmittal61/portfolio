import { AppTheme } from "./ui";

export type GlobalStore = {
	theme: AppTheme;
	setTheme: (_: AppTheme) => void;
	sync: () => void;
};

export type GlobalStoreOptions = () => GlobalStore;
