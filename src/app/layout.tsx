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
	robots: {
		index: true,
		follow: true
	},
	openGraph: {
		title: {
			absolute: "Uzak // Tech Studio"
		},
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
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, maximum-scale=1, initial-scale=1.0" />
				<link rel="icon" sizes="144x144" href="favicon.png" type="image/png" />
				<script
               type="application/ld+json"
               dangerouslySetInnerHTML={{
                  __html: JSON.stringify(organizationSchema),
               }}
            />
			</head>
			<body>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	);
}
