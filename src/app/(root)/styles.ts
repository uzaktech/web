"use client";

import styled from "styled-components";

export const Root = styled.div`
	background-color: ${(p) => p.theme.colors.bodyBackground};
	width: 100%;
	height: 100dvh;
	max-width: 100vw;
	max-height: 100dvh;
	overflow: auto;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	margin: 0 auto;
	padding: 13px 0 0;
	scroll-behavior: smooth;
	scroll-padding-top: calc(var(--height-header) + (9px * 2));
`;

export const Content = styled.div`
	position: relative;
	width: 100%;
	min-height: 100dvh;
	flex: 1 0 auto; 
	max-width: 100%;
	overflow: visible;
	padding: 0 13px 13px;
	margin: 0 auto;
	scroll-padding-top: calc(var(--height-header) + (9px * 2));
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 9px;
`;

export const Main = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	height: fit-content;
	min-height: 100%;
	flex: 1 0 auto;  
	gap: 3px;
	padding: 0 9px;
	width: 100%;
	max-width: var(--max-width);
`;