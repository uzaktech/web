import styled from "styled-components";
import { rgba } from "@/styles";
import { ButtonProps, buttonStyle } from "@/styles/primitive/button";
import { css } from "styled-components";
import { Span } from "@/styles/primitive";

export const Cta = styled.a<ButtonProps>`
	${(p) => buttonStyle({...p})};
`;

export const Link = styled(Span).attrs({as: "a"})<{$notStyle?: boolean, $poserStyle?: boolean}>`
	font-weight: ${(p) => p.$weight ?? 500};
	width: ${(p) => p.$width ?? "fit-content"};
	font-size: ${(p) => p.$size ? (p.theme.fontSize as any)[p.$size ?? "xvii"] : "inherit"};
	cursor: ${(p) => p.$cursor ?? "pointer"};

	${(p) => p.$notStyle && css`
		text-decoration: none;
		appearance: none;
	`}

	${(p) => p.$poserStyle && css`
		text-decoration-line: underline;
		text-decoration-style: dotted;
		text-decoration-color: ${rgba(p.$color ?? p.theme.colors.text, Math.min(0.4, (p.$opc ?? 1) - 0.1))};
		text-decoration-thickness: 2px;
		text-underline-offset: 3px;
		
		&:hover 
		{
			text-decoration-color: ${rgba(p.$color ?? p.theme.colors.text, 1)};
			/*text-decoration: underline;
			text-decoration-thickness: 2px;*/
		}
	`}
		
	&:hover 
	{
		color: ${(p) => rgba(p.$color ?? p.theme.colors.text, 1)};
	}
`;