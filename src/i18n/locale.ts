"use server";

import { cookies, headers } from "next/headers";
import {
	BROWSER_LOCALE_COOKIE,
	defaultLocale,
	isValidLocale,
	parseAcceptLanguage,
	USER_LOCALE_COOKIE
} from "./config";

export async function setUserLocale(nextLocale: string) {
	const resolved = isValidLocale(nextLocale) ? nextLocale : defaultLocale;
	const cookieStore = await cookies();

	cookieStore.set(USER_LOCALE_COOKIE, resolved, {
		path: "/",
		maxAge: 60 * 60 * 24 * 365,
		sameSite: "lax"
	});
}

export async function syncBrowserLocale(detectedLocale: string) {
	const resolved = isValidLocale(detectedLocale) ? detectedLocale : defaultLocale;
	const cookieStore = await cookies();
	const headerLocale = parseAcceptLanguage((await headers()).get("accept-language"));

	if (headerLocale === resolved) {
		cookieStore.delete(BROWSER_LOCALE_COOKIE);
		return;
	}

	cookieStore.set(BROWSER_LOCALE_COOKIE, resolved, {
		path: "/",
		sameSite: "lax"
	});
}
