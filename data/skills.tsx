import {
	JavaScript,
	MongoDB,
	MySQL,
	NextJS,
	NodeJS,
	ReactIcon,
	Sass,
	TypeScript,
} from "@/assets";
import { ISkill } from "@/types/skills";

const skills: ISkill[] = [
	{
		id: 1,
		name: "CSS/SASS",
		logo: <Sass />,
	},
	{
		id: 2,
		name: "JavaScript",
		logo: <JavaScript />,
	},
	{
		id: 3,
		name: "TypeScript",
		logo: <TypeScript />,
	},
	{
		id: 4,
		name: "React",
		logo: <ReactIcon />,
	},
	{
		id: 5,
		name: "Next.js",
		logo: <NextJS />,
	},
	{
		id: 6,
		name: "Node.js",
		logo: <NodeJS />,
	},
	{
		id: 7,
		name: "MongoDB",
		logo: <MongoDB />,
	},
	{
		id: 8,
		name: "MySql",
		logo: <MySQL />,
	},
];

export default skills;
