"use client";

import styled from "styled-components";

export const HeroImage = styled.img`
	max-width: 100%;
	aspect-ratio: 1;
	object-fit: cover;
	image-rendering: optimizeQuality;
	outline: solid 1px ${(p) => p.theme.colors.boxShadow};
	object-fit: cover;
	object-position: 0 79%;

	@media (max-width: 500px) 
	{
		max-width: 230px;
	}
`;

export const HeroImageBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 300px;
	min-height: 300px;
	max-width: 300px;
	max-height: 300px;
	position: relative;
	aspect-ratio: 1;
	padding: 9px;
	overflow: visible !important;
	
	@media (max-width: 500px) 
	{
		width: 250px;
		height: 250px;
		min-width: auto;
		min-height: auto;
		max-width: 100%;
		max-height: none;
		flex-shrink: 0;
		overflow: visible;
	}
`;