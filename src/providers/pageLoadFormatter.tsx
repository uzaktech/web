"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const PageLoadFormatter = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		document.querySelector("[data-scroll-root]")?.scrollTo({top: 0, left: 0, behavior: "instant"})
	}, [pathname, searchParams])

	return null;
}