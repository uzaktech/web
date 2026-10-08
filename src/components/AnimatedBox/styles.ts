"use client";

import styled from "styled-components";
import { Box } from "@/styles/primitive";
import { css } from "styled-components";

export const FrameRoot = styled(Box)`
	padding: 0;
	background-color: transparent;
	outline: none;

	&::after,
	&::before
	{
		opacity: 0;
	}
`;

export const AnimatedBox = styled(Box)<{$open: boolean, $close: boolean, $boxWidth?: string, $boxHeight?: string, $starterW?: string, $starterH?: string, $delayMs?: number, $delayMaxWidth?: number, $animationSpeed?: "default" | "fast"}>`
	padding: 0;

	@keyframes openingAnimatedBox {
		0% {
			overflow: hidden;
			opacity: ${(p) => (p.$starterH || p.$starterW) ? 1 : 0};
			height: ${(p) => p.$starterH ?? (p.$corner?.size ?? "var(--corner-default-size)")};
			min-height: ${(p) => p.$starterH ?? (p.$corner?.size ?? "var(--corner-default-size)")};
			max-width: ${(p) => p.$starterW ?? (p.$corner?.size ?? "var(--corner-default-size)")};
			width: ${(p) => p.$starterW ?? (p.$corner?.size ?? "var(--corner-default-size)")};
			min-width: ${(p) => p.$starterW ?? (p.$corner?.size ?? "var(--corner-default-size)")};
		}
		99% { 
			overflow: hidden;
			opacity: 1;
			height: 100%;
			min-height: 100%;
			max-width: 100%;
			width: 100%;
			min-width: 100%;
		}
		100% {
			overflow: visible;
			opacity: 1;
			height: ${(p) => p.$boxHeight ?? "fit-content"};
			min-height: ${(p) => p.$boxHeight ?? "fit-content"};
			max-width: 100%;
			width: 100%;
			min-width: 100%;
		}
	}

	@keyframes openingLocker {
		0%, 30% {
			opacity: ${(p) => (p.$starterH || p.$starterW) ? 1 : 0.3};
		}
		100% {
			opacity: 1;
		}
	}

	${(p) => p.$open == true
		? css`
			overflow: hidden;
			opacity: ${(p.$starterH || p.$starterW) ? 1 : 0};

			animation: ${p.$animationSpeed == "fast" ? ".23s" : ".47s"} ease-out forwards openingAnimatedBox ${p.$delayMs ?? 0}s;

			${p.$delayMaxWidth && css`
				@media (max-width: ${p.$delayMaxWidth * 100}px) 
				{
					animation: ${p.$animationSpeed == "fast" ? ".23s" : ".47s"} ease-out forwards openingAnimatedBox 0s !important;
				}
			`}

			& > div {
				animation: ${p.$animationSpeed == "fast" ? ".23s" : ".47s"} ease-out forwards openingLocker ${p.$delayMs ? `${p.$delayMs}s` : "0s"};
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

export const ContentLock = styled(Box).attrs({$cornerP: "none"})<{$cWidth?: string, $cHeight?: string, $opened?: boolean}>`
	background-color: transparent;
	outline: none;
   width: ${(p) => p.$opened ? (p.$width ?? "auto") : p.$cWidth};
   height: ${(p) => p.$opened ? (p.$height ?? "auto") : p.$cHeight};
   min-width: ${(p) => p.$opened ? (p.$width ?? "auto") : p.$cWidth};
   min-height: ${(p) => p.$opened ? (p.$height ?? "auto") : p.$cHeight};
`;