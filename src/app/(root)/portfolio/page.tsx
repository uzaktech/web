import * as s from "./styles";
import * as tx from "@/styles/primitive/text";
import * as sc from "@/styles/primitive/section";
import * as wp from "@/styles/primitive/wrapper";
import { AnimatedBox, Cta, ExperienceView, ProjectView, StackSkills, QuickFacts } from "@/components";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { createAlternates, Locale, ogLocales } from "@/i18n/config";

export async function generateMetadata(): Promise<Metadata> {
	const locale = await getLocale();
	const tMeta = await getTranslations("meta");
	const tNav = await getTranslations("nav");
	const ogLocale = ogLocales[locale as Locale] ?? "en_US";

	return {
		title: tNav("portfolio"),
		description: tMeta("portfolioDescription"),
		keywords: [
			"enzo kazuki",
			"kazuki",
			"uzak",
			"enzo kazuki portfolio",
			"full-stack developer",
			"desenvolvedor full-stack"
		],
		alternates: createAlternates("/portfolio"),
		openGraph: {
			title: tMeta("portfolioTitle"),
			description: tMeta("portfolioDescription"),
			url: "https://www.uzak.com.br/portfolio",
			type: "profile",
			locale: ogLocale
		},
		twitter: {
			card: "summary_large_image",
			title: tMeta("portfolioTitle"),
			description: tMeta("portfolioDescription")
		}
	};
}

export default async function Page() {
	const t = await getTranslations("portfolioPage");

	const personSchema = {
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Enzo Kazuki",
		"alternateName": "Uzak",
		"birthDate": "2009-03-13",
		"jobTitle": "Full-Stack Developer",
		"url": "https://www.uzak.com.br/portfolio",
		"worksFor": {
			"@type": "Organization",
			"name": "Uzak"
		},
		"address": {
			"@type": "PostalAddress",
			"addressRegion": "Paraíba",
			"addressCountry": "BR"
		},
		"knowsAbout": [
			"Web Development",
			"Full-Stack Development",
			"JavaScript",
			"React",
			"Next.js"
		]
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(personSchema)
				}}
			/>
			
			<sc.Root>
				<sc.Section $hero $fDirection="row" $breakAt={9} $gap="73px 18px" $minSize={[undefined, "fit-content"]} $dSize={[undefined, "calc((100dvh / 3) * 2)"]} $ai="center" 
					$cssStage={{n: 9, css: {alignItems: "flex-end"}}}
				>
					<sc.Content $maxSize={["100%", "380px"]} $minSize={["auto", "fit-content"]} $dSize={["100%", "100%"]}>
						<wp.Row $jc="space-between">
							<tx.H1>
								{t("hero.name")}
							</tx.H1>
						</wp.Row>

						<sc.Copy $maxWidth="49rem">
							{t("hero.description")}
						</sc.Copy>
						
						<wp.Row $fWrap="wrap" $gap="10px">
							<Cta href="#projects">{t("hero.seeProjects")}</Cta>
							<Cta clientRender href="/contact" btnProps={{$style: "ghost_link"}}>{t("hero.contactMe")}</Cta>
							<Cta href="#experience" btnProps={{$style: "ghost_link"}}>{t("hero.seeExperience")}</Cta>
						</wp.Row>
					</sc.Content>

					<wp.Col $gap="33px">
						<AnimatedBox 
							animationView="default" 
							options={{oneTimeLoad: true}} 
							boxStyle={{$padding: "0", $gap: "0", $width: "auto", $height: "auto", $aspectRatio: "1", $overflow: "visible"}}
						>
							<s.HeroImageBox>
								<s.HeroImage src={"/desktop_setup.jpg"} alt="complementary hero image" />
								<tx.SmallInfo>{t("hero.deskSetup")}</tx.SmallInfo>
							</s.HeroImageBox>
						</AnimatedBox>

						<QuickFacts />
					</wp.Col>
				</sc.Section>

				<sc.Section>
					<sc.Label>{t("about.label")}</sc.Label>
					<sc.Title>{t("about.title")}</sc.Title>
					<wp.Col $gap="9px">
						<sc.Copy>
							{t("about.p1")}
						</sc.Copy>
						<sc.Copy>
							{t("about.p2")}
						</sc.Copy>
					</wp.Col>
				</sc.Section>

				<sc.Section id="skills">
					<sc.Label>{t("skills.label")}</sc.Label>
					<sc.Title>{t("skills.title")}</sc.Title>

					<sc.Copy>
						{t("skills.description")}
					</sc.Copy>

					<StackSkills />
				</sc.Section>

				<sc.Section id="projects">
					<sc.Label>{t("projects.label")}</sc.Label>
					<sc.Title>{t("projects.title")}</sc.Title>
					
					<ProjectView portfolio />
				</sc.Section>

				<sc.Section id="experience">
					<sc.Label>{t("career.label")}</sc.Label>
					<sc.Title>{t("career.title")}</sc.Title>
					
					<ExperienceView />
				</sc.Section>
			</sc.Root>
		</>
	);
}
