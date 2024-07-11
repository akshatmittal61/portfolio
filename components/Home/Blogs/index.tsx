import Responsive from "@/layouts/Responsive";
import { Typography } from "@/library";
import { Blog } from "@/types/blog";
import { stylesConfig } from "@/utils/functions";
import React from "react";
import { Edit3 } from "react-feather";
import Card from "./Card";
import styles from "./styles.module.scss";

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
						<Card {...blog} />
					</Responsive.Col>
				))}
			</Responsive.Row>
		</section>
	);
};

export default HomeBlogs;
