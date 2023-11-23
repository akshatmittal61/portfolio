import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import Typography from "@/library/Typography";

const classes = stylesConfig(styles, "home-work");

const HomeWork = () => {
	return (
		<div className={classes("")}>
			<div className={classes("title")}>
				<Typography size="head-3" weight="medium" as="h1">
					Work History
				</Typography>
			</div>
		</div>
	);
};

export default HomeWork;
