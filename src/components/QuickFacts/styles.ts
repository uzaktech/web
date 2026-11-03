"use client";

import styled from "styled-components";

export const ExpandButton = styled.div<{$opened?: boolean}>`
	height: 28px;
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
		height: calc((100% / 2) - 3.5px);
		width: calc((100% / 2) - 3.5px);
		transition: all .09s ease;
	}

	&::after 
	{
		top: calc(13px + ${(p) => p.$opened ? "2px" : "0px"});
		left: calc(13px + ${(p) => p.$opened ? "2px" : "0px"});
		border-left: solid 1px ${(p) => p.theme.colors.boxShadow};
		border-top: solid 1px ${(p) => p.theme.colors.boxShadow};
	}

	&::before
	{
		top: calc(0px + ${(p) => p.$opened ? "0px" : "2.5px"});
		left: calc(0px + ${(p) => p.$opened ? "0px" : "2.5px"});
		border-right: solid 1px ${(p) => p.theme.colors.boxShadow};
		border-bottom: solid 1px ${(p) => p.theme.colors.boxShadow};
	}
`;