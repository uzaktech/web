"use client";

import { Wrapper } from "@/styles/primitive";
import styled from "styled-components";
import { css } from "styled-components";

export const Root = styled(Wrapper)<{$hiddenOnZero?: boolean, $starterH?: string, $starterW?: string, $starterOpc?: number, $phase?: "closed" | "open" | "closing"}>`
	padding: 0;

	@keyframes openingShrinkWrapper {
		0% {
			overflow: hidden;
			visibility: hidden;
			opacity: ${(p) => p.$starterOpc ?? 0};
			max-height: ${(p) => p.$starterH ?? "0px"};
			height: ${(p) => p.$starterH ?? "0px"};
			min-height: ${(p) => p.$starterH ?? "0px"};
			max-width: ${(p) => p.$starterW ?? "0px"};
			width: ${(p) => p.$starterW ?? "0px"};
			min-width: ${(p) => p.$starterW ?? "0px"};
		}
		1% {
			visibility: visible;
		}
		99% { 
			overflow: hidden;
			visibility: hidden;
			opacity: 1;
			max-height: var(--target-h, 100%);
			height: var(--target-h, 100%);
			min-height: var(--target-h, 100%);
			max-width: var(--target-w, 100%);
			width: var(--target-w, 100%);
			min-width: var(--target-w, 100%);
		}
		100% {
			overflow: visible;
			visibility: visible;
			opacity: 1;
			width: ${(p) => p.$dSize?.[0] ?? (p.$dSize?.[0] ?? "fit-content")};
			min-width: ${(p) => p.$minSize?.[0] ?? (p.$minSize?.[0] ?? "fit-content")};
			max-width: ${(p) => p.$dSize?.[0] ?? (p.$maxSize?.[0] ?? "fit-content")};
			height: ${(p) => p.$dSize?.[1] ?? (p.$dSize?.[1] ?? "fit-content")};
			min-height: ${(p) => p.$minSize?.[1] ?? (p.$minSize?.[1] ?? "fit-content")};
			max-height: ${(p) => p.$maxSize?.[1] ?? (p.$maxSize?.[1] ?? "fit-content")};
		}
	}

	@keyframes closingShrinkWrapper {
      0% {
			overflow: hidden;
			visibility: visible;
         opacity: 1;
     		max-height: var(--target-h, 100%);
			height: var(--target-h, 100%);
			min-height: var(--target-h, 100%);
			max-width: var(--target-w, 100%);
			width: var(--target-w, 100%);
			min-width: var(--target-w, 100%);
      }
      100% {
         overflow: hidden;
			visibility: hidden;
         opacity: ${(p) => p.$starterOpc ?? 0};
         max-height: ${(p) => p.$starterH ?? "0px"};
         height: ${(p) => p.$starterH ?? "0px"};
         min-height: ${(p) => p.$starterH ?? "0px"};
         max-width: ${(p) => p.$starterW ?? "0px"};
         width: ${(p) => p.$starterW ?? "0px"};
         min-width: ${(p) => p.$starterW ?? "0px"};
      }
   }

	${(p) => {
      if (p.$phase === "open") return css`
         overflow: hidden;
         animation: .37s ease-out forwards openingShrinkWrapper;
      `;
      if (p.$phase === "closing") return css`
         overflow: hidden;
         animation: .37s ease-in-out forwards closingShrinkWrapper;
      `;
      return css`
         opacity: 0;
			visibility: hidden;
         max-height: ${p.$starterH ?? "0px"};
         height: ${p.$starterH ?? "0px"};
         min-height: ${p.$starterH ?? "0px"};
         max-width: ${p.$starterW ?? "0px"};
         width: ${p.$starterW ?? "0px"};
         min-width: ${p.$starterW ?? "0px"};
      `;
   }}
`;

export const Content = styled(Wrapper)<{$cWidth?: string, $cHeight?: string, $opened?: boolean}>`
	width: ${(p) => p.$opened ? (p.$dSize?.[0] ?? "fit-content") : p.$cWidth};
	min-width: ${(p) => p.$opened ? (p.$minSize?.[0] ?? "fit-content") : p.$cWidth};
	max-width: ${(p) => p.$opened ? (p.$maxSize?.[0] ?? "fit-content") : p.$cWidth};
	height: ${(p) => p.$opened ? (p.$dSize?.[1] ?? "fit-content") : p.$cHeight};
	min-height: ${(p) => p.$opened ? (p.$minSize?.[1] ?? "fit-content") : p.$cHeight};
	max-height: ${(p) => p.$opened ? (p.$maxSize?.[1] ?? "fit-content") : p.$cHeight};
`;