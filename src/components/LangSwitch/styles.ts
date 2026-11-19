"use client";

import styled from "styled-components";
import { rgba } from "@/styles";
import { Span } from "@/styles/primitive";

export const Root = styled.div`
	display: inline-flex;
	align-items: center;
	padding: 2px;
	gap: 5px;
	user-select: none;
	line-height: 1;
	height: 33px;
	position: relative;
	cursor: pointer;
	overflow: visible;
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