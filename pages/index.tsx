import { Blogs, Intro, Projects, Work } from "@/components/Home";
import workExperience from "@/data/experience";
import projects from "@/data/projects";
import styles from "@/styles/pages/Home.module.scss";
import { Blog } from "@/types/blog";
import { IProject } from "@/types/project";
import { IWork } from "@/types/work";
import { stylesConfig } from "@/utils/functions";
import React from "react";

const classes = stylesConfig(styles, "home");

type HomeProps = {
	workExperience: Array<IWork>;
	projects: Array<IProject>;
	blogs: Array<Blog>;
};

const HomePage: React.FC<HomeProps> = ({ workExperience, projects, blogs }) => {
	return (
		<main className={classes("")}>
			<Intro />
			<Work workExperience={workExperience} />
			<Projects projects={projects} />
			<Blogs blogs={blogs} />
		</main>
	);
};

export default HomePage;

export const getServerSideProps = async (): Promise<{
	props: HomeProps;
}> => {
	try {
		const blogs = await fetch(
			"https://dev.to/api/articles?username=akshatmittal61"
		).then((res) => res.json());
		return {
			props: {
				workExperience: workExperience,
				projects: projects,
				blogs: blogs,
			},
		};
	} catch (error) {
		return {
			props: {
				workExperience: [],
				projects: [],
				blogs: [],
			},
		};
	}
};
