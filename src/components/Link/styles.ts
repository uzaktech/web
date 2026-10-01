import styled from "styled-components";
import { rgba } from "@/styles";
import { ButtonProps, buttonStyle } from "@/styles/primitive/button";
import { css } from "styled-components";

export const Cta = styled.a<ButtonProps>`
	${(p) => buttonStyle({...p})};
`;

export const Link = styled.a<{$notStyle?: boolean, $poserStyle?: boolean, $opc?: number, $size?: string}>`
	color:  ${(p) => rgba(p.theme.colors.text, p.$opc ?? 1)};
	font-weight: 500;
	font-size: inherit;
	font-size: ${(p) => (p.theme.fontSize as any)[p.$size ?? "xvii"]};
	cursor: pointer;

	${(p) => p.$notStyle && css`
		text-decoration: none;
		appearance: none;
	`}

	${(p) => p.$poserStyle && css`
		text-decoration-line: underline;
		text-decoration-style: dotted;
		text-decoration-color: ${rgba(p.theme.colors.text, Math.min(0.4, (p.$opc ?? 1) - 0.1))};
		text-decoration-thickness: 2px;
		text-underline-offset: 3px;
		
		&:hover 
		{
			text-decoration-color: ${rgba(p.theme.colors.text, 1)};
			/*text-decoration: underline;
			text-decoration-thickness: 2px;*/
		}
	`}
		
	&:hover 
	{
		color: ${(p) => rgba(p.theme.colors.text, 1)};
	}
`;