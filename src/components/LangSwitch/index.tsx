"use client";

import * as s from "./styles";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { resolveLocaleCode, USER_LOCALE_COOKIE } from "@/i18n/config";
import { syncBrowserLocale } from "@/i18n/locale";
import { ShrinkWrapper } from "../ShrinkWrapper";
import { langsList } from "@/data";

export const LangSwitch = ({ showLangDropDown, setShowLangDropDown}: {showLangDropDown: boolean, setShowLangDropDown: (b: boolean) => void}) => {
	const locale = useLocale();
	const router = useRouter();

	const [isHover, setIsHover] = useState<boolean>(false);

	useEffect(() => {
		if (!navigator.cookieEnabled) return;

		// Clear legacy next-intl middleware cookie if present
		if (document.cookie.split("; ").some((c) => c.startsWith("NEXT_LOCALE="))) {
			document.cookie = "NEXT_LOCALE=; path=/; max-age=0";
		}

		// Respect explicit manual language choice if set
		const hasManualChoice = document.cookie.split("; ").some((entry) => entry.startsWith(`${USER_LOCALE_COOKIE}=`));

		if (hasManualChoice) return;

		const primaryBrowserLang = navigator.language || navigator.languages?.[0];
		const detected = resolveLocaleCode(primaryBrowserLang);

		if (detected !== locale) {
			async () => {
				await syncBrowserLocale(detected);
				router.refresh();
			}
		}
	}, [locale, router]);

	const activeItem = langsList.find((a) => a.lang === locale) ?? langsList[0];

	return (
		<s.Root 
			role="group" 
			aria-label="Language selector" 
			onClick={() => setShowLangDropDown(!showLangDropDown)} 
			onMouseDown={(e) => e.preventDefault()} 
			onMouseEnter={() => setIsHover(true)} 
			onMouseLeave={() => setIsHover(false)}
		>
			<s.IconFlag $img={activeItem.urlIcon} />
			<ShrinkWrapper 
				opened={showLangDropDown || isHover}
				$dSize={[undefined, "100%"]}
				$minSize={[undefined, "100%"]}
				$maxSize={[undefined, "100%"]}
				$ai="center"
				$fDirection="row"
				$display="flex"
				starterH="100%"
				starterOpc={0}
				hiddenOnZero
			>
				<s.Label>{activeItem.label}</s.Label>
			</ShrinkWrapper>
		</s.Root>
	);
};
