import * as s from "./styles";
import * as bx from "@/styles/primitive/box";
import * as tx from "@/styles/primitive/text";
import * as sc from "@/styles/primitive/section";
import * as wp from "@/styles/primitive/wrapper";
import { ContactMessageForm, Link } from "@/components";
import { Metadata } from "next";
import { links, linksLabels } from "@/data";
import { getLocale, getTranslations } from "next-intl/server";
import { createAlternates, Locale, ogLocales } from "@/i18n/config";

export async function generateMetadata(): Promise<Metadata> {
	const locale = await getLocale();
	const tMeta = await getTranslations("meta");
	const tNav = await getTranslations("nav");
	const ogLocale = ogLocales[locale as Locale] ?? "en_US";

	return {
		title: tNav("contact"),
		description: tMeta("contactDescription"),
		alternates: createAlternates("/contact"),
		openGraph: {
			title: tNav("contact"),
			description: tMeta("contactDescription"),
			url: "https://www.uzak.com.br/contact",
			locale: ogLocale
		},
		twitter: {
			card: "summary_large_image",
			title: tNav("contact"),
			description: tMeta("contactDescription")
		}
	};
}

export default async function Page() {
	const t = await getTranslations("contactPage");

	return (
		<sc.Root>
			<sc.Section $fDirection="row" $breakAt={9} $hero>
				<sc.Content $gap="18px">
					<wp.Col $gap="5px">
						<tx.H1>{t("title")}</tx.H1>
					</wp.Col>

					<sc.Copy>
						{t("description")}
					</sc.Copy>

					<bx.Box $padding="9px 13px" $gap="9px" $maxWidth="min(fit-content, 100%)" $width="fit-content">
						<tx.P $size="xviii" $weight="450">{t("myLinks")}</tx.P>

						<wp.Col $gap="3px">
							<Link poserStyle target="_blank" href={links.email}>
								<wp.Row $pad="3px 9px" $gap="9px" $ai="center">
									<s.Icon src={"/social_icons/email.svg"} alt="email icon" />

									<tx.Span $lSpacing=".03rem" $size="xvi" $weight="500" $tDecoration="none">{linksLabels.email}</tx.Span>
								</wp.Row>
							</Link>

							<Link poserStyle target="_blank" href={links.githubProfile}>
								<wp.Row $pad="3px 9px" $gap="9px" $ai="center">
									<s.Icon src={"/social_icons/github.svg"} alt="github icon" />

									<tx.Span $lSpacing=".03rem" $size="xvi" $weight="500" $tDecoration="none">/ {linksLabels.githubProfile}</tx.Span>
								</wp.Row>
							</Link>

							<Link poserStyle target="_blank" href={links.linkedinProfile}>
								<wp.Row $pad="3px 9px" $gap="9px" $ai="center" $dSize={["fit-content", undefined]}>
									<s.Icon src={"/social_icons/linkedin.svg"} alt="linkedin icon" />

									<tx.Span $lSpacing=".03rem" $size="xvi" $weight="500">/ {linksLabels.linkedinProfile}</tx.Span>
								</wp.Row>
							</Link>

							<Link poserStyle target="_blank" href={links.discordProfile}>
								<wp.Row $pad="3px 9px" $gap="9px" $ai="center" $dSize={["fit-content", undefined]}>
									<s.Icon src={"/social_icons/discord.svg"} alt="discord icon" />

									<tx.Span $lSpacing=".03rem" $size="xvi" $weight="500">@{linksLabels.discordProfile}</tx.Span>
								</wp.Row>
							</Link>
						</wp.Col>
					</bx.Box>
				</sc.Content>

				<ContactMessageForm />
			</sc.Section>
		</sc.Root>
	);
}
