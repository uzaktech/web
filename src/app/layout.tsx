import "@/styles/global.css";
import { Providers } from "@/providers";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "Uzak // Tech Studio",
		template: "Uzak // %s"
	},
	description:
		"Uzak is an indie developer studio focused on end-to-end web solutions and platforms.",
	keywords: [
		"tech studio",
		"uzak",
		"uzaktech",
		"developer studio",
		"indie developer",
		"freelance",
		"freelance studio",
		"portfolio"
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
		title: "Uzak // Tech Studio",
		description:
			"An indie developer studio focused on end-to-end web solutions and platforms.",
		type: "website",
		url: "https://www.uzak.com.br",
		locale: "en_US",
		siteName: "Uzak"
	},
	twitter: {
		card: "summary_large_image",
		title: "Uzak // Tech Studio",
		description:
			"An indie developer studio focused on end-to-end web solutions and platforms."
	},
	icons: {
		icon: "/favicon.png",
		shortcut: "/favicon.png",
		apple: "/favicon.png"
	},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" sizes="144x144" href="favicon.png" type="image/png" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "SiteNavigationElement",
							name: ["About", "Portfolio", "Contact Me"],
							url: [
								"https://www.uzak.com.br/about",
								"https://www.uzak.com.br/portfolio",
								"https://www.uzak.com.br/contact",
							],
						}),
					}}
					/>
			</head>
			<body>
				<div className="filter" />

				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	);
}
