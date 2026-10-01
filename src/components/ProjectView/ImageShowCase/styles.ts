"use client";

import { rgba } from "@/styles";
import { cornerBox } from "@/styles/primitive";
import styled from "styled-components";

export const Root = styled.div<{$moving?: boolean}>`
	height: max(calc(min(100dvw, calc(var(--max-width) - 500px)) / 3 / 1.5), 150px);
	max-width: 100%;
	position: relative;
	padding: 1px;
	display: flex;
	flex-direction: column;
	gap: 5px;
	margin: 0 0 5px;
	overflow: visible;
	min-width: fit-content;
	width: fit-content;
	scrollbar-color: ${({theme}) => rgba(theme.colors.boxShadow, 0.23)} transparent;
	cursor: ${(p) => p.$moving ? "crosshair" : "default"};
`;

export const Wrapper = styled.div<{$moving?: boolean}>`
	position: relative;
	height: 100%;
	max-width: fit-content;
	min-width: fit-content;
	width: fit-content;
	overflow: visible;
	flex: 0 0 auto;
	pointer-events: ${(p) => p.$moving ? "none" : "auto"};
	outline: solid 1px ${(p) => p.theme.colors.boxShadow};

	&:hover {
		${(p) => cornerBox(p.theme, undefined, undefined, undefined, 3)}
		
		& > img { 
			filter: saturate(100%);
		}
	}
`;

export const Img = styled.img`
	position: relative;
	cursor: pointer;
	height: 100%;
	width: auto;
	min-width: fit-content;
	max-width: 100%;
	-webkit-user-drag: none;
	z-index: 0;
	filter: saturate(0%);
`;

export const IndexRow = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	gap: 3px;
	width: 100%;
	max-width: 100%;
`;

export const IndexBox = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	max-width: 100%;
	height: 1px;
	cursor: pointer;
	background: linear-gradient(
		to right, 
		${(p) => rgba(p.theme.colors.boxShadow, 1)} 0%, 
		${(p) => rgba(p.theme.colors.boxShadow, 1)} var(--progress, 0%), 
		${(p) => rgba(p.theme.colors.boxShadow, 0.3)} var(--progress, 0%), 
		${(p) => rgba(p.theme.colors.boxShadow, 0.3)} 100%
	);

	&:hover {
		height: 2px;
	}

	&::after {
		content: "";
		position: absolute;
		top: -1px;
		left: -1px;
		width: calc(100% + 3px);
		height: calc(100% + 3px);
	}
`;