"use client";

import * as b from "@/styles/primitive/box";
import * as s from "./styles";
import { AnimationEvent, ComponentPropsWithoutRef, ElementType, ReactNode, useEffect, useRef, useState } from "react";

export type AnimatedBoxProps = {
	boxStyle?: b.BoxProps,
	animationView: "intersection" | "default",
	animationSpeed?: "default" | "fast",
	options: {
		intersectionOptions?: IntersectionObserverInit | null,
		intersectionMarginPreset?: "default" | "small" | "medium" | "large",
		oneTimeLoad?: boolean
	},
	groupOptions?: AnimatedBoxGroupOptions,
	resizeSignal?: unknown,
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

const FRAME_KEYS = ["$margin", "$width", "$height", "$minWidth", "$minHeight", "$maxWidth", "$maxHeight", "$aspectRatio"] as const;
const SHELL_KEYS = ["$bg", "$shadow", "$shadowColor", "$border", "$outline", "$corner", "$cornerP", "$overflow"] as const;
const CONTENT_KEYS = ["$padding", "$gap", "$fDirection", "$display", "$ai", "$jc"] as const;

const pickStyle = <K extends keyof b.BoxProps>(style: b.BoxProps | undefined, keys: readonly K[]) => {
	if (!style) return {} as Pick<b.BoxProps, K>;

	const next = {} as Pick<b.BoxProps, K>;

	for (const key of keys) {
		if (style[key] !== undefined) next[key] = style[key];
	}

	return next;
};

export const AnimatedBox = ({ boxStyle, animationView, options, animationSpeed, children, groupOptions, resizeSignal, ...props }: AnimatedBoxProps) => {
	const boxRef = useRef<HTMLDivElement | null>(null);
	const contentRef = useRef<HTMLDivElement | null>(null);

	const frameStyle = pickStyle(boxStyle, FRAME_KEYS);
	const shellStyle = pickStyle(boxStyle, SHELL_KEYS);
	const contentStyle = pickStyle(boxStyle, CONTENT_KEYS);

	const [wasIntersected, setWasIntersected] = useState<boolean>(false);
	const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
	const [boxRects, setBoxRects] = useState<{w: number, h: number} | null>(null);
	const [opened, setOpened] = useState<boolean>(false);

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
			setOpened(false);

			intersectionRt = intersectionFn();
		}, 30)

		return intersectionRt;
	}

	const intersectionFn = () => {
		const propOpt = options?.intersectionOptions;
		const propMarginPreset = options?.intersectionMarginPreset;
		const opt: IntersectionObserverInit = {
			root: propOpt?.root ?? null,
			rootMargin: 
				propOpt?.rootMargin ?? 
				(propMarginPreset == "large" ? "-53px" 
				: propMarginPreset == "medium" ? "-17px" 
				: propMarginPreset == "small" ? "-9px" 
				: "-3px"),
    		//scrollMargin: propOpt?.scrollMargin,
			threshold: propOpt?.threshold ?? 0.13
		};

		const observer = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting), opt);

		const currentTarget = boxRef.current;

		if (currentTarget) observer.observe(currentTarget);

		return () => {
			if (currentTarget) return observer.unobserve(currentTarget)
		};
	}

	const onAnimation = (e: AnimationEvent) => {
		if (e.target == e.currentTarget) {
			setOpened(e.type == "animationend");
		}
	}

	useEffect(() => {
		if (animationView == "intersection") return intersectionFn();
	}, [animationView, boxRef, boxRects])

	useEffect(() => setWasIntersected(isIntersecting ? true : wasIntersected), [isIntersecting])

	useEffect(() => {
		const box = boxRef.current;

		if (box != null) {
			let rt: (() => void) | undefined = () => {};

			let cancelled = false;

			const waitForStableLayout = () => {
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
		<s.FrameRoot 
			{...frameStyle} 
			$height={opened ? "auto" : (boxRects?.h ? `${boxRects.h}px` : undefined)} 
			ref={boxRef}
		>
			<s.AnimatedBox 
				{...shellStyle}
				$open={open}
				$close={close}
				$delayMs={groupOptions?.delay?.ms ? (groupOptions.delay.ms * groupOptions.position) : undefined}
				$delayMaxWidth={groupOptions?.delay?.maxWidth}
				$boxHeight={boxStyle?.$height}
				$boxWidth={boxStyle?.$width}
				$animationSpeed={animationSpeed}
				onAnimationStart={onAnimation}
				onAnimationEnd={onAnimation}
			>
				<s.ContentLock 
					{...props}
					{...contentStyle} 
					ref={contentRef}
					$cWidth={(boxRects?.w ? `${boxRects.w}px` : "100%")}
					$cHeight={(boxRects?.h ? `${boxRects.h}px` : "100%")}
					$opened={opened}
				>
					{children}
				</s.ContentLock>
			</s.AnimatedBox>
		</s.FrameRoot>
	);
}