import { RESPONSE_MESSAGES } from "@/constants/enum";
import { ApiRequest, ApiResponse } from "@/interfaces/api";
import projects from "@/data/projects";

const handler = async (req: ApiRequest, res: ApiResponse) => {
	try {
		const { method } = req;
		switch (method) {
			case "GET":
				return res.status(200).json(projects);
			default:
				res.setHeader("Allow", ["GET"]);
				return res.status(405).end(`Method ${method} Not Allowed`);
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: RESPONSE_MESSAGES.SERVER_ERROR });
	}
};

export default handler;
