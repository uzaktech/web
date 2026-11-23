export const locales = ["en", "pt", "es", "it", "fr", "de", "ja", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const USER_LOCALE_COOKIE = "UZAK_LOCALE";
export const BROWSER_LOCALE_COOKIE = "UZAK_BROWSER_LOCALE";

export function isValidLocale(value?: string | null): value is Locale {
	return !!value && locales.includes(value as Locale);
}

export function resolveLocaleCode(raw?: string | null): Locale {
	if (!raw) return defaultLocale;

	const base = raw.trim().toLowerCase().split(/[-_]/)[0];
	const mapped = base === "jp" ? "ja" : base;

	return isValidLocale(mapped) ? mapped : defaultLocale;
}

export function parseAcceptLanguage(headerValue?: string | null): Locale {
	if (!headerValue) return defaultLocale;

	const parsed = headerValue
		.split(",")
		.map((part, index) => {
			const [langPart, ...params] = part.trim().split(";");
			let q = 1;

			for (const param of params) {
				const [k, v] = param.trim().split("=");
				if (k === "q" && v) {
					const parsedQ = Number.parseFloat(v);
					if (!Number.isNaN(parsedQ)) q = parsedQ;
				}
			}

			return { lang: langPart?.trim() ?? "", q, index };
		})
		.filter((item) => item.lang && item.lang !== "*" && item.q > 0)
		.sort((a, b) => b.q - a.q || a.index - b.index);

	return resolveLocaleCode(parsed[0]?.lang);
}

export const ogLocales: Record<Locale, string> = {
	en: "en_US",
	pt: "pt_BR",
	es: "es_ES",
	it: "it_IT",
	fr: "fr_FR",
	de: "de_DE",
	ja: "ja_JP",
	ar: "ar_AR"
};

export const dateLocales: Record<Locale, string> = {
	en: "en-US",
	pt: "pt-BR",
	es: "es-ES",
	it: "it-IT",
	fr: "fr-FR",
	de: "de-DE",
	ja: "ja-JP",
	ar: "ar-SA"
};

export function createAlternates(path: string = "/") {
	const languages: Record<string, string> = {};
	for (const loc of locales) {
		languages[loc] = path;
	}
	languages["x-default"] = path;

	return {
		canonical: path,
		languages
	};
}
