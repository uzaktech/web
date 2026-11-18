"use client";

import * as s from "./styles";
import { AnimatedBox } from "../AnimatedBox";
import { langsList } from "@/data";
import { useEffect, useRef, useTransition } from "react";
import { Locale, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { setUserLocale } from "@/i18n/locale";

export const LangDropDown = ({ fixed, close }: { fixed: boolean, close: () => void }) => {
	const locale = useLocale();
	const router = useRouter();

	const [isPending, startTransition] = useTransition();

	const rootRef = useRef<HTMLDivElement | null>(null);

	const handleSwitch = (nextLocale: Locale) => {
		if (nextLocale === locale || isPending) return;

		startTransition(async () => {
			await setUserLocale(nextLocale);
			router.refresh();
		});
	};
	
	useEffect(() => {
		if (rootRef.current) rootRef.current.focus();
	}, [rootRef])

	return (
		<s.Root $fixed={fixed} ref={rootRef} tabIndex={1} onBlur={close}>
			<AnimatedBox
				animationView="default" 
				options={{
					oneTimeLoad: true,
					intersectionMarginPreset: "large"
				}} 
				boxStyle={{
					$padding: "0", 
					$maxWidth: "150px", 
					$zIndex: 333
				}}
				openingOrientation="y"
			>
				<s.ListWrapper>
					{langsList.map((l, i) => (
						<s.Box role="group" aria-label="Language selector" key={i} onClick={() => handleSwitch(l.lang)}>
							<s.IconFlag $img={l.urlIcon} />

							<s.Label>{l.label}</s.Label>
						</s.Box>
					))}
				</s.ListWrapper>
			</AnimatedBox>
		</s.Root>
	)
}