"use client";

import styled from "styled-components";
import { defaultTheme, rgba } from "@/styles";
import { Box, Span } from "@/styles/primitive";

export const Root = styled.footer`
	width: 100%;
	height: fit-content;
	min-height: fit-content;
	background-color: ${(p) => p.theme.colors.boxShadow};
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 23px 13px 13px;
`;

export const Main = styled(Box).attrs({$shadow: false, $shadowColor: rgba(defaultTheme.colors.boxBackground, 0.5), $bg: defaultTheme.colors.boxShadow, $padding: "9px 9px", $corner: {borderSize: "0px", pad: 3, size: "17px", color: defaultTheme.colors.boxBackground, opc: 0.5}})`
	width: 100%;
	max-width: var(--max-width);
	min-height: 300px;
	height: fit-content;
	color: ${(p) => p.theme.colors.boxBackground};
	display: flex;
	flex-direction: column;
	gap: 23px;
`;

export const LabelColumn = styled(Span).attrs({$size: "xv", $opc: 0.7, $colorPreset: "boxBackground", $weight: "500"})`
	text-transform: uppercase !important;
	margin: 0 0 9px;

	@media (max-width: 1000px) {
		margin: 0 0 5px;
	}
`;

export const AvailabilityIcon = styled.div`
	position: relative;
	height: 7px;
	aspect-ratio: 1;
	border-radius: 50%;
	background-color: ${(p) => p.theme.colors.greenText};
`;

export const LogoWrapper = styled.div`
	max-width: 109px;
	filter: invert(100%) brightness(53%);
`;