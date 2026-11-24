"use client";

import styled from "styled-components";

export const Root = styled.div`
	display: flex;
	flex-direction: column;
	padding: 13px 17px;
	overflow: hidden;
	
	@media (max-width: 500px) {
		max-width: 250px;
	}
`;

export const ExpandButton = styled.div<{$opened?: boolean}>`
	height: 24px;
	aspect-ratio: 1;
	position: relative;
	cursor: pointer;

	&::after,
	&::before
	{
		content: "";
		position: absolute;
		z-index: 1;
		background-color: transparent;
		height: calc((100% / 2) - 2.5px);
		width: calc((100% / 2) - 2.5px);
		transition: all .09s ease;
	}

	&::after 
	{
		top: calc(13px + ${(p) => p.$opened ? "1px" : "-1px"});
		left: calc(13px + ${(p) => p.$opened ? "1px" : "-1px"});
		box-shadow: -1px -1px 0 0 ${(p) => p.theme.colors.boxShadow};
	}

	&::before
	{
		top: calc(0px + ${(p) => p.$opened ? "0px" : "2.5px"});
		left: calc(0px + ${(p) => p.$opened ? "0px" : "2.5px"});
		box-shadow: 1px 1px 0 0 ${(p) => p.theme.colors.boxShadow};
	}
`;