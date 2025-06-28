import { Wrapper } from "@/components";
import { GlobalProvider } from "@/context";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<GlobalProvider>
			<Wrapper {...pageProps}>
				<Component {...pageProps} />
			</Wrapper>
		</GlobalProvider>
	);
}
