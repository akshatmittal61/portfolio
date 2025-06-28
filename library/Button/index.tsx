import { stylesConfig } from "@/utils";
import Link from "next/link";
import React, { forwardRef } from "react";
import { BUTON_SIZES } from "./assets";
import styles from "./styles.module.scss";
import { IButtonProps } from "./types";

const classNames = stylesConfig(styles);

const Loader: React.FC = () => (
	<div className={classNames("btn__loader")}></div>
);

const ButtonNode: React.FC<IButtonProps> = ({
	icon,
	iconPosition,
	children,
}) => {
	return (
		<>
			{icon && iconPosition === "left" ? (
				<div className={classNames("btn__icon", "btn__icon--left")}>
					{icon}
				</div>
			) : null}
			{children}
			{icon && iconPosition === "right" ? (
				<div className={classNames("btn__icon", "btn__icon--right")}>
					{icon}
				</div>
			) : null}
		</>
	);
};

const ButtonComponent: React.ForwardRefRenderFunction<
	HTMLButtonElement,
	IButtonProps
> = (
	{
		children,
		className,
		size = "medium",
		loading = false,
		icon,
		iconPosition = "left",
		...props
	},
	ref
) => {
	return (
		<button
			className={[
				classNames(
					"btn",
					BUTON_SIZES[size],
					{ "btn--loading": loading },
					{ "btn--disabled": props.disabled || loading }
				),
				className,
			].join(" ")}
			disabled={props.disabled || loading}
			ref={ref}
			{...props}
		>
			{loading ? (
				<Loader />
			) : "href" in props && props.href ? (
				<a href={props.href} target="_blank" rel="noreferrer">
					<ButtonNode icon={icon} iconPosition={iconPosition}>
						{children}
					</ButtonNode>
				</a>
			) : "route" in props && props.route ? (
				<Link href={props.route}>
					<ButtonNode icon={icon} iconPosition={iconPosition}>
						{children}
					</ButtonNode>
				</Link>
			) : (
				<ButtonNode icon={icon} iconPosition={iconPosition}>
					{children}
				</ButtonNode>
			)}
		</button>
	);
};

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
	ButtonComponent
);
