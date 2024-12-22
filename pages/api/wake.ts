import { ApiRequest, ApiResponse } from "@/interfaces";
import axios from "axios";

const render = axios.create({
	timeout: 7500,
	timeoutErrorMessage: "HTTP Request timed out",
});

const handler = async (req: ApiRequest, res: ApiResponse) => {
	try {
		const service = req.query.service;
		let healths = {
			"settle-it": "https://settleit.vercel.app/api/health",
			"wault-it": "https://wault-it.vercel.app//api/health",
		};
		const urls: Array<string> = [];
		switch (service) {
			case "settle-it":
				urls.push(healths["settle-it"]);
				break;
			case "wault-it":
				urls.push(healths["wault-it"]);
				break;
			default:
				urls.push(...Object.values(healths));
				break;
		}
		const responses = await Promise.all(urls.map((url) => render.get(url)));
		return res.status(200).json(responses.map((response) => response.data));
	} catch {
		return res.status(500).json({ error: "Wakeup failed" });
	}
};

export default handler;
