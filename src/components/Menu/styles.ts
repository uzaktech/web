"use client";

import { Box } from "@/styles/primitive";
import styled, { css } from "styled-components";


export const Root = styled.div`
	width: 100vw;
	height: 100dvh;
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;
	z-index: 333;
`;

export const Background = styled.div`
	background-color: ${(p) => `rgba(${p.theme.colorsRgbC.boxBackground}, 1)`};
	position: absolute;
	inset: 0 0;
	width: 100%;
	height: 100%;
`;

export const Menu = styled(Box).attrs({$padding: "13px", $display: "flex", $ai: "center", $jc: "center", $gap: "13px", $corner: {borderSize: "2px"}, $shadow: false, $overflow: "visible"})`
	z-index: 334;
`;

export const Nav = styled.nav`
	height: auto;
	width: auto;
	position: relative;
	padding: 13px;
`;

export const Ul = styled.ul`
	list-style-type: none;
	padding: 0;
	margin: 0;
	text-align: center;
	display: flex;
	gap: 23px;
	text-decoration: none;
	position: relative;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: fit-content;
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
		font-size: ${({theme}) => theme.fontSize.xvii};

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
			font-size: ${({theme}) => theme.fontSize.xvi};
		}
	}
`;

export const Division = styled.div`
	display: flex;
	position: relative;
	width: 100%;
	height: 1px;
	background-color: ${(p) => `rgba(${p.theme.colorsRgbC.boxShadow}, 1)`};
	margin: 0 0 13px;
`;

export const CloseBtn = styled.div`
	position: relative;
	height: 23px;
	aspect-ratio: 1;
	cursor: pointer;

	&::after,
	&::before
	{
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		height: calc(100% - 3px);
		width: 1px;
		background-color: ${(p) => `rgba(${p.theme.colorsRgbC.boxShadow}, 0.13)`};
		background-color: ${(p) => p.theme.colors.boxShadow};
	}

	&:after 
	{
		transform: translate(-50%, -50%) rotate(45deg);
	}

	&:before
	{
		transform: translate(-50%, -50%) rotate(-45deg);
	}
`;