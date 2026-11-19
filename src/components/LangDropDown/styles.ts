"use client";

import styled from "styled-components";
import { Span } from "@/styles/primitive";

export const Root = styled.div<{$fixed?: boolean, $headerWidth?: number}>`
	position: ${(p) => p.$fixed ? "fixed" : "absolute"};
	top: calc(var(--height-header) + (13px * (${(p) => p.$fixed ? "2" : "1"})));
	right: max(
		calc(50% - (var(--max-width) / 2) + (${(p) => p.$fixed ? "6px" : "1px"})), 
		${(p) => p.$fixed ? `calc(13px + (100% - (${p.$headerWidth}px + 26px)))` : "13px"}
	);
	z-index: 333;
`;

export const ListWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 3px;
	padding: 9px 13px 9px 9px;
	max-height: 213px;
	overflow: auto;
`;

export const Box = styled.div`
	display: inline-flex;
	align-items: center;
	padding: 2px;
	gap: 5px;
	user-select: none;
	line-height: 1;
	height: 33px;
	min-height: 33px;
	position: relative;
	cursor: pointer;
	overflow: visible;

	&:hover > span
	{
		text-decoration: underline;
	}
`;

export const IconFlag = styled.div<{$img?: string}>`
	height: 100%;
	aspect-ratio: 1;
	background-image: url(${(p) => p.$img});
	background-position: center center;
	background-size: 75%;
	background-repeat: no-repeat;
`;

export const Label = styled(Span).attrs({$size: "xvi", $margin: "1px 0 0", $weight: "450", $wSpace: "nowrap"})``;