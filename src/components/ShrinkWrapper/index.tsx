"use client";

import * as s from "./styles";
import { WrapperProps } from "@/styles/primitive";
import { ComponentPropsWithoutRef, ElementType, useEffect, useLayoutEffect, useRef, useState } from "react";
import { CSSProperties } from "styled-components";

export type ShrinkWrapperProps = {
	opened: boolean,
	hiddenOnZero?: boolean,
	starterH?: string,
	starterW?: string,
	starterOpc?: number,
	as?: ElementType
} & ComponentPropsWithoutRef<"div"> & WrapperProps;

const RESIZE_DEBOUNCE_MS = 150;
const RESIZE_COOLDOWN_MS = 800;

export const ShrinkWrapper = ({opened, hiddenOnZero, starterH, starterW, starterOpc, children, ...props}: ShrinkWrapperProps) => {
	const [isStable, setIsStable] = useState<boolean>(false);
	const [rootRects, setRootRects] = useState<{w: number, h: number} | null>(null);
	const [targetRects, setTargetRects] = useState<{w: number, h: number} | null>(null);
	const [phase, setPhase] = useState<"closed" | "open" | "closing">("closed");
	
	const prevOpened = useRef(false);
	const rootRef = useRef<HTMLDivElement | null>(null);
	const contentRef = useRef<HTMLDivElement | null>(null);
	const resizeDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const resizeCooldownRef = useRef(false);
	const lastWidthRef = useRef<number | null>(null);

	// get root rects through resize observer
	useEffect(() => {
		const root = rootRef.current;

		if (!root) return;

		const waitForStableLayout = () => {
			document.fonts.ready.then(() => 
				requestAnimationFrame(() => 
					requestAnimationFrame(() => 
						setRootRects({w: root.getBoundingClientRect().width, h: root.getBoundingClientRect().height})
					)
				)
			);
		}

		const resizeObserver = new ResizeObserver(([entry]) => {
			const currentWidth = entry.contentRect.width;

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
		}
	}, [rootRef]);

	useLayoutEffect(() => {
		if (rootRects == null) return;
		const content = contentRef.current;

		if (opened && !prevOpened.current) {
			if (content) setTargetRects({w: content.scrollWidth, h: content.scrollHeight});
			
			setTimeout(() => setPhase("open"), 30);
		} 
		else if (!opened && prevOpened.current) {
			if (content) setTargetRects({w: content.scrollWidth, h: content.scrollHeight});

			setTimeout(() => setPhase("closing"), 30);
		}

		prevOpened.current = opened;
	}, [opened, rootRects]);

	return (
		<s.Root 
			ref={rootRef}
			$phase={phase}
			$hiddenOnZero={hiddenOnZero} 
			$starterH={starterH} 
			$starterW={starterW} 
			$starterOpc={starterOpc}
			$dSize={props.$dSize}
			$maxSize={props.$maxSize}
			$minSize={props.$minSize}
			style={{ 
				"--target-h": targetRects != null ? `${targetRects.h}px` : "100%",
				"--target-w": targetRects != null ? `${targetRects.w}px` : "100%",
			} as CSSProperties}
			onAnimationStart={(e) => setIsStable(e.target === e.currentTarget ? false : isStable)}
			onAnimationEnd={(e) => {
				if (e.target !== e.currentTarget) return;
				if (phase === "closing") setPhase("closed");
				setIsStable(true);
			}}
		>
			<s.Content 
				ref={contentRef} 
				$opened={isStable} 
				$cHeight={rootRects?.h ? `${rootRects.h}px` : "100%"}
				$cWidth={rootRects?.w ? `${rootRects.w}px` : "100%"}
				{...props}
			>
				{children}
			</s.Content>
		</s.Root>
	)
}