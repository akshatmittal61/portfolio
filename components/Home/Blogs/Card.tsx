import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { Blog } from "@/types/blog";
import Image from "next/image";
import { Typography } from "@/library";
import Avatar from "@/components/Avatar";

type IBlogCardProps = Blog & {};

const classes = stylesConfig(styles, "home-blogs-card");

const BlogCard: React.FC<IBlogCardProps> = ({
	id,
	title,
	description,
	date,
	image,
	link,
	author,
}) => {
	return (
		<div id={`blog-${id}`} className={classes("")}>
			<a href={link} target="_blank" className={classes("-graphic")}>
				<Image src={image} alt={title} width={1200} height={630} />
			</a>
			<div className={classes("-content")}>
				<Typography
					as="h3"
					size="xxxl"
					weight="medium"
					className={classes("-title")}
				>
					{title}
				</Typography>
				<Typography
					as="p"
					size="lg"
					weight="regular"
					className={classes("-description")}
				>
					{description}
				</Typography>
				<a
					className={classes("-user")}
					href={author.profile}
					target="_blank"
				>
					<Avatar src={author.image} alt={author.name} size={48} />
					<div className={classes("-user-info")}>
						<Typography
							as="h2"
							size="lg"
							weight="medium"
							className={classes("-name")}
						>
							{author.name}
						</Typography>
						<Typography
							as="p"
							size="sm"
							weight="regular"
							className={classes("-date")}
						>
							{date}
						</Typography>
					</div>
				</a>
			</div>
		</div>
	);
};

export default BlogCard;
