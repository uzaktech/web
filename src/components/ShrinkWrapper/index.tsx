"use client";

import * as s from "./styles";
import { WrapperProps } from "@/styles/primitive";
import { ComponentPropsWithoutRef, ElementType, useEffect, useLayoutEffect, useRef, useState } from "react";
import { CSSProperties } from "styled-components";
import { useWindowResize } from "@/hooks";

export type ShrinkWrapperProps = {
	opened: boolean,
	hiddenOnZero?: boolean,
	starterH?: string,
	starterW?: string,
	starterOpc?: number,
	as?: ElementType
} & ComponentPropsWithoutRef<"div"> & WrapperProps;

const RESIZE_DEBOUNCE_MS = 150;

export const ShrinkWrapper = ({opened, hiddenOnZero, starterH, starterW, starterOpc, children, ...props}: ShrinkWrapperProps) => {
	const [isStable, setIsStable] = useState<boolean>(false);
	const [rootRects, setRootRects] = useState<{w: number, h: number} | null>(null);
	const [targetRects, setTargetRects] = useState<{w: number, h: number} | null>(null);
	const [phase, setPhase] = useState<"closed" | "open" | "closing">("closed");
	
	const prevOpened = useRef(false);
	const rootRef = useRef<HTMLDivElement | null>(null);
	const contentRef = useRef<HTMLDivElement | null>(null);

	const updateRects = () => {
		const root = rootRef.current;
		if (!root) return;

		document.fonts.ready.then(() => 
			requestAnimationFrame(() => 
				requestAnimationFrame(() => {
					if (!rootRef.current) return;
					setRootRects({w: rootRef.current.getBoundingClientRect().width, h: rootRef.current.getBoundingClientRect().height});
				})
			)
		);
	};

	useEffect(() => {
		updateRects();
	}, []);

	useWindowResize(() => {
		updateRects();
	}, RESIZE_DEBOUNCE_MS);

	useLayoutEffect(() => {
		if (rootRects == null) return;
		const content = contentRef.current;
		const root = rootRef.current;

		if (opened && !prevOpened.current) {
			if (content) setTargetRects({w: content.scrollWidth, h: content.scrollHeight});
			if (root) {
				const computed = window.getComputedStyle(root);
				root.style.setProperty("--from-w", computed.width);
				root.style.setProperty("--from-h", computed.height);
				root.style.setProperty("--from-opc", computed.opacity);
			}
			setPhase("open");
		} 
		else if (!opened && prevOpened.current) {
			if (content) setTargetRects({w: content.scrollWidth, h: content.scrollHeight});
			if (root) {
				const computed = window.getComputedStyle(root);
				root.style.setProperty("--from-w", computed.width);
				root.style.setProperty("--from-h", computed.height);
				root.style.setProperty("--from-opc", computed.opacity);
			}
			setPhase("closing");
		}

		prevOpened.current = opened;
	}, [opened, rootRects]);

	return (
		<s.Root 
			ref={rootRef}
			$phase={phase}
			$hiddenOnZero={hiddenOnZero} 
			$dSize={props.$dSize}
			$maxSize={props.$maxSize}
			$minSize={props.$minSize}
			style={{ 
				"--target-h": targetRects != null ? `${targetRects.h}px` : "100%",
				"--target-w": targetRects != null ? `${targetRects.w}px` : "100%",
				"--starter-h": starterH ?? "0px",
				"--starter-w": starterW ?? "0px",
				"--starter-opc": starterOpc ?? 0,
			} as CSSProperties}
			onAnimationStart={(e) => setIsStable(e.target === e.currentTarget ? false : isStable)}
			onAnimationEnd={(e) => {
				if (e.target !== e.currentTarget) return;
				if (phase === "closing") {
					setPhase("closed");
					if (rootRef.current) {
						rootRef.current.style.removeProperty("--from-w");
						rootRef.current.style.removeProperty("--from-h");
						rootRef.current.style.removeProperty("--from-opc");
					}
				} else if (phase === "open") {
					if (rootRef.current) {
						rootRef.current.style.removeProperty("--from-w");
						rootRef.current.style.removeProperty("--from-h");
						rootRef.current.style.removeProperty("--from-opc");
					}
				}
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