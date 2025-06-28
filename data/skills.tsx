import { SkillIcon } from "@/assets";
import { ISkill } from "@/types";

export const frontend: ISkill[] = [
	{
		id: 4,
		name: "React",
		logo: <SkillIcon.ReactIcon />,
	},
	{
		id: 5,
		name: "Next.js",
		logo: <SkillIcon.NextJS />,
	},
	{
		id: 1,
		name: "Tailwind CSS",
		logo: <SkillIcon.TailwindCSS />,
	},
	{
		id: 1,
		name: "CSS/SASS",
		logo: <SkillIcon.Sass />,
	},
];

export const backend: Array<ISkill> = [
	{
		id: 6,
		name: "Node.js",
		logo: <SkillIcon.NodeJS />,
	},
	{
		id: 6,
		name: "Express.js",
		logo: <SkillIcon.Express />,
	},
	{
		id: 6,
		name: "Spring Boot",
		logo: <SkillIcon.Spring />,
	},
];

export const database: Array<ISkill> = [
	{
		id: 6,
		name: "Mongo DB",
		logo: <SkillIcon.MongoDB />,
	},
	{
		id: 6,
		name: "PostgreSQL",
		logo: <SkillIcon.PostgreSQL />,
	},
	{
		id: 8,
		name: "MySql",
		logo: <SkillIcon.MySQL />,
	},
];

export const languages: Array<ISkill> = [
	{
		id: 2,
		name: "JavaScript",
		logo: <SkillIcon.JavaScript />,
	},
	{
		id: 3,
		name: "TypeScript",
		logo: <SkillIcon.TypeScript />,
	},
	{
		id: 7,
		name: "Python",
		logo: <SkillIcon.Python />,
	},
	{
		id: 9,
		name: "Java",
		logo: <SkillIcon.Java />,
	},
];

export const infra: Array<ISkill> = [
	{
		id: 6,
		name: "Docker",
		logo: <SkillIcon.Docker />,
	},
	{
		id: 6,
		name: "AWS",
		logo: <SkillIcon.Aws />,
	},
	{
		id: 6,
		name: "GCP",
		logo: <SkillIcon.Gcp />,
	},
];

export const skills = {
	frontend,
	backend,
	database,
	languages,
	infra,
};
