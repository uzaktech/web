import * as tx from "@/styles/primitive/text";
import * as sc from "@/styles/primitive/section";
import * as wp from "@/styles/primitive/wrapper";
import { AnimatedBox, Cta, ProjectView, Pyramid } from "@/components";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { createAlternates } from "@/i18n/config";

export const metadata: Metadata = {
	alternates: createAlternates("/")
};

export default async function Home() {
	const t = await getTranslations("home");

	return (
		<sc.Root>
			<sc.Section $hero $fDirection="row" $breakAt={9} $gap="73px 18px" $minSize={[undefined, "fit-content"]} $dSize={[undefined, "calc((100dvh / 3) * 2)"]} $ai="center" 
				$cssStage={{n: 9, css: {alignItems: "flex-end"}}}
			>
				<sc.Content $maxSize={["100%", "300px"]} $minSize={["auto", "fit-content"]} $dSize={["100%", "100%"]}>
					<tx.H1>{t("hero.title")}</tx.H1>

					<sc.Copy>
						{t("hero.description")}
					</sc.Copy>

					<wp.Row $fWrap="wrap" $gap="13px">
						<Cta href="#work">{t("hero.selectedWork")}</Cta>
						<Cta clientRender btnProps={{$style: "ghost_link"}} href="/contact">{t("hero.contactMe")}</Cta>
					</wp.Row>
				</sc.Content>

				<AnimatedBox 
					animationView="default" 
					options={{oneTimeLoad: true}} 
					boxStyle={{$padding: "0", $gap: "0", $width: "auto", $height: "auto", $aspectRatio: "1", $zIndex: 3}}
				>
					<Pyramid />
				</AnimatedBox>
			</sc.Section>

			<sc.Section>
				<sc.Label>{t("about.label")}</sc.Label>

				<sc.Title>{t("about.title")}</sc.Title>

				<sc.Copy>
					{t("about.description")}
				</sc.Copy>
			</sc.Section>

			<sc.Section id="work">
				<sc.Label>{t("portfolio.label")}</sc.Label>

				<sc.Title>{t("portfolio.title")}</sc.Title>

				<sc.Copy>
					{t("portfolio.description")}
				</sc.Copy>

				<ProjectView />

				<wp.Row $jc="flex-end">
					<Cta clientRender href="/portfolio">{t("portfolio.seeFullPortfolio")}</Cta>
				</wp.Row>
			</sc.Section>

			<sc.Section id="process">
				<sc.Label>{t("process.label")}</sc.Label>

				<sc.Title>{t("process.title")}</sc.Title>

				<sc.Copy>
					{t("process.description")}
				</sc.Copy>

				<wp.Row as="ul" $gap="13px" $pad="0" $breakAt={9}>
					<AnimatedBox 
						as="li" 
						animationView="intersection" 
						options={{
							oneTimeLoad: true,
							intersectionMarginPreset: "medium"
						}} 
						groupOptions={{position: 0, delay: {ms: .23, maxWidth: 9}}}
						boxStyle={{$padding: "13px 17px", $gap: "7px", $width: "100%", $minWidth:"130px"}}
					>
						<tx.P $size="xviii" $weight="450">{t("process.buildTitle")}</tx.P>

						<tx.P $maxWidth="39rem" $opc={0.7}>
							{t("process.buildDesc")}
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
						boxStyle={{$padding: "13px 17px", $gap: "7px", $width: "100%", $minWidth:"130px"}}
					>
						<tx.P $size="xviii" $weight="450">{t("process.designTitle")}</tx.P>

						<tx.P $maxWidth="39rem" $opc={0.7}>
							{t("process.designDesc")}
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
						boxStyle={{$padding: "13px 17px", $gap: "7px", $width: "100%", $minWidth:"130px"}}
					>
						<tx.P $size="xviii" $weight="450">{t("process.shipTitle")}</tx.P>

						<tx.P $maxWidth="39rem" $opc={0.7}>
							{t("process.shipDesc")}
						</tx.P>
					</AnimatedBox>
				</wp.Row>
			</sc.Section>

			<sc.Section>
				<sc.Label>{t("services.label")}</sc.Label>

				<sc.Title>{t("services.title")}</sc.Title>

				<sc.Copy>
					{t("services.description")}
				</sc.Copy>

				<wp.Row as="ul" $pad="0px" $listStyle="none" $fWrap="wrap" $gap="9px" $ai="flex-start">
					<AnimatedBox 
						as="li"
						animationView="intersection"
						animationSpeed="fast"
						options={{oneTimeLoad: true, intersectionMarginPreset: "small"}}
						groupOptions={{position: 0, delay: { ms: .09 }}}
						boxStyle={{$cornerP: "none", $padding: "8px 9px", $fDirection: "row", $ai: "center", $gap: "9px"}}
					>
						<tx.Span $size="xv" $weight="450">{t("services.saasMvp")}</tx.Span>
					</AnimatedBox>
					<AnimatedBox 
						as="li"
						animationView="intersection"
						animationSpeed="fast"
						options={{oneTimeLoad: true, intersectionMarginPreset: "small"}}
						groupOptions={{position: 1, delay: { ms: .09 }}}
						boxStyle={{$cornerP: "none", $padding: "8px 9px", $fDirection: "row", $ai: "center", $gap: "9px"}}
					>
						<tx.Span $size="xv" $weight="450">{t("services.webApps")}</tx.Span>
					</AnimatedBox>
					<AnimatedBox 
						as="li"
						animationView="intersection"
						animationSpeed="fast"
						options={{oneTimeLoad: true, intersectionMarginPreset: "small"}}
						groupOptions={{position: 2, delay: { ms: .09 }}}
						boxStyle={{$cornerP: "none", $padding: "8px 9px", $fDirection: "row", $ai: "center", $gap: "9px"}}
					>
						<tx.Span $size="xv" $weight="450">{t("services.internalTools")}</tx.Span>
					</AnimatedBox>
					<AnimatedBox 
						as="li"
						animationView="intersection"
						animationSpeed="fast"
						options={{oneTimeLoad: true, intersectionMarginPreset: "small"}}
						groupOptions={{position: 3, delay: { ms: .09 }}}
						boxStyle={{$cornerP: "none", $padding: "8px 9px", $fDirection: "row", $ai: "center", $gap: "9px"}}
					>
						<tx.Span $size="xv" $weight="450">{t("services.designSystems")}</tx.Span>
					</AnimatedBox>
					<AnimatedBox 
						as="li"
						animationView="intersection"
						animationSpeed="fast"
						options={{oneTimeLoad: true, intersectionMarginPreset: "small"}}
						groupOptions={{position: 4, delay: { ms: .09 }}}
						boxStyle={{$cornerP: "none", $padding: "8px 9px", $fDirection: "row", $ai: "center", $gap: "9px"}}
					>
						<tx.Span $size="xv" $weight="450">{t("services.infrastructure")}</tx.Span>
					</AnimatedBox>
					<AnimatedBox 
						as="li"
						animationView="intersection"
						animationSpeed="fast"
						options={{oneTimeLoad: true, intersectionMarginPreset: "small"}}
						groupOptions={{position: 5, delay: { ms: .09 }}}
						boxStyle={{$cornerP: "none", $padding: "8px 9px", $fDirection: "row", $ai: "center", $gap: "9px"}}
					>
						<tx.Span $size="xv" $weight="450">{t("services.paymentIntegration")}</tx.Span>
					</AnimatedBox>
				</wp.Row>
			</sc.Section>
		</sc.Root>
	);
}
