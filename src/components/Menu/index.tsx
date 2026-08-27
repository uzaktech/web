"use client";

import * as s from "./styles";
import { useMenu } from "@/context"
import { createPortal } from "react-dom";
import { Link } from "../Link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const Menu = () => {
	const pathname = usePathname();
	const menu = useMenu();

	useEffect(() => {
		if (menu.visibility) menu.setVisibility(false);
	}, [pathname])

	return menu.visibility == true && createPortal(
		<s.Root>
			{/*<s.Background onClick={() => menu.setVisibility(false)} />*/}
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

				<s.Division />

				<s.CloseBtn onClick={() => menu.setVisibility(false)} />
			</s.Menu>
		</s.Root>, 
		document.body
	)
}