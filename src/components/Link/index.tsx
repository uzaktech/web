"use client";

import { TextProps } from "@/styles/primitive";
import * as s from "./styles";
import { ButtonProps } from "@/styles/primitive/button";
import { useRouter } from "next/navigation";
import { ComponentPropsWithoutRef, MouseEvent, ReactNode, useEffect } from "react";

export type LinkProps = {
	clientRender?: boolean,
	children?: ReactNode,
	blockDown?: boolean,
	poserStyle?: boolean,
	notStyle?: boolean,
	cta?: "button" | "raw_cta",
	btnProps?: ButtonProps
} & ComponentPropsWithoutRef<"a"> & TextProps;

export type LinkPoserProps = {
	children?: ReactNode
} & ComponentPropsWithoutRef<"span">;

export const Link = ({ clientRender, children, blockDown, poserStyle, notStyle, cta, btnProps, ...props }: LinkProps) => { 
	const navr = useRouter();

	const clickHandle = (e: MouseEvent) => {
		if (clientRender && props.href != null) {
			e.preventDefault();

			if (e.ctrlKey) return window.open(props.href);

			return navr.push(props.href);
		}
	}

	const downHandle = (e: MouseEvent) => blockDown ? e.preventDefault() : {};
	
	return cta ? (
		<s.Cta onMouseDown={downHandle} onClick={clickHandle} $cta={cta == "raw_cta"} {...btnProps} {...props}>
			{children}
		</s.Cta>
	) : (
		<s.Link onMouseDown={downHandle} onClick={clickHandle} $notStyle={notStyle} $poserStyle={poserStyle} {...props}>
			{children}
		</s.Link>
	)
}

export const Cta = (props: LinkProps) => {
	return <Link {...props} cta="raw_cta">{props.children}</Link>
}

export const ButtonLink = (props: LinkProps) => {
	return <Link {...props} cta="button">{props.children}</Link>
}