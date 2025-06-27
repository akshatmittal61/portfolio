import { GlobalStore } from "@/types";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./provider";

type StoreOptions = { syncOnMount?: boolean };

type ExtendedStore = GlobalStore & {
	switchTheme: () => void;
};

export const useStore: (_?: StoreOptions) => ExtendedStore = (
	options: StoreOptions = {}
) => {
	const store = useContext<GlobalStore>(GlobalContext);

	const switchTheme = () => {
		store.setTheme(store.theme === "light" ? "dark" : "light");
	};

	useEffect(() => {
		if (options.syncOnMount) {
			store.sync();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		...store,
		switchTheme,
	};
};
