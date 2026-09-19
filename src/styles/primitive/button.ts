"use client";

import styled from "styled-components";
import { cornerBox } from "./box";
import { css } from "styled-components";
import { rgba } from "../theme";

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
		background-color: ${(p) => rgba(p.theme.colors.boxShadow, 0.93)};
		
		&:focus,
		&:hover
		{
			${(p) => cornerBox(p.theme, "1px", p.theme.colors.boxBackground, undefined, 2)};
		}
		
		
		&:active:hover
		{
			${(p) => cornerBox(p.theme, "1px", p.theme.colors.boxBackground, "100%", 2)};
		}

		&:disabled 
		{
			pointer-events: none;
			background-color: ${(p) => rgba(p.theme.colors.boxShadow, 0.3)};
		}
		
	` : p.$style == "ghost_link" ? css`
		background-color: ${(p) => p.theme.colors.boxBackground};
		color: ${(p) => p.theme.colors.text};
		font-weight: 500;
		outline: solid 1px ${(p) => p.theme.colors.boxShadow};
		outline-offset: -1px;
		text-decoration: none;
		
		&:focus,
		&:hover
		{
			${(p) => cornerBox(p.theme, "1px", p.theme.colors.boxShadow, undefined, 2)};
		}
		
		&:active:hover
		{
			${(p) => cornerBox(p.theme, "1px", p.theme.colors.boxShadow, "100%", 2)};
		}
	` : css``}
`;

export const Button = styled.button<ButtonProps>`
	${(p) => buttonStyle(p)};
`;
