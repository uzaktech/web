"use client";

import styled, { css } from "styled-components";
import { defaultTheme, rgba } from "../theme";
import { cornerBox } from "./box";
import { DefaultTheme } from "styled-components/dist/types";

export type TextProps = {
	$size?: keyof typeof defaultTheme.fontSize, 
	$colorPreset?: keyof typeof defaultTheme.colors, 
	$color?: string, 
	$margin?: string, 
	$weight?: string, 
	$width?: string, 
	$maxWidth?: string, 
	$opc?: number, 
	$italic?: boolean,
	$opcHover?: number,
	$cursor?: string,
	$nowrap?: boolean,
	$wSpace?: string,
	$oHidden?: boolean,
	$lineHeight?: number,
	$lSpacing?: string,
	$align?: string,
	$tDecoration?: string,
	$uSelect?: string
}

export const defaultText = (props: TextProps & {theme: DefaultTheme}) => css`
	--opc: ${props.$opc ?? 1};

	font-size: ${props.theme.fontSize[props.$size ?? "xvii"]};
	margin: 0;
	color: ${
		props.$colorPreset ? rgba(props.theme.colors[props.$colorPreset], "var(--opc)")
		: props.$color ?? rgba(props.theme.colors.text, "var(--opc)")};
	font-weight: ${props.$weight ?? 400};
	margin: ${props.$margin};
	font-style: ${props.$italic && "italic"};
	line-height: ${props.$lineHeight};
	white-space: ${props.$wSpace ?? (props.$nowrap && "nowrap")};
	width: fit-content;
	max-width: ${props.$maxWidth ?? "100%"};
	height: fit-content;
	cursor: ${props.$cursor};
	text-align: ${props.$align};
	text-decoration: ${props.$tDecoration};
	letter-spacing: ${props.$lSpacing};
	user-select: ${props.$uSelect};

	${props.$opcHover != null && css`
		&:hover 
		{
			--opc: ${props.$opcHover} !important;
		}
	`}

	${props.$oHidden && css`
		text-overflow: ellipsis;
		overflow: hidden;
		max-width: 100%;
	`};
`;

export const H1 = styled.h1<TextProps>`
	${(p) => cornerBox(p.theme, "2px", undefined, "10px")};
	
	position: relative;
	font-size: ${({theme, $size}) => $size != null ? theme.fontSize[$size] : theme.fontSize.xxiii};
	width: fit-content;
	color: ${({theme, $color, $opc}) => $color || rgba(theme.colors.text, $opc || 1)};
	font-weight: ${({$weight}) => $weight || 550};
	margin: ${({$margin}) => $margin ?? "0"};
	line-height: ${({$lineHeight}) => $lineHeight};
	letter-spacing: ${({$lSpacing}) => $lSpacing};
	padding: 7px 13px;
`;

export const Span = styled.span<TextProps>`
	${(p) => defaultText(p)}
`;

export const P = styled.p<TextProps>`
	${(p) => defaultText(p)}
`;

export const SmallInfo = styled(Span).attrs({$opc: 0.5, $size: "xv"})`
	top: calc(100% + 3px);
	position: absolute;
	right: 0;
`;

export const Label = styled.label<TextProps>`
	${(p) => defaultText(p)}

	font-size: ${(p) => p.theme.fontSize.xv};
	cursor: ${(p) => p.$cursor ?? "default"};
	color: ${(p) => p.$color ?? rgba(p.theme.colors.text, 0.9)};
	font-weight: ${(p) => p.$weight ?? 450};
`;