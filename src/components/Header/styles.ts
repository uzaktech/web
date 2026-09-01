"use client";

import { cornerBox } from "@/styles/primitive";
import styled from "styled-components";
import { css } from "styled-components";

export const Root = styled.header<{$up?: boolean}>`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	gap: 13px;
	padding: 9px 8px;
	height: calc(var(--height-header) - 2px);
	min-height: calc(var(--height-header) - 2px);
	overflow: hidden;
	width: calc(100% - 2px);
	max-width: calc(var(--max-width) - 2px);
	transition: transform 0.3s ease;
	backdrop-filter: blur(9px);
	-webkit-backdrop-filter: blur(9px);
	background-color: #ffffffe3;
	outline: 1px solid ${(p) => p.theme.colors.boxShadow};
	z-index: 100;
	top: 1px;

	${(p) => cornerBox(p.theme)};

	${({$up}) => $up ? css`
		position: sticky;
		transform: translate(0);
	` : css`
		position: relative;
	`}
`;

export const RootLogo = styled.div`
	height: var(--height-logo);
	min-height: var(--height-logo);
	display: flex;
	flex-direction: row;
`;

export const Nav = styled.nav`
	height: 100%;
	margin: 0 5px 0 auto;
	position: relative;
	padding: 0;
	
	@media (max-width: 450px) {
		display: none;
	}
`;

export const MenuToggle = styled.div`
	height: 100%;
	aspect-ratio: 1;
	overflow: hidden;
	display: none;
	margin: 0 0 0 auto;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 5px;
	cursor: pointer;
	gap: 5px;
	background-image: url("/menu.svg");
	background-position: center center;
	background-size: 79% 100%;
	background-repeat: no-repeat;
	transform: translate(-3px, 0);

	@media (max-width: 450px) {
		display: flex;
	}
`;

export const Ul = styled.ul`
	--ul-h: calc((100% / 2) + 6px);
	list-style-type: none;
	padding: 0;
	margin: 0;
	display: block;
	text-align: center;
	display: flex;
	gap: 17px;
	text-decoration: none;
	padding: 0 9px;
	position: relative;
	flex-direction: row;
	align-items: center;
	margin: 0 0 0 13px;
	height: 100%;
	width: fit-content;

	&::after,
	&::before {
		display: none;
		height: var(--ul-h);
	}

	&::after {
		content: "";
		position: absolute;
		left: 50%;
		top: 50%;
		width: 110%;
		background-color: #000;
		z-index: 1;
		transform: skewX(30deg) translate(calc(-50% + 7px), -50%);
		box-shadow: inset 0 0 0 1px #000, inset 0 20px 15px -15px #fff5;
	}

	&::before {
		content: "";
		position: absolute;
		left: 50%;
		top: 50%;
		width: 110%;
		background-color: #0002;
		z-index: 0;
		transform: skewX(-30deg) translate(calc(-50% - 8px), -50%);
		box-shadow: inset 0 0 0 1px #0002, inset 0 20px 15px -15px #fff5;
	}
	
	@media (max-width: 450px) {
		margin: 0;
		padding: 0 10px 0 7px;
	}

	@media (max-width: 400px) {
		padding: 0 3px;
		gap: 13px;
	}
`;

export const Li = styled.li<{$selected?: boolean}>`
	outline: black !important;
	z-index: 2;
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	overflow: hidden;
	position: relative;

	& > a {
		position: relative;
		text-decoration: none;
		color: #000;
		font-weight: 530;
		font-size: ${({theme}) => theme.fontSize.xvi};

		&:hover {
			text-decoration: underline;
		}
	}

	&:hover::after {
		visibility: visible;
	}

	${({$selected}) => $selected && css`
		&::after {
			visibility: visible;
			width: 85%;
			box-shadow: 0 3px 10px #fff;
		}
	`}

	@media (max-width: 450px) {
		& > a {
			font-size: ${({theme}) => theme.fontSize.xv} ;
		}
	}

	@media (max-width: 430px) {
		&:nth-child(1) {
			display: none;
		}
	}
`;

export const Note = styled.span`
	font-size: var(--fs-mmsmall);
	font-weight: 400;
	font-style: italic;

	@media (max-width: 600px) {
		display: none !important;
	}
`;
