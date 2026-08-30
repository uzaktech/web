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

const RESIZE_DEBOUNCE_MS = 150;
const RESIZE_COOLDOWN_MS = 800;

export const AnimatedBox = ({ boxStyle, animationView, options, children, groupOptions, ...props }: AnimatedBoxProps) => {
	const boxRef = useRef<HTMLDivElement | null>(null);

	const [wasIntersected, setWasIntersected] = useState<boolean>(false);
	const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
	const [boxRects, setBoxRects] = useState<{w: number, h: number} | null>(null);

	const isFirstResize = useRef(true);
	const resizeDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const resizeCooldownRef = useRef(false);
	const lastWidthRef = useRef<number | null>(null);

	const open = boxRects != null ? (animationView == "intersection" ? (options?.oneTimeLoad ? wasIntersected : isIntersecting) : true) : false;
	const close = (boxRects != null || options?.oneTimeLoad) ? (animationView == "intersection" ? false : !isIntersecting) : false;

	const reload = () => {
		setBoxRects(null);

		let intersectionRt = () => {};

		setTimeout(() => {
			if (!boxRef.current) return;

			setBoxRects({w: boxRef.current.getBoundingClientRect().width, h: boxRef.current.getBoundingClientRect().height});

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
			let rt: (() => void) | undefined = () => {};

			let cancelled = false;

			const waitForStableLayout = () => {
				//if (animationView == "default") {
				//	if (cancelled) return;

				//	rt = reload();

				//	return;
				//}

				document.fonts.ready.then(() => {
					if (cancelled) return;

					requestAnimationFrame(() => {
						requestAnimationFrame(() => {
							if (cancelled) return;

							rt = reload();
						});
					});
				});
			};

			const resizeObserver = new ResizeObserver(([entry]) => {
				const currentWidth = entry.contentRect.width;

				if (isFirstResize.current) {
					isFirstResize.current = false;

					waitForStableLayout();

					return lastWidthRef.current = currentWidth;;
				}

				if (Math.abs(lastWidthRef.current! - currentWidth) < 1) return;

				lastWidthRef.current = currentWidth;

				if (resizeCooldownRef.current) return;

				if (resizeDebounceRef.current) clearTimeout(resizeDebounceRef.current);

				resizeDebounceRef.current = setTimeout(() => {
					resizeCooldownRef.current = true;

					waitForStableLayout();

					setTimeout(() => {
						resizeCooldownRef.current = false;
					}, RESIZE_COOLDOWN_MS);
				}, RESIZE_DEBOUNCE_MS);
			});

			resizeObserver.observe(document.documentElement);

			return () => {
				resizeObserver.unobserve(document.documentElement);

				if (resizeDebounceRef.current) clearTimeout(resizeDebounceRef.current);

				return rt?.();
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