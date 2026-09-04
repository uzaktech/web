"use client";

import styled from "styled-components";

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
		--stop: #fff !important;

		.front .stop
		{
			stop-color: ${(p) => `rgba(${p.theme.colorsRgbC.boxBackground}, 0.57)`} !important;
				
			&:nth-child(2)
			{
				stop-color: var(--stop) !important;
			}
		}

		.back .stop
		{
			stop-color: ${(p) => `rgba(${p.theme.colorsRgbC.boxBackground}, 0.57)`} !important;
				
			&:nth-child(2)
			{
				stop-color: var(--stop) !important;
			}
		}

		.right .stop
		{
			stop-color: ${(p) => `rgba(${p.theme.colorsRgbC.boxBackground}, 0.57)`} !important;
				
			&:nth-child(2)
			{
				stop-color: var(--stop) !important;
			}
		}

		.left .stop
		{
			stop-color: ${(p) => `rgba(${p.theme.colorsRgbC.boxBackground}, 0.57)`} !important;
				
			&:nth-child(2)
			{
				stop-color: var(--stop) !important;
			}
		}
	}

	.pyramid {
		position: relative;
		width: 150px;
		height: 150px;
		transform-style: preserve-3d;
		animation: spin 13.33s linear infinite;
		transform-origin: 50% 0% 0px;

		.face {
			position: absolute;
			width: 150px;
			height: 150px;
			transform-origin: 50% 100%;
			
			svg {
				width: 100%;
				height: 100%;
				display: block;
			}
		}

		.pol 
		{
			stroke: var(--stroke);
		}

		.front {
			transform: rotateY(0deg) translateZ(80.5px) rotateX(35deg);
		}

		.right {
			transform: rotateY(90deg) translateZ(80.5px) rotateX(35deg);
		}

		.back {
			transform: rotateY(180deg) translateZ(80.5px) rotateX(35deg);
		}

		.left {
			transform: rotateY(270deg) translateZ(80.5px) rotateX(35deg);
		}

		.front,
		.right,
		.back,
		.left
		{
			.stop 
			{
				stop-color: var(--stop);
				transition: all .2s ease;
				
				&:nth-child(2)
				{
					stop-color: var(--stop);
				}
			}
		}

		.base 
		{
			position: absolute;
			width: 150px;
			height: 150px;
			box-shadow: inset 0 0 0 1px var(--stroke);
			transform: rotateX(90deg) translateZ(-67px);
			background-color: ${(p) => p.theme.colors.boxBackground};
		}

		@keyframes spin 
		{
			0% {transform: rotateX(-25deg) rotateY(0deg);}
			100% {transform: rotateX(-25deg) rotateY(360deg);}
		}
	}
`;