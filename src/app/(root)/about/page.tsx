import * as tx from "@/styles/primitive/text";
import * as sc from "@/styles/primitive/section";
import * as wp from "@/styles/primitive/wrapper";
import { AnimatedBox, StackSkills } from "@/components";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { createAlternates, Locale, ogLocales } from "@/i18n/config";

export async function generateMetadata(): Promise<Metadata> {
	const locale = await getLocale();
	const tMeta = await getTranslations("meta");
	const tNav = await getTranslations("nav");
	const ogLocale = ogLocales[locale as Locale] ?? "en_US";

	return {
		title: tNav("about"),
		description: tMeta("aboutDescription"),
		alternates: createAlternates("/about"),
		openGraph: {
			title: tNav("about"),
			description: tMeta("aboutDescription"),
			url: "https://www.uzak.com.br/about",
			locale: ogLocale
		},
		twitter: {
			card: "summary_large_image",
			title: tNav("about"),
			description: tMeta("aboutDescription")
		}
	};
}

export default async function Page() {
	const t = await getTranslations("aboutPage");

	return (
		<sc.Root>
			<sc.Section $hero>
				<tx.H1>
					{t("hero.title1")} <br />
					{t("hero.title2")}
				</tx.H1>

				<sc.Copy>
					{t("hero.description")}
				</sc.Copy>
			</sc.Section>

			<sc.Section>
				<sc.Label>{t("story.label")}</sc.Label>
				<sc.Title>{t("story.title")}</sc.Title>

				<wp.Col $gap="9px">
					<sc.Copy>
						{t("story.p1")}
					</sc.Copy>
					<sc.Copy>
						{t("story.p2")}
					</sc.Copy>
					<sc.Copy>
						{t("story.p3")}
					</sc.Copy>
				</wp.Col>
			</sc.Section>

			<sc.Section>
				<sc.Label>{t("stack.label")}</sc.Label>
				<sc.Title>{t("stack.title")}</sc.Title>

				<sc.Copy>
					{t("stack.description")}
				</sc.Copy>

				<StackSkills />
			</sc.Section>

			<sc.Section>
				<sc.Label>{t("approach.label")}</sc.Label>
				<sc.Title>{t("approach.title")}</sc.Title>

				<wp.Row as="ul" $gap="13px" $pad="0" $breakAt={9}>
					<AnimatedBox 
						as="li" 
						animationView="intersection" 
						options={{
							oneTimeLoad: true,
							intersectionMarginPreset: "medium"
						}} 
						groupOptions={{position: 0, delay: {ms: .23, maxWidth: 9}}}
						boxStyle={{$padding: "13px 17px", $gap: "7px", $width: "100%", $minWidth:"130px", $height: "100%"}}
					>
						<tx.P $size="xviii" $weight="450">{t("approach.ownershipTitle")}</tx.P>

						<tx.P $maxWidth="39rem" $opc={0.7}>
							{t("approach.ownershipDesc")}
						</tx.P>
					</AnimatedBox>

					<AnimatedBox 
						as="li" 
						animationView="intersection" 
						options={{
							oneTimeLoad: true,
							intersectionMarginPreset: "medium"
						}} 
						groupOptions={{position: 1, delay: {ms: .23, maxWidth: 9}}}
						boxStyle={{$padding: "13px 17px", $gap: "7px", $width: "100%", $minWidth:"130px", $height: "100%"}}
					>
						<tx.P $size="xviii" $weight="450">{t("approach.craftTitle")}</tx.P>

						<tx.P $maxWidth="39rem" $opc={0.7}>
							{t("approach.craftDesc")}
						</tx.P>
					</AnimatedBox>

					<AnimatedBox 
						as="li" 
						animationView="intersection" 
						options={{
							oneTimeLoad: true,
							intersectionMarginPreset: "medium"
						}} 
						groupOptions={{position: 2, delay: {ms: .23, maxWidth: 9}}}
						boxStyle={{$padding: "13px 17px", $gap: "7px", $width: "100%", $minWidth:"130px", $height: "100%"}}
					>
						<tx.P $size="xviii" $weight="450">{t("approach.honestyTitle")}</tx.P>

						<tx.P $maxWidth="39rem" $opc={0.7}>
							{t("approach.honestyDesc")}
						</tx.P>
					</AnimatedBox>
				</wp.Row>
			</sc.Section>
		</sc.Root>
	);
}
