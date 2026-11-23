"use client";

import * as s from "./styles";
import { AnimatedBox } from "../AnimatedBox";
import { langsList } from "@/data";
import { useEffect, useRef, useState, useTransition } from "react";
import { Locale, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { setUserLocale } from "@/i18n/locale";
import { useWindowResize } from "@/hooks";

export const LangDropDown = ({ fixed, close, headerRef }: { fixed: boolean, close: () => void, headerRef: HTMLDivElement }) => {
	const locale = useLocale();
	const router = useRouter();

	const [isPending, startTransition] = useTransition();

	const [headerWidth, setHeaderWidth] = useState<number>(0);

	const rootRef = useRef<HTMLDivElement | null>(null);

	const handleSwitch = (nextLocale: Locale) => {
		if (nextLocale === locale || isPending) return;

		startTransition(async () => {
			await setUserLocale(nextLocale);
			router.refresh();
			close();
		});
	};

	const updateHeaderWidth = () => setHeaderWidth(headerRef.getBoundingClientRect().width);
	
	useEffect(() => {
		if (rootRef.current) rootRef.current.focus();
	}, [rootRef])

	useWindowResize(updateHeaderWidth, 30);

	useEffect(updateHeaderWidth, [headerRef]);

	return (
		<s.Root $fixed={fixed} ref={rootRef} tabIndex={1} onBlur={close} $headerWidth={headerWidth}>
			<AnimatedBox
				animationView="default" 
				options={{
					oneTimeLoad: true,
					intersectionMarginPreset: "large"
				}} 
				boxStyle={{
					$padding: "0", 
					$maxWidth: "150px", 
					$zIndex: 333,
					$transparentBgEffect: true
				}}
				openingOrientation="y"
			>
				<s.ListWrapper>
					{langsList.map((l, i) => (
						<s.Box role="group" aria-label={`Switch language to ${l.englishName}`} key={i} onClick={() => handleSwitch(l.lang)}>
							<s.IconFlag $img={l.urlIcon} />

							<s.Label>{l.label}</s.Label>
						</s.Box>
					))}
				</s.ListWrapper>
			</AnimatedBox>
		</s.Root>
	)
}