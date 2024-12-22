import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const WakeUpMyServices: React.FC = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(true);
	const [resp, setResp] = useState<any>("");
	useEffect(() => {
		const wakeServices = async () => {
			try {
				setLoading(true);
				let endpoint = "/api/wake";
				const service = router.query.service;
				if (service) {
					const params = { service: service.toString() };
					endpoint += `?${new URLSearchParams(params).toString()}`;
				}
				const res = await axios(endpoint);
				const data = await res.data;
				setResp(data);
			} catch (error) {
				console.error(error);
				setResp({ message: "Wakeup failed, trying after 10 seconds" });
				setTimeout(() => {
					wakeServices();
				}, 10000);
			} finally {
				setLoading(false);
			}
		};
		wakeServices();
	}, [router.query.service]);
	return (
		<main
			style={{
				height: "100vh",
				width: "100vw",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				color: "white",
			}}
		>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<pre>{JSON.stringify(resp, null, 2)}</pre>
			)}
		</main>
	);
};

export default WakeUpMyServices;
