"use client";

import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

export type BoxProps = {
	$padding?: string;
	$maxWidth?: string;
	$maxHeight?: string;
	$minWidth?: string;
	$width?: string;
	$height?: string;
	$corner?: {
		borderSize: string,
		color?: string,
		size?: string,
		pad?: number
	};
	$cornerP?: "none" | "default",
	$shadow?: boolean,
	$overflow?: string,
	$aspectRatio?: string,
	$margin?: string,
	$fDirection?: string,
	$display?: string,
	$gap?: string,
	$border?: string,
	$ai?: string,
	$jc?: string
}

export const cornerBox = (theme: DefaultTheme, borderSize?: string, color?: string | undefined, size?: string | undefined, pad?: number) => css`
	&::after 
	{
		content: "";
		position: absolute;
		top: calc(${borderSize ?? "1px"} + ${pad ?? -1}px);
		left: calc(${borderSize ?? "1px"} + ${pad ?? -1}px);
		height: ${size ?? "var(--corner-default-size)"};
		aspect-ratio: 1;
		border-left: solid ${borderSize ?? "1px"} ${color ?? theme.colors.boxShadow};
		border-top: solid ${borderSize ?? "1px"} ${color ?? theme.colors.boxShadow};
		z-index: 1;
	}
	
	&::before
	{
		content: "";
		position: absolute;
		bottom: calc(${borderSize ?? "1px"} + ${pad ?? -1}px);
		right: calc(${borderSize ?? "1px"} + ${pad ?? -1}px);
		height: ${size ?? "var(--corner-default-size)"};
		aspect-ratio: 1;
		border-right: solid ${borderSize ?? "1px"} ${color ?? theme.colors.boxShadow};
		border-bottom: solid ${borderSize ?? "1px"} ${color ?? theme.colors.boxShadow};
		z-index: 1;
	}
`;

export const Box = styled.div<BoxProps>`
	position: relative;
	width: ${(p) => p.$width ?? "auto"};
	height: ${(p) => p.$height ?? "auto"};
	max-height: ${(p) => p.$maxHeight ?? "100%"};
	max-width: ${(p) => p.$maxWidth ?? "100%"};
	min-width: ${(p) => p.$minWidth ?? "auto"};
	padding: ${(p) => p.$padding ?? "9px"};
	aspect-ratio: ${(p) => p.$aspectRatio};
	overflow: ${(p) => p.$overflow};
	outline: ${(p) => p.$shadow != false && `solid 1px ${p.theme.colors.boxShadow}`};
	border: ${(p) => p.$border};
	margin: ${(p) => p.$margin};
	display: ${(p) => p.$display ?? "flex"};
	gap: ${(p) => p.$gap};
	flex-direction: ${(p) => p.$fDirection ?? "column"};
	align-items: ${(p) => p.$ai};
	justify-content: ${(p) => p.$jc};
	background-color: ${(p) => p.theme.colors.boxBackground};

	${(p) => p.$cornerP != "none" && (cornerBox(p.theme, p.$corner?.borderSize, p.$corner?.color, p.$corner?.size, p.$corner?.pad))}
`;