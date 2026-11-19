import * as s from "./styles";
import * as wp from "@/styles/primitive/wrapper";
import * as tx from "@/styles/primitive/text";
import { Cta, Link } from "../Link";
import { defaultTheme, rgba } from "@/styles";
import { Logo } from "../Logo";
import { links } from "@/data";
import { AnimatedBox } from "../AnimatedBox";
import { useTranslations } from "next-intl";

export const Footer = () => {
	const t = useTranslations("footer");
	const tNav = useTranslations("nav");

	return (
		<s.Root>
			<s.Main>
				<wp.Row $gap="33px 53px" $jc="space-between" $breakAt={10}>
					<wp.Col $dSize={["100%"]} $gap="17px">
						<s.LogoWrapper>
							<Logo draggable={false} />
						</s.LogoWrapper>

						<wp.Col $dSize={["100%"]} $gap="13px">
							<wp.Col $dSize={["100%"]} $gap="7px">
								<tx.P $weight="300" $maxWidth="33rem">
									{t("tagline")}
								</tx.P>
								<tx.P $weight="300" $maxWidth="33rem">
									{t("question")}
								</tx.P>
							</wp.Col>

							<Cta clientRender href="/contact" btnProps={{$style: "chill_black"}}>
								{t("cta")}
							</Cta>
						</wp.Col>
					</wp.Col>
					
					<wp.Row $gap="33px 53px" $jc="space-between" $minSize={["fit-content"]} $fWrap="wrap">
						<wp.Col $gap="5px" $minSize={["fit-content"]}>
							<s.LabelColumn>
								{t("status")}
							</s.LabelColumn>
							
							<AnimatedBox
								animationView="intersection"
								boxStyle={{
									$padding: "12px 14px",
									$shadow: false,
									$outline: `dashed 1px ${rgba(defaultTheme.colors.boxBackground, 0.5)}`,
									$corner: {borderSize: "1px", opc: 0.5, pad: 1, color: defaultTheme.colors.boxBackground},
									$bg: defaultTheme.colors.boxShadow,
									$margin: "3px 0 0",
									$gap: "5px",
								}}
								options={{oneTimeLoad: true, intersectionMarginPreset: "medium"}}
							>
								<wp.Row $ai="center" $gap="7px">
									<s.AvailabilityIcon />
									<tx.Span $weight="300">{t("openToWork")}</tx.Span>
								</wp.Row>
								<tx.Span $opc={0.7} $weight="350" $size="xvi" $color={defaultTheme.colors.boxBackground} $italic>
									{t("building")}
								</tx.Span>
							</AnimatedBox>
						</wp.Col>
						
						{/* Navigation row */}
						<wp.Row $gap="23px 53px" $jc="space-between" $minSize={["fit-content"]} $fWrap="wrap">
							<wp.UlCol $gap="5px" $listStyle="none">
								<s.LabelColumn>
									{t("navigate")}
								</s.LabelColumn>

								<wp.Li>
									<Link href="/" clientRender poserStyle $color={defaultTheme.colors.boxBackground} $weight="350">
										{tNav("home")}
									</Link>
								</wp.Li>

								<wp.Li>
									<Link href="/about" clientRender poserStyle $color={defaultTheme.colors.boxBackground} $weight="350">
										{tNav("about")}
									</Link>
								</wp.Li>

								<wp.Li>
									<Link href="/portfolio" clientRender poserStyle $color={defaultTheme.colors.boxBackground} $weight="350">
										{tNav("portfolio")}
									</Link>
								</wp.Li>

								<wp.Li>
									<Link href="/contact" clientRender poserStyle $color={defaultTheme.colors.boxBackground} $weight="350">
										{tNav("contact")}
									</Link>
								</wp.Li>
							</wp.UlCol>

							<wp.UlCol $gap="5px" $listStyle="none">
								<s.LabelColumn>
									{t("elsewhere")}
								</s.LabelColumn>

								<wp.Li>
									<Link href={links.email} target="_blank" poserStyle $color={defaultTheme.colors.boxBackground} $weight="350">
										Email
									</Link>
								</wp.Li>
								
								<wp.Li>
									<Link href={links.githubProfile} target="_blank" poserStyle $color={defaultTheme.colors.boxBackground} $weight="350">
										GitHub
									</Link>
								</wp.Li>
								
								<wp.Li>
									<Link href={links.linkedinProfile} target="_blank" poserStyle $color={defaultTheme.colors.boxBackground} $weight="350">
										LinkedIn
									</Link>
								</wp.Li>
								
								<wp.Li>
									<Link href={links.githubUzak} target="_blank" poserStyle $color={defaultTheme.colors.boxBackground} $weight="350">
										Uzak's GitHub
									</Link>
								</wp.Li>
							</wp.UlCol>
						</wp.Row>
					</wp.Row>
				</wp.Row>
				
				<wp.Row $jc="space-between" $margin="auto 0 0">
					<tx.P $size="xvi" $weight="350" $opc={0.7} $color={defaultTheme.colors.boxBackground}>
						&copy; {new Date().getUTCFullYear()} Uzak. {t("rights")}
					</tx.P>
				</wp.Row>
			</s.Main>
		</s.Root>
	);
};
