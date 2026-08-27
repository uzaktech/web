"use client";

import * as s from "./styles";
import { usePathname } from "next/navigation";
import { Link } from "@/components/Link";
import { Logo } from "../Logo";
import { useLayoutEffect, useRef, useState } from "react";
import { useMenu } from "@/context";

export const Header = () => {
	const pathname = usePathname();
	const menu = useMenu();

	const [scrollingUp, setScrollingUp] = useState(true);

	const headerRef = useRef<HTMLDivElement | null>(null);

   useLayoutEffect(() => {
		const parent: HTMLDivElement | null = headerRef.current?.closest("[data-scroll-root]") as HTMLDivElement
			?? headerRef.current?.parentElement?.parentElement as HTMLDivElement;

		if (parent) {
			let lastScrollY: number = parent.scrollTop;
			let lastScrollTop: number | null = null;
			let lastScrollBot: number | null = null;

			const handleScroll = () => {
				const currentScrollY = parent.scrollTop;
				const goingUp = currentScrollY < lastScrollY;
				const pad = 33; 

				lastScrollTop = goingUp ? (lastScrollTop ?? lastScrollY) : null;
				lastScrollBot = !goingUp ? (lastScrollBot ?? lastScrollY) : null;
				lastScrollY = currentScrollY;

				setScrollingUp(currentScrollY > pad && 
					((goingUp && (lastScrollTop ?? lastScrollY) - currentScrollY > pad) || 
					(!goingUp && ((lastScrollBot ?? lastScrollY) - currentScrollY) * -1 < pad))
				);
			};

			parent.addEventListener("scroll", handleScroll, { passive: true });
			return () => parent.removeEventListener("scroll", handleScroll);
		}
   }, [headerRef]);

	return (
		<s.Root ref={headerRef} $up={scrollingUp}>
			<s.RootLogo>
				<Logo />
			</s.RootLogo>
			
			<s.MenuToggle onClick={() => menu.setVisibility(true)} />
			
			<s.Nav>
				<s.Ul>
					<s.Li $selected={pathname == "/"}>
						<Link clientRender href="/">Home</Link>
					</s.Li>
					<s.Li $selected={pathname == "/about"}>
						<Link clientRender href="/about">About</Link>
					</s.Li>
					<s.Li $selected={pathname == "/portfolio"}>
						<Link clientRender href="/portfolio">Portfolio</Link>
					</s.Li>
					<s.Li $selected={pathname == "/contact"}>
						<Link clientRender href="/contact">Contact</Link>
					</s.Li>
				</s.Ul>
			</s.Nav>
		</s.Root>
	)
}