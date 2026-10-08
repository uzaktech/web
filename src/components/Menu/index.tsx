"use client";

import * as s from "./styles";
import * as w from "@/styles/primitive/wrapper";
import { useMenu } from "@/context"
import { createPortal } from "react-dom";
import { Link } from "../Link";
import { usePathname } from "next/navigation";
import { KeyboardEvent, useEffect, useRef } from "react";

export const Menu = () => {
	const pathname = usePathname();
	const menu = useMenu();

	const menuRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (menu.visibility) menu.setVisibility(false);
	}, [pathname])

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key !== "Tab") return;

		const focusable = menuRef.current?.querySelectorAll("div[tabindex='0'], button, input, a, select, textarea");

		if (!focusable?.length) return;

		const first = focusable[0] as HTMLElement;
		const last = focusable[focusable.length - 1] as HTMLElement;

		if (e.shiftKey && document.activeElement === first) {
			e.preventDefault();
			last.focus();
		}

		if (!e.shiftKey && document.activeElement === last) {
			e.preventDefault();
			first.focus();
		}
	}

	useEffect(() => {
		if (!menu.visibility) return;

		const focusListener = (e: FocusEvent) => {
			if (!menuRef.current) return;
			const focusable = [...menuRef.current.querySelectorAll("div[tabindex='0'], button, input, a, select, textarea")];

			if (!focusable?.length) return;

			if (!focusable.find(el => el == document.activeElement)) {
				e.preventDefault();
				(focusable[0] as HTMLElement).focus();
			}
		}

		window.addEventListener("focusin", focusListener);

		return () => window.removeEventListener("focusin", focusListener);
	}, [menu.visibility])

	return menu.visibility == true && createPortal(
		<s.Root ref={menuRef} onKeyDown={handleKeyDown} role="dialog" aria-modal="true">
			<s.Background />

			<s.Menu>
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

				<w.Division $orientation={1} $opc={1} $margin="0 0 13px" />

				<s.CloseBtn tabIndex={0} onClick={() => menu.setVisibility(false)} />
			</s.Menu>
		</s.Root>, 
		document.body
	)
}