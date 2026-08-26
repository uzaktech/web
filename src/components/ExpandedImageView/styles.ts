"use client";

import { Span } from "@/styles/primitive";
import styled from "styled-components";
import { css } from "styled-components";

export const Background = styled.div`
	background-color: rgba(${(p) => p.theme.colorsRgbC.boxShadow}, 0.3);
	width: 100vw;
	height: 100dvh;
	position: fixed;
	z-index: 130;
	top: 0;
	left: 0;
	//backdrop-filter: blur(3px);
`;

export const ImageFrame = styled.div`
	outline: 1px solid ${(p) => p.theme.colors.boxShadow};
	height: fit-content;
	width: fit-content;
	position: fixed;
	inset: 0;
	margin: auto;
	z-index: 131;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	gap: 0;
`;

export const Image = styled.img`
	height: fit-content;
	width: fit-content;
	max-height: 90dvh;
	max-width: 95vw;
	margin: none;
`;

export const TitleFrame = styled.div`
	height: auto;
	width: 100%;
	padding: 3px 9px;
	background-color: ${(p) => p.theme.colors.boxShadow};
	display: flex;
	flex-direction: row;
	align-items: center;
	position: relative;
	justify-content: space-between;
`;

export const Arrow = styled.div<{$side: "left" | "right", $disable: boolean}>`
	height: 13px;
	aspect-ratio: 1;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	cursor: pointer;

	${(p) => p.$disable && css`
		pointer-events: none;
		opacity: 0.3;
	`};

	&::after 
	{
		content: "";
		position: relative;
		box-shadow: 1.5px 1.5px 0 0 ${(p) => p.theme.colors.boxBackground};

		${(p) => p.$side == "left" ? css`
			transform: rotate(135deg);
		` : css`
			transform: rotate(-45deg);
		`};

		height: calc(100% - 5px);
		width: auto;
		aspect-ratio: 1;
	}
`;

export const Label = styled(Span).attrs({$colorPreset: "boxBackground", $size: "xiv", $weight: "500"})`user-select: none;`;