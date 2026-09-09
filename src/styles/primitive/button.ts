"use client";

import styled from "styled-components";
import { cornerBox } from "./box";
import { css } from "styled-components";

export type ButtonProps = {
	$style?: "ghost_link" | undefined,
	$cta?: boolean,
	$fullMaxWidth?: string
};

export const buttonStyle = (p: ButtonProps) => css`
	display: inline-flex;
	align-items: center;
	padding: 10px 16px;
	font-weight: 500;
	font-size: ${(p) => p.theme.fontSize.xv};
	position: relative;
	height: ${p.$cta == true ? "var(--height-btn-cta)" : "var(--height-btn)"};
	box-sizing: border-box;
	user-select: none;
	border: none;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: fit-content;

	${p.$fullMaxWidth && css`
		width: 100%;
		max-width: ${p.$fullMaxWidth};
	`};

	@media (max-width: 450px) 
	{
		padding: 7px 13px;
	}

	${p.$style == undefined ? css`
		color: #fff;
		text-decoration: none;
		background-color: ${(p) => `rgba(${p.theme.colorsRgbC.boxShadow}, 0.93)`};
		
		&:focus,
		&:hover
		{
			${(p) => cornerBox(p.theme, "1px", "#fff", undefined, 2)};
		}
		
		&:active:hover
		{
			box-shadow: 
				inset 0 0 0 3px ${(p) => p.theme.colors.boxShadow},
				inset 0 0 0 4px #fff;
		}

		&:disabled 
		{
			pointer-events: none;
			background-color: ${(p) => `rgba(${p.theme.colorsRgbC.boxShadow}, 0.3)`};
		}
		
	` : p.$style == "ghost_link" ? css`
		background-color: ${(p) => p.theme.colors.boxBackground};
		color: ${(p) => p.theme.colors.text};
		font-weight: 500;
		box-shadow: inset 0 0 0 1px ${(p) => p.theme.colors.boxShadow};
		text-decoration: none;
		
		&:hover
		{
			background-color: ${(p) => `rgba(${p.theme.colorsRgbC.text}, 0.03)`};
			text-decoration: underline;
		}
	` : css``}
`;

export const Button = styled.button<ButtonProps>`
	${(p) => buttonStyle(p)};
`;
