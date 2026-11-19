"use client";

import { useEffect, useRef } from "react";

export const useWindowResize = (callback: () => void, debounceMs = 150) => {
	const callbackRef = useRef(callback);
	callbackRef.current = callback;

	useEffect(() => {
		let timer: ReturnType<typeof setTimeout> | null = null;
		let lastWidth = typeof window !== "undefined" ? window.innerWidth : 0;

		const handleResize = () => {
			const currentWidth = window.innerWidth;
			if (currentWidth === lastWidth) return;
			lastWidth = currentWidth;

			if (timer) clearTimeout(timer);
			timer = setTimeout(() => {
				callbackRef.current();
			}, debounceMs);
		};

		window.addEventListener("resize", handleResize, { passive: true });

		return () => {
			if (timer) clearTimeout(timer);
			window.removeEventListener("resize", handleResize);
		};
	}, [debounceMs]);
};
