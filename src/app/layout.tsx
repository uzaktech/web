import "@/styles/global.css";
import { Providers } from "@/providers";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
	const locale = await getLocale();
	const isPt = locale === "pt";

	return {
		title: {
			default: isPt ? "Uzak // Estúdio de Tecnologia" : "Uzak // Tech Studio",
			template: "Uzak // %s"
		},
		description: isPt
			? "Uzak é um estúdio individual focado em plataformas e soluções web ponta a ponta."
			: "Uzak is an indie developer studio focused on end-to-end web solutions and platforms.",
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
		alternates: {
			canonical: "/"
		},
		robots: {
			index: true,
			follow: true
		},
		openGraph: {
			title: {
				absolute: isPt ? "Uzak // Estúdio de Tecnologia" : "Uzak // Tech Studio"
			},
			description: isPt
				? "Um estúdio individual focado em plataformas e soluções web ponta a ponta."
				: "An indie developer studio focused on end-to-end web solutions and platforms.",
			type: "website",
			url: "https://www.uzak.com.br",
			locale: isPt ? "pt_BR" : "en_US",
			siteName: "Uzak"
		},
		twitter: {
			card: "summary_large_image",
			title: isPt ? "Uzak // Estúdio de Tecnologia" : "Uzak // Tech Studio",
			description: isPt
				? "Um estúdio individual focado em plataformas e soluções web ponta a ponta."
				: "An indie developer studio focused on end-to-end web solutions and platforms."
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
		<html lang={locale}>
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, maximum-scale=1, initial-scale=1.0" />
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
