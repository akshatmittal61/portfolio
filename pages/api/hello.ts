import { RESPONSE_MESSAGES } from "@/constants/enum";
import { ApiRequest, ApiResponse } from "@/interfaces/api";
import work from "@/data/experience";
import projects from "@/data/projects";
import socials from "@/constants/socials";

const handler = async (req: ApiRequest, res: ApiResponse) => {
	try {
		const { method } = req;
		switch (method) {
			case "GET":
				return res.status(200).json({
					name: "Akshat Mittal",
					catchline: "Building the web, one line at a time",
					about: "I am Akshat Mittal, a Full Stack Developer diving in MERN stack, TypeScript, and Next.js. I love turning ideas into functional and beautiful web applications. When I'm not immersed in lines of code, you'll find me in the pages of books and scribbling my thoughts into poems. Currently, I am an SDE intern at a thriving growth stage startup called Athenasquare, while also pursuing my graduation in Computer Science from IIIT Una.",
					projects,
					work,
					socials: socials.map(({ username, link, platform }) => ({
						username,
						link,
						platform,
					})),
				});
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
