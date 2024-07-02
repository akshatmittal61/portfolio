import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { Typography } from "@/library";
import { Edit3 } from "react-feather";
import Responsive from "@/layouts/Responsive";
import { Blog } from "@/types/blog";

interface IHomeBlogsProps {
	blogs: Array<Blog>;
}

const classes = stylesConfig(styles, "home-blogs");

const HomeBlogs: React.FC<IHomeBlogsProps> = ({ blogs }) => {
	return (
		<section className={classes("")} id="blogs">
			<Typography
				as="h2"
				size="head-3"
				weight="medium"
				className={classes("-title")}
			>
				<Edit3 /> What I write
			</Typography>
			<Responsive.Row className={classes("-container")}>
				{blogs.map((blog, index) => (
					<Responsive.Col
						xlg={50}
						lg={50}
						md={50}
						sm={100}
						xsm={100}
						key={`blog-${index + 1}`}
					>
						{blog.title}
					</Responsive.Col>
				))}
			</Responsive.Row>
		</section>
	);
};

export default HomeBlogs;
