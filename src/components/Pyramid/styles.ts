"use client";

import { Box } from "@/styles/primitive";
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

	@media (max-width: 700px) {
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
			stop-color: #ff000030 !important;
				
			&:nth-child(2)
			{
				stop-color: var(--stop) !important;
			}
		}

		.back .stop
		{
			stop-color: #0011ff30 !important;
				
			&:nth-child(2)
			{
				stop-color: var(--stop) !important;
			}
		}

		.right .stop
		{
			stop-color: #019c0130 !important;
				
			&:nth-child(2)
			{
				stop-color: var(--stop) !important;
			}
		}

		.left .stop
		{
			stop-color: #ffe60030 !important;
				
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
				stop-color: #000;
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
			border: 1px solid var(--stroke);
			transform: rotateX(90deg) translateZ(-66.6px);
		}

		@keyframes spin 
		{
			0% {transform: rotateX(-25deg) rotateY(0deg);}
			100% {transform: rotateX(-25deg) rotateY(360deg);}
		}
	}
`;