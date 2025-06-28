import React from "react";

export type ButtonSize = "small" | "medium" | "large";

type BaseButtonProps = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> & {
	children: React.ReactNode;
	className?: string;
	size?: ButtonSize;
	loading?: boolean;
	icon?: React.ReactNode;
	iconPosition?: "left" | "right";
};

type LinkButtonProps = Omit<BaseButtonProps, "onClick"> & {
	href: string;
};

type RouteButtonProps = Omit<BaseButtonProps, "onClick"> & {
	route: string;
};

type ButtonProps = BaseButtonProps & {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

type BaseIconButtonProps = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> & {
	className?: string;
	size?: ButtonSize;
	icon: React.ReactNode;
};

type LinkIconButtonProps = Omit<BaseIconButtonProps, "onClick"> & {
	href: string;
};

type RouteIconButtonProps = Omit<BaseIconButtonProps, "onClick"> & {
	route: string;
};

export type IButtonProps = ButtonProps | LinkButtonProps | RouteButtonProps;

export type IconButtonProps =
	| BaseIconButtonProps
	| LinkIconButtonProps
	| RouteIconButtonProps;
