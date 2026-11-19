"use client";

import { Wrapper } from "@/styles/primitive";
import styled from "styled-components";
import { css } from "styled-components";

export const Root = styled(Wrapper)<{$hiddenOnZero?: boolean, $phase?: "closed" | "open" | "closing"}>`
	padding: 0;

	@keyframes openingShrinkWrapper {
		0% {
			overflow: hidden;
			visibility: hidden;
			opacity: var(--from-opc, var(--starter-opc, 0));
			max-height: var(--from-h, var(--starter-h, 0px));
			height: var(--from-h, var(--starter-h, 0px));
			min-height: var(--from-h, var(--starter-h, 0px));
			max-width: var(--from-w, var(--starter-w, 0px));
			width: var(--from-w, var(--starter-w, 0px));
			min-width: var(--from-w, var(--starter-w, 0px));
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
			max-height: var(--target-h, 100%);
			height: var(--target-h, 100%);
			min-height: var(--target-h, 100%);
			max-width: var(--target-w, 100%);
			width: var(--target-w, 100%);
			min-width: var(--target-w, 100%);
		}
	}

	@keyframes closingShrinkWrapper {
      0% {
			overflow: hidden;
			visibility: visible;
         opacity: var(--from-opc, 1);
     		max-height: var(--from-h, var(--target-h, 100%));
			height: var(--from-h, var(--target-h, 100%));
			min-height: var(--from-h, var(--target-h, 100%));
			max-width: var(--from-w, var(--target-w, 100%));
			width: var(--from-w, var(--target-w, 100%));
			min-width: var(--from-w, var(--target-w, 100%));
      }
      100% {
         overflow: hidden;
			visibility: hidden;
         opacity: var(--starter-opc, 0);
         max-height: var(--starter-h, 0px);
         height: var(--starter-h, 0px);
         min-height: var(--starter-h, 0px);
         max-width: var(--starter-w, 0px);
         width: var(--starter-w, 0px);
         min-width: var(--starter-w, 0px);
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
         opacity: var(--starter-opc, 0);
			visibility: hidden;
         max-height: var(--starter-h, 0px);
         height: var(--starter-h, 0px);
         min-height: var(--starter-h, 0px);
         max-width: var(--starter-w, 0px);
         width: var(--starter-w, 0px);
         min-width: var(--starter-w, 0px);
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