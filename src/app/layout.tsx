import "@/styles/global.css";
import { Providers } from "@/providers";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { createAlternates, Locale, ogLocales } from "@/i18n/config";

export async function generateMetadata(): Promise<Metadata> {
	const locale = await getLocale();
	const t = await getTranslations("meta");

	return {
		title: {
			default: t("title"),
			template: "Uzak // %s"
		},
		description: t("description"),
		keywords: [
			"tech studio",
			"uzak",
			"uzaktech",
			"developer studio",
			"indie developer",
			"freelance",
			"freelance studio",
			"portfolio",
			"desenvolvedor",
			"estúdio de desenvolvimento"
		],
		metadataBase: new URL("https://www.uzak.com.br"),
		alternates: createAlternates("/"),
		robots: {
			index: true,
			follow: true
		},
		openGraph: {
			title: {
				absolute: t("title")
			},
			description: t("description"),
			type: "website",
			url: "https://www.uzak.com.br",
			locale: ogLocales[locale as Locale] ?? "en_US",
			siteName: "Uzak",
			images: [
				{
					url: "/logo.png",
					width: 1200,
					height: 630,
					alt: "Uzak // Tech Studio"
				}
			]
		},
		twitter: {
			card: "summary_large_image",
			title: t("title"),
			description: t("description"),
			images: ["/logo.png"]
		},
		icons: {
			icon: "/favicon.png",
			shortcut: "/favicon.png",
			apple: "/favicon.png"
		}
	};
}

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocale();
	const messages = await getMessages();

	const organizationSchema = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Uzak",
		"alternateName": "Uzak Tech Studio",
		"url": "https://www.uzak.com.br",
		"logo": "https://www.uzak.com.br/favicon.png",
		"founder": {
			"@type": "Person",
			"name": "Enzo Kazuki",
			"alternateName": "Uzak",
			"birthDate": "2009-03-13"
		}
	};

	return (
		<html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" sizes="144x144" href="/favicon.png" type="image/png" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationSchema)
					}}
				/>
			</head>
			<body>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<Providers>
						{children}
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
