"use client";

import styled from "styled-components";

export const Root = styled.div`
	background-color: ${(p) => p.theme.colors.bodyBackground};
	width: 100vw;
	max-width: 100vw;
	overflow: auto;
	height: 100%;
	max-height: 100dvh;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 9px;
	margin: 0 auto;
	padding: 13px;
	scroll-behavior: smooth;
	scroll-padding-top: calc(var(--height-header) + (9px * 2));
`;

export const Main = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 3px;
	padding: 0 9px;
	width: 100%;
	max-width: var(--max-width);
`;