"use client";

import styled, { css } from "styled-components";
import { Wrapper } from "./wrapper";
import { P, Span } from "./text";

export const Root = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 48px;
	width: 100%;
`;

export const Section = styled(Wrapper).attrs<{$breakAt?: number, $hero?: boolean}>({as: "section"})`
	position: relative;
	display: flex;
	flex-direction: ${({$fDirection}) => $fDirection ?? "column"};
	gap: ${({$gap}) => $gap ?? "18px"};
	padding: ${(p) => p.$pad ?? (p.$hero ? "33px 0 13px" : "13px 0")};

	${({$breakAt, $ai}) => $breakAt && css`
		@media (max-width: ${$breakAt * 100}px) {
			flex-direction: column;
		}
	`}

	${({$hero, $breakAt}) => $hero && $breakAt && css`
		@media (max-width: ${$breakAt * 100}px) {
			height: auto;
			min-height: 0;
		}
	`}
`;

export const Content = styled(Wrapper)`
	height: ${(p) => p.$dSize?.[1] ?? "auto"};
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: ${({$gap}) => $gap ?? "33px"};

	@media (max-width: 500px) 
	{
		gap: ${({$gap}) => $gap ?? "23px"};
	}
`;

export const Label = styled(Span).attrs({$size: "xvi", $opc: 0.4, $lSpacing: "0.08em", $weight: "550", $margin: "0 0 -9px"})`
	text-transform: uppercase !important;
`;

export const Title = styled(Span).attrs({as: "h2", $size: "xxii", $weight: "550", $lineHeight: 1.2})``;

export const Copy = styled(P).attrs({$opc: 0.79})`
	max-width: ${(p) => p.$maxWidth ?? "39rem"};
`;