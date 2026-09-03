"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const PageLoadFormatter = () => {
	const pathname = usePathname();

	useEffect(() => {
		document.querySelector("[data-scroll-root]")?.scrollTo({top: 0, left: 0, behavior: "instant"})
	}, [pathname])

	return <></>;
}