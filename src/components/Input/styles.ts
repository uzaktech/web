"use client";

import { rgba } from "@/styles";
import { Span } from "@/styles/primitive/text";
import styled, { css } from "styled-components";

export const Root = styled.div<{$width?: string, $maxWidth?: string}>`
	position: relative;
	display: flex;
	flex-direction: column;
	width: ${(p) => p.$width};
	max-width: ${(p) => p.$maxWidth ?? "100%"};
	gap: 5px;
`;

export const InputBox = styled.div<{$focus?: boolean, $status?: 1 | 2}>`
	min-height: var(--height-btn-inp);
	cursor: text;
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: ${(p) => p.theme.colors.boxBackground};
	box-shadow: 0 0 0 1px ${(p) => p.theme.colors[p.$status == 1 ? "redError" : "boxShadow"]};
	height: fit-content;
	max-width: 100%;
	overflow: auto;
	
	${(p) => p.$focus == true && css`
		box-shadow: 
			0 0 0 1px ${p.theme.colors[p.$status == 1 ? "redError" : "boxShadow"]}, 
			inset 2px 0 0 0 ${p.theme.colors[p.$status == 1 ? "redError" : "boxShadow"]};
	`}
`;

const InputStyle = (p: {status?: 1 | 2}) => css`
	width: 100%;
	height: auto;
	max-width: 100%;
	border: none;
	outline: none;
	border-radius: 0;
	padding: 0 17px 0 15px;
	font-size: ${(p) => p.theme.fontSize.xvi};
	background-color: transparent;
	min-height: var(--height-btn-inp);
	color: ${(p) => p.theme.colors.text};
	font-weight: 450;
	max-height: 100%;
	
	&::placeholder
	{
		opacity: 0.7;
		user-select: none;
	}

	&:is(:-webkit-autofill, :autofill) 
	{
		box-shadow: inset 0 0 0 1000px ${(pp) => pp.theme.colors.boxBackground} !important;

		&:focus 
		{
			box-shadow: 
				inset 2px 0 0 0 ${(pp) => pp.theme.colors[p.status == 1 ? "redError" : "boxShadow"]}, 
				inset 0 0 0 1000px ${(pp) => pp.theme.colors.boxBackground} !important;
		}
	}
`;

export const Input = styled.input<{$smtAside?: boolean, $width?: string, $maxWidth?: string, $status?: 1 | 2}>`
	${(p) => InputStyle({status: p.$status})};
	
	width: ${(p) => p.$width ?? "100%"} !important;
	max-width: ${(p) => p.$maxWidth ?? "100%"} !important;

	${(p) => p.$width == "fit-content" && css`field-sizing: content;`}
	${(p) => p.$smtAside == true && css`padding: 0 0 0 15px;`}
`;

export const Textarea = styled.textarea<{$smtAside?: boolean, $resize?: string, $maxHeight?: string, $status?: 1 | 2}>`
	${(p) => InputStyle({status: p.$status})};

	resize: ${({$resize}) => $resize || "both"};
	padding: 5.5px 15px;
	max-height: ${({$maxHeight}) => $maxHeight};
	line-height: 20px;
	overflow: visible;

	@media (max-width: 400px) {
		line-height: 17px;
	}

	${({$smtAside}) => $smtAside == true && css`padding: 0 0 0 15px;`}
`;

export const PasswordBtn = styled.div<{$focus?: boolean}>`
	width: 50px;
	min-width: 50px;
	white-space: nowrap;
	cursor: pointer;
	border-radius: 50%;
	margin: 0 3px;
	font-size: ${(p) => p.theme.fontSize.xiii};
	color: ${(p) => rgba(p.theme.colors.text, 0.7)};
	transition: ${(p) => p.theme.effects.transition};
	text-align: center;
	user-select: none;

	${(p) => p.$focus && css`color: ${p.theme.colors.text};`};
	
	&:hover 
	{
		color: ${(p) => p.theme.colors.text};
	}
`;

export const ErrorText = styled(Span)`
	color: ${(p) => p.theme.colors.redError};
	font-size: ${(p) => p.theme.fontSize.xv};
	font-weight: 450;
`;