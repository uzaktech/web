"use client";

import { rgba } from "@/styles";
import styled, { css } from "styled-components";

export const MovingFilter = styled.div`
	position: fixed;
	inset: 0 0;
	width: 100vw;
	height: 100dvh;
	z-index: 130;
	cursor: crosshair;
`;

export const Root = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	perspective: 1000px;
	min-width: 300px;
	min-height: 300px;
	padding: 0 0 30px;
	margin: 0 0 0 auto;
	position: relative;
	padding: 0 0 30px;
	aspect-ratio: 1;
	z-index: 3;
	touch-action: none;
	
	--stroke: #fff;
	--stop: #000;

	@media (max-width: 500px) {
		width: 250px;
		height: 250px;
		min-width: auto;
		min-height: auto;
		max-width: 100%;
		max-height: none;
		padding: 0 0 50px;
		flex-shrink: 0;
		overflow: visible;
	}

	
	&:hover 
	{
		--stroke: #000;

		--stop: ${(p) => rgba(p.theme.colors.boxBackground, 0.77)};
	}
`;

export const Pyramid = styled.div<{$dragging: boolean}>`
	--drag-x: -25deg;
	--drag-y: 0deg;
	
	--transform-rotate-x: var(--drag-x);
	--transform-rotate-y: var(--drag-y);

	@property --transform-rotate-x {
	  syntax: "<angle>";
	  inherits: true;
	  initial-value: -25deg;
	}
	
	@property --transform-rotate-y {
	  syntax: "<angle>";
	  inherits: true;
	  initial-value: 0deg;
	}

	position: relative;
	width: 150px;
	height: 150px;
	transform-style: preserve-3d;
	transform-origin: 50% 50%;
	animation: ${({ $dragging }) =>
		$dragging ? "none" : "spinPyramidY 13.33s linear infinite, spinPyramidX 1.9s ease-out forwards"};

	transform: ${({ $dragging }) =>
		$dragging
			? "rotateX(var(--drag-x)) rotateY(var(--drag-y))"
			: "rotateX(var(--transform-rotate-x)) rotateY(var(--transform-rotate-y))"};

	${(p) => p.$dragging && css`
		--stroke: #000;
		--stop: ${rgba(p.theme.colors.boxBackground, 0.77)};
	`}

	@keyframes spinPyramidY {
		from {
			--transform-rotate-y: var(--drag-y);
		}
		to {
			--transform-rotate-y: calc(var(--drag-y) + 360deg);
		}
	}

	@keyframes spinPyramidX {
		0% {
			--transform-rotate-x: var(--drag-x);
		}
		100% {
			--transform-rotate-x: -25deg;
		}
	}

	.pol 
	{
		stroke: var(--stroke);
	}
`;

export const Face = styled.div<{$side?: string}>`
	position: absolute;
	width: 150px;
	height: 150px;
	transform-origin: 50% 100%;
	transform: rotateY(${(p) => p.$side === "front" ? "0deg"
			: p.$side === "right" ? "90deg"
			: p.$side === "back" ? "180deg"
			: p.$side === "left" ? "270deg" : "0deg"
		}) translateZ(80.5px) rotateX(35deg);
	
	& > svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	.stop 
	{
		stop-color: var(--stop);
		transition: all .2s ease;
		
		&:nth-child(2)
		{
			stop-color:var(--stop);
		}
	}
`;

export const Base = styled.div`
	position: absolute;
	width: 150px;
	height: 150px;
	box-shadow: inset 0 0 0 1px var(--stroke);
	transform: rotateX(90deg) translateZ(-67px);
	transition: all .2s ease;
	background-color: var(--stop);
`;