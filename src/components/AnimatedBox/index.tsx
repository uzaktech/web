"use client";

import * as b from "@/styles/primitive/box";
import * as s from "./styles";
import { ComponentPropsWithoutRef, ElementType, ReactNode, useEffect, useRef, useState } from "react";

export type AnimatedBoxProps = {
	boxStyle?: b.BoxProps,
	animationView: "intersection" | "default",
	options: {
		intersectionOptions?: IntersectionObserverInit | null,
		oneTimeLoad?: boolean
	},
	groupOptions?: AnimatedBoxGroupOptions,
	children: ReactNode
} & ComponentPropsWithoutRef<"div"> & {as?: ElementType};

export type AnimatedBoxGroupOptions = {
	position: number,
	delay?: {
		maxWidth?: number,
		ms?: number
	}
}

export const AnimatedBox = ({ boxStyle, animationView, options, children, groupOptions, ...props }: AnimatedBoxProps) => {
	const boxRef = useRef<HTMLDivElement | null>(null);

	const [wasIntersected, setWasIntersected] = useState<boolean>(false);
	const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
	const [boxRects, setBoxRects] = useState<{w: number, h: number} | null>(null);

	const open = animationView == "intersection" ? boxRects != null ? (options?.oneTimeLoad ? wasIntersected : isIntersecting) : false : true;
	const close = animationView == "intersection" ? (boxRects != null || options?.oneTimeLoad) ? false : !isIntersecting : false;

	const reload = () => {
		setBoxRects(null);
		setIsIntersecting(false);
		setWasIntersected(false);

		let intersectionRt = () => {};

		setTimeout(() => {
			setBoxRects({w: boxRef.current!.getBoundingClientRect().width, h: boxRef.current!.getBoundingClientRect().height});

			intersectionRt = intersectionFn();
		}, 30)

		return intersectionRt;
	}

	const intersectionFn = () => {
		const _options = options?.intersectionOptions ?? {
			root: null,
			rootMargin: "0px",
			threshold: 0
		};

		const observer = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting), _options);

		const currentTarget = boxRef.current;

		if (currentTarget) observer.observe(currentTarget);

		return () => {
			if (currentTarget) return observer.unobserve(currentTarget)
		};
	}

	useEffect(() => {
		if (animationView == "intersection") return intersectionFn();
	}, [animationView, boxRef, boxRects])
	

	useEffect(() => {
		if (isIntersecting) setWasIntersected(true);
	}, [isIntersecting])

	
	useEffect(() => {
		const box = boxRef.current;
		
		if (box != null) {
			let rt = () => {};
			
			const resizeObserver = new ResizeObserver(() => {
				rt = reload();
			});

			resizeObserver.observe(document.documentElement);
			
			return () => {
				resizeObserver.unobserve(document.documentElement);

				return rt();
			}
		}
	}, [boxRef])

	return (
		<s.FrameRoot {...boxStyle} ref={boxRef}>
			<s.AnimatedBox 
				$open={open}
				$close={close}
				$delayMs={groupOptions?.delay?.ms ? (groupOptions.delay.ms * groupOptions.position) : undefined}
				$delayMaxWidth={groupOptions?.delay?.maxWidth}
			>
				<s.ContentLock 
					{...props}
					{...boxStyle} 
					$width={boxRects?.w ? `${boxRects?.w}px` : "100%"}
					$height={boxRects?.h ? `${boxRects?.h}px` : "100%"}
				>
					{children}
				</s.ContentLock>
			</s.AnimatedBox>
		</s.FrameRoot>
	);
}