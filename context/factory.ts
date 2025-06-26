import { GlobalStore } from "@/types";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./provider";

type StoreOptions = { syncOnMount?: boolean };

export const useStore: (_?: StoreOptions) => GlobalStore = (
	options: StoreOptions = {}
) => {
	const store = useContext<GlobalStore>(GlobalContext);

	useEffect(() => {
		if (options.syncOnMount) {
			store.sync();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return store;
};
