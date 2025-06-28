import { socials } from "@/constants";
import { Button, IconButton, Typography } from "@/library";
import styles from "@/styles/pages/Contact.module.scss";
import { stylesConfig } from "@/utils";
import React, { useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";

const classes = stylesConfig(styles, "contact-me");

const ContactMe: React.FC = () => {
	const [fields, setFields] = useState({
		name: "",
		email: "",
		message: "",
	});
	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFields((prev) => ({ ...prev, [name]: value }));
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<main className={classes("")}>
			<div className={classes("-banner")} />
			<div className={classes("-card")}>
				<div className={classes("-card__left")}>
					<div className={classes("-card__content")}>
						<Typography as="h1" size="head-2" weight="medium">
							Get in Touch
						</Typography>
						<Typography as="p" size="xl">
							I&apos;d love to hear from you!
							<br />
							Whether for a question, or just want to say hi
							<br />
							I&apos;ll get back to you as soon as I can.
						</Typography>
					</div>
					<div className={classes("-links")}>
						<Typography size="xl" className={classes("-email")}>
							&gt;&gt;{" "}
							<a href="mailto:akshatmittal2506@gmail.com">
								<FiMail /> akshatmittal2506@gmail.com
							</a>
						</Typography>
						<Typography size="xl" className={classes("-phone")}>
							&gt;&gt;{" "}
							<a href="tel:919456849466">
								<FiPhone /> +91-9456849466
							</a>
						</Typography>
						<ul className={classes("-socials")}>
							{socials
								.filter(
									(s) =>
										!["email", "phone"].includes(
											s.platform.toLowerCase()
										)
								)
								.map((s) => (
									<li
										key={`contact-page-socials-${s.platform}`}
									>
										<IconButton
											icon={s.icon}
											href={s.link}
										/>
									</li>
								))}
						</ul>
					</div>
				</div>
				<form
					onSubmit={handleSubmit}
					className={classes("-card__right")}
				>
					<div className={classes("-details")}>
						<input
							type="text"
							name="name"
							placeholder="Name"
							value={fields.name}
							onChange={handleChange}
							required
						/>
						<input
							type="email"
							name="email"
							placeholder="Email"
							value={fields.email}
							onChange={handleChange}
							required
						/>
					</div>
					<textarea
						name="message"
						id="message"
						placeholder="Your Message..."
						rows={5}
						value={fields.message}
						onChange={handleChange}
						required
					></textarea>
					<Button type="submit">Send that message</Button>
				</form>
			</div>
		</main>
	);
};

export default ContactMe;
