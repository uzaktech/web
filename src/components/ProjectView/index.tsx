"use client";

import * as bx from "@/styles/primitive/box";
import * as tx from "@/styles/primitive/text";
import * as wp from "@/styles/primitive/wrapper";
import { AnimatedBox, Link, Stack } from "../";
import { defaultTheme, rgba } from "@/styles";
import { ImageShowCase } from "./ImageShowCase";
import { Fragment } from "react/jsx-runtime";
import { projects } from "@/data";
import { useLocale, useTranslations } from "next-intl";
import { dateLocales, Locale } from "@/i18n/config";

export const ProjectView = ({portfolio}: {portfolio?: boolean}) => {
	const list = projects(portfolio);
	const t = useTranslations("projectsData");
	const tFooter = useTranslations("footer");
	const locale = useLocale();

	const dateLocale = dateLocales[locale as Locale] ?? "en-US";
	const presentText = t("present");

	const formatLineCount = (count: number) => {
		return new Intl.NumberFormat(dateLocale, {
			notation: "compact",
			compactDisplay: "short",
			maximumFractionDigits: 1,
		}).format(count);
	};

	return (
		<wp.Col $gap="13px">
			{list.map((p, i) => {
				const title = p.id ? t(`${p.id}.title`) : p.title;
				const category = p.id ? t(`${p.id}.category`) : p.category;
				const description = p.id 
					? (portfolio ? t(`${p.id}.descFull`) : t(`${p.id}.descShort`))
					: p.description;

				return (
					<AnimatedBox 
						as="article"
						animationView="intersection" 
						options={{
							oneTimeLoad: true,
							intersectionMarginPreset: "large"
						}} 
						boxStyle={{$padding: "0"}}
						key={i}
					>
						<wp.Col $pad="13px 17px" $gap="9px">
							{/* Header Card */}
							<wp.Row $fWrap="wrap" $gap="3px 13px" $jc="space-between" $ai="center">
								<tx.P $size="xviii" $weight="450">{title}</tx.P>
								<tx.P $size="xv" $opc={0.5} $weight="500">{category}</tx.P>
							</wp.Row>
							{p.dateRange && 
								<tx.Span $italic $margin="-5px 0 -2px" $opc={0.4} $weight="450" $size="xvii">
									{`${p.dateRange.start.toLocaleString(dateLocale, { month: 'short' })} ${p.dateRange.start.getFullYear()}`}
									{" - "}	
									{!p.dateRange.end ? presentText : `${p.dateRange.end.toLocaleString(dateLocale, { month: 'short' })} ${p.dateRange.end.getFullYear()}`}
								</tx.Span>
							}

							<wp.Row $pad="0 0px" $gap="13px" $breakAt={9}>
								{/* Information Column */}
								<wp.Col $pad="0 0px" $gap="9px" $dSize={["100%", undefined]}>
									<tx.P $maxWidth="43rem" $opc={0.7} $margin="3px 0 3px">
										{description}
									</tx.P>

									{p.links && 
										<wp.Row $gap="3px 9px" $fWrap="wrap">
											{p.links.map((l, i) => (
												<Fragment key={i}>
													{i != 0 && 
														<tx.Span $uSelect="none" $cursor="default" $opc={.3}>/</tx.Span>
													}

													<Link href={l.url} target="_blank" poserStyle $opc={.9} $size="xvi">
														{l.label}
													</Link>
												</Fragment>
											))}
										</wp.Row>
									}
								</wp.Col>

								{/* Image ShowCase */}
								{p.imagesUrl.length > 0 && <ImageShowCase images={p.imagesUrl} />}
							</wp.Row>
						</wp.Col>

						<wp.Division $orientation={1} $opc={1} />

						{/* Footer Card */}
						<wp.Row $jc="space-between" $pad="8px 17px" $gap="13px" $ai="center">
							<Stack justIcon list={p.stackLabels.map(a => {return {label: a, icon: portfolio == true}})}/>

							{p.linesCount && (
								<tx.Span $wSpace="nowrap" $weight="500" $opc={0.5} $size="xv">
									{t("lines", { count: formatLineCount(p.linesCount) })}
								</tx.Span>
							)}
						</wp.Row>
					</AnimatedBox>
				);
			})}
			<bx.Box 
				$padding="13px 17px" 
				$shadow={false} 
				$border={`dashed 1px ${rgba(defaultTheme.colors.boxShadow, 0.5)}`} 
				$corner={{borderSize: "1px", opc: 0.5, pad: 1}}
			>
				<tx.Span $opc={0.5} $weight="450">{tFooter("building")}</tx.Span>
			</bx.Box>
		</wp.Col>
	);
};
