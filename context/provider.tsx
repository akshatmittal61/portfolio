import { GlobalStore } from "@/types";
import React, { createContext } from "react";
import { useGlobalContext } from "./context";
import { defaultStore } from "./default";

type GlobalProviderProps = { children: React.ReactNode };

export const GlobalContext = createContext<GlobalStore>(defaultStore);

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
	const context = useGlobalContext();
	return (
		<GlobalContext.Provider value={context}>
			{children}
		</GlobalContext.Provider>
	);
};
