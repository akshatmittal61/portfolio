import GlobalContext from "@/context/GlobalContext";
import useContextData from "@/context/useContext";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { useState } from "react";
import useLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import Layout from "@/layouts";
import Overlay from "@/layouts/Overlay";

export default function App({ Component, pageProps }: AppProps) {
	const context = useContextData();
	const [showOverlay, setShowOverlay] = useState(true);
	useLayoutEffect(() => {
		const timer = setTimeout(() => {
			setShowOverlay(false);
		}, 3750);
		return () => clearTimeout(timer);
	}, []);
	return (
		<GlobalContext.Provider value={context}>
			{showOverlay ? <Overlay /> : null}
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</GlobalContext.Provider>
	);
}
