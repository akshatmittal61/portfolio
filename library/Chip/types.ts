import React from "react";

export interface IChipProps extends React.HTMLAttributes<HTMLDivElement> {
	theme?: "primary" | "secondary" | "success" | "warning" | "danger";
	onClick?: () => void;
}
