"use client";

import styled, { css } from "styled-components";
import { Styles } from "styled-components/dist/types";
import { rgba } from "../theme";

export type PadProps = {
	$pad?: string,
	$gap?: string,
}

export type SizeProps = {
	$dSize?: (string | undefined)[],
	$maxSize?: (string | undefined)[],
	$minSize?: (string | undefined)[],
}

export type FlexProps = {
	$jc?: string, 
	$ai?: string, 
	$gTCol?: string, 
	$gTRow?: string, 
	$margin?: string,
	$boxSizing?: string,
	$overflow?: string,
	$position?: string,
	$cords?: (string | undefined)[],
	$display?: string,
	$fDirection?: string,
	$fWrap?: string,
	$css?: Styles<object>,
	$cssStage?: {n?: number, css?: Styles<object>}
}

export type WrapperProps = PadProps & SizeProps & FlexProps;

export const Wrapper = styled.div<WrapperProps>`
	position: ${({$position}) => $position ?? "relative"};
	display: ${({$display}) => $display};
	flex-direction: ${({$fDirection}) => $fDirection};
	justify-content: ${({$jc}) => $jc};
	align-items: ${({$ai}) => $ai};
	flex-wrap: ${({$fWrap}) => $fWrap};
	grid-template-columns: ${({$gTCol}) => $gTCol};
	grid-template-rows: ${({$gTRow}) => $gTRow};
	margin: ${({$margin}) => $margin ?? "0"};
	width: ${({$dSize}) => $dSize?.[0]};
	height: ${({$dSize}) => $dSize?.[1]};
	min-width: ${({$minSize}) => $minSize?.[0]};
	min-height: ${({$minSize}) => $minSize?.[1]};
	max-width: ${({$maxSize}) => $maxSize?.[0]};
	max-height: ${({$maxSize}) => $maxSize?.[1]};
	box-sizing: ${({$boxSizing}) => $boxSizing};
	overflow: ${({$overflow}) => $overflow};
	top: ${({$cords}) => $cords?.[0]};
	right: ${({$cords}) => $cords?.[1]};
	bottom: ${({$cords}) => $cords?.[2]};
	left: ${({$cords}) => $cords?.[3]};
	
	padding: ${({$pad}) =>$pad};
	gap: ${({$gap}) => $gap};
	
	${({$css}) => $css && $css};

	${({$cssStage}) => $cssStage && css`
		@media (max-width: ${($cssStage.n ?? 1) * 100}px) {
			${$cssStage.css};
		}
	`};
`;

export const WrapperCenter = styled(Wrapper)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

export const Row = styled(Wrapper).attrs<{$breakAt?: number, $aiAt?: string, $invertAt?: boolean}>({$display: "flex"})`
	flex-direction: row;

	${({$breakAt, $aiAt, $ai, $invertAt}) => $breakAt && css`
		@media (max-width: ${$breakAt * 100}px) {
			flex-direction: ${$invertAt ? "column-reverse" : "column"} !important;
			align-items: ${$aiAt ?? $ai} !important;
		}
	`}
`;

export const Col = styled(Wrapper).attrs({$display: "flex"})`
	flex-direction: column;
`;

export const Division = styled(Wrapper)<{$orientation?: 0 | 1, $breakAt?: number, $breakTo?: "hid" | "show" | "invert", $transparent?: boolean}>`
	position: relative;
	display: flex;

	&::after 
	{
		content: "";
		position: relative;
		height: 100%;
		width: 100%;
		min-height: 1px;
		min-width: 1px;
		background-color: ${(p) => rgba(p.theme.colors.boxShadow, p.$transparent ? 0 : 0.13)};
	}

	${({$breakAt, $breakTo, $orientation}) => ($breakAt && $breakTo) && css`
		display: ${$breakTo == "show" ? "none" : "flex"};

		@media (max-width: ${$breakAt * 100}px) {
			${$breakTo == "invert" ? 
				($orientation === 0 ? css`
						min-width: 100%;
						width: 100%;
						min-height: 1px;
						max-height: 1px;
					` : css`
						min-height: 100%;
						height: 100%;
						min-width: 1px;
						max-width: 1px;
					`
				) : css`display: ${$breakTo == "hid" ? "none" : "flex"};`
			}
		}
	`}

	${({$orientation}) => $orientation === 1 ? css`
			min-width: 100%;
			width: 100%;
			min-height: 1px;
		` : css`
			min-height: 100%;
			height: 100%;
			min-width: 1px;
		`
	}
`;