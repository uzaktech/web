import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import {
	BROWSER_LOCALE_COOKIE,
	isValidLocale,
	parseAcceptLanguage,
	USER_LOCALE_COOKIE
} from "./config";

export default getRequestConfig(async () => {
	const cookieStore = await cookies();
	const userLocale = cookieStore.get(USER_LOCALE_COOKIE)?.value;
	const browserCookieLocale = cookieStore.get(BROWSER_LOCALE_COOKIE)?.value;

	const locale = isValidLocale(userLocale)
		? userLocale
		: isValidLocale(browserCookieLocale)
			? browserCookieLocale
			: parseAcceptLanguage((await headers()).get("accept-language"));

	return {
		locale,
		messages: (await import(`../../messages/${locale}.json`)).default
	};
});
