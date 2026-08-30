"use client";

import styled from "styled-components";
import { Box } from "@/styles/primitive";
import { css } from "styled-components";

export const FrameRoot = styled(Box)`
	padding: 0;
	background-color: transparent;
	outline: none;
	height: auto !important;

	&::after,
	&::before
	{
		opacity: 0;
	}
`;

export const AnimatedBox = styled(Box)<{$open: boolean, $close: boolean, $totalWidth?: string, $totalHeight?: string, $delayMs?: number, $delayMaxWidth?: number}>`
	padding: 0;

	@keyframes opening {
		0% {
			overflow: hidden;
			opacity: 0;
			max-height: ${(p) => p.$corner?.size ?? "var(--corner-default-size)"};
			height: ${(p) => p.$corner?.size ?? "var(--corner-default-size)"};
			min-height: ${(p) => p.$corner?.size ?? "var(--corner-default-size)"};
			max-width: ${(p) => p.$corner?.size ?? "var(--corner-default-size)"};
			width: ${(p) => p.$corner?.size ?? "var(--corner-default-size)"};
			min-width: ${(p) => p.$corner?.size ?? "var(--corner-default-size)"};
		}
		99% { 
			overflow: hidden;
			opacity: 1;
			max-height: 100%;
			height: 100%;
			min-height: 100%;
			max-width: 100%;
			width: 100%;
			min-width: 100%;
		}
		100% {
			overflow: visible;
			opacity: 1;
			max-height: 100%;
			height: 100%;
			min-height: 100%;
			max-width: 100%;
			width: 100%;
			min-width: 100%;
		}
	}

	@keyframes openingLocker {
		0%, 30% {
			opacity: 0.3;
		}
		100% {
			opacity: 1;
		}
	}

	${(p) => p.$open == true
		? css`
			overflow: hidden;
			opacity: 0;
			max-height: ${p.$corner?.size ?? "var(--corner-default-size)"};
			height: ${p.$corner?.size ?? "var(--corner-default-size)"};
			min-height: ${p.$corner?.size ?? "var(--corner-default-size)"};
			max-width: ${p.$corner?.size ?? "var(--corner-default-size)"};
			width: ${p.$corner?.size ?? "var(--corner-default-size)"};
			min-width: ${p.$corner?.size ?? "var(--corner-default-size)"};

			animation: .47s ease-out forwards opening ${p.$delayMs ? `${p.$delayMs}s` : "0s"};

			${p.$delayMaxWidth && css`
				@media (max-width: ${p.$delayMaxWidth * 100}px) 
				{
					animation: .47s ease-out forwards opening 0s !important;
				}
			`}

			& > div {
				animation: .47s ease-out forwards openingLocker ${p.$delayMs ? `${p.$delayMs}s` : "0s"};
			}
		` : css`
			overflow: hidden;
			opacity: 0;
			max-height: 100%;
			max-width: 100%;
			width: 100%;
			min-width: 100%;
		`
	};
`;

export const ContentLock = styled(Box).attrs({$cornerP: "none"})<{$width?: string, $height?: string}>`
	background-color: transparent;
	outline: none;
   width: ${(p) => p.$width};
   height: ${(p) => p.$height};
   min-width: ${(p) => p.$width};
   min-height: ${(p) => p.$height};
`;